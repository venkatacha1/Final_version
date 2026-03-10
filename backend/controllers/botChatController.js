const axios = require("axios");
const nodemailer = require("nodemailer");

const { handleChatbotInteraction, forwardLeadToCRM } = require("../modules/chatLogs/chatLog.service");
const { STATES } = require("../core/stateMachine");
const { resolveSession } = require("../core/sessionManager");
const {
  getCategories,
  getServicesByCategory,
  getAllServices,
  isRelatedToServices,
} = require("../modules/services/serviceLoader");
const {
  getFaqServices,
  getFaqQuestions,
  findFaqAnswer,
  findFaqByKeywords,
} = require("../modules/faq/faq.service");
const { saveLead } = require("../modules/leads/leadStorage");

const FAQ_OTHER_OPTION = "Other / Not listed";
const BACK_TO_MAIN = "Back to Main Menu";

const adminTimers = {};

const getChatbotEnv = (key, fallbackKey) => {
  const primary = process.env[`CHATBOT_${key}`];
  if (typeof primary === "string" && primary.trim()) {
    return primary.trim();
  }
  const fallback = fallbackKey ? process.env[fallbackKey] : undefined;
  return typeof fallback === "string" ? fallback.trim() : fallback;
};

const getChatbotWhatsAppConfig = () => {
  const phoneId = getChatbotEnv("META_PHONE_ID", "META_PHONE_ID");
  const accessToken = getChatbotEnv("META_ACCESS_TOKEN", "META_ACCESS_TOKEN");
  const adminPhone = getChatbotEnv("ADMIN_PHONE", "ADMIN_PHONE");
  return { phoneId, accessToken, adminPhone };
};

const getChatbotEmailConfig = () => {
  const host = getChatbotEnv("SMTP_HOST", "SMTP_HOST");
  const port = Number(getChatbotEnv("SMTP_PORT", "SMTP_PORT") || 465);
  const secure = (getChatbotEnv("SMTP_SECURE", "SMTP_SECURE") || "true") === "true";
  const user = getChatbotEnv("EMAIL_USER", "EMAIL_USER");
  const pass = getChatbotEnv("EMAIL_PASS", "EMAIL_PASS");
  const from = getChatbotEnv("EMAIL_FROM", "EMAIL_FROM") || user;
  const adminEmail =
    getChatbotEnv("ADMIN_EMAIL", "ADMIN_LEADS_EMAIL") || user;
  return { host, port, secure, user, pass, from, adminEmail };
};

let chatbotTransporter = null;
let chatbotTransportKey = "";

const getChatbotTransporter = () => {
  const { host, port, secure, user, pass } = getChatbotEmailConfig();
  if (!host || !user || !pass) return null;

  const key = `${host}|${port}|${secure}|${user}`;
  if (!chatbotTransporter || chatbotTransportKey !== key) {
    chatbotTransporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
    chatbotTransportKey = key;
  }
  return chatbotTransporter;
};

