import { useState, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Leadership from "./components/Leadership";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <AnimatedBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <section className="section section-alt" id="about">
          <div className="container">
            <div className="about-bento-header">
              <span className="section-pill">// who I am</span>
              <h2 className="bento-section-title">About Me</h2>
            </div>
            <div className="about-bento">
              <div className="bento-tile about-bio-tile">
                <p className="about-bio-text">
                  I&apos;m <strong>John Lester Camit</strong>, a BSIT graduate
                  from City College of Calamba — passionate about web
                  development, database management, and creative media design.
                </p>
                <p className="about-bio-text">
                  Beyond coding, I lead in student organizations: managing
                  social media, planning events, and representing my class. I
                  leverage AI tools daily to accelerate my learning and
                  development workflow.
                </p>
              </div>

              <div className="bento-tile about-status-tile">
                <p className="tile-eyebrow tile-eyebrow-cyan">Currently</p>
                <div className="code-window">
                  <div className="code-window-bar">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                    <span className="win-filename">status.ts</span>
                  </div>
                  <pre className="code-body">
                    <code>{`const status = {
  degree: "BSIT Graduate",
  focus:  "Full-Stack Dev",
  open:   true,
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="bento-tile about-intern-tile">
                <p className="tile-eyebrow tile-eyebrow-amber">Internship</p>
                <p className="about-intern-company">FiLDEV</p>
                <p className="about-intern-role">Development &amp; Creatives</p>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Certificates />
        <Leadership />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
