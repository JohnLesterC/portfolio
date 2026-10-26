export default function Process() {
  const steps = [
    { title: "Discovery & workflow audit", copy: "Find the handoffs, delays, and repetitive work where time and money are leaking." },
    { title: "Rapid architecture & prototyping", copy: "Map the simplest useful solution and validate the workflow early with AI-assisted prototypes." },
    { title: "Production build & integrations", copy: "Build the system, connect APIs, and keep the real operational edge cases in view." },
    { title: "Testing, handover & support", copy: "Test across devices and workflows, document the handoff, and stay available as needs evolve." },
  ];

  return (
    <section className="portfolio-section process-section" id="process" aria-labelledby="process-title">
      <div className="section-inner">
        <div className="process-about">
          <div>
            <p className="section-kicker">A little about me</p>
            <h2 id="process-title">Independent by choice.<br /><span className="cyan-text">Invested in the outcome.</span></h2>
          </div>
          <p className="process-intro">
            I’m an independent developer with FiLDEV, focused on building software
            that solves genuine operational bottlenecks for business owners.
            AI-assisted tools help me move quickly; I stay accountable for the
            architecture, quality, and delivery.
          </p>
        </div>
        <div className="process-heading">
          <p className="section-kicker">Remote collaboration</p>
          <h3>How I work with remote clients</h3>
        </div>
        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}