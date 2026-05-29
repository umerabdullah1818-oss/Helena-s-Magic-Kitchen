import React from 'react';

export default function Testimonial() {
  return (
    <section className="story-section">
      <div className="story-inner">
        <div>
          <p className="eyebrow" style={{ color: 'rgba(201,169,110,.6)' }}>What People Say</p>
          <blockquote className="story-quote">"Pick an entrée, add 2 or 3 salads — less than 10 bucks later you'll be transported to the Danube."</blockquote>
          <p className="story-text">Helena's Magic Kitchen has the longest line in the food court — because it's all locals who know exactly what they're doing. Lunch for two for under $22, with portions generous enough to tell stories about.</p>
          <p className="story-text">It began as a Hungarian hot table and stayed true to every root. Meticulous. Flawless. The best in the Grange.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '1.5rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(201,169,110,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '16px', fontWeight: '500', flexShrink: '0' }}>E</div>
            <div>
              <div style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>Eirik</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.4)' }}>Toronto, Canada &middot; 394 reviews</div>
            </div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=90" alt="Beautiful food spread" className="story-img"/>
      </div>
    </section>
  );
}
