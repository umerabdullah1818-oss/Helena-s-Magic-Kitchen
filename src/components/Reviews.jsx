import React from 'react';

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="dishes-header">
          <p className="eyebrow">Traveller Reviews</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Voices from <em>Our Guests</em></h2>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">"What an amazing find. Great home cooked food, sizeable portions, and cheap! You know it's good because it has the longest line in the food court and it's all locals."</p>
            <div className="review-author">LookingForReasonable</div>
            <div className="review-meta">Newmarket, Canada &middot; April 2026 &middot; Couples</div>
          </div>
          <div className="review-card">
            <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">"This is my favourite lunch spot in Toronto. If they sold beer I would demo my kitchen and move in. A simple 2 latke and 2 salad combo — Meticulous and flawless."</p>
            <div className="review-author">Eirik</div>
            <div className="review-meta">Toronto, Canada &middot; March 2020 &middot; Business</div>
          </div>
          <div className="review-card">
            <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">"No frills, nothing fancy, just great comfort food with an interesting fusion of Korean and Eastern European dishes. The chicken is amazing and the prices are even better!"</p>
            <div className="review-author">gord85</div>
            <div className="review-meta">London, Ontario &middot; September 2015 &middot; Solo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
