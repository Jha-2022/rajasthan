import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEASONS, CIRCUITS, TIPS } from '../../data/constants';
import { SectionHeader, JharokhaDivider } from '../shared/Shared';

export default function TravelGuide() {
  const [openTip, setOpenTip] = useState(0);

  return (
    <section id="travel" className="rj-section rj-section--indigo">
      <div className="rj-wrap">
        <SectionHeader
          eyebrow="Tourism & Travel Guide"
          title="Planning Your Visit"
          sub="From the best season to the routes seasoned travellers follow, here's what to know before you go."
          light
        />

        <h3 style={{ fontSize: 20, color: "var(--gold-light)", marginBottom: 20 }}>Best Time to Visit</h3>
        <div className="rj-grid-3">
          {SEASONS.map((s) => {
            const Icon = s.icon;
            return (
              <div className="rj-season-card" key={s.name}>
                <div className="rj-season-icon"><Icon size={20} /></div>
                <span className="rj-season-tag">{s.tag}</span>
                <h3>{s.name}</h3>
                <div className="rj-season-range">{s.range}</div>
                <div className="rj-season-temp">{s.temp}</div>
                <p style={{ fontSize: 14, opacity: 0.75 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ margin: "56px 0 36px" }}><JharokhaDivider tone="gold" /></div>

        <h3 style={{ fontSize: 20, color: "var(--gold-light)", marginBottom: 20 }}>Popular Circuits</h3>
        <div className="rj-grid-2">
          {CIRCUITS.map((c) => (
            <div className="rj-circuit-card" key={c.name}>
              <h3>{c.name}</h3>
              <p className="rj-circuit-route">{c.route}</p>
              <span className="rj-circuit-duration">{c.duration}</span>
              <p className="desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ margin: "56px 0 16px" }}><JharokhaDivider tone="gold" /></div>

        <h3 style={{ fontSize: 20, color: "var(--gold-light)", marginBottom: 8 }}>Tips for Travellers</h3>
        <div>
          {TIPS.map((t, i) => (
            <div className={`rj-accordion-item ${openTip === i ? "open" : ""}`} key={t.title} style={{ borderColor: "rgba(251,244,230,0.18)" }}>
              <button className="rj-accordion-head" style={{ color: "var(--gold-light)" }} onClick={() => setOpenTip(openTip === i ? -1 : i)}>
                {t.title}
                <ChevronDown size={20} />
              </button>
              <div className="rj-accordion-panel">
                <p style={{ color: "var(--cream)", opacity: 0.82 }}>{t.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
