import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import TournamentSection from '../components/TournamentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <NewsSection />
      <TournamentSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default Home;
