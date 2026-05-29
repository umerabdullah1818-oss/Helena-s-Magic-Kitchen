import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import AboutMenu from './components/AboutMenu';
import Testimonial from './components/Testimonial';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <SignatureDishes />
      <AboutMenu />
      <Testimonial />
      <Reviews />
      <Gallery />
      <Visit />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;
