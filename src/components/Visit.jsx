import React from 'react';

export default function Visit() {
  return (
    <section className="hours-section" id="visit">
      <div className="hours-inner">
        <div>
          <h2 className="hours-title">Hours &amp; Location</h2>
          <p className="hours-subtitle">Come visit us</p>
          <div className="hours-row"><span className="hours-day">Sunday</span><span className="hours-closed">Closed</span></div>
          <div className="hours-row"><span className="hours-day">Monday</span><span className="hours-time">11:00 AM – 7:00 PM</span></div>
          <div className="hours-row"><span className="hours-day">Tuesday</span><span className="hours-time">11:00 AM – 7:00 PM</span></div>
          <div className="hours-row"><span className="hours-day">Wednesday</span><span className="hours-time">11:00 AM – 7:00 PM</span></div>
          <div className="hours-row"><span className="hours-day">Thursday</span><span className="hours-time">11:00 AM – 7:00 PM</span></div>
          <div className="hours-row"><span className="hours-day">Friday</span><span className="hours-time">11:00 AM – 7:00 PM</span></div>
          <div className="hours-row" style={{ borderBottom: 'none' }}><span className="hours-day">Saturday</span><span className="hours-closed">Closed</span></div>
        </div>
        <div>
          <div className="location-label">Address</div>
          <div className="location-addr">105 McCaul St<br/>Toronto, Ontario M5T 2X4<br/>Canada</div>
          <div className="location-open"><span className="open-dot"></span>Open until 7:00 PM today</div>
          <div style={{ marginTop: '2rem' }}>
            <div className="location-label">Neighbourhood</div>
            <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '15px', lineHeight: '1.6' }}>Old Toronto &middot; Kensington-Chinatown<br/>Grange Park &middot; Downtown</div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div className="location-label">Meal Types</div>
            <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(201,169,110,.15)', color: 'var(--gold-light)', border: '.5px solid rgba(201,169,110,.25)', padding: '.3rem .8rem', borderRadius: '2px', fontSize: '12px' }}>Lunch</span>
              <span style={{ background: 'rgba(201,169,110,.15)', color: 'var(--gold-light)', border: '.5px solid rgba(201,169,110,.25)', padding: '.3rem .8rem', borderRadius: '2px', fontSize: '12px' }}>Dinner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
