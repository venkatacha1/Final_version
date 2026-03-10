const { v4: uuidv4 } = require("uuid");
const { STATES } = require("./stateMachine");

const sessions = new Map();

const SESSION_TIMEOUT_MS = 8 * 60 * 1000;
const SESSION_CLEANUP_MS = 5 * 60 * 1000;

function createSession() {
  return {
    session_id: uuidv4(),
    current_state: STATES.WELCOME,
    category: null,
    service: null,
    custom_query: null,
    from_faq: false,
    lead_collected: false,
    lead_completed_at: null,
    name: null,
    phone: null,
    email: null,
    faq_service: null,
    faq_offset: 0,
    pending_queries: [],
    admin_notified: false,
    customer_email_sent: false,
    last_activity: Date.now(),
  };
}

function isExpired(session) {
  if (!session || !session.last_activity) return false;
  return Date.now() - session.last_activity > SESSION_TIMEOUT_MS;
}

function resolveSession(sessionId) {
  if (sessionId && sessions.has(sessionId)) {
    const session = sessions.get(sessionId);

    if (isExpired(session)) {
      sessions.delete(sessionId);
      const fresh = createSession();
      sessions.set(fresh.session_id, fresh);
      return { session: fresh, isExpired: true, isNew: true };
    }

    session.last_activity = Date.now();
    return { session, isExpired: false, isNew: false };
  }

  const session = createSession();
  sessions.set(session.session_id, session);
  return { session, isExpired: false, isNew: true };
}

function cleanupSessions() {
  const now = Date.now();
  for (const [id, session] of sessions) {
    if (now - session.last_activity > SESSION_TIMEOUT_MS) {
      sessions.delete(id);
    }
  }
}

setInterval(cleanupSessions, SESSION_CLEANUP_MS).unref();

module.exports = { resolveSession };
