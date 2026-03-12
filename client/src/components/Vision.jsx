import "./Vision.css";
import lesterPhoto from "../assets/lester.avif";

export default function Vision() {
  return (
    <section className="section vision-section" id="vision">
      {/* Background orbs */}
      <div className="vision-orb vision-orb-1" />
      <div className="vision-orb vision-orb-2" />

      <div className="container">
        <div className="vision-header">
          <span className="section-pill">// future pursuit</span>
          <h2 className="bento-section-title">My Vision</h2>
        </div>

        <div className="vision-bento">

          {/* Cinematic photo card */}
          <div className="vision-photo-card">
            <div className="vision-photo-glow" />
            <img src={lesterPhoto} alt="John Lester Camit" className="vision-photo" />
            <div className="vision-photo-overlay" />
            <div className="vision-name-badge">
              <span className="vision-name">John Lester Camit</span>
              <span className="vision-title-badge">Developer &amp; AI Advocate</span>
            </div>
          </div>

          {/* Manifesto panel */}
          <div className="vision-manifesto">
            <div className="vision-deco-quote">&ldquo;</div>
            <p className="vision-eyebrow">// a fresh graduate&apos;s perspective</p>
            <h3 className="vision-headline">
              AI will never replace the people who{" "}
              <em className="vision-em">master</em> it.
            </h3>
            <div className="vision-divider">
              <span className="vision-divider-dot" />
              <span className="vision-divider-dot" />
              <span className="vision-divider-dot" />
            </div>
            <div className="vision-beliefs">
              <div className="vision-belief">
                <span className="belief-num">01</span>
                <p className="belief-text">
                  The conversation around AI replacing jobs is louder than ever.
                  As a fresh graduate, I don&apos;t fear that shift —{" "}
                  <strong>I embrace it with clarity.</strong>
                </p>
              </div>
              <div className="vision-belief">
                <span className="belief-num">02</span>
                <p className="belief-text">
                  The real edge belongs to the person{" "}
                  <span className="vision-highlight">behind</span> the tool — the
                  one who defines the{" "}
                  <span className="vision-highlight">idea</span>, shapes the{" "}
                  <span className="vision-highlight">direction</span>, and decides
                  what the world wants to see.
                </p>
              </div>
              <div className="vision-belief">
                <span className="belief-num">03</span>
                <p className="belief-text">
                  My pursuit: become the developer who wields AI as a precision
                  tool — not a crutch — and builds things that{" "}
                  <span className="vision-highlight">genuinely matter.</span>
                </p>
              </div>
            </div>
            <div className="vision-tags">
              <span className="vision-tag">AI-Augmented Dev</span>
              <span className="vision-tag">Human-First Thinking</span>
              <span className="vision-tag">Full-Stack Engineering</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
