import "./Skills.css";

const skillGroups = [
  { title: "AI-assisted development", skills: ["Base44", "Cursor", "Claude", "ChatGPT", "GitHub Copilot"] },
  { title: "Automation & integrations", skills: ["Square API", "Email workflows", "Booking automations", "AI workflows"] },
  { title: "Full-stack", skills: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "PHP", "MySQL"] },
  { title: "Web platforms", skills: ["Kajabi", "Squarespace", "Wix", "WordPress"] },
  { title: "QA", skills: ["Manual testing", "Regression testing", "Responsive QA", "Bug reporting"] },
];

export default function Skills() {
  return (
    <section className="portfolio-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Tools and capabilities</p>
          <h2 id="skills-title">A practical toolkit, used with judgment.</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.title} aria-label={group.title}>
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
