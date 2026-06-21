import React from 'react';
import { Play } from 'lucide-react';
import { DANCES, FESTIVALS, CRAFTS } from '../../data/constants';
import { SectionHeader, JharokhaDivider } from '../shared/Shared';

export default function Culture() {
  return (
    <section id="culture" className="rj-section">
      <div className="rj-wrap">
        <SectionHeader
          eyebrow="Culture & Heritage"
          title="Where Every Color Has a Story"
          sub="Rajasthan's culture lives in its movement and its hands — in the twirl of a ghagra, the rhythm of a dholak, and crafts passed from one generation of artisans to the next."
        />

        <h3 style={{ fontSize: 22, color: "var(--maroon)", marginBottom: 22 }}>Music & Dance</h3>
        <div className="rj-dance-grid">
          {DANCES.map((d) => (
            <div className="rj-dance-card" key={d.name}>
              <img src={d.img} alt={d.name} loading="lazy" />
              <div className="rj-dance-content">
                <h3>{d.name}</h3>
                <div className="origin">{d.origin}</div>
                <p>{d.desc}</p>
                <a
                  className="rj-watch-link"
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(d.query)}`}
                  target="_blank" rel="noopener noreferrer"
                >
                  <span className="dot"><Play size={12} fill="currentColor" /></span>
                  Watch the dance
                </a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, opacity: 0.7, marginTop: 18, maxWidth: 640 }}>
          Both dances are carried by Rajasthan's itinerant musicians — the Manganiyar and Langa
          communities — on instruments unique to the desert: the bowed sarangi, the single-string
          ektara, wooden khartal clappers and the nasal morchang.
        </p>

        <div style={{ margin: "64px 0 48px" }}><JharokhaDivider tone="maroon" /></div>

        <h3 style={{ fontSize: 22, color: "var(--maroon)", marginBottom: 22 }}>Festivals</h3>
        <div className="rj-grid-3">
          {FESTIVALS.map((f) => (
            <div className="rj-card" key={f.name}>
              <div className="rj-card-img-wrap"><img src={f.img} alt={f.name} loading="lazy" /></div>
              <div className="rj-card-body">
                <span className="rj-tag">{f.when}</span>
                <h4 className="rj-card-title">{f.name}</h4>
                <p className="rj-card-text">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: "64px 0 48px" }}><JharokhaDivider tone="maroon" /></div>

        <h3 style={{ fontSize: 22, color: "var(--maroon)", marginBottom: 22 }}>Art, Attire & Craft</h3>
        <div className="rj-grid-4">
          {CRAFTS.map((c) => (
            <div className="rj-card" key={c.name}>
              <div className="rj-card-img-wrap"><img src={c.img} alt={c.name} loading="lazy" /></div>
              <div className="rj-card-body" style={{ padding: 16 }}>
                <h4 className="rj-card-title" style={{ fontSize: 16.5 }}>{c.name}</h4>
                <p className="rj-card-text" style={{ fontSize: 13.5 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
