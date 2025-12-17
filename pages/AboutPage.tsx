import React from 'react';
import { Target, Heart, Zap, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    { name: 'Sarah Jenkins', role: 'CEO & Co-Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
    { name: 'David Chen', role: 'CTO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Emily Rodriguez', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
    { name: 'Michael Chang', role: 'Lead AI Engineer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero */}
      <div className="bg-slate-50 pt-40 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
             Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Empowering Every <span className="text-blue-600">Career Journey</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
             We believe that getting your dream job shouldn't be a game of chance. We're building the tools to level the playing field.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="prose prose-slate prose-lg text-slate-600">
                <p className="mb-4">
                    Founded in 2024, JobProMax was born out of frustration. Our founders realized that Applicant Tracking Systems (ATS) were rejecting qualified candidates simply because their resumes weren't "formatted" correctly for robots.
                </p>
                <p className="mb-4">
                    We set out to change that. By combining advanced AI with expert career advice, we built a platform that helps job seekers understand exactly what employers are looking for and how to present their best selves.
                </p>
                <p>
                    Today, we help hundreds of thousands of professionals land jobs at top companies around the world. We are more than just a resume builder; we are your career co-pilot.
                </p>
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                        <Target size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">User Success First</h3>
                    <p className="text-slate-500">We only win when you get hired. Every feature we build is focused on improving your interview success rate.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-6">
                        <Heart size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency</h3>
                    <p className="text-slate-500">The hiring process is opaque. We strive to bring clarity and data-driven insights to your job search.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                    <p className="text-slate-500">We leverage the latest in AI technology to give you an unfair advantage in a competitive market.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member, idx) => (
                    <div key={idx} className="group">
                        <div className="relative mb-4 overflow-hidden rounded-2xl">
                            <img src={member.img} alt={member.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                        <p className="text-slate-500 text-sm">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;