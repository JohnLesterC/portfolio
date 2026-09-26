import "./Leadership.css";

const roles = [
  {
    title: "Class Representative",
    org: "Information Technology Society",
    period: "2025 – 2026",
    desc: "Serve as liaison for the student section, supporting planning and organization of departmental initiatives.",
  },
  {
    title: "Academic Committee Member",
    org: "Information Technology Society",
    period: "2024 – 2025",
    desc: "Coordinated guest speakers, secured venues, and developed event timelines for academic programs.",
  },
  {
    title: "Social Media Manager",
    org: "Information Technology Society",
    period: "2023 – 2024",
    desc: "Managed the official Facebook page, scheduling content to boost student engagement and event awareness.",
  },
  {
    title: "Class Auditor – NSTP",
    org: "National Service Training Program",
    period: "2022 – 2023",
    desc: "Oversaw attendance, records, and logistics for NSTP activities and community service projects.",
  },
];

export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <div className="leadership-header">
          <span className="section-pill">// leadership</span>
          <h2 className="bento-section-title">Leadership & Involvement</h2>
        </div>
        <div className="leadership-grid">
          {roles.map((r) => (
            <div key={r.title} className="bento-tile leadership-tile">
              <h3 className="lead-title">{r.title}</h3>
              <span className="lead-org">{r.org}</span>
              <span className="lead-period">{r.period}</span>
              <p className="lead-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
