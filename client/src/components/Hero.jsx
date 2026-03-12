import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bento">
        {/* Main content tile */}
        <div className="bento-tile hero-main-tile">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-headline">
            Building <span className="gradient-text">digital</span> experiences
            <br className="hero-br" />
            with <span className="cyan-text">code</span> &amp; creativity
          </h1>

          <p className="hero-subtitle">
            IT Graduate &middot; Full-Stack Developer &middot; AI Enthusiast
          </p>

          <div className="code-window hero-code">
            <div className="code-window-bar">
              <span className="win-dot red" />
              <span className="win-dot yellow" />
              <span className="win-dot green" />
              <span className="win-filename">developer.ts</span>
            </div>
            <pre className="code-body">
              <code>{`const developer = {
  name:   "John Lester Camit",
  role:   "Full-Stack Developer",
  skills: ["HTML", "CSS", "JS", "PHP", "Python"],
  tools:  ["React", "Node.js", "MySQL"],
  status: "open_to_work"
}`}</code>
            </pre>
          </div>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="mailto:johnlestercamit@gmail.com" className="btn-ghost">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Stat tiles */}
        <div className="hero-stats-col">
          <div className="bento-tile hero-stat-tile stat-violet">
            <span className="stat-num">6</span>
            <span className="stat-label">// projects built</span>
          </div>
          <div className="bento-tile hero-stat-tile">
            <span className="stat-num">5</span>
            <span className="stat-label">// certificates</span>
          </div>
          <div className="bento-tile hero-stat-tile stat-cyan">
            <span className="stat-num">4+</span>
            <span className="stat-label">// years coding</span>
          </div>
          <div className="bento-tile hero-stat-tile">
            <span className="stat-num">4</span>
            <span className="stat-label">// org roles</span>
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
