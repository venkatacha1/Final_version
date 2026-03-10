const nodemailer = require("nodemailer");

const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = (process.env.SMTP_SECURE || "true") === "true";

const hasAuth = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

const transporter = hasAuth
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  : null;

async function sendEmail(to, subject, text, html = null) {
  if (!transporter) {
    console.warn("[chatbot] email disabled: missing EMAIL_USER/EMAIL_PASS");
    return null;
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to,
    subject,
    text,
  };
  if (html) {
    mailOptions.html = html;
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("[chatbot] email sent:", info.response);
    return info;
  } catch (error) {
    console.error("[chatbot] error sending email:", error);
    return null;
  }
}

module.exports = { sendEmail };
