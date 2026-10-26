import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-layout">
        <div className="hero-main-content">
          <div className="hero-eyebrow hero-availability">
            <span className="status-dot" />
            <span>Available for new projects &amp; contracts</span>
          </div>
          <p className="hero-role">AI-Assisted Full-Stack Developer <span>·</span> Automation Specialist</p>

          <h1 className="hero-headline">
            Custom business systems that <span className="cyan-text">eliminate manual work.</span>
          </h1>

          <p className="hero-subtitle">
            I design and build full-stack web applications, internal inventory
            and finance tools, and end-to-end workflow automations for growing
            businesses in Australia, the UK, and worldwide.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="button button-primary">
              Explore case studies <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="button button-secondary">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-proof-row" aria-label="Professional highlights">
            <span>Remote partner for teams in 🇦🇺 Australia &amp; 🇬🇧 United Kingdom</span>
            <span>AI-assisted full-stack</span>
            <span>End-to-end delivery</span>
          </div>
        </div>

        <aside className="hero-profile-wrap" aria-label="Remote availability">
          <div className="hero-profile-card">
            <span className="hero-profile-label">REMOTE DEVELOPMENT PARTNER</span>
            <strong>Ideas into systems.<br />Busywork into workflows.</strong>
            <span>FiLDEV · Calamba City, Philippines</span>
            <span className="hero-profile-status"><i /> Remote worldwide · AU/UK hours</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
