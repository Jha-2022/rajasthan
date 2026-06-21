import React from 'react';
import { IMG } from '../../data/constants';
import { JharokhaDivider } from '../shared/Shared';

export default function Hero() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header id="home" className="rj-hero" style={{ backgroundImage: `url(${IMG.hero})` }}>
      <div className="rj-wrap rj-hero-content">
        <span className="rj-eyebrow">Rajasthan, India</span>
        <h1>The <em>Land of Kings</em></h1>
        <p className="rj-hero-sub">
          Where amber forts crown desert ridges, mirrored palaces float on still lakes, and every
          sunset over the Thar turns the sand to gold. Rajasthan is India's largest state and its
          most theatrical — a living tapestry of Rajput valour, folk music and colour that has
          barely dimmed in a thousand years.
        </p>
        <p className="rj-hero-greet">"Padharo Mhare Desh" — welcome to my land.</p>
        <div className="rj-hero-ctas">
          <button className="rj-btn rj-btn--gold" onClick={() => scrollToId("culture")}>Explore the Culture</button>
          <button className="rj-btn rj-btn--outline" onClick={() => scrollToId("travel")}>Plan Your Journey</button>
        </div>
      </div>
      <div className="rj-hero-arches">
        <JharokhaDivider tone="gold" />
      </div>
      <div className="rj-scroll-cue"><span className="line" /> Scroll</div>
    </header>
  );
}
