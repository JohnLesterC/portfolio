import "./Hero.css";

import heroPreview from "../assets/Vantage/ScreenShot Tool -20260925173620.png";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-layout">
        <div className="hero-main-content">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            <span>Open for freelance projects &amp; full-time roles</span>
          </div>

          <h1 className="hero-headline">
            Full-Stack Engineer &amp; <span className="gradient-text">QA Specialist</span>
          </h1>

          <p className="hero-subtitle">
            I build resilient web applications, workflow systems, and polished digital experiences for teams that need reliable execution.
          </p>

          <div className="hero-proof-row">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>QA testing</span>
          </div>

          <div className="hero-ctas">
            <a href="#services" className="btn-primary">
              Hire Me / Services
            </a>
            <a href="#projects" className="btn-ghost">
              View Projects
            </a>
            <a
              href="https://calendly.com/johnlestercamit/let-s-meet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Book a Call &rarr;
            </a>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-topline">
            <span>Featured build</span>
            <span>Vantage / Base44</span>
          </div>
          <div className="preview-frame">
            <img src={heroPreview} alt="Vantage financial dashboard preview" />
          </div>
          <div className="preview-caption">
            <strong>Product thinking, shipped.</strong>
            <span>Interfaces that make complex workflows easier to trust.</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
