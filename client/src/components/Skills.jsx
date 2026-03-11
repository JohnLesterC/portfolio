import "./Skills.css";

const aiTools = ["ChatGPT", "Grok", "Claude", "Blackbox AI"];
const designTools = [
  "Canva",
  "Photoshop",
  "GIMP",
  "VS Code",
  "Postman",
  "Wix Studio",
  "WordPress",
];
const coreSkills = [
  "Project Management",
  "Leadership",
  "Event Planning",
  "Communication",
  "Social Media",
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-pill">// stack</span>
          <h2 className="bento-section-title">Skills &amp; Tools</h2>
        </div>
        <div className="skills-bento">
          <div className="bento-tile skills-tile-fullstack">
            <p className="tile-eyebrow">Full-Stack Development</p>
            <div className="code-window">
              <div className="code-window-bar">
                <span className="win-dot red" />
                <span className="win-dot yellow" />
                <span className="win-dot green" />
                <span className="win-filename">stack.ts</span>
              </div>
              <pre className="code-body">
                <code>{`const stack = {
  frontend:  ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  backend:   ["PHP", "Python", "Node.js", "Express"],
  databases: ["MySQL", "MongoDB", "XAMPP"],
  runtime:   ["MERN Stack"],
}`}</code>
              </pre>
            </div>
          </div>
          <div className="bento-tile skills-tile-ai">
            <p className="tile-eyebrow tile-eyebrow-cyan">AI Toolkit</p>
            <p className="tile-mono-label">// LLMs I use daily</p>
            <ul className="skills-ai-list">
              {aiTools.map((t) => (
                <li key={t}>
                  <span className="ai-bullet">&#x203a;</span>
                  <code>{t}</code>
                </li>
              ))}
            </ul>
          </div>
          <div className="bento-tile skills-tile-design">
            <p className="tile-eyebrow tile-eyebrow-amber">
              Design &amp; Tools
            </p>
            <div className="skills-tag-grid">
              {designTools.map((t) => (
                <span key={t} className="skill-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="bento-tile skills-tile-core">
            <p className="tile-eyebrow tile-eyebrow-emerald">
              Core Competencies
            </p>
            <div className="core-skills-wrap">
              {coreSkills.map((s) => (
                <span key={s} className="core-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
