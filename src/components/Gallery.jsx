import React from 'react';

export default function Gallery() {
  return (
    <section className="section" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="dishes-header" style={{ marginBottom: '2rem' }}>
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>A Taste <em>in Pictures</em></h2>
        </div>
        <div className="gallery-grid">
          <div className="gal-item"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=90" alt="Gourmet food platter"/></div>
          <div className="gal-item"><img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=90" alt="Fresh salad bowl"/></div>
          <div className="gal-item"><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=90" alt="Colorful vegetable dish"/></div>
          <div className="gal-item"><img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&q=90" alt="Toast with toppings"/></div>
          <div className="gal-item"><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=90" alt="Savory meat dish"/></div>
        </div>
      </div>
    </section>
  );
}