const sendChatbotAdminEmail = async ({ name, phone, email, serviceText, queryText }) => {
  const transporter = getChatbotTransporter();
  if (!transporter) {
    console.warn("[chatbot] admin email skipped: missing CHATBOT_EMAIL_USER/CHATBOT_EMAIL_PASS");
    return null;
  }

  const { from, adminEmail } = getChatbotEmailConfig();
  if (!adminEmail) {
    console.warn("[chatbot] admin email skipped: missing CHATBOT_ADMIN_EMAIL/ADMIN_LEADS_EMAIL");
    return null;
  }

  const safeName = name || "Unknown";
  const safeEmail = email || "N/A";
  const safePhone = phone || "N/A";
  const requestedService = serviceText || "General Inquiry";
  const safeQueries = queryText || "N/A";

  const subject = `New Chatbot Lead - ${requestedService}`;
  const text = `New chatbot lead received.\n\nName: ${safeName}\nPhone: ${safePhone}\nEmail: ${safeEmail}\nService: ${requestedService}\nFollow-up Queries: ${safeQueries}\n`;

  const html = `
    <div style="margin:0; padding:24px; background:#0b0b0b; font-family: Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px; margin:0 auto; border:1px solid #2c2c2c; border-radius:14px; overflow:hidden; background:#141414;">
        <tr>
          <td style="padding:26px 24px; text-align:center; background:#101010;">
            <div style="color:#f6c300; font-size:26px; font-weight:800; letter-spacing:0.6px;">MakeEasyFilings</div>
            <div style="color:#bdbdbd; font-size:13px; margin-top:6px; font-style:italic;">New Chatbot Lead</div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 24px 10px 24px; color:#e6e6e6; font-size:15px; line-height:1.7;">
            A new chatbot lead was captured. Details are below.
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 18px 24px;">
            <div style="background:#1d1a0f; border:1px solid #5a4b10; border-radius:10px; padding:14px 16px; color:#f0e4b2;">
              <div style="font-weight:700; font-size:14px; margin-bottom:10px; color:#f6c300;">Lead Summary</div>
              <div style="margin-bottom:6px;"><strong>Name:</strong> ${safeName}</div>
              <div style="margin-bottom:6px;"><strong>Phone:</strong> ${safePhone}</div>
              <div style="margin-bottom:6px;"><strong>Email:</strong> ${safeEmail}</div>
              <div style="margin-bottom:6px;"><strong>Service:</strong> ${requestedService}</div>
              <div><strong>Follow-up Queries:</strong> ${safeQueries}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#0f0f0f; color:#7a7a7a; font-size:11px; padding:12px 24px; text-align:center;">
            This is an automated lead notification from the chatbot.
          </td>
        </tr>
      </table>
    </div>
  `;

  try {
    console.log("[chatbot] admin email sending:", adminEmail);
    const info = await transporter.sendMail({
      from: from || undefined,
      to: adminEmail,
      subject,
      text,
      html,
    });
    console.log("[chatbot] admin email sent:", info.response);
    return info;
  } catch (err) {
    console.error("[chatbot] admin email error:", err?.message || err);
    return null;
  }
};

const sendChatbotCustomerEmail = async ({ to, name, phone, service, category }) => {
  if (!to) return null;
  const transporter = getChatbotTransporter();
  if (!transporter) {
    console.warn("[chatbot] customer email skipped: missing CHATBOT_EMAIL_USER/CHATBOT_EMAIL_PASS");
    return null;
  }

  const { from } = getChatbotEmailConfig();
  const safeName = name || "there";
  const requestedService = service || "General Inquiry";

  const tagline = "Simplifying GST Compliance for Your Business";

  const subject = "MakeEasyFilings - We received your request";
  const text = `Dear ${safeName},

Thank you for reaching out to MakeEasyFilings! We have received your request and our expert CA will contact you shortly.

Request Summary:
Service: ${requestedService}
Phone: ${phone || "N/A"}
Email: ${to}

If you have any additional questions, feel free to reply to this email and we will get back to you promptly.

Best Regards,
Team MakeEasyFilings`;

  const html = `
    <div style="margin:0; padding:24px; background:#0b0b0b; font-family: Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px; margin:0 auto; border:1px solid #2c2c2c; border-radius:14px; overflow:hidden; background:#141414;">
        <tr>
          <td style="padding:26px 24px; text-align:center; background:#101010;">
            <div style="color:#f6c300; font-size:26px; font-weight:800; letter-spacing:0.6px;">MakeEasyFilings</div>
            <div style="color:#bdbdbd; font-size:13px; margin-top:6px; font-style:italic;">${tagline}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 24px 8px 24px; color:#e6e6e6; font-size:15px; line-height:1.7;">
            <div style="margin:0 0 12px 0;">Dear <strong>${safeName}</strong>,</div>
            <div style="margin:0 0 14px 0;">
              Thank you for reaching out to <strong>MakeEasyFilings</strong>! We have received your request and our expert CA will contact you shortly.
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 18px 24px;">
            <div style="background:#1d1a0f; border:1px solid #5a4b10; border-radius:10px; padding:14px 16px; color:#f0e4b2;">
              <div style="font-weight:700; font-size:14px; margin-bottom:10px; color:#f6c300;">Request Summary</div>
              <div style="margin-bottom:6px;"><strong>Service:</strong> ${requestedService}</div>
              <div style="margin-bottom:6px;"><strong>Phone:</strong> ${phone || "N/A"}</div>
              <div><strong>Email:</strong> ${to}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 16px 24px; color:#d7d7d7; font-size:14px; line-height:1.6;">
            If you have any additional questions, feel free to reply to this email and we will get back to you promptly.
          </td>
        </tr>
        <tr>
          <td style="padding:4px 24px 24px 24px; text-align:center;">
            <a href="https://www.makeeasyfilings.com" target="_blank" style="background:#f6c300; color:#111111; text-decoration:none; padding:12px 30px; border-radius:8px; font-weight:700; font-size:14px; display:inline-block;">
              Visit Our Website
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 24px 24px; color:#bdbdbd; font-size:13px;">
            Best Regards,<br/><strong>Team MakeEasyFilings</strong>
          </td>
        </tr>
        <tr>
          <td style="background:#0f0f0f; color:#7a7a7a; font-size:11px; padding:12px 24px; text-align:center;">
            This is an automated confirmation email.
          </td>
        </tr>
      </table>
    </div>
  `;

  try {
    console.log("[chatbot] customer email sending:", to);
    const info = await transporter.sendMail({
      from: from || undefined,
      to,
      subject,
      text,
      html,
    });
    console.log("[chatbot] customer email sent:", info.response);
    return info;
  } catch (err) {
    console.error("[chatbot] customer email error:", err?.message || err);
    return null;
  }
};

