import "./Leadership.css";

const roles = [
  {
    title: "Class Representative",
    org: "City College of Calamba",
    period: "2022 – 2026",
    desc: "Liaison between students and faculty; coordinates class concerns and academic logistics.",
    ongoing: false,
  },
  {
    title: "Academic Committee Member",
    org: "City College of Calamba",
    period: "2024 – 2025",
    desc: "Assisted in planning academic events and managing student academic affairs.",
    ongoing: false,
  },
  {
    title: "Social Media Manager",
    org: "City College of Calamba",
    period: "2023 – 2024",
    desc: "Managed official class social media accounts; created content for announcements.",
    ongoing: false,
  },
  {
    title: "Class Auditor – NSTP",
    org: "National Service Training Program",
    period: "2022 – 2023",
    desc: "Oversaw attendance and records for NSTP activities and community service logs.",
    ongoing: false,
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
            <div
              key={r.title}
              className={`bento-tile leadership-tile${r.ongoing ? " tile-ongoing" : ""}`}
            >
              {r.ongoing && (
                <div className="lead-status-row">
                  <span className="lead-status-dot dot-active" />
                  <span className="lead-status-text">Ongoing</span>
                </div>
              )}
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
