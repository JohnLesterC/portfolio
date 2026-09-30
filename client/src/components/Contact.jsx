import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("johnlestercamit@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="portfolio-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-inner">
        <p className="section-kicker">Get in touch</p>
        <h2 id="contact-title">Have a workflow worth improving?</h2>
        <p className="contact-copy">
          Tell me what your team needs to make simpler. I work remotely from the Philippines with clients in Australia and the UK.
        </p>
        <p className="contact-email">johnlestercamit@gmail.com</p>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnlestercamit%40gmail.com&su=Business%20systems%20project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email John
          </a>
          <button className="button button-secondary" type="button" onClick={copyEmail}>
            {copied ? "Email copied" : "Copy email"}
          </button>
          <a className="button button-secondary" href="https://www.linkedin.com/in/john-lester-camit" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}