const finalizeChatNotifications = async (session) => {
  try {
    console.log(
      "[chatbot] finalize notifications:",
      {
        lead_collected: session.lead_collected,
        admin_notified: session.admin_notified,
        customer_email_sent: session.customer_email_sent,
        email: session.email || "N/A",
      }
    );
    if (!session.lead_collected) return;

    const services = session.pending_queries
      ?.filter((q) => q.type === "service")
      .map((q) => q.value) || [];
    const queries = session.pending_queries
      ?.filter((q) => q.type === "query")
      .map((q) => q.value) || [];

    const serviceText =
      services.join(", ") ||
      session.service ||
      session.custom_query ||
      "General Inquiry";
    const queryText = queries.join(", ") || "N/A";

    if (!session.admin_notified) {
      await sendChatbotAdminEmail({
        name: session.name,
        phone: session.phone,
        email: session.email,
        serviceText,
        queryText,
      });

      await flushAdminWhatsApp(session);
      session.admin_notified = true;
    }

    if (!session.customer_email_sent && session.email) {
      const customerEmailResult = await sendChatbotCustomerEmail({
        to: session.email,
        name: session.name,
        phone: session.phone,
        service: serviceText,
      });
      if (customerEmailResult) {
        session.customer_email_sent = true;
      }
    }
  } catch (err) {
    console.error("[chatbot] finalize notifications error:", err?.message || err);
  }
};

function hasAdminWhatsAppConfig() {
  const { phoneId, accessToken, adminPhone } = getChatbotWhatsAppConfig();
  return Boolean(adminPhone && phoneId && accessToken);
}

