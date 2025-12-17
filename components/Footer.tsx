import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg font-bold text-lg shadow-sm group-hover:scale-110 transition-transform duration-300">JP</div>
                <span className="font-bold text-xl text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">JobPro<span className="text-blue-600">Max</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              The fastest way to a perfect resume. Beat the ATS and land your dream job with AI-powered tools.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Twitter size={16} />
              </Link>
              <Link to="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={16} />
              </Link>
              <Link to="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={16} />
              </Link>
              <Link to="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={16} />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Features</Link></li>
              <li><Link to="/jobs" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Job Board</Link></li>
              <li><Link to="/pricing" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">About</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal & Support</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Terms and Conditions</Link></li>
              <li className="pt-2">
                <Link to="/book-time" className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                  Book Time
                </Link>
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