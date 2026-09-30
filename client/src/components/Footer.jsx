import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">
          John Lester <span className="accent">Camit</span>
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} John Lester Camit
        </p>
        <div className="footer-links">
          <a href="mailto:johnlestercamit@gmail.com">Email</a>
          <a
            href="https://github.com/JohnLesterC"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-lester-camit"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://calendly.com/johnlestercamit/let-s-meet" target="_blank" rel="noopener noreferrer">
            Book a call
          </a>
          <a href="./john-lester-camit-resume.html" target="_blank" rel="noopener noreferrer">
            View resume
          </a>
        </div>
      </div>
    </footer>
  );
}
