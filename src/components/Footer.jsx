import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Helena's Magic Kitchen</div>
          <p className="footer-desc">A beloved food court gem in Old Toronto. Hungarian roots, Korean heart, handmade every day.</p>
        </div>
        <div>
          <div className="footer-heading">Quick links</div>
          <ul className="footer-links">
            <li><a href="#story">Our story</a></li>
            <li><a href="#dishes">Signature dishes</a></li>
            <li><a href="#menu">About menu</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#visit">Hours &amp; location</a></li>
            <li><a href="#reserve">Reserve a table</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Visit us</div>
          <p style={{ lineHeight: '1.9', color: 'rgba(255,255,255,.4)' }}>105 McCaul St<br/>Toronto, Ontario M5T 2X4<br/>Canada<br/><br/>Mon–Fri: 11:00 AM – 7:00 PM<br/>Sat–Sun: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Helena's Magic Kitchen. All rights reserved.</span>
        <span>Old Toronto &middot; Est. 2008</span>
      </div>
    </footer>
  );
}
