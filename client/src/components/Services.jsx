import "./Services.css";

const services = [
  {
    id: "full-stack",
    title: "Full-Stack Web App Development",
    eyebrow: "MERN & APIs",
    problem:
      "Need a scalable, custom web portal or business management tool that off-the-shelf software can't support?",
    deliverables:
      "End-to-end development of responsive web applications, secure REST APIs, role-based dashboards, and database integrations (MongoDB/MySQL).",
    stack: ["React", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    pricing: "Starting at $500 / Custom quote [FILL IN]",
    featured: true,
  },
  {
    id: "qa-testing",
    title: "QA Testing & Bug Fixing",
    eyebrow: "Reliability & Quality",
    problem:
      "Worried about broken features, payment flow regressions, or layout bugs degrading user experience?",
    deliverables:
      "Comprehensive manual & exploratory test cases, defect identification in Jira, API validation, and direct code-level fixes before production releases.",
    stack: ["Jira", "Test Cases", "Regression Testing", "Cross-Browser", "DevTools"],
    pricing: "Starting at $25/hr / Custom quote [FILL IN]",
  },
  {
    id: "cms-builds",
    title: "Wix Studio, WordPress & CMS Builds",
    eyebrow: "Client Sites & Portals",
    problem:
      "Struggling with slow loading speeds, rigid templates, or mobile display issues on your marketing site?",
    deliverables:
      "Pixel-perfect custom websites, accessibility enhancements, multi-location storefronts, and seamless content-editing setups on Wix Studio, WordPress, Squarespace, and Kajabi.",
    stack: ["Wix Studio", "WordPress", "Squarespace", "Kajabi", "Responsive CSS"],
    pricing: "Starting at $300 / Custom quote [FILL IN]",
  },
  {
    id: "seo-backlinks",
    title: "On-Page SEO & Backlink Structuring",
    eyebrow: "Search Visibility",
    problem:
      "Your website isn't showing up on Google or missing structured cards when shared across social channels?",
    deliverables:
      "Technical audits, JSON-LD Schema.org rich snippet markup, Open Graph integration, sitemap/robots optimization, and organic backlink architecture.",
    stack: ["Google Search Console", "Google Analytics", "Schema.org", "Technical Audits"],
    pricing: "Custom quote — contact for pricing [FILL IN]",
  },
  {
    id: "va-automation",
    title: "Virtual Assistance & Workflow Automation",
    eyebrow: "Operations & Admin",
    problem:
      "Losing productive hours on repetitive booking inquiries, inventory counts, or social scheduling?",
    deliverables:
      "Automated email booking flows (Kajabi), inventory tracking web apps, social media post scheduling, and remote administrative operational support.",
    stack: ["Email Automation", "Inventory Web Apps", "Social Scheduling", "Remote Operations"],
    pricing: "Starting at $15/hr / Retainer [FILL IN]",
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-pill">// what I offer</span>
          <h2 className="bento-section-title">Services &amp; Solutions</h2>
          <p className="services-intro">
            Practical engineering and technical services tailored for founders,
            growing businesses, and remote teams.
          </p>
        </div>

        <div className="services-bento">
          {services.map((s) => (
            <div
              key={s.id}
              className={`bento-tile service-tile${s.featured ? " service-featured" : ""}`}
            >
              <div className="service-top">
                <span className="service-eyebrow">{s.eyebrow}</span>
                <span className="service-pricing">{s.pricing}</span>
              </div>

              <h3 className="service-title">{s.title}</h3>

              <div className="service-body">
                <p className="service-problem">
                  <strong>Challenge:</strong> {s.problem}
                </p>
                <p className="service-deliverables">
                  <strong>Solution:</strong> {s.deliverables}
                </p>
              </div>

              <div className="service-footer">
                <div className="service-stack">
                  {s.stack.map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta-wrap">
          <div className="bento-tile services-cta-tile">
            <div>
              <h3 className="services-cta-heading">
                Have a specific project or need in mind?
              </h3>
              <p className="services-cta-sub">
                Let&apos;s discuss requirements, technical feasibility, and timelines.
              </p>
            </div>
            <div className="services-cta-actions">
              <a href="#contact" className="btn-primary">
                Request a Quote
              </a>
              <a
                href="https://calendly.com/johnlestercamit/let-s-meet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Schedule Intro Call &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}