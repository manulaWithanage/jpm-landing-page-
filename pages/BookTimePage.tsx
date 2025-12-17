import React from 'react';
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';

const BookTimePage: React.FC = () => {
  const team = [
    {
      name: 'Yocelyn',
      role: 'Client Success Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      description: 'Expert in resume strategy, career coaching, and maximizing your JobProMax subscription.',
      calendarLink: '#',
      availability: 'Mon - Fri, 9am - 5pm EST'
    },
    {
      name: 'Manny',
      role: 'Technical Support Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      description: 'Specialist in account setup, technical troubleshooting, and enterprise integrations.',
      calendarLink: '#',
      availability: 'Mon - Fri, 10am - 6pm EST'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero */}
      <div className="bg-slate-50 pt-40 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
             Schedule a Meeting
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            We're Here to <span className="text-blue-600">Help</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
             Choose a team member below to schedule a 1-on-1 video consultation.
          </p>
        </div>
      </div>

      {/* Team Selection */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {team.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center group">
                        <div className="relative mb-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
                        
                        <p className="text-slate-500 leading-relaxed mb-8 h-16">
                            {member.description}
                        </p>

                        <div className="w-full space-y-4">
                            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-2">
                                <div className="flex items-center gap-1">
                                    <Video size={16} /> Zoom
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={16} /> 30 Min
                                </div>
                            </div>

                            <button className="w-full bg-slate-900 text-white hover:bg-blue-600 font-bold py-4 rounded-xl shadow-lg transition-all transform group-hover:-translate-y-1 flex items-center justify-center gap-2">
                                Book with {member.name} <ArrowRight size={18} />
                            </button>
                            
                            <p className="text-xs text-slate-400">
                                Available: {member.availability}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What to expect from your call</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                    <h4 className="font-bold text-slate-900">Personalized Audit</h4>
                    <p className="text-sm text-slate-500">We'll review your specific account setup and goals.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                    <h4 className="font-bold text-slate-900">Live Demo</h4>
                    <p className="text-sm text-slate-500">See hidden features and tips tailored to your industry.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                    <h4 className="font-bold text-slate-900">Next Steps</h4>
                    <p className="text-sm text-slate-500">Walk away with a clear action plan for your job search.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BookTimePage;