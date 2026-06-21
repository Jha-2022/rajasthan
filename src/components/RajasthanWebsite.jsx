import React, { useState, useEffect } from "react";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Culture from "./sections/Culture";
import Architecture from "./sections/Architecture";
import Cuisine from "./sections/Cuisine";
import Wildlife from "./sections/Wildlife";
import TravelGuide from "./sections/TravelGuide";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function RajasthanWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="rj-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .rj-site {
          --sand: #EDE1C6;
          --sand-dark: #DBC79C;
          --cream: var(--sand);
          --maroon: #7A1F2B;
          --maroon-dark: #561520;
          --gold: #C68A2E;
          --gold-light: #E0B563;
          --indigo: #1F4959;
          --indigo-dark: #143138;
          --ink: #2B1810;
          font-family: 'Jost', sans-serif;
          color: var(--ink);
          background: var(--sand);
          line-height: 1.6;
          overflow-x: hidden;
        }
        .rj-site * { box-sizing: border-box; }
        .rj-site h1, .rj-site h2, .rj-site h3 { font-family: 'Marcellus', serif; font-weight: 400; margin: 0; }
        .rj-site p { margin: 0; }
        .rj-site button { font-family: 'Jost', sans-serif; cursor: pointer; }
        .rj-site a { color: inherit; text-decoration: none; }
        .rj-site img { display: block; max-width: 100%; }

        .rj-wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .rj-section { padding: 88px 0; position: relative; }
        .rj-section--cream { background: var(--cream); }
        .rj-section--indigo { background: var(--indigo); color: var(--cream); }
        .rj-section--maroon { background: var(--maroon); color: var(--cream); }

        .rj-eyebrow {
          font-size: 12.5px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold); font-weight: 600; display: inline-block; margin-bottom: 14px;
        }
        .rj-h2 { font-size: clamp(28px, 4vw, 42px); color: var(--maroon); }
        .rj-section--indigo .rj-h2, .rj-section--maroon .rj-h2 { color: var(--gold-light); }
        .rj-sec-head { max-width: 680px; margin-bottom: 48px; }
        .rj-sec-head--light .rj-eyebrow { color: var(--gold-light); }
        .rj-sec-sub { margin-top: 14px; font-size: 16.5px; opacity: 0.85; max-width: 600px; }

        .rj-divider { width: 100%; opacity: 0.6; }

        /* ---------- NAV ---------- */
        .rj-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background 0.35s ease, padding 0.35s ease, box-shadow 0.35s ease;
          padding: 22px 0;
          background: transparent;
        }
        .rj-nav.scrolled {
          background: rgba(42, 17, 16, 0.94);
          backdrop-filter: blur(6px);
          padding: 12px 0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.25);
        }
        .rj-nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .rj-logo { font-family: 'Marcellus', serif; font-size: 22px; color: var(--cream); letter-spacing: 0.04em; }
        .rj-logo span { color: var(--gold-light); }
        .rj-nav-links { display: none; gap: 28px; align-items: center; }
        .rj-nav-links button {
          background: none; border: none; color: var(--cream); font-size: 14.5px;
          letter-spacing: 0.02em; opacity: 0.88; transition: opacity 0.2s, color 0.2s; position: relative; padding: 4px 0;
        }
        .rj-nav-links button:hover { opacity: 1; color: var(--gold-light); }
        .rj-burger { background: none; border: none; color: var(--cream); display: flex; }
        @media (min-width: 980px) {
          .rj-nav-links { display: flex; }
          .rj-burger { display: none; }
        }
        .rj-mobile-menu {
          position: fixed; inset: 0; background: var(--maroon-dark); z-index: 99;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 26px;
        }
        .rj-mobile-menu button { background: none; border: none; color: var(--cream); font-size: 22px; font-family: 'Marcellus', serif; }
        .rj-mobile-close { position: absolute; top: 26px; right: 26px; }

        /* ---------- HERO ---------- */
        .rj-hero {
          position: relative; min-height: 100vh; display: flex; align-items: center;
          background-size: cover; background-position: center 65%;
        }
        .rj-hero::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(42,17,16,0.55) 0%, rgba(42,17,16,0.35) 38%, rgba(42,17,16,0.85) 100%);
        }
        .rj-hero-content { position: relative; z-index: 2; color: var(--cream); max-width: 720px; }
        .rj-hero .rj-eyebrow { color: var(--gold-light); opacity: 0; animation: rjFadeUp 0.9s ease 0.15s forwards; }
        .rj-hero h1 {
          font-size: clamp(40px, 7vw, 78px); line-height: 1.05; color: var(--cream);
          opacity: 0; animation: rjFadeUp 0.9s ease 0.35s forwards;
        }
        .rj-hero h1 em { font-style: normal; color: var(--gold-light); }
        .rj-hero-sub {
          margin-top: 22px; font-size: 18px; max-width: 560px; opacity: 0;
          animation: rjFadeUp 0.9s ease 0.55s forwards;
        }
        .rj-hero-greet {
          margin-top: 10px; font-family: 'Marcellus', serif; font-style: normal; font-size: 16px;
          color: var(--gold-light); opacity: 0; animation: rjFadeUp 0.9s ease 0.7s forwards;
        }
        .rj-hero-ctas { margin-top: 34px; display: flex; gap: 16px; flex-wrap: wrap; opacity: 0; animation: rjFadeUp 0.9s ease 0.85s forwards; }
        @keyframes rjFadeUp { from { opacity: 0; transform: translateY(18px);} to { opacity: 1; transform: translateY(0);} }

        .rj-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          border-radius: 2px; font-size: 14.5px; letter-spacing: 0.04em; border: 1.5px solid transparent;
          transition: all 0.25s ease;
        }
        .rj-btn--gold { background: var(--gold); color: var(--ink); font-weight: 600; }
        .rj-btn--gold:hover { background: var(--gold-light); transform: translateY(-2px); }
        .rj-btn--outline { border-color: rgba(251,244,230,0.6); color: var(--cream); }
        .rj-btn--outline:hover { background: rgba(251,244,230,0.12); border-color: var(--cream); }

        .rj-hero-arches { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; line-height: 0; }

        .rj-scroll-cue {
          position: absolute; bottom: 38px; left: 50%; transform: translateX(-50%); z-index: 2;
          color: var(--cream); opacity: 0.75; display: flex; flex-direction: column; align-items: center; gap: 6px;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
        }
        .rj-scroll-cue .line { width: 1px; height: 30px; background: var(--cream); opacity: 0.6; animation: rjScroll 1.8s ease infinite; }
        @keyframes rjScroll { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 50.1% { transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }

        /* ---------- INTRO STRIP ---------- */
        .rj-intro { background: var(--cream); padding: 56px 0; }
        .rj-intro-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 28px; text-align: center; }
        .rj-intro-stat .num { font-family: 'Marcellus', serif; font-size: 34px; color: var(--maroon); }
        .rj-intro-stat .lbl { font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.7; margin-top: 4px; }

        /* ---------- CARDS ---------- */
        .rj-card {
          background: var(--cream); border-radius: 4px; overflow: hidden;
          box-shadow: 0 2px 10px rgba(42,17,16,0.07); transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(122,31,43,0.08);
        }
        .rj-card:hover { transform: translateY(-6px); box-shadow: 0 18px 34px rgba(42,17,16,0.18); }
        .rj-card-img-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; background: var(--sand-dark); }
        .rj-card-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .rj-card:hover .rj-card-img-wrap img { transform: scale(1.07); }
        .rj-card-body { padding: 22px; }
        .rj-card-title { font-size: 20px; color: var(--maroon); margin-bottom: 8px; }
        .rj-card-text { font-size: 14.5px; opacity: 0.85; }
        .rj-tag {
          display: inline-block; font-size: 11.5px; letter-spacing: 0.06em; text-transform: uppercase;
          background: rgba(122,31,43,0.08); color: var(--maroon); padding: 4px 10px; border-radius: 2px; margin-bottom: 10px;
        }

        /* Dance cards */
        .rj-dance-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 760px) { .rj-dance-grid { grid-template-columns: 1fr 1fr; } }
        .rj-dance-card { position: relative; border-radius: 6px; overflow: hidden; min-height: 420px; display: flex; align-items: flex-end; }
        .rj-dance-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .rj-dance-card:hover img { transform: scale(1.08); }
        .rj-dance-card::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(42,17,16,0) 35%, rgba(42,17,16,0.92) 100%); }
        .rj-dance-content { position: relative; z-index: 2; padding: 28px; color: var(--cream); }
        .rj-dance-content h3 { font-size: 26px; color: var(--gold-light); }
        .rj-dance-content .origin { font-size: 12.5px; opacity: 0.75; letter-spacing: 0.04em; margin: 6px 0 12px; text-transform: uppercase; }
        .rj-dance-content p { font-size: 14.5px; opacity: 0.92; max-width: 460px; }
        .rj-watch-link {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; font-size: 13.5px;
          color: var(--gold-light); border: 1px solid rgba(224,181,99,0.5); padding: 9px 16px; border-radius: 30px;
          transition: background 0.2s;
        }
        .rj-watch-link:hover { background: rgba(224,181,99,0.15); }
        .rj-watch-link .dot { width: 26px; height: 26px; border-radius: 50%; background: var(--gold); display: flex; align-items: center; justify-content: center; color: var(--ink); }

        /* Grids */
        .rj-grid-3 { display: grid; grid-template-columns: 1fr; gap: 28px; }
        @media (min-width: 700px) { .rj-grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .rj-grid-3 { grid-template-columns: repeat(3, 1fr); } }
        .rj-grid-4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        @media (min-width: 760px) { .rj-grid-4 { grid-template-columns: repeat(4, 1fr); } }
        .rj-grid-2 { display: grid; grid-template-columns: 1fr; gap: 28px; }
        @media (min-width: 760px) { .rj-grid-2 { grid-template-columns: 1fr 1fr; } }

        /* City filter pills */
        .rj-pills { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 36px; }
        .rj-pill {
          background: transparent; border: 1.4px solid rgba(122,31,43,0.35); color: var(--maroon);
          padding: 9px 20px; border-radius: 30px; font-size: 13.5px; letter-spacing: 0.03em; transition: all 0.2s;
        }
        .rj-pill.active, .rj-pill:hover { background: var(--maroon); color: var(--cream); border-color: var(--maroon); }

        .rj-year-badge {
          position: absolute; top: 14px; right: 14px; background: var(--gold); color: var(--ink);
          font-size: 12px; font-weight: 600; padding: 5px 11px; border-radius: 2px; letter-spacing: 0.03em;
          clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 0% 50%);
          padding-left: 16px;
        }

        /* Cuisine */
        .rj-dish-card .rj-card-body { display: flex; flex-direction: column; gap: 10px; }
        .rj-spice { display: inline-flex; gap: 2px; align-items: center; }
        .rj-spice-on { color: var(--maroon); fill: var(--maroon); }
        .rj-spice-off { color: rgba(122,31,43,0.25); }
        .rj-dish-tip { font-size: 13px; font-style: italic; opacity: 0.7; border-top: 1px dashed rgba(122,31,43,0.2); padding-top: 10px; margin-top: 4px; }

        /* Wildlife */
        .rj-park-card { display: grid; grid-template-columns: 1fr; border-radius: 6px; overflow: hidden; background: var(--cream); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        @media (min-width: 700px) { .rj-park-card { grid-template-columns: 0.9fr 1.1fr; } }
        .rj-park-img { aspect-ratio: 4/3; overflow: hidden; }
        .rj-park-img img { width: 100%; height: 100%; object-fit: cover; }
        .rj-park-body { padding: 26px; }
        .rj-park-meta { display: flex; gap: 18px; margin-top: 14px; flex-wrap: wrap; font-size: 13px; }
        .rj-park-meta div { background: rgba(31,73,89,0.08); padding: 8px 12px; border-radius: 4px; }
        .rj-park-meta b { display: block; color: var(--indigo); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px; }

        .rj-animal-card { text-align: center; }
        .rj-animal-card .rj-card-img-wrap { aspect-ratio: 1/1; border-radius: 50%; margin: 22px auto 0; width: 150px; height: 150px; border: 4px solid var(--gold-light); }

        /* Travel Guide */
        .rj-season-card { background: var(--cream); border-radius: 6px; padding: 26px; text-align: left; border-top: 3px solid var(--gold); }
        .rj-season-icon { width: 44px; height: 44px; border-radius: 50%; background: rgba(198,138,46,0.15); display: flex; align-items: center; justify-content: center; color: var(--gold); margin-bottom: 14px; }
        .rj-season-tag { font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--maroon); font-weight: 600; }
        .rj-season-card h3 { font-size: 21px; margin: 6px 0 2px; color: var(--ink); }
        .rj-season-range { font-size: 13px; opacity: 0.6; margin-bottom: 6px; }
        .rj-season-temp { font-family: 'Marcellus', serif; color: var(--maroon); font-size: 17px; margin-bottom: 10px; }

        .rj-circuit-card { background: var(--indigo-dark); border-radius: 6px; padding: 28px; color: var(--cream); }
        .rj-circuit-card h3 { color: var(--gold-light); font-size: 23px; }
        .rj-circuit-route { font-size: 14px; opacity: 0.85; margin: 10px 0 4px; }
        .rj-circuit-duration { display: inline-block; font-size: 12px; background: rgba(224,181,99,0.18); color: var(--gold-light); padding: 4px 12px; border-radius: 20px; margin-bottom: 14px; }
        .rj-circuit-card p.desc { font-size: 14.5px; opacity: 0.85; }

        .rj-accordion-item { border-bottom: 1px solid rgba(43,24,16,0.15); }
        .rj-accordion-head {
          width: 100%; background: none; border: none; display: flex; justify-content: space-between; align-items: center;
          padding: 20px 4px; font-family: 'Marcellus', serif; font-size: 18px; color: var(--maroon); text-align: left;
        }
        .rj-accordion-head svg { transition: transform 0.25s ease; flex-shrink: 0; }
        .rj-accordion-item.open .rj-accordion-head svg { transform: rotate(180deg); }
        .rj-accordion-panel { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
        .rj-accordion-item.open .rj-accordion-panel { max-height: 240px; }
        .rj-accordion-panel p { padding: 0 4px 22px; font-size: 14.5px; opacity: 0.82; max-width: 640px; }

        /* Gallery */
        .rj-gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        @media (min-width: 640px) { .rj-gallery-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 980px) { .rj-gallery-grid { grid-template-columns: repeat(4, 1fr); } }
        .rj-gallery-item { position: relative; aspect-ratio: 1/1; overflow: hidden; border-radius: 4px; cursor: pointer; }
        .rj-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .rj-gallery-item:hover img { transform: scale(1.12); }
        .rj-gallery-cap {
          position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(42,17,16,0.85) 100%);
          display: flex; align-items: flex-end; padding: 12px; opacity: 0; transition: opacity 0.3s;
        }
        .rj-gallery-item:hover .rj-gallery-cap { opacity: 1; }
        .rj-gallery-cap span { color: var(--cream); font-size: 12.5px; }

        .rj-lightbox { position: fixed; inset: 0; background: rgba(20,8,7,0.94); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .rj-lightbox img { max-height: 82vh; max-width: 88vw; object-fit: contain; border-radius: 4px; }
        .rj-lightbox-cap { position: absolute; bottom: 30px; left: 0; right: 0; text-align: center; color: var(--cream); font-size: 14px; opacity: 0.85; }
        .rj-lightbox-close { position: absolute; top: 26px; right: 26px; color: var(--cream); background: none; border: none; }
        .rj-lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(251,244,230,0.12); border: none; color: var(--cream); border-radius: 50%; width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; }
        .rj-lightbox-nav:hover { background: rgba(251,244,230,0.25); }
        .rj-lightbox-prev { left: 20px; }
        .rj-lightbox-next { right: 20px; }

        /* Contact */
        .rj-contact-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
        @media (min-width: 860px) { .rj-contact-grid { grid-template-columns: 1fr 1fr; } }
        .rj-field { margin-bottom: 16px; }
        .rj-field label { display: block; font-size: 12.5px; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 7px; opacity: 0.75; }
        .rj-field input, .rj-field textarea {
          width: 100%; background: rgba(251,244,230,0.06); border: 1px solid rgba(251,244,230,0.25);
          color: var(--cream); padding: 12px 14px; border-radius: 3px; font-family: 'Jost', sans-serif; font-size: 14.5px;
        }
        .rj-section--maroon .rj-field input, .rj-section--maroon .rj-field textarea { background: rgba(251,244,230,0.08); }
        .rj-field input::placeholder, .rj-field textarea::placeholder { color: rgba(251,244,230,0.45); }
        .rj-field input:focus, .rj-field textarea:focus { outline: 2px solid var(--gold-light); border-color: transparent; }
        .rj-newsletter { display: flex; gap: 10px; flex-wrap: wrap; }
        .rj-newsletter input { flex: 1; min-width: 200px; }
        .rj-success { display: flex; align-items: center; gap: 8px; color: var(--gold-light); font-size: 14.5px; margin-top: 10px; }

        .rj-social-row { display: flex; gap: 14px; margin-top: 18px; }
        .rj-social-row a { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(251,244,230,0.3); display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .rj-social-row a:hover { background: var(--gold); color: var(--ink); border-color: var(--gold); }

        .rj-footer { background: var(--maroon-dark); color: rgba(251,244,230,0.65); padding: 36px 0; font-size: 13px; text-align: center; }
        .rj-footer a:hover { color: var(--gold-light); }
      `}</style>

      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <Hero />
      <Intro />
      <Culture />
      <Architecture />
      <Cuisine />
      <Wildlife />
      <TravelGuide />
      <Gallery />
      <Contact />
      
      <Footer />
    </div>
  );
}
