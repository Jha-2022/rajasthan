import React from 'react';
import { PARKS, ANIMALS } from '../../data/constants';
import { SectionHeader, JharokhaDivider } from '../shared/Shared';

export default function Wildlife() {
  return (
    <section id="wildlife" className="rj-section rj-section--cream">
      <div className="rj-wrap">
        <SectionHeader
          eyebrow="Wildlife & Nature"
          title="Beyond the Dunes"
          sub="Rajasthan isn't only desert — its Aravalli forests and lakes shelter some of India's most celebrated tiger reserves and a surprising range of life adapted to extremes."
        />
        <div className="rj-grid-2">
          {PARKS.map((p) => (
            <div className="rj-park-card" key={p.name}>
              <div className="rj-park-img"><img src={p.img} alt={p.name} loading="lazy" /></div>
              <div className="rj-park-body">
                <h3 className="rj-card-title" style={{ fontSize: 22 }}>{p.name}</h3>
                <p className="rj-card-text">{p.desc}</p>
                <div className="rj-park-meta">
                  <div><b>Best Time</b>{p.best}</div>
                  <div><b>Look For</b>{p.species}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: "64px 0 40px" }}><JharokhaDivider tone="maroon" /></div>

        <div className="rj-grid-3">
          {ANIMALS.map((a) => (
            <div className="rj-card rj-animal-card" key={a.name}>
              <div className="rj-card-img-wrap"><img src={a.img} alt={a.name} loading="lazy" /></div>
              <div className="rj-card-body">
                <h4 className="rj-card-title" style={{ fontSize: 18 }}>{a.name}</h4>
                <p className="rj-card-text">{a.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
