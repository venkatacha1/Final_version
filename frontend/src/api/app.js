// frontend/src/api/app.js

const isBrowser = typeof window !== "undefined";
const hostname = isBrowser ? window.location.hostname : "";
const origin = isBrowser ? window.location.origin : "";
const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

const DEFAULT_API_BASE = isLocalhost ? "http://localhost:5001" : origin;
const LEGACY_API_BASE = process.env.REACT_APP_API_URL;
const API_BASE =
  import.meta.env.VITE_API_BASE?.trim() ||
  (LEGACY_API_BASE ? LEGACY_API_BASE.trim() : "") ||
  DEFAULT_API_BASE;

const CHATBOT_URL_ENV = import.meta.env.VITE_CHATBOT_URL?.trim();
const DEFAULT_CHATBOT_BASE = isLocalhost ? "http://localhost:5001" : origin;
const CHATBOT_URL =
  CHATBOT_URL_ENV || `${DEFAULT_CHATBOT_BASE}/api/v1/bot/chat`;
const FALLBACK_CHATBOT_URL =
  !CHATBOT_URL_ENV && isLocalhost ? "http://localhost:3000/chat" : "";

// EXISTING — REQUIRED BY SERVICES FLOW
export async function fetchServices() {
  const response = await fetch(`${API_BASE}/services`);
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return response.json();
}

// REQUIRED BY CHAT FLOW
export async function chatApi(action, session_id = null) {
  const payload = JSON.stringify({
    session_id,
    action,
    lead_source: "website_bot",
  });

  const attempt = async (url) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`Chat API failed (${response.status})`);
    }

    return response.json();
  };

  try {
    return await attempt(CHATBOT_URL);
  } catch (err) {
    if (FALLBACK_CHATBOT_URL) {
      return await attempt(FALLBACK_CHATBOT_URL);
    }
    throw err;
  }
}
