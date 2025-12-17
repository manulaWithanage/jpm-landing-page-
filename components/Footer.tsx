import React from 'react';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, hash?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: string, hash?: string) => {
    e.preventDefault();
    onNavigate(page, hash);
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-2 mb-6 group">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg font-bold text-lg shadow-sm group-hover:scale-110 transition-transform duration-300">JP</div>
                <span className="font-bold text-xl text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">JobPro<span className="text-blue-600">Max</span></span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              The fastest way to a perfect resume. Beat the ATS and land your dream job with AI-powered tools.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" onClick={(e) => handleLinkClick(e, 'features')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Features</a></li>
              <li><a href="#jobs" onClick={(e) => handleLinkClick(e, 'home', 'jobs')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Job Board</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Pricing</a></li>
              <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">About</a></li>
              <li><a href="#careers" onClick={(e) => handleLinkClick(e, 'about')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Careers</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal & Support</h4>
            <ul className="space-y-4">
              <li><a href="#privacy" onClick={(e) => handleLinkClick(e, 'privacy')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => handleLinkClick(e, 'terms')} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Terms and Conditions</a></li>
              <li className="pt-2">
                <a href="#book-time" onClick={(e) => handleLinkClick(e, 'book-time')} className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                  Book Time
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} JobProMax. All rights reserved. All packages are subject to the JobProMax Terms and Conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;