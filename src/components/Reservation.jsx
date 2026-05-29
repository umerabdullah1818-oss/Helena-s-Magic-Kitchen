import React from 'react';

export default function Reservation() {
  return (
    <section className="reservation" id="reserve">
      <div className="res-inner">
        <p className="eyebrow">Book a Table</p>
        <h2 className="section-title">Reserve Your <em>Experience</em></h2>
        <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.8', marginTop: '.5rem' }}>Join us for a meal that feels like home — made with hands that care.</p>
        <div className="res-form">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">First name</label>
              <input type="text" placeholder="Helena"/>
            </div>
            <div className="form-group">
              <label className="form-label">Last name</label>
              <input type="text" placeholder="Smith"/>
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input type="date"/>
            </div>
            <div className="form-group">
              <label className="form-label">Party size</label>
              <select>
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4+ guests</option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">Email</label>
            <input type="email" placeholder="you@example.com"/>
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">Special requests</label>
            <textarea placeholder="Dietary requirements, celebrations, etc."></textarea>
          </div>
          <button className="form-submit">Request Reservation</button>
        </div>
      </div>
    </section>
  );
}
