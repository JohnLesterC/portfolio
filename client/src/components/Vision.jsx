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
          {/* Photo tile */}
          <div className="vision-photo-wrap">
            <div className="vision-photo-glow" />
            <img
              src={lesterPhoto}
              alt="John Lester Camit"
              className="vision-photo"
            />
            <div className="vision-photo-frame" />
          </div>

          {/* Statement tile */}
          <div className="bento-tile vision-statement-tile">
            <p className="vision-eyebrow">// a fresh graduate's perspective</p>

            <blockquote className="vision-quote">
              "AI will never replace the people who{" "}
              <span className="vision-highlight">master</span> it."
            </blockquote>

            <p className="vision-body">
              In a rapidly evolving IT landscape, the conversation around AI
              replacing jobs is louder than ever. As a fresh graduate, I don't
              fear that shift — I <strong>embrace it with clarity</strong>.
            </p>
            <p className="vision-body">
              We can't stop AI from becoming part of everyday work, nor should
              we. But the real edge belongs to the person behind it — the one
              who defines the <span className="vision-highlight">idea</span>,
              shapes the <span className="vision-highlight">direction</span>,
              and decides what the world actually wants to{" "}
              <span className="vision-highlight">see and experience</span>.
            </p>
            <p className="vision-body">
              My pursuit is simple: become the kind of developer who wields AI
              as a precision tool — not a crutch — and builds things that
              genuinely matter.
            </p>

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