async function flushAdminWhatsApp(session) {
  if (!hasAdminWhatsAppConfig()) return;
  if (!session.pending_queries || session.pending_queries.length === 0) return;

  const { phoneId, accessToken, adminPhone } = getChatbotWhatsAppConfig();
  const rawName = session.name || "Unknown";
  const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);
  const phone = session.phone || "N/A";
  const email = session.email || "N/A";
  const services = session.pending_queries
    .filter((q) => q.type === "service")
    .map((q) => q.value);
  const queries = session.pending_queries
    .filter((q) => q.type === "query")
    .map((q) => q.value);

  const serviceText = services.join(", ") || "N/A";
  const queryText = queries.length > 0 ? queries.join(", ") : "N/A";

  const url = `https://graph.facebook.com/v22.0/${phoneId}/messages`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  const to = adminPhone.replace(/\D/g, "");

  try {
    const templatePayload = {
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: "lead_alert",
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: name },
              { type: "text", text: phone },
              { type: "text", text: email },
              { type: "text", text: serviceText },
              { type: "text", text: queryText },
            ],
          },
        ],
      },
    };
    const r = await axios.post(url, templatePayload, { headers });
    console.log("[chatbot] admin WhatsApp template sent:", r.data.messages?.[0]?.id);
    session.pending_queries = [];
    return;
  } catch (err) {
    console.warn(
      "[chatbot] template failed, falling back to free-form:",
      err.response?.data?.error?.message || err.message
    );
  }

  let detailLines = "";
  if (services.length === 1) {
    detailLines += `💼 *Service Requested:* ${services[0]}\n`;
  } else if (services.length > 1) {
    detailLines += `💼 *Services Requested:*\n` + services.map((s) => `   • ${s}`).join("\n") + "\n";
  }
  if (queries.length === 1) {
    detailLines += `💬 *Follow-up Query:* ${queries[0]}\n`;
  } else if (queries.length > 1) {
    detailLines += `💬 *Follow-up Queries:*\n` + queries.map((q) => `   • ${q}`).join("\n") + "\n";
  }

  const msgBody =
    `🔔 *New Lead Received!*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📧 *Email:* ${email}\n` +
    `${detailLines}` +
    `⚡ Please follow up immediately.`;

  try {
    const r = await axios.post(
      url,
      { messaging_product: "whatsapp", to, type: "text", text: { body: msgBody } },
      { headers }
    );
    console.log("[chatbot] admin WhatsApp free-form sent:", r.data.messages?.[0]?.id);
  } catch (e) {
    console.error("[chatbot] admin WhatsApp failed:", e.response?.data || e.message);
  }

  session.pending_queries = [];
}

function scheduleAdminWhatsApp(session, value, type = "service") {
  if (!session.pending_queries) session.pending_queries = [];
  const alreadyAdded = session.pending_queries.some(
    (q) => q.value === value && q.type === type
  );
  if (!alreadyAdded) session.pending_queries.push({ type, value });

  // Defer sending until user clicks "End Chat"
}

function invalidInput(res, session, message, options = []) {
  return res.json({
    session_id: session.session_id,
    message,
    options,
  });
}

function resetSessionState(session) {
  session.current_state = STATES.WELCOME;
  session.category = null;
  session.service = null;
  session.custom_query = null;
  session.from_faq = false;
  session.lead_collected = false;
  session.lead_completed_at = null;
  session.name = null;
  session.phone = null;
  session.email = null;
  session.faq_service = null;
  session.faq_offset = 0;
  session.pending_queries = [];
  session.admin_notified = false;
  session.customer_email_sent = false;
}

function normalizeText(text) {
  return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(" ")
    .filter(Boolean)
    .map((t) => (t.endsWith("s") && t.length > 3 ? t.slice(0, -1) : t));
}

function isCommand(input, command) {
  if (!input || !command) return false;
  return normalizeText(input) === normalizeText(command);
}

function matchOption(input, options) {
  if (!input || !options || options.length === 0) return null;

  const inorm = normalizeText(input);
  if (!inorm) return null;

  let best = null;
  let bestScore = 0;

  for (const opt of options) {
    const onorm = normalizeText(opt);
    if (!onorm) continue;

    if (onorm === inorm) return opt;

    if (inorm.length >= 3 && onorm.includes(inorm)) return opt;
    if (onorm.length >= 3 && inorm.includes(onorm)) return opt;

    const iTokens = new Set(tokenize(inorm));
    const oTokens = new Set(tokenize(onorm));
    let overlap = 0;

    for (const t of iTokens) {
      if (oTokens.has(t)) overlap += 1;
    }

    if (overlap === 0) continue;
    const score = overlap / oTokens.size;
    if (score > bestScore) {
      bestScore = score;
      best = opt;
    }
  }

  if (best && (bestScore >= 0.6 || (bestScore >= 0.5 && inorm.length <= 20))) {
    return best;
  }

  return null;
}

