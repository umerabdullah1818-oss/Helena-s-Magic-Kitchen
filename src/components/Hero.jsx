import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Old Toronto · Since 2008</p>
        <h1 className="hero-title">
          Where Every Plate Tells<br />
          <strong>A Story</strong>
        </h1>
        <p className="hero-sub">Hungarian-Korean home cooking in the heart of Grange Park.<br />Honest, handmade, and irresistible.</p>
        <div className="hero-rating">
          <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span>4.6 &middot; Rated #2,185 of 9,812 in Toronto</span>
        </div>
        <div className="hero-btns">
          <a className="btn-primary" href="#dishes">Explore Dishes</a>
          <a className="btn-outline" href="#reserve">Make a Reservation</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 2v10M3 8l4 4 4-4"/></svg>
      </div>
    </section>
  );
}
