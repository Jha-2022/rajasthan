import React from 'react';
import { Flame } from "lucide-react";

export function JharokhaDivider({ tone = "gold" }) {
  const color = tone === "gold" ? "#C68A2E" : "#7A1F2B";
  return (
    <div className="rj-divider" aria-hidden="true">
      <svg viewBox="0 0 600 28" preserveAspectRatio="xMidYMid meet" width="100%" height="28">
        <defs>
          <pattern id={`arch-${tone}`} width="40" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M0,28 L0,16 C0,7 8,1 20,1 C32,1 40,7 40,16 L40,28"
              fill="none"
              stroke={color}
              strokeWidth="1.4"
            />
            <circle cx="20" cy="10" r="1.6" fill={color} />
          </pattern>
        </defs>
        <rect x="0" y="0" width="600" height="28" fill={`url(#arch-${tone})`} />
      </svg>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, sub, light }) {
  return (
    <div className={`rj-sec-head ${light ? "rj-sec-head--light" : ""}`}>
      <span className="rj-eyebrow">{eyebrow}</span>
      <h2 className="rj-h2">{title}</h2>
      {sub && <p className="rj-sec-sub">{sub}</p>}
    </div>
  );
}

export function SpiceLevel({ level }) {
  return (
    <span className="rj-spice" title={`Spice level ${level} of 3`}>
      {[1, 2, 3].map((i) => (
        <Flame key={i} size={14} className={i <= level ? "rj-spice-on" : "rj-spice-off"} />
      ))}
    </span>
  );
}
