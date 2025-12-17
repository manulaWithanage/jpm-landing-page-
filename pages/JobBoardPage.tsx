import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Filter, Upload, Bookmark, Briefcase, Share2, ArrowLeft, CheckCircle, Zap, Sparkles, UserPlus } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  minSalary: number;
  maxSalary: number;
  type: string;
  tags: string[];
  description: string;
  responsibilities: string[];
  posted: string;
  logoBg: string;
  logo: string;
}

const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Manager, Box Consulting',
    company: 'Box',
    location: 'Redwood City, California',
    salary: '$155,000 - $194,500',
    minSalary: 155000,
    maxSalary: 194500,
    type: 'Fulltime',
    tags: ['Unknown'],
    posted: '2 days ago',
    logoBg: 'bg-blue-600',
    logo: 'box',
    description: "As a Manager, you will be scaling a world-class team, working closely with our customers as a thought leader, shape & evolve consulting delivery offerings, and drive new business with your sales partners. You will bring the energy and expertise to inspire our customers and influence Box Consulting's strategic direction. You will lead teams of varying levels of experience, thrive in dynamic & cross-functional environments, and enjoy achieving results through engaging directly with our customers. Responsibilities include managing and cultivating a high-performing consulting team, developing GTM strategy, and maximizing customer outcomes.",
    responsibilities: [
      "Scale a world-class team",
      "Work closely with customers as a thought leader",
      "Shape & evolve consulting delivery offerings",
      "Drive new business with sales partners",
      "Inspire customers and influence strategic direction",
      "Lead teams in dynamic & cross-functional environments",
      "Engage directly with customers for results"
    ]
  },
  {
    id: '2',
    title: 'Senior Product Designer',
    company: 'Stripe',
    location: 'Remote / San Francisco',
    salary: '$160,000 - $220,000',
    minSalary: 160000,
    maxSalary: 220000,
    type: 'Fulltime',
    tags: ['Remote', 'Design'],
    posted: '5 hours ago',
    logoBg: 'bg-indigo-600',
    logo: 'S',
    description: "We are looking for a Senior Product Designer to help us build the future of payments. You will work on complex financial interfaces and help simplify them for millions of users.",
    responsibilities: [
      "Design simple, elegant, and data-driven user-centric experiences",
      "Define the user experience, interactions, and user interface through user flows",
      "Collaborate with product management and engineering to define and implement innovative solutions"
    ]
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    company: 'Vercel',
    location: 'Remote',
    salary: '$140,000 - $180,000',
    minSalary: 140000,
    maxSalary: 180000,
    type: 'Fulltime',
    tags: ['Remote', 'Engineering'],
    posted: '1 day ago',
    logoBg: 'bg-black',
    logo: 'V',
    description: "Join our team to build the next generation of web development tools. You will be working with Next.js, React, and cutting-edge web technologies.",
    responsibilities: [
      "Develop and maintain our core frontend platform",
      "Optimize application for maximum speed and scalability",
      "Collaborate with other team members and stakeholders"
    ]
  },
  {
    id: '4',
    title: 'Marketing Director',
    company: 'Airbnb',
    location: 'San Francisco, CA',
    salary: '$190,000 - $250,000',
    minSalary: 190000,
    maxSalary: 250000,
    type: 'Fulltime',
    tags: ['Marketing', 'Strategy'],
    posted: '3 days ago',
    logoBg: 'bg-red-500',
    logo: 'A',
    description: "Lead our global marketing initiatives and help shape the Airbnb brand story. You will oversee brand campaigns, performance marketing, and community engagement.",
    responsibilities: [
      "Develop and execute comprehensive marketing strategies",
      "Manage and mentor a high-performing marketing team",
      "Analyze market trends and customer insights"
    ]
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    salary: '$200,000 - $350,000',
    minSalary: 200000,
    maxSalary: 350000,
    type: 'Fulltime',
    tags: ['Data', 'Tech'],
    posted: '1 week ago',
    logoBg: 'bg-red-600',
    logo: 'N',
    description: "Use data to help us create the best entertainment experience in the world. You will work on personalization algorithms and content valuation models.",
    responsibilities: [
      "Apply machine learning techniques to solve complex business problems",
      "Work with large datasets to extract meaningful insights",
      "Collaborate with engineering and content teams"
    ]
  }
];

