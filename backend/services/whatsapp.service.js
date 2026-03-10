const axios = require("axios");

function hasMetaConfig() {
  return Boolean(process.env.META_PHONE_ID && process.env.META_ACCESS_TOKEN);
}

async function sendWhatsAppMessage(to, messageBody) {
  if (!hasMetaConfig()) {
    console.warn("[chatbot] WhatsApp disabled: missing META_PHONE_ID/META_ACCESS_TOKEN");
    return null;
  }

  if (!to) {
    console.warn("[chatbot] WhatsApp skipped: missing recipient");
    return null;
  }

  const formattedRecipient = to.replace(/\D/g, "");
  const url = `https://graph.facebook.com/v22.0/${process.env.META_PHONE_ID}/messages`;
  const headers = {
    Authorization: `Bearer ${process.env.META_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const payload = {
      messaging_product: "whatsapp",
      to: formattedRecipient,
      type: "text",
      text: { body: messageBody },
    };
    const response = await axios.post(url, payload, { headers });
    console.log("[chatbot] WhatsApp message sent:", response.data.messages?.[0]?.id);
    return response.data;
  } catch (error) {
    console.error(
      "[chatbot] WhatsApp message failed:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
}

async function sendWhatsApp(to, name, phone, email, service, category = "") {
  if (!hasMetaConfig()) {
    console.warn("[chatbot] WhatsApp disabled: missing META_PHONE_ID/META_ACCESS_TOKEN");
    return null;
  }

  if (!to) {
    console.warn("[chatbot] WhatsApp skipped: missing recipient");
    return null;
  }

  const formattedRecipient = to.replace(/\D/g, "");
  const url = `https://graph.facebook.com/v22.0/${process.env.META_PHONE_ID}/messages`;
  const headers = {
    Authorization: `Bearer ${process.env.META_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };

  const isSummaryMode =
    typeof email === "undefined" &&
    typeof service === "undefined" &&
    typeof category === "undefined" &&
    typeof phone === "string";

  if (isSummaryMode) {
    return sendWhatsAppMessage(to, name);
  }

  const safeName = name ? name.toString().trim() : "Unknown";
  const capitalizedName =
    safeName.charAt(0).toUpperCase() + safeName.slice(1);

  try {
    const templatePayload = {
      messaging_product: "whatsapp",
      to: formattedRecipient,
      type: "template",
      template: {
        name: "lead_alert",
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: capitalizedName },
              { type: "text", text: phone || "N/A" },
              { type: "text", text: email || "N/A" },
              { type: "text", text: service || "N/A" },
              { type: "text", text: "N/A" },
            ],
          },
        ],
      },
    };

    const response = await axios.post(url, templatePayload, { headers });
    console.log("[chatbot] WhatsApp template sent:", response.data.messages?.[0]?.id);
    return response.data;
  } catch (templateError) {
    const errCode = templateError.response?.data?.error?.code;
    const errMsg =
      templateError.response?.data?.error?.message || templateError.message;
    console.warn(`[chatbot] template failed (code ${errCode}): ${errMsg}`);
  }

  try {
    const categoryLine = category ? `\nCategory: ${category}` : "";
    const messageBody =
      `New Lead Received\n\n` +
      `Name: ${capitalizedName}\n` +
      `Phone: ${phone || "N/A"}\n` +
      `Email: ${email || "N/A"}\n` +
      `Service: ${service || "N/A"}` +
      `${categoryLine}\n` +
      `Please follow up immediately.`;

    return sendWhatsAppMessage(to, messageBody);
  } catch (freeformError) {
    console.error(
      "[chatbot] WhatsApp free-form failed:",
      freeformError.response ? freeformError.response.data : freeformError.message
    );
    return null;
  }
}

module.exports = { sendWhatsApp, sendWhatsAppMessage };
