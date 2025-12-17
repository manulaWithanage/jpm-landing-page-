import React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Brendan Buck',
      title: 'Marketing Manager',
      image: 'https://picsum.photos/seed/brendan/100/100',
      text: "I needed a tool that truly understood my career goals, and the resume scan on JobProMax exceeded my expectations. It's not just another job site; it feels like the next big thing in aligning my resume with the perfect job opportunities!",
      rating: 5
    },
    {
      name: 'Safaa Sampson',
      title: 'Account Executive',
      image: 'https://picsum.photos/seed/safaa/100/100',
      text: "JobProMax made my job search so much smoother. I uploaded my resume, and the next thing I knew, I was getting matched with positions that really suited my skills and career goals. I landed a fantastic job much quicker than I expected!",
      rating: 5
    },
    {
      name: 'David Smith',
      title: 'HR Director',
      image: 'https://picsum.photos/seed/david/100/100',
      text: "I'm an HR director and have tried various job platforms, but JobProMax stands out. It's not just the technology; it feels like they really understand what we need to find the right people quickly. The AI-driven matches are spot on!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      {/* Background decoration - Darker blobs for visibility on slate bg */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Hear From Our <span className="text-blue-600">Satisfied Customers</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            The best way to showcase our success is through the experiences and stories of those who have partnered with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Nav Buttons - Decorative for this static demo */}
          <button className="hidden md:flex absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-colors z-20 shadow-sm">
            <ChevronLeft size={20} />
          </button>
          <button className="hidden md:flex absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-colors z-20 shadow-sm">
            <ChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow relative">
                <Quote className="absolute top-8 right-8 text-blue-100 fill-blue-100 w-10 h-10" />
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-8">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-slate-400 text-xs">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;