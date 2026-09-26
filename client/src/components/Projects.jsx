import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Loan Management System",
    type: "Capstone Project",
    typeKey: "capstone",
    role: "Full Stack Developer",
    period: "2025 – 2026",
    problem: "Manual loan workflows led to calculation errors and slow borrower verification.",
    solution: "Engineered a full-stack portal with automated repayment schedules, database validation, and admin controls.",
    outcome: "Eliminated computation discrepancies and cut record processing times dramatically.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: 2,
    name: "Registrar Scheduling System",
    type: "Web App",
    typeKey: "web-app",
    role: "Full Stack Developer & Team Leader",
    period: "2024 – 2025",
    problem: "Classroom and faculty double-bookings created persistent timetable overlaps for registrar staff.",
    solution: "Built a centralized scheduling web app with automated conflict detection algorithms.",
    outcome: "Prevented room scheduling clashes and expedited semester timetable publishing.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    name: "Financial Tracker",
    type: "Desktop App",
    typeKey: "desktop",
    role: "Full Stack Developer & Team Leader",
    period: "2024 – 2025",
    problem: "Users lacked visibility into categorized expenses and monthly spending trajectories.",
    solution: "Developed a Python desktop app featuring structured MySQL logging and visual analytics.",
    outcome: "Delivered instant financial summaries and enabled disciplined budget compliance.",
    stack: ["Python", "MySQL"],
  },
  {
    id: 4,
    name: "ITS Departmental Website",
    type: "Departmental Web",
    typeKey: "course",
    role: "Frontend Developer",
    period: "2024 – 2025",
    problem: "Departmental announcements and event sign-ups were fragmented across unorganized social groups.",
    solution: "Constructed a centralized, mobile-responsive portal with structured event hubs.",
    outcome: "Unified departmental communications and boosted student event participation.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: 5,
    name: "Stock Inventory Management App",
    type: "Freelance",
    typeKey: "web-app",
    role: "Web Developer",
    period: "2026",
    problem: "Multi-location food retail business struggled with manual, error-prone paper stock counts.",
    solution: "Built an iPad-optimized web app for store managers to log daily inventory by location in real time.",
    outcome: "Streamlined multi-store stock audits, saving hours per store each week.",
    stack: ["Web App Dev", "Operations", "Inventory Tracking"],
  },
  {
    id: 6,
    name: "Document Tracker",
    type: "Internship",
    typeKey: "internship",
    role: "System Architect",
    period: "2026",
    problem: "Multi-module platform lacked unified architecture specs, slowing sprint onboarding.",
    solution: "Authored system architecture diagrams, data flows, and technical documentation at FiLDEV.",
    outcome: "Provided a dependable technical blueprint that accelerated cross-team feature delivery.",
    stack: ["System Design", "Software Architecture", "Documentation"],
  },
  {
    id: 7,
    name: "Multi-Location Hospitality Website",
    type: "Freelance",
    typeKey: "freelance",
    role: "Web Developer & VA",
    period: "2026",
    problem: "An Australian hospitality and food retail client with multiple locations had no unified online presence or inventory tooling.",
    solution: "Built and managed the business website using Kajabi and Squarespace, and delivered a custom iPad-optimised stock inventory web app for multi-store managers.",
    outcome: "Gave the client a professional digital brand and automated stock tracking — saving hours of manual counting per location each week.",
    stack: ["Kajabi", "Squarespace", "Web App Dev", "Operations", "Inventory Tracking"],
  },
  {
    id: 8,
    name: "UBMA.org — UK Nonprofit Website",
    type: "Freelance",
    typeKey: "freelance",
    role: "Web Specialist & VA",
    period: "2026",
    problem: "A UK-based nonprofit had an outdated web presence and inconsistent social media communications reaching its members.",
    solution: "Managed and updated the UBMA.org website content, rebuilt key pages for clarity, and handled social media scheduling and community outreach.",
    outcome: "Refreshed the organisation's digital identity and improved member engagement across web and social channels.",
    stack: ["Website Management", "Social Media", "Content Strategy", "Virtual Assistance"],
  },
  {
    id: 9,
    name: "W3C PaletteFix",
    type: "Base44 App",
    typeKey: "web-app",
    role: "Product Builder",
    period: "2026",
    problem: "A web-based accessibility tool that checks a website's color palette against W3C contrast and accessibility standards.",
    solution: "Rather than relying on visual judgment alone, PaletteFix evaluates color combinations against real compliance rules, helping ensure text and UI elements remain readable and accessible for all users.",
    outcome: "Built end-to-end in Base44, including the evaluation logic behind each color check.",
    stack: ["Base44", "Accessibility", "UI Design", "Color Systems"],
    url: "https://color-correct-lab.base44.app/",
    note: "Across all three projects, I handled the full build — from initial concept and data structure through interface design, automation/workflow logic, and testing — using Base44 as the development platform and Claude as an active development partner throughout.",
  },
  {
    id: 10,
    name: "VA-Track Pro",
    type: "Base44 App",
    typeKey: "web-app",
    role: "Product Builder",
    period: "2026",
    problem: "A time-tracking application built for virtual assistants to log, organize, and manage their working hours.",
    solution: "Designed with a clean, straightforward interface so tracking time takes seconds, not minutes, with built-in workflow automation so entries flow into the right place automatically rather than requiring manual sorting.",
    outcome: "Built end-to-end in Base44.",
    stack: ["Base44", "Workflow App", "Productivity", "Operations"],
    url: "https://vigorous-va-track-flow.base44.app/demo",
    note: "Across all three projects, I handled the full build — from initial concept and data structure through interface design, automation/workflow logic, and testing — using Base44 as the development platform and Claude as an active development partner throughout.",
  },
  {
    id: 11,
    name: "Vantage",
    type: "Base44 App",
    typeKey: "web-app",
    role: "Product Builder",
    period: "2026",
    problem: "A financial management application for tracking and organizing personal or business money flow.",
    solution: "Vantage brings structure to financial tracking through clear categorization and organized data views, with automated workflows handling repetitive data-entry logic behind the scenes.",
    outcome: "Built end-to-end in Base44.",
    stack: ["Base44", "Finance", "Dashboard", "UX"],
    url: "https://utopian-vantage-money-flow.base44.app/demo",
    note: "Across all three projects, I handled the full build — from initial concept and data structure through interface design, automation/workflow logic, and testing — using Base44 as the development platform and Claude as an active development partner throughout.",
  },
  {
    id: 12,
    name: "Daily Stock Flow",
    type: "NDA Project",
    typeKey: "web-app",
    role: "Web Developer & System Integrator",
    period: "2026",
    problem: "The client needed a centralized system to manage daily stock movement across multiple stores while keeping operations fast and consistent.",
    solution: "Built a daily stock flow platform with feature allocation across multiple stores, a gamified leaderboard for sales and upsell performance, and automated cash flow integration with Square for cashier entries and daily records.",
    outcome: "Improved operational visibility, accelerated store-level reporting, and supported seamless stock and invoice exchange with the client's existing Australian systems.",
    stack: ["NDA", "Inventory", "Sales Tracking", "Square API", "Workflow Automation"],
    note: "Confidential project details are intentionally limited for NDA purposes.",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-pill">// work &amp; case studies</span>
            <h2 className="bento-section-title">Selected Projects</h2>
          </div>
          <p className="projects-count">
            <span className="mono-num">{projects.length}</span> builds
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

                  <div className="project-case-study">
                    <p className="case-step">
                      <span className="case-label">Problem:</span> {p.problem}
                    </p>
                    <p className="case-step">
                      <span className="case-label">Solution:</span> {p.solution}
                    </p>
                    <p className="case-step">
                      <span className="case-label">Outcome:</span> {p.outcome}
                    </p>
                    {p.note && (
                      <p className="case-step project-note">
                        <span className="case-label">Note:</span> {p.note}
                      </p>
                    )}
                  </div>

                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <code key={s} className="stack-tag">
                        {s}
                      </code>
                    ))}
                  </div>

                  {p.url && (
                    <a
                      className="project-link"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project
                    </a>
                  )}
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
