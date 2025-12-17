import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <section className="bg-slate-50 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-700 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center">
            
            {/* Left Image Section - Adjusted to match the "person sitting" look */}
            <div className="w-full md:w-1/3 h-64 md:h-80 relative flex items-end justify-center md:justify-start pl-0 md:pl-10">
               {/* Using a specific placeholder image that resembles a student/professional */}
               <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional Student" 
                  className="h-full object-cover object-center w-full md:w-auto md:absolute md:bottom-0 md:left-10 z-10"
                  style={{ maskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }} 
               />
               
               {/* Decorative circles behind image */}
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full opacity-50 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-2/3 p-8 md:p-12 text-center md:text-left relative z-20">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Start Building Your Dream Career
               </h2>
               
               <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
                  <button className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
                     Sign Up Now <ArrowRight size={18} />
                  </button>
               </div>
            </div>

            {/* Background decoration for banner */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;