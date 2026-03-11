import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">
          John Lester <span className="accent">Camit</span>
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} — Built with React & Node.js
        </p>
        <div className="footer-links">
          <a href="mailto:johnlestercamit@gmail.com">Email</a>
          <a
            href="https://github.com/JohnLesterC"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-lester-camit"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
