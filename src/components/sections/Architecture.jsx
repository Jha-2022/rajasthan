import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { CITIES, LANDMARKS, IMG } from '../../data/constants';
import { SectionHeader, JharokhaDivider } from '../shared/Shared';

export default function Architecture() {
  const [selectedCity, setSelectedCity] = useState("All");

  const filteredLandmarks =
    selectedCity === "All" ? LANDMARKS : LANDMARKS.filter((l) => l.city === selectedCity);

  return (
    <section id="architecture" className="rj-section rj-section--cream">
      <div className="rj-wrap">
        <SectionHeader
          eyebrow="Architecture & Landmarks"
          title="Forts Carved Into the Sky"
          sub="Browse Rajasthan's forts and palaces by city — each one a fortress capital in its own right, built in sandstone the colour of the desert around it."
        />

        <div className="rj-pills">
          {CITIES.map((c) => (
            <button
              key={c}
              className={`rj-pill ${selectedCity === c ? "active" : ""}`}
              onClick={() => setSelectedCity(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="rj-grid-3">
          {filteredLandmarks.map((l) => (
            <div className="rj-card" key={l.name}>
              <div className="rj-card-img-wrap">
                <img src={l.img} alt={l.name} loading="lazy" />
                <span className="rj-year-badge">est. {l.year}</span>
              </div>
              <div className="rj-card-body">
                <span className="rj-tag"><MapPin size={11} style={{ marginRight: 4, verticalAlign: -1 }} />{l.city}</span>
                <h4 className="rj-card-title">{l.name}</h4>
                <p className="rj-card-text">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: "64px 0 48px" }}><JharokhaDivider tone="maroon" /></div>

        <div className="rj-park-card">
          <div className="rj-park-img"><img src={IMG.haveli} alt="Patwon ki Haveli, Jaisalmer" loading="lazy" /></div>
          <div className="rj-park-body">
            <span className="rj-tag">Havelis of Jaisalmer & Shekhawati</span>
            <h3 className="rj-card-title" style={{ fontSize: 24 }}>The Merchant Mansions</h3>
            <p className="rj-card-text">
              Beyond royal forts, Rajasthan's wealthy trading families built havelis — courtyard
              mansions whose sandstone facades were carved into lace-like jharokhas, friezes and
              jali screens to display their fortune. Patwon ki Haveli in Jaisalmer, a cluster of
              five mansions built by a single family of jewel traders, took fifty years to complete
              and remains the city's most intricate example of this golden-stone craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
