import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#pricing-grid" onClick={() => setOpen(false)}>Tarifs</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
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
