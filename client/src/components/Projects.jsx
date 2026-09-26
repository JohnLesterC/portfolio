import "./Projects.css";
import { useState } from "react";

import vantagePreview from "../assets/Vantage/ScreenShot Tool -20260925173620.png";
import vantageScreenTwo from "../assets/Vantage/ScreenShot Tool -20260925173650.png";
import vantageScreenThree from "../assets/Vantage/ScreenShot Tool -20260925173701.png";
import vantageScreenFour from "../assets/Vantage/ScreenShot Tool -20260925173712.png";
import vantageScreenFive from "../assets/Vantage/ScreenShot Tool -20260925173723.png";
import proVaPreview from "../assets/Pro-VA/ScreenShot Tool -20260925173600.png";
import criticScreenOne from "../assets/the critic/screenshot-2026-09-26-140406.png";
import criticScreenTwo from "../assets/the critic/screenshot-2026-09-26-140849.png";
import criticScreenThree from "../assets/the critic/screenshot-2026-09-26-140942.png";
import criticScreenFour from "../assets/the critic/screenshot-2026-09-26-141000.png";
import criticScreenFive from "../assets/the critic/screenshot-2026-09-26-141103.png";
import criticScreenSix from "../assets/the critic/screenshot-2026-09-26-141329.png";
import criticScreenSeven from "../assets/the critic/screenshot-2026-09-26-141341.png";
import criticScreenEight from "../assets/the critic/screenshot-2026-09-26-141353.png";
import criticScreenNine from "../assets/the critic/screenshot-2026-09-26-141405.png";
import criticScreenTen from "../assets/the critic/screenshot-2026-09-26-141449.png";
import criticScreenEleven from "../assets/the critic/screenshot-2026-09-26-141458.png";

const vantageGallery = [
  vantagePreview,
  vantageScreenTwo,
  vantageScreenThree,
  vantageScreenFour,
  vantageScreenFive,
];

const criticGallery = [
  criticScreenOne,
  criticScreenTwo,
  criticScreenThree,
  criticScreenFour,
  criticScreenFive,
  criticScreenSix,
  criticScreenSeven,
  criticScreenEight,
  criticScreenNine,
  criticScreenTen,
  criticScreenEleven,
];

