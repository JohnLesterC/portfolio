import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL || "";
  const endpoint = `${apiUrl.replace(/\/$/, "")}/api/contact`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "sending", message: "Sending your message…" });
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send your message.");
      form.reset();
      setStatus({ type: "success", message: "Thanks — your message is on its way. I’ll be in touch soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Could not send your message. Please email me directly.",
      });
    }
  };

  return (
    <section className="portfolio-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-layout">
        <div className="contact-intro">
          <p className="section-kicker">Let’s make work flow better</p>
          <h2 id="contact-title">Have a workflow worth improving?</h2>
          <p className="contact-copy">
            Tell me where the friction is. I’ll help you find a practical way to
            make the work simpler — wherever your team is based.
          </p>
          <a className="contact-email" href="mailto:johnlestercamit@gmail.com">johnlestercamit@gmail.com</a>
          <p className="contact-location">Calamba City, Laguna, Philippines<br />Remote worldwide · aligned with AU/UK business hours</p>
          <div className="contact-socials">
            <a href="https://github.com/JohnLesterC" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/john-lester-camit" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://calendly.com/johnlestercamit/let-s-meet" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <form className="contact-form-tile contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" autoComplete="name" required maxLength="100" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength="200" placeholder="you@company.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-project-type">Project type</label>
            <select id="contact-project-type" name="projectType" defaultValue="" required>
              <option value="" disabled>Select what you need</option>
              <option>Business system or web app</option>
              <option>Workflow automation</option>
              <option>Website or CMS</option>
              <option>Ongoing development support</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">A little about your project</label>
            <textarea id="contact-message" name="message" required maxLength="2000" rows="5" placeholder="What would you like to make easier?" />
          </div>
          <button className="button button-primary contact-submit" type="submit" disabled={status?.type === "sending"}>
            {status?.type === "sending" ? "Sending…" : "Send project enquiry"} <span aria-hidden="true">↗</span>
          </button>
          {status && <p className={`form-feedback ${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}
          <a className="contact-direct-link" href="https://calendly.com/johnlestercamit/let-s-meet" target="_blank" rel="noopener noreferrer">Prefer a quick call? Book an intro ↗</a>
        </form>
      </div>
    </section>
  );
}