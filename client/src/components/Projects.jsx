import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Loan Management System",
    type: "Capstone",
    typeKey: "capstone",
    role: "Full Stack Developer",
    period: "2025 - 2026",
    desc: "End-to-end loan management platform tracking loans, repayments, and borrower records with a real-time admin dashboard.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: 2,
    name: "Scheduling System",
    type: "Web App",
    typeKey: "web-app",
    role: "Full Stack + Team Lead",
    period: "2024 - 2025",
    desc: "Automated scheduling platform for faculty and classroom assignments with conflict detection.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    name: "Financial Tracker",
    type: "Desktop App",
    typeKey: "desktop",
    role: "Full Stack + Team Lead",
    period: "2024 - 2025",
    desc: "Desktop app for tracking finances with categorized expense history and visual summaries.",
    stack: ["Python", "MySQL"],
  },
  {
    id: 4,
    name: "ITS Website",
    type: "Course Project",
    typeKey: "course",
    role: "Frontend / Backend Support",
    period: "2024 - 2025",
    desc: "Departmental website for the IT School with dynamic content management.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: 5,
    name: "Pokemon Battle Game",
    type: "Game",
    typeKey: "game",
    role: "Team Leader",
    period: "2024",
    desc: "Turn-based battle game built in Python with type advantages and stat calculations.",
    stack: ["Python"],
  },
  {
    id: 6,
    name: "Document Tracker",
    type: "Internship",
    typeKey: "internship",
    role: "System Architect",
    period: "2026",
    desc: "Document tracking system designed during internship at FiLDEV. Responsible for the full software architecture — system design, data flow, and technical documentation.",
    stack: ["System Design", "Software Architecture", "Documentation"],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-pill">// work</span>
            <h2 className="bento-section-title">Selected Projects</h2>
          </div>
          <p className="projects-count">
            <span className="mono-num">6</span> builds
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`project-tile${p.featured ? " featured" : ""}`}
              data-type={p.typeKey}
            >
              <div className="project-tile-inner">
                <div className="tile-front">
                  <div className="project-tile-header">
                    <span className="project-type-badge">{p.type}</span>
                    <span className="project-year">{p.period}</span>
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-role">// {p.role}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <code key={s} className="stack-tag">
                        {s}
                      </code>
                    ))}
                  </div>
                </div>
                <div className="tile-hover-reveal">
                  <div className="code-window reveal-code">
                    <div className="code-window-bar">
                      <span className="win-dot red" />
                      <span className="win-dot yellow" />
                      <span className="win-dot green" />
                      <span className="win-filename">
                        {p.name.toLowerCase().replace(/\s+/g, "-")}.ts
                      </span>
                    </div>
                    <pre className="code-body">
                      <code>{`const project = {
  name:  "${p.name}",
  type:  "${p.type}",
  role:  "${p.role}",
  stack: [${p.stack.map((s) => `"${s}"`).join(", ")}]
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
