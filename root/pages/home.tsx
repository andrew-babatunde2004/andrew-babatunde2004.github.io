import { useEffect, useRef } from "react";
import "./home.css";
import logo from "/andrewlogo.svg";

const resume = "/Andrew_Babatunde_2027_Internship_Resume.pdf";
const projects = [
  {
    name: "Kappa Theta Pi",
    type: "iOS app & member platform",
    description: "A home for 100+ members. Events, messages, and chapter resources, with single sign-on and a self-hosted backend.",
    stack: "Swift · SwiftUI · Authentik",
    href: "https://apps.apple.com/us/app/ktportal/id6794542013",
    year: "2026",
  },
  {
    name: "TradeWise AI",
    type: "3rd place · Devs On WallStreet",
    description: "Market analysis powered by local AI. Live data, news summaries, and trade reasoning—with model processing time reduced by 56.7%.",
    stack: "React · Python · FastAPI · Qwen",
    href: "https://github.com/andrew-babatunde2004/TradeWise-AI",
    year: "2026",
  },
  {
    name: "Apothokeep",
    type: "food tracking, simplified",
    description: "Scan a barcode, skip the manual entry. USDA records and Gemini power product predictions with 95% accuracy across a catalog of 10,000+ products.",
    stack: "React Native · TypeScript · MongoDB · Gemini",
    href: "https://github.com/andrew-babatunde2004/UGAHACKS11",
    year: "2026",
  },
  {
    name: "Self-hosted AI music platform",
    type: "your music, your server",
    description: "A private music platform with a self-hosted backend and local AI. Secure access across devices and networks through Tailscale.",
    stack: "React · Spring Boot · Tailscale · Ollama",
    href: "https://github.com/andrew-babatunde2004/electron-local-music-hoster",
    year: "2025",
  },
];

function Arrow() {
  return <span className="link-arrow" aria-hidden="true">↗</span>;
}

function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const sections = pageRef.current?.querySelectorAll("[data-reveal]");
    sections?.forEach((section) => {
      section.classList.add("reveal-pending");
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
      sections?.forEach((section) => section.classList.remove("reveal-pending"));
    };
  }, []);

  return (
    <div className="portfolio" ref={pageRef}>
      <a className="skip-link" href="#main">skip to content</a>
      <header className="site-header">
        <nav aria-label="Social links">
          <a href="https://www.linkedin.com/in/andrewbabatunde/" target="_blank" rel="noreferrer">linkedin <Arrow /></a>
          <a href="https://github.com/andrew-babatunde2004" target="_blank" rel="noreferrer">github <Arrow /></a>
          <a href={resume} target="_blank" rel="noreferrer">resume <Arrow /></a>
        </nav>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-heading intro-enter">
            <h1 id="intro-title">hi, i’m andrew<span>!</span></h1>
            <img className="home-logo" src={logo} alt="" width="2021" height="1159" />
          </div>
          <p className="intro-email intro-enter">aob85593 [at] uga [dot] edu</p>
          <p className="intro-description intro-enter">currently a computer science major with applications in data science and machine learning. self-proclaimed gym enthusiast and avid enjoyer of literature and music</p>
          <p className="intro-school intro-enter">studying at <a href="https://computing.uga.edu" target="_blank" rel="noreferrer">the university of georgia</a><span className="graduation">class of 2027</span></p>
          <a className="text-link intro-contact intro-enter" href="mailto:andrewbabatunde04@gmail.com">let’s get in touch <Arrow /></a>
        </section>
        <section className="content-section" aria-labelledby="projects-title" data-reveal>
          <div className="section-heading"><h2 id="projects-title">selected projects</h2><span>2025 — 2026</span></div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <a className="project-row" key={project.name} href={project.href} target="_blank" rel="noreferrer">
                <span className="project-index" aria-hidden="true">0{index + 1}</span>
                <div className="project-info">
                  <div className="project-heading"><h3>{project.name}</h3><Arrow /></div>
                  <p className="project-type">{project.type}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                </div>
                <span className="project-year">{project.year}</span>
              </a>
            ))}
          </div>
          <a className="text-link more-projects" href="https://github.com/andrew-babatunde2004?tab=repositories" target="_blank" rel="noreferrer">more on github <Arrow /></a>
        </section>
        <section className="content-section" aria-labelledby="experience-title" data-reveal>
          <div className="section-heading"><h2 id="experience-title">experience & community</h2></div>
          <div className="experience-row">
            <p className="experience-date">apr 2026 — present</p>
            <div><h3><a href="https://devs-on-wall-street.github.io/" target="_blank" rel="noreferrer">Devs On WallStreet <Arrow /></a></h3><p className="experience-role">web developer · executive board</p><p className="experience-description">Leading web development with the executive board, turning ideas into features and iterative releases.</p></div>
          </div>
          <div className="experience-row">
            <p className="experience-date">jan 2026 — present</p>
            <div><h3><a href="https://ktpgeorgia.com" target="_blank" rel="noreferrer">Kappa Theta Pi <Arrow /></a></h3><p className="experience-role">software developer</p><p className="experience-description">Building chapter software and maintaining Kronos, our server environment for containers and backend services.</p></div>
          </div>
          <div className="experience-row">
            <p className="experience-date">aug 2023 — present</p>
            <div><h3><a href="https://www.colorstack.org" target="_blank" rel="noreferrer">ColorStack <Arrow /></a></h3><p className="experience-role">member</p><p className="experience-description">Growing through mentorship, community, and software engineering career development.</p></div>
          </div>
        </section>
        <section className="contact-section" aria-labelledby="contact-title" data-reveal>
          <h2 id="contact-title">let’s build something.</h2>
          <a className="text-link contact-email" href="mailto:andrewbabatunde04@gmail.com">andrewbabatunde04@gmail.com <Arrow /></a>
          <a className="text-link resume-download" href={resume} download>download resume <span aria-hidden="true">↓</span></a>
        </section>
      </main>
      <footer className="site-footer"><p>© {new Date().getFullYear()} andrew babatunde</p><a href="#main">back to top <span aria-hidden="true">↑</span></a></footer>
    </div>
  );
}

export default Home;
