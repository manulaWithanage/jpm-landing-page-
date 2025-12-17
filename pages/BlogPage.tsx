import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "How to Beat the ATS in 2024",
      excerpt: "Applicant Tracking Systems are getting smarter. Here are the top 5 strategies to ensure your resume actually reaches a human recruiter.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      category: "Resume Tips"
    },
    {
      title: "Top 10 Behavioral Interview Questions",
      excerpt: "Prepare for the toughest part of the interview with our guide to answering behavioral questions using the STAR method.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80",
      date: "Oct 08, 2024",
      readTime: "8 min read",
      category: "Interview Prep"
    },
    {
      title: "Salary Negotiation Scripts That Work",
      excerpt: "Don't leave money on the table. Use these exact scripts to negotiate a higher starting salary for your next role.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      date: "Sep 28, 2024",
      readTime: "6 min read",
      category: "Career Growth"
    },
    {
      title: "Remote Work Trends for 2025",
      excerpt: "Is remote work here to stay? We analyzed over 1 million job postings to find out where the market is heading.",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
      date: "Sep 15, 2024",
      readTime: "4 min read",
      category: "Market Trends"
    },
    {
      title: "Building a Portfolio Without Experience",
      excerpt: "Breaking into a new field? Learn how to showcase your skills and build a portfolio that gets you hired.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      date: "Sep 10, 2024",
      readTime: "7 min read",
      category: "Portfolio"
    },
    {
      title: "The Power of Networking on LinkedIn",
      excerpt: "Networking doesn't have to be awkward. Here is a step-by-step guide to building meaningful professional connections.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      date: "Aug 22, 2024",
      readTime: "5 min read",
      category: "Networking"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero */}
      <div className="bg-slate-50 pt-40 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
             The JobProMax Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Career Advice & <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
             Expert tips, industry trends, and guides to help you navigate your career journey.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                    <article key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col group cursor-pointer">
                        <div className="h-48 overflow-hidden relative">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                                {post.category}
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} /> {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={12} /> {post.readTime}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-blue-600 font-bold text-sm mt-auto">
                                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <button className="px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-colors">
                    Load More Articles
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;