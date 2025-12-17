import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string, hash?: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: string, hash?: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page, hash);
  };

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 transition-all duration-300">
      <nav 
        className={`w-full max-w-6xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-white/30 shadow-xl rounded-full px-8 pl-10 pr-8 sm:px-10 py-5 flex items-center justify-between
          ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-2xl' : 'bg-white/40 backdrop-blur-lg shadow-lg'}
        `}
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-3 group">
            <div className="bg-blue-600 text-white p-2 rounded-xl font-bold text-xl shadow-sm group-hover:scale-110 transition-transform duration-300">JP</div>
            <span className="font-bold text-2xl text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">JobPro<span className="text-blue-600">Max</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a 
            href="#jobs" 
            onClick={(e) => handleLinkClick(e, 'home', 'jobs')}
            className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Job Board
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleLinkClick(e, 'pricing')}
            className={`text-base font-semibold transition-colors ${currentPage === 'pricing' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Pricing
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleLinkClick(e, 'features')}
            className={`text-base font-semibold transition-colors ${currentPage === 'features' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Features
          </a>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-base font-bold text-slate-700 hover:text-blue-600 px-5 py-3 transition-colors">Login</a>
          <a 
            href="#book-time" 
            onClick={(e) => handleLinkClick(e, 'book-time')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-base font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Time
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-white/50 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="w-full max-w-6xl mt-4 bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2rem] p-8 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
           <a 
             href="#jobs" 
             onClick={(e) => handleLinkClick(e, 'home', 'jobs')}
             className="text-xl font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-4 rounded-2xl transition-colors"
           >
             Job Board
           </a>
           <a 
             href="#pricing" 
             onClick={(e) => handleLinkClick(e, 'pricing')}
             className={`text-xl font-medium hover:bg-blue-50/50 px-6 py-4 rounded-2xl transition-colors ${currentPage === 'pricing' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
           >
             Pricing
           </a>
           <a 
             href="#features" 
             onClick={(e) => handleLinkClick(e, 'features')}
             className={`text-xl font-medium hover:bg-blue-50/50 px-6 py-4 rounded-2xl transition-colors ${currentPage === 'features' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
           >
             Features
           </a>
           
           <div className="h-px bg-slate-200/80 my-4"></div>
           
           <div className="flex flex-col gap-4">
              <a href="#" className="w-full text-center text-lg font-bold text-slate-600 py-3 hover:text-blue-600 transition-colors">Login</a>
              <a 
                href="#book-time" 
                onClick={(e) => handleLinkClick(e, 'book-time')}
                className="w-full bg-blue-600 text-white text-center text-lg font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all"
              >
                Book Time
              </a>
           </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;