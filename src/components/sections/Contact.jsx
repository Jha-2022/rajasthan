import React, { useState } from 'react';
import { Camera, MessageCircle, Video, Mail, Send, Check } from 'lucide-react';
import { SectionHeader } from '../shared/Shared';

export default function Contact() {
  const [newsEmail, setNewsEmail] = useState("");
  const [newsDone, setNewsDone] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactDone, setContactDone] = useState(false);

  const submitNewsletter = (e) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsDone(true);
  };

  const submitContact = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) return;
    setContactDone(true);
  };

  return (
    <section id="contact" className="rj-section rj-section--maroon">
      <div className="rj-wrap">
        <SectionHeader
          eyebrow="Contact"
          title="Stay Connected"
          sub="Questions about visiting, or want stories from Rajasthan in your inbox? Reach out below."
          light
        />
        <div className="rj-contact-grid">
          <div>
            <h3 style={{ fontSize: 19, color: "var(--gold-light)", marginBottom: 16 }}>Newsletter</h3>
            <p style={{ fontSize: 14.5, opacity: 0.82, marginBottom: 18 }}>
              Festival dates, travel tips and new stories from across the state — roughly once a month.
            </p>
            {!newsDone ? (
              <form className="rj-newsletter" onSubmit={submitNewsletter}>
                <input
                  type="email" required placeholder="you@example.com" value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                />
                <button className="rj-btn rj-btn--gold" type="submit"><Send size={15} /> Subscribe</button>
              </form>
            ) : (
              <div className="rj-success"><Check size={18} /> You're subscribed — welcome aboard.</div>
            )}

            <div style={{ marginTop: 38 }}>
              <h3 style={{ fontSize: 19, color: "var(--gold-light)", marginBottom: 14 }}>Follow Along</h3>
              <div className="rj-social-row">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Camera size={18} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><MessageCircle size={18} /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Video size={18} /></a>
                <a href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 19, color: "var(--gold-light)", marginBottom: 16 }}>Send a Message</h3>
            {!contactDone ? (
              <form onSubmit={submitContact}>
                <div className="rj-field">
                  <label>Name</label>
                  <input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder="Your name" required />
                </div>
                <div className="rj-field">
                  <label>Email</label>
                  <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="you@example.com" required />
                </div>
                <div className="rj-field">
                  <label>Message</label>
                  <textarea rows={4} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} placeholder="How can we help?" required />
                </div>
                <button className="rj-btn rj-btn--gold" type="submit"><Send size={15} /> Send Message</button>
              </form>
            ) : (
              <div className="rj-success"><Check size={18} /> Message sent — we'll be in touch soon.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
