import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import TournamentSection from '../components/TournamentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <NewsSection />
      <TournamentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
