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
    note: "ICT — Computer Literacy",
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
    <section className="section edu-section" id="education">
      {/* Floating background orbs */}
      <div className="edu-orb edu-orb-1" />
      <div className="edu-orb edu-orb-2" />
      <div className="edu-orb edu-orb-3" />

      <div className="container">
        <div className="education-header">
          <span className="section-pill">// education</span>
          <h2 className="bento-section-title">Education</h2>
        </div>
        <div className="edu-bento">
          {schools.map((s, i) => (
            <div
              key={s.abbr}
              className={`bento-tile edu-tile${s.active ? " edu-tile-active" : ""}`}
              style={{ "--float-delay": `${i * 1.4}s` }}
            >
              <div className="edu-tile-header">
                <div className="edu-logo-wrap">
                  {s.logo ? (
                    <img src={s.logo} alt={s.school} className="edu-logo" />
                  ) : (
                    <div className="edu-logo-placeholder" />
                  )}
                </div>
                <span className="edu-abbr">{s.abbr}</span>
              </div>

              <div className="edu-tile-body">
                <h3 className="edu-degree">{s.degree}</h3>
                <span className="edu-school">{s.school}</span>
                <span className="edu-period">{s.period}</span>
              </div>

              {s.note && (
                <div className="edu-tile-footer">
                  <span className="edu-note">{s.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
