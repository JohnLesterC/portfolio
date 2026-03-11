const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const Contact = require("../models/Contact");

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML to prevent injection in email body
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// POST /api/contact
router.post("/", async (req, res) => {
  const name = String(req.body.name || "")
    .trim()
    .slice(0, 100);
  const email = String(req.body.email || "")
    .trim()
    .slice(0, 200);
  const message = String(req.body.message || "")
    .trim()
    .slice(0, 2000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // Send email via Resend
  const { error: sendError } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "johnlestercamit@gmail.com",
    reply_to: email,
    subject: `New message from ${esc(name)}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#6d28d9">New Portfolio Message</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
        <hr style="border:none;border-top:1px solid #e2e8f0">
        <p style="white-space:pre-wrap">${esc(message)}</p>
      </div>
    `,
  });

  if (sendError) {
    console.error("Resend error:", sendError);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again." });
  }

  // Persist to MongoDB if connected (non-critical)
  try {
    await Contact.create({ name, email, message });
  } catch {
    // DB unavailable — email already sent, continue
  }

  res.status(201).json({ success: true });
});

module.exports = router;
