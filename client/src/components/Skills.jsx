import "./Skills.css";
import { useState } from "react";

const skillGroups = [
  { category: "engineering", title: "Languages & frameworks", skills: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Python", "PHP", "MERN stack"] },
  { category: "engineering", title: "Databases & cloud", skills: ["MongoDB", "MySQL", "Supabase", "PostgreSQL", "REST APIs"] },
  { category: "automation", title: "Integrations & automations", skills: ["Square API", "Zapier", "Make", "n8n", "Webhooks", "AI agents"] },
  { category: "platforms", title: "Platforms & CMS", skills: ["Wix Studio", "Squarespace", "Kajabi", "WordPress"] },
];
const filters = [
  { value: "all", label: "All capabilities" },
  { value: "engineering", label: "Engineering" },
  { value: "automation", label: "Automation" },
  { value: "platforms", label: "Platforms & CMS" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleGroups = skillGroups.filter((group) => activeFilter === "all" || group.category === activeFilter);

  return (
    <section className="portfolio-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Tools & capabilities</p>
          <h2 id="skills-title">The right tools for the real problem.</h2>
          <p className="section-lede">A flexible stack spanning product development, integrations, and the platforms businesses already use.</p>
        </div>
        <div className="skill-filters" role="group" aria-label="Filter capabilities">
          {filters.map((filter) => (
            <button
              type="button"
              className={activeFilter === filter.value ? "active" : ""}
              aria-pressed={activeFilter === filter.value}
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <section className={`skill-group ${visibleGroups.includes(group) ? "" : "skill-group-hidden"}`} key={group.title} aria-label={group.title} aria-hidden={!visibleGroups.includes(group)}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
