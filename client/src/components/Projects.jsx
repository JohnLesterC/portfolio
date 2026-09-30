import { useEffect, useRef, useState } from "react";
import vantageScreenshot from "../assets/Vantage/ScreenShot Tool -20260925173620.png";
import vantageScreenshotTwo from "../assets/Vantage/ScreenShot Tool -20260925173650.png";
import vantageScreenshotThree from "../assets/Vantage/ScreenShot Tool -20260925173701.png";
import criticScreenshot from "../assets/the critic/screenshot-2026-09-26-140406.png";
import criticScreenshotTwo from "../assets/the critic/screenshot-2026-09-26-141000.png";
import criticScreenshotThree from "../assets/the critic/screenshot-2026-09-26-141449.png";
import proVaScreenshot from "../assets/Pro-VA/ScreenShot Tool -20260925173600.png";
import proVaScreenshotTwo from "../assets/Pro-VA/screenshot-2026-09-26-151253.png";
import proVaScreenshotThree from "../assets/Pro-VA/screenshot-2026-09-26-151351.png";
import ubmaProject from "../assets/UBMA/UBMA_PROJECT.png";

const caseStudies = [
  {
    number: "01",
    name: "Hospitality operations platform",
    label: "Multi-location hospitality group · Client name withheld",
    problem: "Stock counts, invoice checks, and cash-register audits happened separately across several locations, which made them hard to keep consistent and easy to lose track of.",
    built: "A centralized operations app for daily stock counts, invoice auditing, and daily cash-register audits across all locations, plus AI workflows and questionnaires that handle routine tasks, store inquiries, and admin work.",
    tools: ["Base44", "AI workflows", "Kajabi", "Squarespace"],
    result: "One system now covers stock, invoice, and cash audits for every location. Email bookings and daily stock reports run automatically, reducing manual admin work and speeding up client response times.",
    mediaLabel: "Screenshots withheld because client permission was not granted.",
  },
  {
    number: "02",
    name: "Daily Stock Flow",
    label: "Inventory and sales tracking · NDA",
    problem: "The business needed a clearer, more reliable way to see what was in stock and what had been sold, without relying on manual tracking.",
    built: "An inventory and sales tracking system integrated with the Square API and workflow automation.",
    tools: ["Square API", "Workflow automation"],
    result: "Inventory and sales data are connected in one system instead of being tracked separately. Client details are limited by NDA.",
    mediaLabel: "Screenshots withheld because client permission was not granted.",
  },
  {
    number: "03",
    name: "Vantage",
    label: "Financial management app",
    problem: "Tracking personal or business money flow across spreadsheets and notes is scattered, and repetitive data entry is slow.",
    built: "A financial management app built end to end on Base44, with clear categorization, organized data views, and automated workflows for repetitive data entry.",
    tools: ["Base44", "AI workflows"],
    result: "A working app you can try yourself in the live demo.",
    images: [
      { src: vantageScreenshot, alt: "Vantage financial management app dashboard" },
      { src: vantageScreenshotTwo, alt: "Vantage financial management app money flow view" },
      { src: vantageScreenshotThree, alt: "Vantage financial management app data view" },
    ],
    link: "https://utopian-vantage-money-flow.base44.app/demo",
  },
  {
    number: "04",
    name: "The Critic",
    label: "Web project",
    problem: "A project interface needed a clear way to organize content and guide visitors through its main experience.",
    built: "A focused web experience with structured content, responsive layouts, and a polished visual interface.",
    tools: ["React", "CSS", "Responsive design"],
    result: "A working project that presents its content clearly across desktop and mobile screens.",
    images: [
      { src: criticScreenshot, alt: "The Critic project interface" },
      { src: criticScreenshotTwo, alt: "The Critic project content view" },
      { src: criticScreenshotThree, alt: "The Critic project detail view" },
    ],
    link: "https://aurelion-copy-6ee5c53f.base44.app/",
  },
  {
    number: "05",
    name: "Pro-VA",
    label: "Virtual assistant platform",
    problem: "A virtual assistant service needed a professional online presence that clearly communicated its offer and supported client inquiries.",
    built: "A responsive project website with organized service content and a clear path for prospective clients.",
    tools: ["React", "CSS", "Responsive design"],
    result: "A working project that makes the service easier to understand and contact.",
    images: [
      { src: proVaScreenshot, alt: "Pro-VA project interface" },
      { src: proVaScreenshotTwo, alt: "Pro-VA project service view" },
      { src: proVaScreenshotThree, alt: "Pro-VA project contact view" },
    ],
    link: "https://vigorous-va-track-flow.base44.app/demo",
  },
  {
    number: "06",
    name: "UBMA.org",
    label: "Website and social media management",
    problem: "A UK-based organization needed its website kept accurate and current, and its social media run consistently, without a dedicated in-house person.",
    built: "Ongoing website management and end-to-end social media handling: content updates, planning, scheduling, and publishing, plus remote admin support for the organization's online presence.",
    tools: ["Website CMS", "Canva", "Google Workspace", "Social media scheduling"],
    result: "The website stays accurate and fully functional, and social content is planned and published on a regular schedule to grow engagement.",
    images: [{ src: ubmaProject, alt: "UBMA Islamic Blind School Project website homepage" }],
    link: "https://ubma.org",
  },
];

