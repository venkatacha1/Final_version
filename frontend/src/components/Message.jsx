export default function Message({ from, text }) {
  return (
    <div className={from === "bot" ? "bot-msg" : "user-msg"}>
      {text}
    </div>
  );
}