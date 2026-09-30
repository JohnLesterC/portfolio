export default function Process() {
  const steps = ["Discover", "Build", "Test", "Deliver", "Support"];

  return (
    <section className="portfolio-section process-section" id="process" aria-labelledby="process-title">
      <div className="section-inner">
        <p className="section-kicker">How I work</p>
        <h2 id="process-title">AI helps me move faster. I own the outcome.</h2>
        <p className="process-intro">
          I use AI-assisted tools to accelerate development while staying responsible for requirements, testing, QA, deployment, and handover.
        </p>
        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="process-step-number">0{index + 1}</span>
              <h3>{step}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}