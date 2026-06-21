import React from 'react';
import { DISHES } from '../../data/constants';
import { SectionHeader, SpiceLevel } from '../shared/Shared';

export default function Cuisine() {
  return (
    <section id="cuisine" className="rj-section">
      <div className="rj-wrap">
        <SectionHeader
          eyebrow="Cuisine"
          title="A Kitchen Built for the Desert"
          sub="With little fresh water or produce, Rajasthani cooks turned lentils, gram flour, millet and ghee into a cuisine built to keep — rich, long-lasting, and never short on flavour."
        />
        <div className="rj-grid-3">
          {DISHES.map((d) => (
            <div className="rj-card rj-dish-card" key={d.name}>
              <div className="rj-card-img-wrap"><img src={d.img} alt={d.name} loading="lazy" /></div>
              <div className="rj-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 className="rj-card-title" style={{ marginBottom: 0 }}>{d.name}</h4>
                  <SpiceLevel level={d.spice} />
                </div>
                <p className="rj-card-text">{d.desc}</p>
                <p className="rj-dish-tip">{d.tip}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 32, fontSize: 14.5, opacity: 0.75, maxWidth: 680 }}>
          Save room for ghewar, a syrup-soaked disc pastry made for Teej and Diwali, flaky
          kachoris stuffed with spiced lentils, and bajre ki roti — millet flatbread that has
          fed the desert for centuries.
        </p>
      </div>
    </section>
  );
}
