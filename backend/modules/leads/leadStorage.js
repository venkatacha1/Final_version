const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "../../data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

function saveLead(lead) {
  try {
    const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
    leads.push({
      ...lead,
      savedAt: new Date().toISOString(),
    });
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    console.log("[chatbot] lead saved to storage");
  } catch (error) {
    console.error("[chatbot] error saving lead:", error);
  }
}

function getLeads(startTime, endTime) {
  try {
    const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
    return leads.filter((lead) => {
      const leadTime = new Date(lead.lead_completed_at || lead.savedAt).getTime();
      return leadTime >= startTime.getTime() && leadTime <= endTime.getTime();
    });
  } catch (error) {
    console.error("[chatbot] error reading leads:", error);
    return [];
  }
}

module.exports = { saveLead, getLeads };
