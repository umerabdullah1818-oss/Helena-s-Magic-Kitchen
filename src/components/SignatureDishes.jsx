import React from 'react';

export default function SignatureDishes() {
  return (
    <section className="section dishes-bg" id="dishes">
      <div className="container">
        <div className="dishes-header">
          <p className="eyebrow">Signature Dishes</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Handcrafted with <em>Love Daily</em></h2>
          <p style={{ fontSize: '14px', color: 'var(--text-light)', maxWidth: '480px', margin: '.75rem auto 0', textAlign: 'center', lineHeight: '1.8' }}>Every item made fresh. Pick an entrée, choose your sides, and discover why the line never stops.</p>
        </div>
        <div className="dishes-grid">
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1200&q=90" alt="Stuffed Chicken Breast" className="dish-img"/>
              <span className="dish-badge">Chef's Choice</span>
            </div>
            <div className="dish-info">
              <div className="dish-name">Stuffed Chicken Breast</div>
              <div className="dish-desc">Tender chicken breast stuffed and slow-cooked to perfection — served with your choice of 3 handmade sides.</div>
              <div className="dish-price">$9.51</div>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1200&q=90" alt="Golden Potato Latkes" className="dish-img"/>
              <span className="dish-badge" style={{ background: 'var(--brown)', color: 'var(--gold)' }}>Must Try</span>
            </div>
            <div className="dish-info">
              <div className="dish-name">Golden Latkes</div>
              <div className="dish-desc">Crispy, golden potato latkes made fresh every morning — the dish that started it all. Don't leave without them.</div>
              <div className="dish-price">$3.00 each</div>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=90" alt="Fresh Salads and Sides" className="dish-img"/>
            </div>
            <div className="dish-info">
              <div className="dish-name">Fresh Salads &amp; Sides</div>
              <div className="dish-desc">A rotating selection of handmade salads, quiche, and seasonal sides — crafted fresh every single day.</div>
              <div className="dish-price">from $2.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
