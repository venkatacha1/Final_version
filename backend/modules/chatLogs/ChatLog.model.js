const mongoose = require("mongoose");

const chatLogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "userId is required"],
      trim: true,
      index: true,
    },
    question: {
      type: String,
      required: [true, "question is required"],
      trim: true,
    },
    chatbotResponse: {
      type: String,
      required: [true, "chatbotResponse is required"],
      trim: true,
    },
    source: {
      type: String,
      default: "makeeasyfillings",
      enum: ["makeeasyfillings"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
    collection: "newCollection",
  }
);

chatLogSchema.index({ userId: 1, question: 1 }, { unique: true });
chatLogSchema.index({ createdAt: -1 });

const ChatLog = mongoose.model("ChatLog", chatLogSchema);

module.exports = ChatLog;
