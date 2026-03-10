const isBrowser = typeof window !== "undefined";
const origin = isBrowser ? window.location.origin : "";

const rawApiBase =
  import.meta.env.VITE_API_BASE?.trim() ||
  process.env.REACT_APP_API_URL ||
  origin ||
  "/api";

const normalizedBase = rawApiBase.replace(/\/+$/, "");
const hasApiSegment = /\/api(\/|$)/i.test(normalizedBase);

export const API_BASE_URL = hasApiSegment
  ? normalizedBase
  : `${normalizedBase}/api`;
