import "./Services.css";

const services = [
  {
    number: "01",
    title: "Web App Development",
    description:
      "Custom business applications for inventory, invoicing, cash audits, financial tracking, and operational workflows that need a better fit.",
  },
  {
    number: "02",
    title: "Workflow & Business Automation",
    description:
      "Connect business tools and simplify repeat work across bookings, email, inventory, sales tracking, reporting, and AI-assisted workflows.",
  },
  {
    number: "03",
    title: "Website Build & Maintenance",
    description:
      "Build, improve, and maintain business websites on Kajabi, Squarespace, Wix, and WordPress.",
  },
];

export default function Services() {
  return (
    <section className="portfolio-section services-section" id="services" aria-labelledby="services-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">What I do</p>
          <h2 id="services-title">Systems that make work easier.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}