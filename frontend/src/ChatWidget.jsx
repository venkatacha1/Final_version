import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import { FaComments, FaTimes } from "react-icons/fa";
import "./style.css";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}

      <div
        className="chat-toggle-btn"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? <FaTimes /> : <FaComments />}
      </div>
    </>
  );
}

export default App;
