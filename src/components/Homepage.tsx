import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;