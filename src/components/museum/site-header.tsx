import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const destinations = [
  { label: "Space Map", href: "#space-map" },
  { label: "Missions", href: "#missions" },
  { label: "3D Explorer", href: "#explorer" },
  { label: "Timeline", href: "#timeline" },
  { label: "Space Quiz", href: "#space-quiz" },
  { label: "AI Historian", href: "#ai-historian" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Space Legacy home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            <span>SPACE</span>
            <span>LEGACY</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className="nav-home" to="/">
            Home
          </Link>
          {destinations.map((destination) => (
            <a key={destination.href} href={destination.href}>
              {destination.label}
            </a>
          ))}
        </nav>

        <Button
          className="mobile-menu-toggle"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {menuOpen && (
        <>
          <Button
            className="mobile-nav-scrim"
            variant="ghost"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            {destinations.map((destination) => (
              <a key={destination.href} href={destination.href} onClick={() => setMenuOpen(false)}>
                {destination.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}