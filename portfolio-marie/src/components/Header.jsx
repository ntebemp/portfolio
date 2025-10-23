import React, { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

   const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible = section active
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header>
      <div className="nav" role="navigation">
        <div className="brand">
          <div className="logo">MPN</div>
          <div>
            <div style={{ fontWeight: 700 }}>Marie Paule Ntebe</div>
            <div style={{ fontSize: "13px", color: "var(--muted)" }}>
              Design d'interface • Sites & Apps
            </div>
          </div>
        </div>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={open ? "open" : ""} aria-label="menu">
           <a
            href="#services"
            onClick={() => setOpen(false)}
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setOpen(false)}
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#pricing-grid"
            onClick={() => setOpen(false)}
            className={activeSection === "pricing-grid" ? "active" : ""}
          >
            Tarifs
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
          <a
            className="cta"
            href="https://www.linkedin.com/in/marie-paule-ntebe-b11923160/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