function ProjectMedia({ study, onOpen }) {
  if (study.images?.length) {
    return (
      <div className={`case-study-gallery ${study.images.length === 1 ? "single" : ""}`}>
        {study.images.slice(0, 3).map((image, index) => (
          <button
            type="button"
            className={index === 0 ? "case-study-image-button featured" : "case-study-image-button"}
            key={image.src}
            onClick={(event) => onOpen(study.images, index, event.currentTarget)}
            aria-label={`View larger image: ${image.alt}`}
          >
            <img
            className={index === 0 ? "case-study-image featured" : "case-study-image"}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="case-study-placeholder" role="img" aria-label={study.mediaLabel}>
      <span>{study.mediaLabel}</span>
    </div>
  );
}

export default function Projects() {
  const [viewer, setViewer] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  useEffect(() => {
    if (!viewer) {
      lastTriggerRef.current?.focus();
      return undefined;
    }

    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setViewer(null);
      } else if (event.key === "ArrowRight") {
        setViewer((current) => ({
          ...current,
          index: (current.index + 1) % current.images.length,
        }));
      } else if (event.key === "ArrowLeft") {
        setViewer((current) => ({
          ...current,
          index: (current.index - 1 + current.images.length) % current.images.length,
        }));
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewer]);

  const openViewer = (images, index, trigger) => {
    lastTriggerRef.current = trigger;
    setViewer({ images, index });
  };

  return (
    <section className="portfolio-section case-studies-section" id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <div className="section-heading case-studies-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="projects-title">Business problems, made more manageable.</h2>
          </div>
          <p>Six projects across operations, finance, inventory, and web management.</p>
        </div>
        <div className="case-study-list">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.number}>
              <div className="case-study-media">
                <ProjectMedia study={study} onOpen={openViewer} />
              </div>
              <div className="case-study-content">
                <div className="case-study-heading">
                  <span className="case-study-number">{study.number}</span>
                  <div>
                    <h3>{study.name}</h3>
                    <p>{study.label}</p>
                  </div>
                </div>
                <dl className="case-study-details">
                  <div>
                    <dt>Problem</dt>
                    <dd>{study.problem}</dd>
                  </div>
                  <div>
                    <dt>What I built</dt>
                    <dd>{study.built}</dd>
                  </div>
                  <div>
                    <dt>Tools</dt>
                    <dd className="case-study-tools">
                      {study.tools.map((tool) => <span key={tool}>{tool}</span>)}
                    </dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>{study.result}</dd>
                  </div>
                </dl>
                {study.link && (
                  <a className="text-link" href={study.link} target="_blank" rel="noopener noreferrer">
                    Open live demo <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {viewer && (
        <div className="image-viewer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setViewer(null)}>
          <div className="image-viewer-dialog" role="dialog" aria-modal="true" aria-labelledby="image-viewer-title">
            <div className="image-viewer-toolbar">
              <p id="image-viewer-title">Project image {viewer.index + 1} of {viewer.images.length}</p>
              <button ref={closeButtonRef} className="image-viewer-close" type="button" onClick={() => setViewer(null)} aria-label="Close image viewer">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <img className="image-viewer-image" src={viewer.images[viewer.index].src} alt={viewer.images[viewer.index].alt} />
            {viewer.images.length > 1 && (
              <div className="image-viewer-controls">
                <button type="button" onClick={() => setViewer((current) => ({ ...current, index: (current.index - 1 + current.images.length) % current.images.length }))}>
                  Previous
                </button>
                <button type="button" onClick={() => setViewer((current) => ({ ...current, index: (current.index + 1) % current.images.length }))}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}