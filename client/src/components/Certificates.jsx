import "./Certificates.css";

const certs = [
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "March 2026",
    credentialId: "mk8di8gh7gya",
    url: "https://www.credential.net/mk8di8gh7gya",
  },
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "March 2026",
    credentialId: "vnq3ny44qx78",
    url: "https://www.credential.net/vnq3ny44qx78",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "March 2026",
    credentialId: "rc9o822h5zkq",
    url: "https://www.credential.net/rc9o822h5zkq",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2026",
    credentialId: "ez9tv8nsowys",
    url: "https://www.credential.net/ez9tv8nsowys",
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "March 2026",
    credentialId: "euko9vifsf4v",
    url: "https://www.credential.net/euko9vifsf4v",
  },
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="certs-header">
          <span className="section-pill">// credentials</span>
          <h2 className="bento-section-title">Certificates</h2>
        </div>
        <div className="certs-grid">
          {certs.map((c) => (
            <a
              key={c.credentialId}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="bento-tile cert-tile"
            >
              <div className="cert-issuer-row">
                <span className="cert-issuer-badge">{c.issuer}</span>
                <span className="cert-date">{c.date}</span>
              </div>
              <h3 className="cert-title">{c.title}</h3>
              <div className="cert-credential">
                <span className="cert-id-label">// credential</span>
                <code className="cert-id">{c.credentialId}</code>
              </div>
              <div className="cert-verify">
                <span>Verify</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
