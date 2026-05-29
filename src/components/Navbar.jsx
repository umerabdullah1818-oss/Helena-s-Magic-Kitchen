import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav id="top">
        <a className="nav-brand" href="#top">Helena's <span>Magic</span> Kitchen</a>
        <ul className="nav-links">
          <li><a href="#story">Story</a></li>
          <li><a href="#dishes">Dishes</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#visit">Visit</a></li>
        </ul>
        <a className="nav-cta" href="#reserve">Reserve</a>
        <button 
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`} 
          id="hamburgerBtn" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#story" className="mobile-link" onClick={closeMenu}>Story</a>
        <a href="#dishes" className="mobile-link" onClick={closeMenu}>Dishes</a>
        <a href="#menu" className="mobile-link" onClick={closeMenu}>Menu</a>
        <a href="#reviews" className="mobile-link" onClick={closeMenu}>Reviews</a>
        <a href="#visit" className="mobile-link" onClick={closeMenu}>Visit</a>
        <a href="#reserve" className="mobile-cta mobile-link" onClick={closeMenu}>Reserve a Table</a>
      </div>
    </>
  );
}
