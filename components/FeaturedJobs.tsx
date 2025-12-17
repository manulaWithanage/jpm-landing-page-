import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2, Globe, Clock, Bookmark, DollarSign, Briefcase, Search } from 'lucide-react';

const FeaturedJobs: React.FC = () => {
  const categories = ["All Jobs", "Remote", "Engineering", "Design", "Marketing", "Finance"];
  
  const jobs = [
    {
      title: 'Senior Product Manager',
      company: 'Google',
      location: 'Sunnyvale, CA',
      type: 'Full-time',
      salary: '$180k - $240k',
      posted: '2 days ago',
      logo: 'G',
      logoBg: 'bg-blue-600',
      tags: ['Tech', 'Strategy']
    },
    {
      title: 'Director of Finance',
      company: 'The Nature Conservancy',
      location: 'Arlington, VA',
      type: 'On-site',
      salary: '$130k - $170k',
      posted: '1 day ago',
      logo: 'N',
      logoBg: 'bg-green-600',
      tags: ['Non-profit', 'Finance']
    },
    {
      title: 'Lead UX Researcher',
      company: 'Logoplaste Global',
      location: 'Kansas City, MO',
      type: 'Hybrid',
      salary: '$110k - $150k',
      posted: '5 hours ago',
      logo: 'L',
      logoBg: 'bg-orange-500',
      tags: ['Design', 'Research']
    }
  ];

  return (
    <section id="jobs" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
             Live Opportunities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Featured <span className="text-blue-600">Jobs</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover top-notch career opportunities! Our featured jobs section showcases the best openings across industries.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 
                ${idx === 0 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {jobs.map((job, index) => (
            <div key={index} className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 ${job.logoBg} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-md`}>
                  {job.logo}
                </div>
                <button className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full">
                  <Bookmark size={20} />
                </button>
              </div>

              {/* Job Info */}
              <div className="mb-6 flex-1">
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <div className="flex items-center text-slate-500 text-sm mb-4 font-medium">
                  <Building2 size={16} className="mr-1.5" />
                  {job.company}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
                    <Briefcase size={12} className="mr-1" /> {job.type}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
                    <Globe size={12} className="mr-1" /> {job.tags[0]}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 my-4"></div>

              {/* Card Footer */}
              <div className="flex flex-col gap-4">
                 <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-700 font-semibold bg-green-50 px-2 py-1 rounded border border-green-100">
                       <DollarSign size={14} className="text-green-600 mr-0.5" /> {job.salary}
                    </div>
                    <div className="text-slate-400 text-xs flex items-center">
                       <Clock size={12} className="mr-1" /> {job.posted}
                    </div>
                 </div>

                 <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin size={14} className="mr-1" /> {job.location}
                    </div>
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                       <ArrowRight size={18} />
                    </button>
                 </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link to="/jobs" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            <span>View All Openings</span>
            <Search className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;