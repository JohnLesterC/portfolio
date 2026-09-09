import { useState } from "react";
import "./Experience.css";

const experiences = [
  {
    id: "australian-client",
    tabLabel: "Australian Hospitality/Retail Client",
    company: "Australian Hospitality/Food Retail Client",
    role: "Freelance Web Developer & VA",
    period: "July 2026 – Present",
    statusBadge: "July 2026 – Present",
    codeFilename: "freelance-va.ts",
    codeSnippet: `const clientEngagement = {
  client:    "Australian Hospitality/Food Retail Client",
  role:      "Freelance Web Developer & VA",
  period:    "July 2026 – Present",
  platforms: ["Kajabi", "Squarespace"],
  apps:      ["Stock Inventory Web App"],
  focus:     ["SEO Strategies", "Booking Workflows", "Multi-Location Ops"],
}`,
    highlights: [
      "Built and maintained multi-location business websites on Kajabi and Squarespace, ensuring consistent branding and functionality across sites",
      "Developed a web app for stock inventory management, streamlining operations across multiple locations",
      "Implemented SEO optimization strategies to improve organic search visibility and drive traffic",
      "Automated email booking workflows in Kajabi, reducing manual admin workload and improving client response times",
    ],
    tags: [
      "Kajabi",
      "Squarespace",
      "Web App Dev",
      "Stock Inventory",
      "SEO Optimization",
      "Email Automation",
      "Workflow Automation",
      "Remote Collaboration",
    ],
    roleTypeQuote: ["Freelance", "Web Dev & VA"],
  },
  {
    id: "ubma",
    tabLabel: "UBMA.org (UK Client)",
    company: "UBMA.org (UK-Based Client)",
    role: "Virtual Assistant & Web Specialist",
    period: "June 2026 – Present",
    statusBadge: "June 2026 – Present",
    codeFilename: "ubma-va.ts",
    codeSnippet: `const ubmaEngagement = {
  client:       "UBMA.org (UK-Based Client)",
  role:         "Virtual Assistant",
  period:       "June 2026 – Present",
  website:      "ubma.org",
  focus:        ["Web Management", "Social Media", "Remote Admin Support"],
  deliverables: ["Content Accuracy", "Social Media Growth", "Online Presence"],
}`,
    highlights: [
      "Managed and updated the client's website (ubma.org), ensuring content accuracy and functionality",
      "Handled social media accounts — planning, scheduling, and publishing content to grow engagement",
      "Provided general administrative support and remote coordination for the client's online presence",
    ],
    tags: [
      "ubma.org",
      "Website Updates",
      "Social Media",
      "Content Planning",
      "Administrative Support",
      "Remote Coordination",
    ],
    roleTypeQuote: ["International", "Virtual Assistant"],
  },
  {
    id: "fildev",
    tabLabel: "Fildev Cloud Business",
    company: "Fildev Cloud Business and Software",
    role: "Software Engineering Intern",
    period: "Dec 2025 – Apr 2026",
    statusBadge: "Dec 2025 – Apr 2026",
    codeFilename: "fildev-internship.ts",
    codeSnippet: `const fildevInternship = {
  company:   "Fildev Cloud Business and Software",
  role:      "Software Engineering Intern",
  period:    "Dec 2025 – Apr 2026",
  stack:     ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
  platforms: ["Wix Studio", "WordPress"],
  focus:     ["QA Testing", "Architecture Decisions", "Tech Consulting", "SEO Backlinks"],
}`,
    highlights: [
      "Performed QA testing across multiple features — writing test cases, identifying bugs, and validating fixes prior to release",
      "Built full-stack features using the MERN stack and contributed to architecture decisions for a multi-module web platform",
      "Authored system architecture documents, technical diagrams, and internal documentation as an in-house Technical Consultant",
      "Resolved UI inconsistencies in Wix Studio; built SEO backlink structures and maintained WordPress sites",
    ],
    tags: [
      "MERN Stack",
      "QA Testing",
      "System Architecture",
      "Technical Consulting",
      "Wix Studio",
      "WordPress",
      "SEO Backlinks",
      "Bug Validation",
    ],
    roleTypeQuote: ["Software Eng.", "Internship"],
  },
];

export default function Experience() {
  const [activeExpId, setActiveExpId] = useState(experiences[0].id);
  const activeExp = experiences.find((e) => e.id === activeExpId);

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="experience-header">
          <span className="section-pill">// career</span>
          <h2 className="bento-section-title">Experience</h2>
        </div>
        
        <div className="exp-tabs">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              className={`exp-tab ${activeExpId === exp.id ? "active" : ""}`}
              onClick={() => setActiveExpId(exp.id)}
            >
              {exp.tabLabel}
            </button>
          ))}
        </div>

        <div className="experience-bento">
          <div className="bento-tile exp-main-tile">
            <div className="exp-accent-bar" />
            <div className="exp-content">
              <div className="exp-top">
                <div>
                  <h3 className="exp-company">{activeExp.company}</h3>
                  <p className="exp-role">{activeExp.role}</p>
                </div>
                <span className="exp-status-badge">{activeExp.statusBadge}</span>
              </div>
              <div className="code-window exp-code">
                <div className="code-window-bar">
                  <span className="win-dot red" />
                  <span className="win-dot yellow" />
                  <span className="win-dot green" />
                  <span className="win-filename">{activeExp.codeFilename}</span>
                </div>
                <pre className="code-body">
                  <code>{activeExp.codeSnippet}</code>
                </pre>
              </div>
              <ul className="exp-highlights">
                {activeExp.highlights.map((h, i) => (
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
                {activeExp.tags.map((t) => (
                  <span key={t} className="exp-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bento-tile exp-side-tile exp-side-quote">
              <p className="exp-quote-label">// role type</p>
              <p className="exp-quote-text">
                {activeExp.roleTypeQuote[0]}
                <br />
                {activeExp.roleTypeQuote[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
