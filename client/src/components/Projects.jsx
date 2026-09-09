import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Loan Management System",
    type: "Capstone Project",
    typeKey: "capstone",
    role: "Full Stack Developer",
    period: "2025 – 2026",
    desc: "Leading end-to-end development of a web-based loan management system from requirements through deployment. Designing system architecture and database integration to ensure secure, efficient data handling.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: 2,
    name: "Scheduling System",
    type: "Web App",
    typeKey: "web-app",
    role: "Full Stack Developer & Team Leader",
    period: "2024 – 2025",
    desc: "Led a team building a scheduling system for the School Registrar with conflict detection and automated classroom scheduling.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    name: "Financial Tracker",
    type: "Desktop App",
    typeKey: "desktop",
    role: "Full Stack Developer & Team Leader",
    period: "2024 – 2025",
    desc: "Led a team building a Python-based financial tracker with categorized expense history, database tracking, and visual summaries.",
    stack: ["Python", "MySQL"],
  },
  {
    id: 4,
    name: "Information Technology Society (ITS) Website",
    type: "Departmental Web",
    typeKey: "course",
    role: "Frontend Developer",
    period: "2024 – 2025",
    desc: "Built the frontend and provided backend support for the official departmental website.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: 5,
    name: "Stock Inventory Management App",
    type: "Freelance",
    typeKey: "web-app",
    role: "Web Developer",
    period: "2026",
    desc: "Developed a web app for stock inventory management for an Australian hospitality client, streamlining operations across multiple locations.",
    stack: ["Web App Dev", "Operations", "Inventory Tracking"],
  },
  {
    id: 6,
    name: "Document Tracker",
    type: "Internship",
    typeKey: "internship",
    role: "System Architect",
    period: "2026",
    desc: "Document tracking system designed during internship at FiLDEV. Responsible for system architecture, technical diagrams, and documentation.",
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
