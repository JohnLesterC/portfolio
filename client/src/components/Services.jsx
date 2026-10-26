import "./Services.css";

const services = [
  {
    number: "01",
    title: "Custom business systems & web apps",
    description:
      "Tailored portals for inventory tracking, invoicing, cash audits, and operational dashboards. Built around the way your team actually works.",
    stack: "React · Node.js · MERN · Cloud DBs",
  },
  {
    number: "02",
    title: "Workflow automation & integrations",
    description:
      "Connect disconnected tools across bookings, email pipelines, Square, webhooks, and AI-assisted workflows to eliminate repetitive data entry.",
    stack: "Square API · Zapier · Make · n8n",
  },
  {
    number: "03",
    title: "Web platform builds & CMS",
    description:
      "High-performance business websites and membership platforms with clean SEO and fast load times, built on the platform that fits your team.",
    stack: "Wix Studio · Squarespace · Kajabi · WordPress",
  },
];

export default function Services() {
  return (
    <section className="portfolio-section services-section" id="services" aria-labelledby="services-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2 id="services-title">Less busywork. Better business systems.</h2>
          <p className="section-lede">Practical software and connected workflows, designed around the bottlenecks your team feels every day.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" id={service.number === "02" ? "automations" : undefined} key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-stack">{service.stack}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}