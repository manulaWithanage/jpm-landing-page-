import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FeaturedJobs from '../components/FeaturedJobs';

interface HomeProps {
  onNavigate: (page: string, hash?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Handle hash scrolling when component mounts
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Features onNavigate={onNavigate} />
      <FeaturedJobs />
      <Testimonials />
      {/* Pricing is now on a separate page, but we can add a CTA here if needed, or rely on FeaturedJobs/Nav */}
    </>
  );
};

export default Home;