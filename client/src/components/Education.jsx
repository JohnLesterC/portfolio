import "./Education.css";
import cccLogo from "../assets/ccc.avif";
import makilingLogo from "../assets/makiling.avif";

const schools = [
  {
    degree: "Bachelor of Science in Information Technology",
    abbr: "BSIT",
    school: "City College of Calamba",
    period: "2022 – 2026",
    note: "Graduate",
    active: false,
    logo: cccLogo,
  },
  {
    degree: "Senior High School",
    abbr: "SHS",
    school: "Makiling Integrated School",
    period: "2016 – 2022",
    note: null,
    active: false,
    logo: makilingLogo,
  },
  {
    degree: "Elementary Education",
    abbr: "ELEM",
    school: "Puting Lupa Elementary School",
    period: "2010 – 2016",
    note: null,
    active: false,
    logo: null,
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="education-header">
          <span className="section-pill">// education</span>
          <h2 className="bento-section-title">Education</h2>
        </div>
        <div className="edu-bento">
          {schools.map((s) => (
            <div
              key={s.abbr}
              className={`bento-tile edu-tile${s.active ? " edu-tile-active" : ""}`}
            >
              {s.logo && (
                <img src={s.logo} alt={s.school} className="edu-logo" />
              )}
              {s.active && (
                <div className="edu-status-row">
                  <span className="edu-dot edu-dot-active" />
                  <span className="edu-status-badge">Ongoing</span>
                </div>
              )}
              <span className="edu-abbr">{s.abbr}</span>
              <h3 className="edu-degree">{s.degree}</h3>
              <span className="edu-school">{s.school}</span>
              <span className="edu-period">{s.period}</span>
              {s.note && <span className="edu-note">{s.note}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
