import "./Hero.css";
import portrait from "../assets/lester.avif";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-layout">
        <div className="hero-main-content">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            <span>Freelance developer · Philippines · Remote</span>
          </div>

          <h1 className="hero-headline">I build business systems and automations</h1>

          <p className="hero-subtitle">
            I help small businesses and growing teams simplify operations with
            custom apps, connected workflows, and useful AI.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="button button-primary">
              View my work
            </a>
            <a href="#contact" className="button button-secondary">
              Contact me
            </a>
          </div>

          <div className="hero-social-links" aria-label="Professional profiles">
            <a href="https://www.linkedin.com/in/john-lester-camit" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/JohnLesterC" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <img
            className="hero-portrait"
            src={portrait}
            alt="John Lester Camit"
            fetchPriority="high"
          />
          <p className="hero-location">Working remotely with clients in Australia and the UK</p>
        </div>
      </div>
    </section>
  );
}
