import "./Contact.css";

export default function Contact() {
  return (
    <section className="portfolio-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-inner">
        <p className="section-kicker">Get in touch</p>
        <h2 id="contact-title">Have a workflow worth improving?</h2>
        <p className="contact-copy">
          Tell me what your team needs to make simpler. I work remotely from the Philippines with clients in Australia and the UK.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:johnlestercamit@gmail.com?subject=Business%20systems%20project">
            Email John
          </a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/john-lester-camit" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}