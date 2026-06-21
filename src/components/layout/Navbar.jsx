import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';

export default function Navbar({ scrolled, menuOpen, setMenuOpen }) {
  const scrollToId = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className={`rj-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="rj-wrap rj-nav-inner">
          <div className="rj-logo">Rajasthan<span> · The Land of Kings</span></div>
          <div className="rj-nav-links">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollToId(l.id)}>{l.label}</button>
            ))}
          </div>
          <button className="rj-burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="rj-mobile-menu">
          <button className="rj-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollToId(l.id)}>{l.label}</button>
          ))}
        </div>
      )}
    </>
  );
}
