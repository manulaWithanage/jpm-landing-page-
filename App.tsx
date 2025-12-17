import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BookTimePage from './pages/BookTimePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string, hash?: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    // If there's a hash, we set it so the page can handle it after render
    if (hash) {
      // Use setTimeout to allow the page render to complete before scrolling
      setTimeout(() => {
         const element = document.getElementById(hash);
         if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
         }
      }, 100);
      window.location.hash = hash;
    } else {
      // Clear hash if just navigating to top of a page
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
        {currentPage === 'book-time' && <BookTimePage />}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;