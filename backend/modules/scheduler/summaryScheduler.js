const cron = require("node-cron");
const { getLeads } = require("../leads/leadStorage");
const { sendWhatsApp } = require("../../services/whatsapp.service");

const ADMIN_PHONE = process.env.ADMIN_PHONE;

function setTime(date, h, m, s) {
  const d = new Date(date);
  d.setHours(h, m, s, 0);
  return d;
}

async function sendSummary(startTime, endTime, periodName) {
  const leads = getLeads(startTime, endTime);

  if (leads.length === 0) {
    console.log(`[chatbot] no leads to report for ${periodName}`);
    return;
  }

  if (!ADMIN_PHONE) {
    console.warn("[chatbot] ADMIN_PHONE not set; skipping summary message");
    return;
  }

  let message = `Daily Lead Summary (${periodName})\n`;
  message += `${startTime.toLocaleDateString()} ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}\n\n`;

  leads.forEach((lead, index) => {
    message += `${index + 1}. ${lead.name} (${lead.service})\n   ${lead.phone}\n`;
  });

  message += `\nTotal Leads: ${leads.length}`;

  console.log(`[chatbot] sending ${periodName} summary (${leads.length} leads)`);

  await sendWhatsApp(ADMIN_PHONE, message, "Default");
}

function initScheduler() {
  cron.schedule("0 9 * * *", () => {
    const now = new Date();
    const startTime = new Date(now);
    startTime.setDate(startTime.getDate() - 1);
    startTime.setHours(18, 0, 0, 0);

    const endTime = setTime(now, 9, 0, 0);

    sendSummary(startTime, endTime, "Morning Report");
  });

  cron.schedule("0 18 * * *", () => {
    const now = new Date();
    const startTime = setTime(now, 9, 0, 0);
    const endTime = setTime(now, 18, 0, 0);

    sendSummary(startTime, endTime, "Evening Report");
  });

  console.log("[chatbot] lead summary scheduler initialized (09:00 & 18:00)");
}

module.exports = { initScheduler, sendSummary };
