const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

let services = [];

function loadServicesFromExcel() {
  const filePath = path.join(
    __dirname,
    "../../data/MakeEasyFilings_Services_List.xlsx"
  );

  if (!fs.existsSync(filePath)) {
    console.warn(
      `[chatbot] services list missing at ${filePath}; service options will be empty`
    );
    services = [];
    return;
  }

  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);

  services = rows
    .filter((row) => row["Service Category"] && row["Service Name"])
    .map((row) => ({
      category: row["Service Category"].trim(),
      name: row["Service Name"].trim(),
    }));

  console.log(`[chatbot] loaded ${services.length} services`);
}

function getCategories() {
  return [...new Set(services.map((s) => s.category))];
}

function getServicesByCategory(category) {
  return services.filter((s) => s.category === category).map((s) => s.name);
}

function getAllServices() {
  return services;
}

function isRelatedToServices(query) {
  if (!query) return false;
  const q = query.toLowerCase();

  const keywords = new Set();
  for (const s of services) {
    const parts = `${s.category} ${s.name}`
      .toLowerCase()
      .split(/[^a-z0-9]+/g)
      .filter((w) => w.length >= 4);
    for (const p of parts) keywords.add(p);
  }

  for (const kw of keywords) {
    if (q.includes(kw)) return true;
  }

  return false;
}

module.exports = {
  loadServicesFromExcel,
  getCategories,
  getServicesByCategory,
  getAllServices,
  isRelatedToServices,
};
