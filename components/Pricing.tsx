import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      period: 'Free forever',
      subtext: '',
      buttonText: 'Sign Up',
      primary: false,
      features: [
        { name: '5 Resume Scans', included: true },
        { name: '5 ATS Keyword Comparisons', included: true },
        { name: 'Job Board', included: true },
        { name: 'Job Tracker (5 Entries)', included: true },
        { name: 'Ask JobProMax (5 Queries)', included: true },
        { name: 'Browser Extension', included: true },
        { name: 'Resume Builder (Limited Features)', included: true },
        { name: 'Networking Messages', included: false },
        { name: 'Cover Letter Creator', included: false },
      ]
    },
    {
      title: 'Premium Quarterly',
      price: '$29',
      period: '/month',
      subtext: 'Billed as $89 every 3 months',
      buttonText: 'Try 7 Days for Free',
      primary: true,
      bestValue: true,
      features: [
        { name: 'Unlimited Resume Scans', included: true },
        { name: 'ATS Keyword Comparisons', included: true },
        { name: 'Job Board with Best Match', included: true },
        { name: 'Job Tracker', included: true },
        { name: 'Ask JobProMax', included: true },
        { name: 'Browser Extension', included: true },
        { name: 'Instant AI Resume Builder', included: true },
        { name: 'Networking Messages', included: true },
        { name: 'Cover Letter Creator', included: true },
      ]
    },
    {
      title: 'Premium Monthly',
      price: '$49',
      period: '/month',
      subtext: 'Billed as $49 every month',
      buttonText: 'Buy',
      primary: false,
      features: [
        { name: 'Unlimited Resume Scans', included: true },
        { name: 'ATS Keyword Comparisons', included: true },
        { name: 'Job Board with Best Match', included: true },
        { name: 'Job Tracker', included: true },
        { name: 'Ask JobProMax', included: true },
        { name: 'Browser Extension', included: true },
        { name: 'Instant AI Resume Builder', included: true },
        { name: 'Networking Messages', included: true },
        { name: 'Cover Letter Creator', included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
                key={index} 
                className={`relative bg-white rounded-2xl p-8 border flex flex-col transition-all duration-300
                ${plan.primary 
                    ? 'border-blue-500 shadow-2xl ring-1 ring-blue-500 z-10 scale-100 md:scale-105' 
                    : 'border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1'}`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg tracking-wider">
                    Best Value
                </div>
              )}

              <h3 className="text-lg font-medium text-slate-900 mb-4">{plan.title}</h3>
              <div className="flex items-baseline mb-1">
                <span className="text-5xl font-extrabold text-blue-600 tracking-tight">{plan.price}</span>
                <span className="text-slate-500 ml-1 font-medium">{plan.period}</span>
              </div>
              <p className="text-xs text-slate-400 mb-8 h-4 font-medium">{plan.subtext || ' '}</p>
              
              <button className={`w-full py-3.5 rounded-xl text-sm font-bold mb-8 transition-all shadow-sm hover:shadow-md
                ${plan.primary 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                {plan.buttonText}
              </button>

              <div className="space-y-4 flex-1">
                <p className="font-bold text-xs text-slate-900 mb-4 uppercase tracking-widest opacity-80">What's Included</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {feature.included ? (
                        <div className="bg-blue-100 rounded-full p-0.5">
                            <Check size={12} className="text-blue-600" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="bg-slate-100 rounded-full p-0.5">
                            <X size={12} className="text-slate-400" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${feature.included ? 'text-slate-600' : 'text-slate-400'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;