import { useEffect, useRef, useState } from "react";
import { chatApi } from "../api/app";
import Message from "./Message";
import Options from "./Options";

export default function ChatWindow({ onClose }) {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const initializedRef = useRef(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const STORAGE_KEY = "mef_chat_session_id";

  const getStoredSessionId = () => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(STORAGE_KEY);
  };

  const storeSessionId = (id) => {
    if (typeof window === "undefined") return;
    if (id) {
      window.localStorage.setItem(STORAGE_KEY, id);
    }
  };

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    initChat();
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    const id = requestAnimationFrame(scrollToBottom);
    return () => cancelAnimationFrame(id);
  }, [messages, options, loading]);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading, messages, options]);

  const initChat = async () => {
    setLoading(true);
    try {
      const existingSessionId = getStoredSessionId();
      const res = await chatApi("INIT", existingSessionId || null);

      const nextSessionId = res.session_id || existingSessionId || null;
      setSessionId(nextSessionId);
      storeSessionId(nextSessionId);

      resetToWelcome();
    } catch (err) {
      console.error(err);
      setMessages([{ from: "bot", text: "Backend not responding" }]);
    } finally {
      setLoading(false);
    }
  };

  const resetToWelcome = () => {
    setMessages([
      { from: "bot", text: "Welcome to MakeEasyFilings 👋" },
      { from: "bot", text: "How can we help you today?" }
    ]);
    setOptions(["FAQs", "Select Service"]);
  };

  const handleOptionClick = async (option) => {
    setLoading(true);
    setInput("");

    setMessages((prev) => [...prev, { from: "user", text: option }]);

    try {
      const effectiveSessionId = sessionId || getStoredSessionId();
      const res = await chatApi(option, effectiveSessionId);

      if (res.reset || option === "Start New Chat") {
        setSessionId(res.session_id || null);
        resetToWelcome();
        return;
      }

      if (res.session_id) {
        setSessionId(res.session_id);
        storeSessionId(res.session_id);
      }

      if (res.message) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: res.message }
        ]);
      }

      // backend-driven next options
      setOptions(res.options || []);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendText = async () => {
    if (!input.trim()) return;

    const text = input.trim();
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { from: "user", text }]);

    try {
      const effectiveSessionId = sessionId || getStoredSessionId();
      const res = await chatApi(text, effectiveSessionId);

      if (res.reset || text === "Start New Chat") {
        setSessionId(res.session_id || null);
        resetToWelcome();
        return;
      }

      if (res.session_id) {
        setSessionId(res.session_id);
        storeSessionId(res.session_id);
      }

      if (res.message) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: res.message }
        ]);
      }

      setOptions(res.options || []);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const isChatDone = options.includes("Start New Chat");
  const showTextInput = !loading && !isChatDone;


  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">MakeEasyFilings</div>

      {/* Messages */}
      <div className="messages">
        {messages.map((m, i) => (
          <Message key={i} from={m.from} text={m.text} />
        ))}

        {/* 🔽 Buttons directly below welcome messages */}
        {!loading && options.length > 0 && (
          <div className="welcome-actions">
            <Options
              options={options}
              onSelect={handleOptionClick}
            />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {loading && <div className="loading">Thinking…</div>}

      {showTextInput && (
        <div className="chat-input">
          <input
            ref={inputRef}
            className="chat-input-box"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendText()}
            placeholder="Type your question here..."
          />
          <button
            className="chat-send-btn"
            onClick={handleSendText}
            aria-label="Send"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="white"
            >
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>

        </div>

      )}
    </div>
  );

}
