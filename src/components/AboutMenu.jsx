import React from 'react';

export default function AboutMenu() {
  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="dishes-header">
          <p className="eyebrow">About Our Menu</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Comfort Food <em>Done Right</em></h2>
        </div>
        <div className="menu-intro">
          <p className="section-body">Helena's Magic Kitchen, located in the vibrant Village Grange food court in Toronto, offers a delightful culinary experience that resonates with both nostalgia and quality. This beloved eatery has earned rave reviews for its generous portions and consistently flavorful dishes. Customers frequently praise the stuffed chicken breast, filled with a savory spinach mixture and complemented by a selection of delectable sides. The menu also features an array of vegetarian options like quiches and perogies, ensuring there's something for everyone.</p>
          <br/>
          <p className="section-body">The warm atmosphere is enhanced by friendly service from the owners, who are committed to providing excellent meals at reasonable prices. Highlights include crispy potato latkes served with sour cream, fresh salads bursting with flavor, and comforting meat pies that keep patrons coming back for more.</p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p className="eyebrow">Must-Try Dishes</p>
        </div>
        <div className="menu-dishes-grid">
          <div className="menu-dish-card">
            <img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1200&q=90" alt="Stuffed Chicken Breast" className="menu-dish-img"/>
            <div className="menu-dish-body">
              <div className="menu-dish-name">Stuffed Chicken Breast</div>
              <p className="menu-dish-desc">A fan favorite filled with spinach cheese filling; paired perfectly with three delicious sides.</p>
              <span className="menu-dish-tag">Chef's Favourite</span>
            </div>
          </div>
          <div className="menu-dish-card">
            <img src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1200&q=90" alt="Potato Latkes" className="menu-dish-img"/>
            <div className="menu-dish-body">
              <div className="menu-dish-name">Potato Latkes</div>
              <p className="menu-dish-desc">Crispy on the outside and chewy within; served hot alongside sour cream for added taste.</p>
              <span className="menu-dish-tag">Must Try</span>
            </div>
          </div>
          <div className="menu-dish-card">
            <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=1200&q=90" alt="Daily Quiches" className="menu-dish-img"/>
            <div className="menu-dish-body">
              <div className="menu-dish-name">Daily Quiches</div>
              <p className="menu-dish-desc">Freshly made every day; packed with flavor using seasonal ingredients.</p>
              <span className="menu-dish-tag">Vegetarian</span>
            </div>
          </div>
          <div className="menu-dish-card">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=90" alt="Perogies" className="menu-dish-img"/>
            <div className="menu-dish-body">
              <div className="menu-dish-name">Perogies</div>
              <p className="menu-dish-desc">A classic comfort dish loved for their savory filling.</p>
              <span className="menu-dish-tag">Classic</span>
            </div>
          </div>
          <div className="menu-dish-card">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=90" alt="Savory Meat Pies" className="menu-dish-img"/>
            <div className="menu-dish-body">
              <div className="menu-dish-name">Savory Meat Pies</div>
              <p className="menu-dish-desc">An assortment that delivers hearty satisfaction in each bite.</p>
              <span className="menu-dish-tag">Hearty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
