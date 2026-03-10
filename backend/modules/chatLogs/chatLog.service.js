const axios = require("axios");
const ChatLog = require("./ChatLog.model");
const { saveToCrmChatbotLogs, saveToCrmFillings } = require("../../services/crmDb.service");

const CRM_API_URL = process.env.CRM_API_URL
  ? process.env.CRM_API_URL.trim()
  : "";
const CRM_CHATBOT_ENDPOINT = CRM_API_URL
  ? `${CRM_API_URL}/chatbot-logs`
  : "";
const CRM_FILLINGS_ENDPOINT = CRM_API_URL ? `${CRM_API_URL}/fillings` : "";

async function saveChatLog({ userId, question, chatbotResponse }) {
  if (!userId || !question || !chatbotResponse) {
    throw new Error(
      "saveChatLog: userId, question, chatbotResponse are required"
    );
  }

  const filter = { userId, question };
  const update = {
    $setOnInsert: {
      userId,
      question,
      chatbotResponse,
      source: "makeeasyfillings",
      createdAt: new Date(),
    },
  };
  const options = { upsert: true, returnDocument: "after", setDefaultsOnInsert: true };

  const doc = await ChatLog.findOneAndUpdate(filter, update, options);
  const isNew = Date.now() - doc.createdAt.getTime() < 2000;

  return { doc, isNew };
}

async function forwardToCRM({
  userId,
  question,
  chatbotResponse,
  leadName,
  phone,
  email,
  service,
  category,
}) {
  if (!CRM_CHATBOT_ENDPOINT) return null;

  try {
    const payload = {
      userId,
      question,
      chatbotResponse,
      source: "makeeasyfillings",
      leadName: leadName || "Anonymous",
      phone: phone || undefined,
      email: email || undefined,
      service: service || undefined,
      category: category || undefined,
    };

    const response = await axios.post(CRM_CHATBOT_ENDPOINT, payload, {
      timeout: 8000,
      headers: { "Content-Type": "application/json" },
    });

    console.log(
      `[chatbot] CRM chatbot log forwarded id: ${
        response.data?.data?._id || "unknown"
      }`
    );
    return true;
  } catch (err) {
    if (err.response) {
      console.error(
        `[chatbot] CRM chatbot log forward failed [${err.response.status}]:`,
        err.response.data?.message || err.response.statusText
      );
    } else {
      console.error(
        "[chatbot] CRM chatbot log forward error:",
        err.message
      );
    }
    return false;
  }
}

async function handleChatbotInteraction({
  userId,
  question,
  chatbotResponse,
  leadName,
  phone,
  email,
  service,
  category,
}) {
  if (!userId || !question || !chatbotResponse) {
    console.warn("[chatbot] log skipped: missing required fields");
    return;
  }

  const forwardPromise = forwardToCRM({
    userId,
    question,
    chatbotResponse,
    leadName,
    phone,
    email,
    service,
    category,
  });

  let isNew = false;
  try {
    const result = await saveChatLog({ userId, question, chatbotResponse });
    isNew = result.isNew;

    if (isNew) {
      console.log(`[chatbot] chat log saved userId: ${userId}`);
    } else {
      console.log(
        `[chatbot] duplicate chat log skipped userId: ${userId}, question: "${question}"`
      );
    }
  } catch (dbErr) {
    console.error("[chatbot] failed to save chat log:", dbErr.message);
  }

  const forwarded = await forwardPromise;
  if (!forwarded) {
    saveToCrmChatbotLogs({
      userId,
      question,
      chatbotResponse,
      leadName,
      phone,
      email,
      service,
      category,
      source: "makeeasyfillings",
    });
  }
}

async function forwardLeadToCRM({ name, phone, email, service }) {
  if (!CRM_FILLINGS_ENDPOINT) {
    saveToCrmFillings({
      name: name || "Anonymous",
      email: email || "unknown@example.com",
      mobile: phone || "",
      message: service ? "Service: " + service : "",
      serviceName: service || "General Inquiry",
      source: "chatbot",
    });
    return null;
  }

  try {
    const payload = {
      name: name || "Anonymous",
      email: email || "unknown@example.com",
      mobile: phone || "",
      message: service ? "Service: " + service : "",
      serviceName: service || "General Inquiry",
      source: "chatbot",
    };

    const response = await axios.post(CRM_FILLINGS_ENDPOINT, payload, {
      timeout: 8000,
      headers: { "Content-Type": "application/json" },
    });

    console.log(
      "[chatbot] CRM freshtank lead created id: " +
        (response.data?.filling?._id || "unknown")
    );
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error(
        "[chatbot] CRM freshtank forward failed [" +
          err.response.status +
          "]:",
        err.response.data?.message || err.response.statusText
      );
    } else {
      console.error(
        "[chatbot] CRM freshtank forward error:",
        err.message
      );
    }
    saveToCrmFillings({
      name: name || "Anonymous",
      email: email || "unknown@example.com",
      mobile: phone || "",
      message: service ? "Service: " + service : "",
      serviceName: service || "General Inquiry",
      source: "chatbot",
    });
    return null;
  }
}

module.exports = { saveChatLog, forwardToCRM, forwardLeadToCRM, handleChatbotInteraction };
