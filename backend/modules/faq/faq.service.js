const FAQs = require("../../data/faqs");

function getFaqServices() {
  return [...new Set(FAQs.map((f) => f.category))];
}

function getFaqQuestions(category) {
  return FAQs.filter((f) => f.category === category).map((f) => f.question);
}

function findFaqAnswer(category, question) {
  return FAQs.find((f) => f.category === category && f.question === question);
}

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "to",
  "for",
  "of",
  "in",
  "on",
  "with",
  "at",
  "by",
  "from",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "do",
  "does",
  "did",
  "can",
  "could",
  "will",
  "would",
  "should",
  "may",
  "might",
  "must",
  "what",
  "which",
  "who",
  "whom",
  "whose",
  "how",
  "when",
  "where",
  "why",
  "my",
  "your",
  "our",
  "their",
  "this",
  "that",
  "these",
  "those",
  "registration",
  "register",
  "filing",
  "file",
  "returns",
  "return",
  "license",
  "licenses",
  "services",
  "service",
  "company",
  "business",
  "process",
  "time",
  "documents",
  "document",
  "required",
  "valid",
  "validity",
  "fees",
  "fee",
  "cost",
  "price",
  "apply",
  "online",
]);

function normalizeKeywords(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

function findFaqByKeywords(category, userQuery) {
  const keywords = normalizeKeywords(userQuery);
  if (keywords.length === 0) return null;

  const faqsInCategory = FAQs.filter((f) => f.category === category);

  let bestFaq = null;
  let bestMatches = 0;
  let bestScore = 0;

  for (const faq of faqsInCategory) {
    const questionWords = new Set(normalizeKeywords(faq.question));
    let matches = 0;

    for (const word of keywords) {
      if (questionWords.has(word)) {
        matches += 1;
      }
    }

    if (matches > 0) {
      const score = matches / keywords.length;
      if (matches > bestMatches || (matches === bestMatches && score > bestScore)) {
        bestFaq = faq;
        bestMatches = matches;
        bestScore = score;
      }
    }
  }

  if (!bestFaq) return null;

  if (keywords.length === 1) {
    return bestMatches === 1 ? bestFaq : null;
  }

  return bestMatches >= 2 && bestScore >= 0.5 ? bestFaq : null;
}

module.exports = {
  getFaqServices,
  getFaqQuestions,
  findFaqAnswer,
  findFaqByKeywords,
};
