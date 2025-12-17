import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '300K+', label: 'Resumes Reviewed' },
    { value: '950K+', label: 'Active Job Listings' },
    { value: '1M+', label: 'AI Job Alerts Sent' },
  ];

  return (
    <section className="bg-slate-50 pt-12 pb-12 md:pt-48 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-4xl lg:text-5xl font-extrabold text-blue-500 mb-2">{stat.value}</span>
              <span className="text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;