const projects = [
  {
    id: 1,
    name: "Loan Management System",
    type: "Capstone Project",
    typeKey: "capstone",
    role: "Full Stack Developer",
    period: "2025 – 2026",
    problem: "Manual loan workflows led to calculation errors and slow borrower verification.",
    solution: "Engineered a full-stack portal with automated repayment schedules, database validation, and admin controls.",
    outcome: "Eliminated computation discrepancies and cut record processing times dramatically.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: 2,
    name: "Registrar Scheduling System",
    type: "Web App",
    typeKey: "web-app",
    role: "Full Stack Developer & Team Leader",
    period: "2024 – 2025",
    problem: "Classroom and faculty double-bookings created persistent timetable overlaps for registrar staff.",
    solution: "Built a centralized scheduling web app with automated conflict detection algorithms.",
    outcome: "Prevented room scheduling clashes and expedited semester timetable publishing.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    name: "Financial Tracker",
    type: "Desktop App",
    typeKey: "desktop",
    role: "Full Stack Developer & Team Leader",
    period: "2024 – 2025",
    problem: "Users lacked visibility into categorized expenses and monthly spending trajectories.",
    solution: "Developed a Python desktop app featuring structured MySQL logging and visual analytics.",
    outcome: "Delivered instant financial summaries and enabled disciplined budget compliance.",
    stack: ["Python", "MySQL"],
  },
  {
    id: 4,
    name: "ITS Departmental Website",
    type: "Departmental Web",
    typeKey: "course",
    role: "Frontend Developer",
    period: "2024 – 2025",
    problem: "Departmental announcements and event sign-ups were fragmented across unorganized social groups.",
    solution: "Constructed a centralized, mobile-responsive portal with structured event hubs.",
    outcome: "Unified departmental communications and boosted student event participation.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: 5,
    name: "Stock Inventory Management App",
    type: "Freelance",
    typeKey: "web-app",
    role: "Web Developer",
    period: "2026",
    problem: "Multi-location food retail business struggled with manual, error-prone paper stock counts.",
    solution: "Built an iPad-optimized web app for store managers to log daily inventory by location in real time.",
    outcome: "Streamlined multi-store stock audits, saving hours per store each week.",
    stack: ["Web App Dev", "Operations", "Inventory Tracking"],
  },
  {
    id: 6,
    name: "Document Tracker",
    type: "Internship",
    typeKey: "internship",
    role: "System Architect",
    period: "2026",
    problem: "Multi-module platform lacked unified architecture specs, slowing sprint onboarding.",
    solution: "Authored system architecture diagrams, data flows, and technical documentation at FiLDEV.",
    outcome: "Provided a dependable technical blueprint that accelerated cross-team feature delivery.",
    stack: ["System Design", "Software Architecture", "Documentation"],
  },
  {
    id: 7,
    name: "Multi-Location Hospitality Website",
    type: "Freelance",
    typeKey: "freelance",
    role: "Web Developer & VA",
    period: "2026",
    problem: "An Australian hospitality and food retail client with multiple locations had no unified online presence or inventory tooling.",
    solution: "Built and managed the business website using Kajabi and Squarespace, and delivered a custom iPad-optimised stock inventory web app for multi-store managers.",
    outcome: "Gave the client a professional digital brand and automated stock tracking — saving hours of manual counting per location each week.",
    stack: ["Kajabi", "Squarespace", "Web App Dev", "Operations", "Inventory Tracking"],
  },
  {
    id: 8,
    name: "UBMA.org — UK Nonprofit Website",
    type: "Freelance",
    typeKey: "freelance",
    role: "Web Specialist & VA",
    period: "2026",
    problem: "A UK-based nonprofit had an outdated web presence and inconsistent social media communications reaching its members.",
    solution: "Managed and updated the UBMA.org website content, rebuilt key pages for clarity, and handled social media scheduling and community outreach.",
    outcome: "Refreshed the organisation's digital identity and improved member engagement across web and social channels.",
    stack: ["Website Management", "Social Media", "Content Strategy", "Virtual Assistance"],
  },
  {
    id: 9,
    name: "W3C PaletteFix",
    type: "Base44 App",
    typeKey: "web-app",
    role: "Product Builder",
    period: "2026",
    problem: "A web-based accessibility tool that checks a website's color palette against W3C contrast and accessibility standards.",
    solution: "Rather than relying on visual judgment alone, PaletteFix evaluates color combinations against real compliance rules, helping ensure text and UI elements remain readable and accessible for all users.",
    outcome: "Built end-to-end in Base44, including the evaluation logic behind each color check.",
    stack: ["Base44", "Accessibility", "UI Design", "Color Systems"],
    url: "https://color-correct-lab.base44.app/",
    note: "Across all three projects, I handled the full build — from initial concept and data structure through interface design, automation/workflow logic, and testing — using Base44 as the development platform and Claude as an active development partner throughout.",
  },
  {
    id: 10,
    name: "VA-Track Pro",
    type: "Base44 App",
    typeKey: "web-app",
    role: "Product Builder",
    period: "2026",
    problem: "A time-tracking application built for virtual assistants to log, organize, and manage their working hours.",
    solution: "Designed with a clean, straightforward interface so tracking time takes seconds, not minutes, with built-in workflow automation so entries flow into the right place automatically rather than requiring manual sorting.",
    outcome: "Built end-to-end in Base44.",
    stack: ["Base44", "Workflow App", "Productivity", "Operations"],
    url: "https://vigorous-va-track-flow.base44.app/demo",
    note: "Across all three projects, I handled the full build — from initial concept and data structure through interface design, automation/workflow logic, and testing — using Base44 as the development platform and Claude as an active development partner throughout.",
    image: proVaPreview,
  },
  {
    id: 11,
    name: "Vantage",
    type: "Base44 App",
    typeKey: "web-app",
    role: "Product Builder",
    period: "2026",
    problem: "A financial management application for tracking and organizing personal or business money flow.",
    solution: "Vantage brings structure to financial tracking through clear categorization and organized data views, with automated workflows handling repetitive data-entry logic behind the scenes.",
    outcome: "Built end-to-end in Base44.",
    stack: ["Base44", "Finance", "Dashboard", "UX"],
    url: "https://utopian-vantage-money-flow.base44.app/demo",
    note: "Across all three projects, I handled the full build — from initial concept and data structure through interface design, automation/workflow logic, and testing — using Base44 as the development platform and Claude as an active development partner throughout.",
    image: vantagePreview,
    images: vantageGallery,
  },
  {
    id: 12,
    name: "Daily Stock Flow",
    type: "NDA Project",
    typeKey: "web-app",
    role: "Web Developer & System Integrator",
    period: "2026",
    problem: "The client needed a centralized system to manage daily stock movement across multiple stores while keeping operations fast and consistent.",
    solution: "Built a daily stock flow platform with feature allocation across multiple stores, a gamified leaderboard for sales and upsell performance, and automated cash flow integration with Square for cashier entries and daily records.",
    outcome: "Improved operational visibility, accelerated store-level reporting, and supported seamless stock and invoice exchange with the client's existing Australian systems.",
    stack: ["NDA", "Inventory", "Sales Tracking", "Square API", "Workflow Automation"],
    note: "Confidential project details are intentionally limited for NDA purposes.",
  },
  {
    id: 13,
    name: "The Jaded Art Director",
    type: "Base44 Contest",
    typeKey: "web-app",
    role: "Contest Participant & Product Builder",
    period: "2026",
    problem: "Designers needed direct, practical feedback instead of vague praise or generic critique.",
    solution: "Built a playful art-direction tool where users upload a design and receive a blunt but useful critique, with shareable summaries and a history of past roasts.",
    outcome: "Created a focused contest entry that turns design review into a memorable, actionable experience.",
    stack: ["Base44", "AI Product", "UX Design", "Image Uploads"],
    url: "https://aurelion-copy-6ee5c53f.base44.app",
    image: criticScreenOne,
    images: criticGallery,
  },
];

