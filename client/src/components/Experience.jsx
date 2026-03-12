import "./Experience.css";

const highlights = [
  "Performed QA testing — identified bugs, wrote test cases, and validated fixes across features",
  "Developed full-stack MERN features and contributed to software architecture decisions",
  "Designed system architecture documents and technical diagrams for a multi-module web platform",
  "Authored technical articles and documentation as an in-house Technical Consultant",
  "Fixed UI inconsistencies and enhanced component accessibility in Wix Studio",
  "Built SEO backlink structures to improve organic search performance",
];

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="experience-header">
          <span className="section-pill">// career</span>
          <h2 className="bento-section-title">Experience</h2>
        </div>
        <div className="experience-bento">
          <div className="bento-tile exp-main-tile">
            <div className="exp-accent-bar" />
            <div className="exp-content">
              <div className="exp-top">
                <div>
                  <h3 className="exp-company">FiLDEV</h3>
                  <p className="exp-role">
                    Intern &mdash; Development, QA &amp; Technical Consultant
                  </p>
                </div>
                <span className="exp-status-badge">Ongoing</span>
              </div>
              <div className="code-window exp-code">
                <div className="code-window-bar">
                  <span className="win-dot red" />
                  <span className="win-dot yellow" />
                  <span className="win-dot green" />
                  <span className="win-filename">internship.ts</span>
                </div>
                <pre className="code-body">
                  <code>{`const internship = {
  company:  "FiLDEV",
  role:     "Dev, QA & Technical Consultant",
  focus:    ["MERN Stack", "QA Testing", "System Design",
             "Documentation", "Tech Articles"],
  platform: "Wix Studio",
}`}</code>
                </pre>
              </div>
              <ul className="exp-highlights">
                {highlights.map((h, i) => (
                  <li key={i}>
                    <span className="highlight-arrow">&#8594;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="exp-side-col">
            <div className="bento-tile exp-side-tile">
              <p className="tile-eyebrow">Focus Areas</p>
              <div className="exp-tags">
                {[
                  "MERN Stack",
                  "QA Testing",
                  "System Design",
                  "Documentation",
                  "Tech Articles",
                  "Software Architecture",
                  "Wix Studio",
                  "SEO",
                  "Accessibility",
                ].map((t) => (
                  <span key={t} className="exp-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bento-tile exp-side-tile exp-side-quote">
              <p className="exp-quote-label">// role type</p>
              <p className="exp-quote-text">
                Industry
                <br />
                Internship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
