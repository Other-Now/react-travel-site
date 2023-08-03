import React from 'react';
import ImgCarousel from './components/carousel/ImgCarousel';

import Footer from './components/footer/Footer';
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/Hero';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
