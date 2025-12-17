import React from 'react';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Premium Header */}
      <div className="relative bg-slate-900 text-white pt-40 pb-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wide mb-6">
            Invest in your future
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pricing</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the plan that fits your career stage. Unlock the full potential of AI-driven job searching and land your dream role faster.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
             <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                No hidden fees
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                Cancel anytime
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                Secure payment
             </div>
          </div>
        </div>
      </div>

      {/* Pricing Table (reused) - Added negative margin to overlap header */}
      <div className="-mt-12 relative z-20">
         <Pricing />
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Enterprise CTA */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a solution for your university or organization?</h2>
          <p className="text-slate-400 mb-8">We offer bulk licenses and custom integrations for career centers and outplacement firms.</p>
          <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;