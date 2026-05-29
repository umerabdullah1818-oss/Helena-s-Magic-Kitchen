import React from 'react';

export default function About() {
  return (
    <section className="section" id="story" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1400&q=90" alt="Home-cooked meal at Helena's" className="about-img"/>
            <div className="about-badge">
              <div className="badge-num">&#9733; 4.6</div>
              <div className="badge-text">TripAdvisor</div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title">A <em>Hidden Gem</em> in the Heart of Grange</h2>
            <div className="divider"></div>
            <p className="section-body" style={{ marginBottom: '1rem' }}>Helena's Magic Kitchen began as a beloved Hungarian hot table — home to goulash, chicken paprikash, and golden latkes. Over the years it was taken over by the warmest Korean couple, who kept every recipe exactly as it was, staying true to its roots.</p>
            <p className="section-body">Everything here is handmade with care, made fresh every single day. No frills, nothing fancy — just great comfort food with an extraordinary fusion of Korean warmth and Eastern European soul.</p>
            <div className="tag-row">
              <span className="tag">Hungarian-Inspired</span>
              <span className="tag">Korean Soul</span>
              <span className="tag">Handmade Daily</span>
              <span className="tag">Food Court Gem</span>
              <span className="tag">Locals' Favourite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