const JobBoardPage: React.FC = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  // Handle URL sync and selection
  useEffect(() => {
    if (jobId) {
      const job = SAMPLE_JOBS.find(j => j.id === jobId);
      if (job) {
        setSelectedJob(job);
      } else {
        // Handle 404 case by defaulting to first or clearing
        setSelectedJob(null);
      }
    } else {
        // Desktop: Default to first job if none selected
        if (window.innerWidth >= 1024) {
           navigate(`/jobs/${SAMPLE_JOBS[0].id}`, { replace: true });
        } else {
           setSelectedJob(null);
        }
    }
  }, [jobId, navigate]);

  const handleJobClick = (job: Job) => {
    navigate(`/jobs/${job.id}`);
    // Scroll to top on mobile when selecting a job
    if (window.innerWidth < 1024) {
      window.scrollTo(0, 0);
    }
  };

  const filteredJobs = SAMPLE_JOBS.filter(job => 
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     job.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
    job.location.toLowerCase().includes(locationQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-6 sticky top-32 z-30">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Enter the Job / Title / Company" 
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-transparent hover:bg-slate-100 focus:bg-white focus:border-blue-500 rounded-xl outline-none transition-all font-medium text-slate-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-1 w-full relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-transparent hover:bg-slate-100 focus:bg-white focus:border-blue-500 rounded-xl outline-none transition-all font-medium text-slate-800"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
                <button className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors border border-transparent hover:border-slate-300">
                    <Filter size={20} />
                </button>
                <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
                    <Upload size={18} /> Replace Your Resume
                </button>
            </div>
          </div>
        </div>

        {/* Content Area - Split View */}
        <div className="flex flex-col lg:flex-row gap-6 relative items-start">
            
            {/* Left List - Hidden on mobile if job selected */}
            <div className={`w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 space-y-4 ${selectedJob && 'hidden lg:block'}`}>
                
                {/* CTA Card in list - Moved to Top */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden mb-4">
                    <div className="relative z-10 flex flex-col items-center">
                        <h3 className="font-bold text-xl mb-6 leading-tight">Make Your Resume Standout From The Competition</h3>
                        <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-sm">
                            <Upload size={18} /> Upload Resume
                        </button>
                    </div>
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-2 right-2 text-white/30">
                        <Sparkles size={24} />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-2 px-1">
                    <h2 className="font-bold text-slate-700">Total {filteredJobs.length} Jobs</h2>
                    <div className="text-sm text-slate-500">Sort by: <span className="font-bold text-slate-800 cursor-pointer">Latest</span></div>
                </div>

                {filteredJobs.map((job) => (
                    <div 
                        key={job.id}
                        onClick={() => handleJobClick(job)}
                        className={`bg-white p-5 rounded-2xl border cursor-pointer transition-all hover:shadow-md group relative overflow-hidden
                            ${selectedJob?.id === job.id 
                                ? 'border-blue-500 shadow-md ring-1 ring-blue-500 bg-blue-50/10' 
                                : 'border-slate-200 hover:border-blue-300'}`}
                    >
                        <div className="flex items-start gap-4 mb-3">
                            <div className={`w-12 h-12 ${job.logoBg} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0`}>
                                {job.logo}
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg leading-tight mb-1 ${selectedJob?.id === job.id ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                                    {job.title}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium">{job.company} <span className="text-slate-300 mx-1">/</span> {job.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-100">{job.type}</span>
                            {job.tags.map(tag => (
                                <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md border border-slate-200">{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 text-sm">{job.salary}</span>
                            <span className="text-xs text-slate-400 font-medium">{job.posted}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Details - Full screen on mobile if selected */}
            <div className={`flex-1 w-full ${!selectedJob && 'hidden lg:block'}`}>
                {selectedJob ? (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm sticky top-28 overflow-hidden min-h-[calc(100vh-140px)] flex flex-col">
                        
                        {/* Mobile Back Button */}
                        <div className="lg:hidden p-4 border-b border-slate-100">
                             <button onClick={() => { setSelectedJob(null); navigate('/jobs'); }} className="flex items-center gap-2 text-slate-500 font-medium hover:text-blue-600">
                                <ArrowLeft size={18} /> Back to jobs
                             </button>
                        </div>

                        {/* Job Header */}
                        <div className="p-6 md:p-8 border-b border-slate-100">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                <div className="flex items-center gap-4">
                                     <div className={`w-16 h-16 ${selectedJob.logoBg} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md`}>
                                        {selectedJob.logo}
                                    </div>
                                    <div>
                                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{selectedJob.title}</h1>
                                        <div className="flex items-center gap-2 text-slate-500 font-medium">
                                            <span className="text-blue-600">{selectedJob.company}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span>{selectedJob.salary}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-colors">
                                        <Bookmark size={20} />
                                    </button>
                                    <button className="flex-1 md:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                                        Apply with your Email
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg border border-blue-100">{selectedJob.type}</span>
                                {selectedJob.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm font-bold rounded-lg border border-slate-200">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Job Body */}
                        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Description</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                {selectedJob.description}
                            </p>

                            <h3 className="text-lg font-bold text-slate-900 mb-3">Responsibilities</h3>
                            <ul className="space-y-3 mb-8">
                                {selectedJob.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                                        <span className="text-slate-600 leading-relaxed">{resp}</span>
                                    </li>
                                ))}
                            </ul>

                             {/* Blue Signup Banner inside Job Details */}
                             <div className="mt-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                                <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Signup To JobProMax Today!</h3>
                                        <p className="text-white/90 font-medium text-sm">Apply To More Jobs And Unlock More Features</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
                                         <button className="px-5 py-2.5 bg-white text-blue-600 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            Signup with Email
                                         </button>
                                         <button className="px-5 py-2.5 bg-white text-slate-700 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                                            Continue with Google
                                         </button>
                                    </div>
                                </div>
                                {/* Decor */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"></div>
                             </div>

                        </div>

                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center bg-slate-50/50 rounded-3xl border border-dashed border-slate-300 p-12 text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                            <Briefcase className="text-slate-300" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Select a job to view details</h3>
                        <p className="text-slate-500 max-w-sm">
                            Click on any job card from the list on the left to see full details and application options.
                        </p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default JobBoardPage;