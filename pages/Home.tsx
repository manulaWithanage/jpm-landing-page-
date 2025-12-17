import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FeaturedJobs from '../components/FeaturedJobs';

const Home: React.FC = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  // Handle hash scrolling when component mounts
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);

  // Wrapper for child components that might still expect an onNavigate-like behavior
  const handleNavigate = (page: string, hash?: string) => {
    if (page === 'home' && hash) {
       const el = document.getElementById(hash);
       if(el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
       navigate(page === 'home' ? '/' : '/' + page + (hash ? '#' + hash : ''));
    }
  };

  return (
    <>
      <Hero />
      <Stats />
      <Features onNavigate={handleNavigate} />
      <FeaturedJobs />
      <Testimonials />
    </>
  );
};

export default Home;