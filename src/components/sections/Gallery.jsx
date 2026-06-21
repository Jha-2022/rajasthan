import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../../data/constants';
import { SectionHeader } from '../shared/Shared';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((i) => (i - 1 + GALLERY.length) % GALLERY.length);
  const nextImg = () => setLightbox((i) => (i + 1) % GALLERY.length);

  return (
    <>
      <section id="gallery" className="rj-section">
        <div className="rj-wrap">
          <SectionHeader
            eyebrow="Gallery"
            title="Rajasthan in Frame"
            sub="Landscapes, festivals, faces and crafts — a glimpse of the state in pictures. Click any image to view it larger."
          />
          <div className="rj-gallery-grid">
            {GALLERY.map((g, i) => (
              <div className="rj-gallery-item" key={i} onClick={() => openLightbox(i)}>
                <img src={g.img} alt={g.caption} loading="lazy" />
                <div className="rj-gallery-cap"><span>{g.caption}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="rj-lightbox" onClick={closeLightbox}>
          <button className="rj-lightbox-close" onClick={closeLightbox} aria-label="Close"><X size={28} /></button>
          <button className="rj-lightbox-nav rj-lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImg(); }} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <img src={GALLERY[lightbox].img} alt={GALLERY[lightbox].caption} onClick={(e) => e.stopPropagation()} />
          <button className="rj-lightbox-nav rj-lightbox-next" onClick={(e) => { e.stopPropagation(); nextImg(); }} aria-label="Next">
            <ChevronRight size={22} />
          </button>
          <div className="rj-lightbox-cap">{GALLERY[lightbox].caption}</div>
        </div>
      )}
    </>
  );
}