const newestFirstProjects = [...projects].sort((first, second) => {
  const firstYear = Number(first.period.match(/\d{4}/g)?.at(-1) ?? 0);
  const secondYear = Number(second.period.match(/\d{4}/g)?.at(-1) ?? 0);

  return secondYear - firstYear || second.id - first.id;
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryIndexes, setGalleryIndexes] = useState({});
  const featuredProjects = newestFirstProjects.filter((project) =>
    [12, 11, 10].includes(project.id),
  );
  const archiveProjects = newestFirstProjects.filter(
    (project) => ![12, 11, 10].includes(project.id),
  );
  const filteredArchive = archiveProjects.filter(
    (project) => activeFilter === "All" || project.type === activeFilter,
  );
  const filters = [
    "All",
    ...new Set(archiveProjects.map((project) => project.type)),
  ];

  const renderProject = (project, featured = false) => (
    <article
      key={project.id}
      className={`project-tile${featured ? " project-featured" : ""}`}
      data-type={project.typeKey}
    >
      <div className="project-tile-inner">
        <div className="project-tile-header">
          <span className="project-type-badge">{project.type}</span>
          <span className="project-year">{project.period}</span>
        </div>

        {project.images ? (() => {
          const galleryIndex = galleryIndexes[project.id] ?? 0;
          const galleryImage = project.images[galleryIndex];
          const changeGalleryImage = (direction) => {
            const nextIndex =
              (galleryIndex + direction + project.images.length) % project.images.length;
            setGalleryIndexes((current) => ({ ...current, [project.id]: nextIndex }));
          };

          return (
          <div className="project-gallery">
            <div className="project-gallery-main">
              <button
                type="button"
                className="gallery-image-button"
                onClick={() => setSelectedImage({ src: galleryImage, name: project.name })}
                aria-label={`View larger ${project.name} preview`}
              >
                <img src={galleryImage} alt={`${project.name} screen ${galleryIndex + 1}`} />
              </button>
              <button
                type="button"
                className="gallery-arrow gallery-arrow-left"
                onClick={() => changeGalleryImage(-1)}
                aria-label={`Show previous ${project.name} screenshot`}
              >
                &#8592;
              </button>
              <button
                type="button"
                className="gallery-arrow gallery-arrow-right"
                onClick={() => changeGalleryImage(1)}
                aria-label={`Show next ${project.name} screenshot`}
              >
                &#8594;
              </button>
            </div>
            <div className="project-gallery-strip">
              {project.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={index === galleryIndex ? "active" : ""}
                  onClick={() => setGalleryIndexes((current) => ({ ...current, [project.id]: index }))}
                  aria-label={`View ${project.name} screen ${index + 1}`}
                >
                  <img src={image} alt={`${project.name} screen ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
          );
        })() : project.image ? (
          <button
            type="button"
            className="project-visual"
            onClick={() => setSelectedImage({ src: project.image, name: project.name })}
            aria-label={`View larger ${project.name} preview`}
          >
            <img src={project.image} alt={`${project.name} preview`} />
          </button>
        ) : null}

        <h3 className="project-name">{project.name}</h3>
        <p className="project-role">// {project.role}</p>
        <p className="project-summary">{project.solution}</p>

        {featured && (
          <div className="project-outcome">
            <span>Outcome</span>
            <p>{project.outcome}</p>
          </div>
        )}

        <div className="project-stack">
          {project.stack.map((stackItem) => (
            <code key={stackItem} className="stack-tag">
              {stackItem}
            </code>
          ))}
        </div>

        {project.url && (
          <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            View live build <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-pill">// work &amp; case studies</span>
            <h2 className="bento-section-title">Selected Projects</h2>
          </div>
          <p className="projects-count">13 builds / 3 featured</p>
        </div>
        <div className="featured-projects">
          {featuredProjects.map((project) => renderProject(project, true))}
        </div>

        <div className="project-archive-heading">
          <div>
            <span className="section-pill">// the archive</span>
            <h3>More builds &amp; client work</h3>
          </div>
          <div className="project-filters" aria-label="Filter project archive">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="archive-grid">
          {filteredArchive.map((project) => renderProject(project))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.name} image preview`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            x
          </button>
          <img
            src={selectedImage.src}
            alt={`${selectedImage.name} enlarged preview`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