function respondWithExistingLead(res, session, requestedService) {
  const name = session.name || "there";
  const requestLabel =
    requestedService || session.service || session.custom_query || "General Inquiry";

  session.current_state = STATES.FAQ_NEXT;

  scheduleAdminWhatsApp(session, requestLabel, "query");

  return res.json({
    session_id: session.session_id,
    message: `Thanks ${name}. We already have your details and will contact you soon regarding ${requestLabel}.`,
    options: ["Select Service", "FAQs", "End chat"],
  });
}

async function chatController(req, res) {
  const { session_id, action } = req.body;
  const { session, isExpired } = resolveSession(session_id);
  const rawInput = typeof action === "string" ? action.trim() : "";
  let input = rawInput;

  const originalJson = res.json.bind(res);
  res.json = (payload) => {
    try {
      const isInit = !rawInput || normalizeText(rawInput) === "init";
      if (!isInit && payload && typeof payload.message === "string") {
        handleChatbotInteraction({
          userId: session.session_id,
          question: rawInput,
          chatbotResponse: payload.message,
          leadName: session.name || "Anonymous",
          phone: session.phone || undefined,
          email: session.email || undefined,
          service: session.service || session.custom_query || undefined,
          category: session.category || undefined,
        }).catch((e) =>
          console.error("[chatbot] handleChatbotInteraction error:", e.message)
        );
      }
    } catch (e) {
      console.error("[chatbot] log hook error:", e.message);
    }
    return originalJson(payload);
  };

  if (isExpired) {
    resetSessionState(session);
    return res.json({
      session_id: session.session_id,
      reset: true,
      message: "Welcome back! How can we help you today?",
      options: ["FAQs", "Select Service"],
    });
  }

  if (!input || normalizeText(input) === "init") {
    resetSessionState(session);
    return res.json({
      session_id: session.session_id,
      message: "Welcome to MakeEasyFilings 👋 How can we help you today?",
      options: ["FAQs", "Select Service"],
    });
  }

  if (isCommand(input, "Start New Chat")) {
    resetSessionState(session);
    return res.json({
      session_id: session.session_id,
      reset: true,
      message: "Welcome back! How can we help you today?",
      options: ["FAQs", "Select Service"],
    });
  }

  if (isCommand(input, "End chat") || isCommand(input, "End Chat")) {
    session.current_state = STATES.DONE;
    await finalizeChatNotifications(session);
    return res.json({
      session_id: session.session_id,
      message: "Thank you! Our CA will contact you soon. Have a nice day 🙂",
      options: ["Start New Chat"],
    });
  }

  if (session.current_state === STATES.DONE) {
    return res.json({
      session_id: session.session_id,
      message: "This chat has ended. Thank you for visiting MakeEasyFilings! 🙂",
      options: ["Start New Chat"],
    });
  }

  if (isCommand(input, BACK_TO_MAIN)) {
    session.current_state = STATES.WELCOME;
    return res.json({
      session_id: session.session_id,
      message: "How can we help you today?",
      options: ["FAQs", "Select Service"],
    });
  }

  if (session.current_state === STATES.WELCOME) {
    if (isCommand(input, "FAQs")) {
      input = "FAQs";
    } else if (isCommand(input, "Select Service")) {
      input = "Select Service";
    } else {
      const categoryMatch = matchOption(input, getCategories());
      if (categoryMatch) {
        session.category = categoryMatch;
        session.current_state = STATES.SERVICE;

        return res.json({
          session_id: session.session_id,
          message: `Please select a service under ${categoryMatch}`,
          options: [...getServicesByCategory(categoryMatch), "Back to Categories"],
        });
      }

      const faqCategoryMatch = matchOption(input, getFaqServices());
      if (faqCategoryMatch) {
        session.faq_service = faqCategoryMatch;
        session.current_state = STATES.FAQ_QUESTION;
        const questions = getFaqQuestions(faqCategoryMatch);
        return res.json({
          session_id: session.session_id,
          message: `Select a question related to ${faqCategoryMatch}`,
          options: [...questions, FAQ_OTHER_OPTION, BACK_TO_MAIN],
        });
      }

      const allServices = getAllServices();
      const serviceMatch = matchOption(
        input,
        allServices.map((s) => s.name)
      );

      if (serviceMatch) {
        const serviceEntry = allServices.find((s) => s.name === serviceMatch);
        session.category = serviceEntry ? serviceEntry.category : null;
        session.service = serviceMatch;
        session.from_faq = false;

        if (session.lead_collected) {
          return respondWithExistingLead(res, session, serviceMatch);
        }

        session.current_state = STATES.LEAD_NAME;
        return res.json({
          session_id: session.session_id,
          message: "Please enter your name",
          options: [],
        });
      }

      return invalidInput(
        res,
        session,
        "Please select one of the available options.",
        ["FAQs", "Select Service"]
      );
    }
  }

  if (isCommand(input, "FAQs")) {
    session.current_state = STATES.FAQ_SERVICE;
    session.faq_service = null;
    session.faq_offset = 0;

    return res.json({
      session_id: session.session_id,
      message: "Please select a service category for FAQs",
      options: [...getFaqServices(), BACK_TO_MAIN],
    });
  }

  if (session.current_state === STATES.FAQ_SERVICE) {
    const faqCategoryMatch = matchOption(input, getFaqServices());
    if (!faqCategoryMatch) {
      return invalidInput(
        res,
        session,
        "Please select a valid service category.",
        [...getFaqServices(), BACK_TO_MAIN]
      );
    }

    session.faq_service = faqCategoryMatch;
    session.current_state = STATES.FAQ_QUESTION;

    const allQuestions = getFaqQuestions(faqCategoryMatch);

    return res.json({
      session_id: session.session_id,
      message: `Select a question related to ${faqCategoryMatch}`,
      options: [...allQuestions, FAQ_OTHER_OPTION, BACK_TO_MAIN],
    });
  }

  if (session.current_state === STATES.FAQ_QUESTION) {
    if (isCommand(input, FAQ_OTHER_OPTION)) {
      session.current_state = STATES.FAQ_CUSTOM;
      return res.json({
        session_id: session.session_id,
        message: "Please type your question",
        options: [],
      });
    }

    const questions = getFaqQuestions(session.faq_service);
    const questionMatch = matchOption(input, questions);
    if (!questionMatch) {
      const faq =
        findFaqAnswer(session.faq_service, input) ||
        findFaqByKeywords(session.faq_service, input);

      if (faq) {
        session.current_state = STATES.FAQ_NEXT;
        return res.json({
          session_id: session.session_id,
          message: faq.answer,
          options: ["Ask another FAQ", "Continue with services", "End chat"],
        });
      }

      const isRelated = isRelatedToServices(input);
      if (!isRelated) {
        return invalidInput(
          res,
          session,
          "Please enter a valid question related to our services.",
          [...questions, FAQ_OTHER_OPTION, BACK_TO_MAIN]
        );
      }

      session.custom_query = input;
      session.from_faq = true;

      if (session.lead_collected) {
        return respondWithExistingLead(res, session, input);
      }

      session.current_state = STATES.LEAD_NAME;
      return res.json({
        session_id: session.session_id,
        message:
          "Thanks for your query. Please tell us your name so our expert can assist you.",
        options: [],
      });
    }

    const faq = findFaqAnswer(session.faq_service, questionMatch);
    session.current_state = STATES.FAQ_NEXT;

    return res.json({
      session_id: session.session_id,
      message: faq ? faq.answer : "Sorry, I could not find an answer.",
      options: ["Ask another FAQ", "Continue with services", "End chat"],
    });
  }

  if (session.current_state === STATES.FAQ_CUSTOM) {
    const faq =
      findFaqAnswer(session.faq_service, input) ||
      findFaqByKeywords(session.faq_service, input);

    if (faq) {
      session.current_state = STATES.FAQ_NEXT;
      const botReply = faq.answer;

      handleChatbotInteraction({
        userId: session.session_id,
        question: input,
        chatbotResponse: botReply,
        leadName: session.name || "Anonymous",
        phone: session.phone || undefined,
        email: session.email || undefined,
        service: session.service || session.custom_query || undefined,
        category: session.category || undefined,
      }).catch((e) => console.error("[chatbot] handleChatbotInteraction error:", e.message));

      return res.json({
        session_id: session.session_id,
        message: botReply,
        options: ["Ask another FAQ", "Continue with services", "End chat"],
      });
    }

    const isRelated = isRelatedToServices(input);

    if (!isRelated) {
      return invalidInput(
        res,
        session,
        "Please enter a valid question related to our services.",
        []
      );
    }

    session.custom_query = input;
    session.from_faq = true;

    const customQueryReply =
      "Thanks for your query. Please tell us your name so our expert can assist you.";

    handleChatbotInteraction({
      userId: session.session_id,
      question: input,
      chatbotResponse: customQueryReply,
      leadName: session.name || "Anonymous",
      phone: session.phone || undefined,
      email: session.email || undefined,
      service: session.service || session.custom_query || undefined,
      category: session.category || undefined,
    }).catch((e) => console.error("[chatbot] handleChatbotInteraction error:", e.message));

    if (session.lead_collected) {
      return respondWithExistingLead(res, session, input);
    }

    session.current_state = STATES.LEAD_NAME;

    return res.json({
      session_id: session.session_id,
      message: customQueryReply,
      options: [],
    });
  }

  if (session.current_state === STATES.FAQ_NEXT) {
    if (isCommand(input, "Ask another FAQ") || isCommand(input, "FAQs")) {
      session.current_state = STATES.FAQ_SERVICE;

      return res.json({
        session_id: session.session_id,
        message: "Please select a service category for FAQs",
        options: [...getFaqServices(), BACK_TO_MAIN],
      });
    }

    if (isCommand(input, "Continue with services") || isCommand(input, "Select Service")) {
      session.current_state = STATES.CATEGORY;
      return res.json({
        session_id: session.session_id,
        message: "Please select a service category",
        options: getCategories(),
      });
    }

    if (isCommand(input, "End chat") || isCommand(input, "End Chat")) {
      session.current_state = STATES.DONE;
      await finalizeChatNotifications(session);
      return res.json({
        session_id: session.session_id,
        message: "Thank you! Our CA will contact you soon. Have a nice day 🙂",
        options: ["Start New Chat"],
      });
    }

    return invalidInput(
      res,
      session,
      "Please choose one of the available options.",
      ["Select Service", "FAQs", "End chat"]
    );
  }

  if (isCommand(input, "Select Service")) {
    session.current_state = STATES.CATEGORY;
    return res.json({
      session_id: session.session_id,
      message: "Please select a service category",
      options: getCategories(),
    });
  }

  if (isCommand(input, "Back to Categories")) {
    session.current_state = STATES.CATEGORY;
    return res.json({
      session_id: session.session_id,
      message: "Please select a service category",
      options: getCategories(),
    });
  }

  if (session.current_state === STATES.CATEGORY) {
    const categoryMatch = matchOption(input, getCategories());
    if (!categoryMatch) {
      const allServices = getAllServices();
      const serviceMatch = matchOption(
        input,
        allServices.map((s) => s.name)
      );

      if (serviceMatch) {
        const serviceEntry = allServices.find((s) => s.name === serviceMatch);
        session.category = serviceEntry ? serviceEntry.category : null;
        session.service = serviceMatch;
        session.from_faq = false;

        if (session.lead_collected) {
          return respondWithExistingLead(res, session, serviceMatch);
        }

        session.current_state = STATES.LEAD_NAME;
        return res.json({
          session_id: session.session_id,
          message: "Please enter your name",
          options: [],
        });
      }

      return invalidInput(
        res,
        session,
        "Please select a valid service category.",
        getCategories()
      );
    }

    session.category = categoryMatch;
    session.current_state = STATES.SERVICE;

    return res.json({
      session_id: session.session_id,
      message: `Please select a service under ${categoryMatch}`,
      options: [...getServicesByCategory(categoryMatch), "Back to Categories"],
    });
  }

  if (session.current_state === STATES.SERVICE) {
    const availableServices = getServicesByCategory(session.category);
    const serviceMatch = matchOption(input, availableServices);
    if (!serviceMatch) {
      const categoryMatch = matchOption(input, getCategories());
      if (categoryMatch) {
        session.category = categoryMatch;
        session.current_state = STATES.SERVICE;
        return res.json({
          session_id: session.session_id,
          message: `Please select a service under ${categoryMatch}`,
          options: [...getServicesByCategory(categoryMatch), "Back to Categories"],
        });
      }

      return invalidInput(
        res,
        session,
        "Please select a valid service.",
        [...availableServices, "Back to Categories"]
      );
    }

    session.service = serviceMatch;
    session.from_faq = false;

    if (session.lead_collected) {
      return respondWithExistingLead(res, session, serviceMatch);
    }

    session.current_state = STATES.LEAD_NAME;

    return res.json({
      session_id: session.session_id,
      message: "Please enter your name",
      options: [],
    });
  }

  if (session.current_state === STATES.LEAD_NAME) {
    if (session.lead_collected) {
      return respondWithExistingLead(res, session, session.service);
    }

    if (!input || input.trim().length < 2) {
      return invalidInput(res, session, "Please enter a valid name.", []);
    }

    session.name = input.trim();
    session.current_state = STATES.LEAD_PHONE;

    return res.json({
      session_id: session.session_id,
      message: "Please enter your phone number",
    });
  }

  if (session.current_state === STATES.LEAD_PHONE) {
    if (session.lead_collected) {
      return respondWithExistingLead(res, session, session.service);
    }

    if (!/^\d{10}$/.test(input.trim())) {
      return invalidInput(
        res,
        session,
        "Please enter a valid 10-digit phone number.",
        []
      );
    }

    session.phone = input.trim();
    session.current_state = STATES.LEAD_EMAIL;

    return res.json({
      session_id: session.session_id,
      message: "Please enter your email ID",
    });
  }

  if (session.current_state === STATES.LEAD_EMAIL) {
    if (session.lead_collected) {
      return respondWithExistingLead(res, session, session.service);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim())) {
      return invalidInput(res, session, "Please enter a valid email address.", []);
    }

    session.email = input.trim();
    session.lead_collected = true;
    session.lead_completed_at = Date.now();
    session.current_state = STATES.FAQ_NEXT;

    const requestedService =
      session.service || session.custom_query || "General Inquiry";

    saveLead({
      name: session.name,
      phone: session.phone,
      email: session.email,
      service: requestedService,
      category: session.category || "General",
      lead_completed_at: session.lead_completed_at,
    });

    forwardLeadToCRM({
      name: session.name,
      phone: session.phone,
      email: session.email,
      service: requestedService,
    }).catch((err) => {
      console.error("[chatbot] CRM lead forward error:", err?.message || err);
    });

    scheduleAdminWhatsApp(session, requestedService, "service");

    const capitalizedName =
      session.name.charAt(0).toUpperCase() + session.name.slice(1);

    const leadFinalReply = `Thank you ${session.name}. We have received your request and you will be contacted soon regarding ${requestedService}.`;

    handleChatbotInteraction({
      userId: session.session_id,
      question: requestedService,
      chatbotResponse: leadFinalReply,
      leadName: session.name,
      phone: session.phone || undefined,
      email: session.email || undefined,
      service: requestedService,
      category: session.category || undefined,
    }).catch((e) => console.error("[chatbot] handleChatbotInteraction error:", e.message));

    return res.json({
      session_id: session.session_id,
      message: leadFinalReply,
      options: ["Select Service", "FAQs", "End chat"],
    });
  }

  return res.json({
    session_id: session.session_id,
    message: "Please choose one of the available options to continue.",
    options: [],
  });
}

module.exports = { chatController };


