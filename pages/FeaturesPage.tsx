import React from 'react';
import { CheckCircle, FileText, Zap, Layout, Search, TrendingUp, ArrowRight, MousePointer, Upload, Sparkles, MessageSquare, UserPlus, Bell, Filter, PenTool, Send, Globe, LayoutDashboard, Briefcase, ListTodo, History, X, ChevronDown, LogOut } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* Page Hero */}
      <div className="bg-slate-50 pt-40 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
             Everything You Need
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            The <span className="text-blue-600">Ultimate Toolkit</span> for Job Seekers
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
             Stop guessing and start getting hired. Our suite of AI-powered tools handles the boring stuff so you can focus on the interview.
          </p>
        </div>
      </div>

      {/* Feature 1: Resume Scan */}
      <section id="resume-scan" className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Text Content */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                 <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                   Resume Scan
                 </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Is Your Resume Getting <br/><span className="text-red-500">Deleted by a Bot?</span>
              </h2>
              
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300 mb-8">
                <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                <p className="text-slate-600 italic font-medium">
                  "75% of resumes are rejected by Applicant Tracking Systems (ATS) before a human ever sees them."
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our AI scans your resume against any job description from any job board to tell you exactly why you aren't getting called back—and how to fix it in seconds.
                </p>
              </div>

              <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wide border-b border-slate-100 pb-2">Key Capabilities</h4>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Keyword Gap Analysis</h4>
                    <p className="text-sm text-slate-500">We identify exactly which skills the job description asks for that your resume is missing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Layout className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Formatting Check</h4>
                    <p className="text-sm text-slate-500">Ensure your fonts, margins, and layouts are machine-readable.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Instant Scoring</h4>
                    <p className="text-sm text-slate-500">Get a 0-100 score that predicts your interview chances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Smart Cover Letter Draft</h4>
                    <p className="text-sm text-slate-500">Don't just get a score—automatically generate a tailored cover letter based on the scan results.</p>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 w-full md:w-auto justify-center">
                Scan My Resume for Free <ArrowRight size={20} />
              </button>
            </div>

            {/* Visual */}
            <div className="flex-1 order-1 lg:order-2 relative w-full">
               {/* Background Blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
               
               {/* Dashboard Card */}
               <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 relative">
                  {/* Header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-6 mb-6">
                     <div className="flex items-center gap-4">
                        {/* Circular Score */}
                        <div className="relative w-20 h-20">
                           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                 className="text-slate-100"
                                 d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="3"
                              />
                              <path
                                 className="text-green-500"
                                 strokeDasharray="72, 100"
                                 d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="3"
                                 strokeLinecap="round"
                              />
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-slate-900">
                              72%
                           </div>
                        </div>
                        <div>
                           <div className="text-base font-bold text-slate-900">Match Score</div>
                           <div className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full inline-block mt-1">Good Match</div>
                        </div>
                     </div>
                     <div className="text-xs text-slate-400 font-medium pt-1">Job: Sr. Product Designer</div>
                  </div>
                  
                  {/* Content Mockup */}
                  <div className="space-y-4">
                     {/* Hard Skills Gap */}
                     <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-xs border border-red-200">!</div>
                             <div className="text-sm font-bold text-slate-900">Hard Skills Gap</div>
                        </div>
                        <div className="text-xs text-slate-600 pl-7 leading-relaxed">
                              Missing critical technical keywords:
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="font-bold text-red-700 bg-white border border-red-200 px-2 py-1 rounded shadow-sm">Agile</span>
                                <span className="font-bold text-red-700 bg-white border border-red-200 px-2 py-1 rounded shadow-sm">Figma</span>
                                <span className="font-bold text-red-700 bg-white border border-red-200 px-2 py-1 rounded shadow-sm">Prototyping</span>
                              </div>
                        </div>
                     </div>

                     {/* Soft Skills Gap */}
                     <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xs border border-orange-200">!</div>
                             <div className="text-sm font-bold text-slate-900">Soft Skills Gap</div>
                        </div>
                        <div className="text-xs text-slate-600 pl-7 leading-relaxed">
                              Recommended leadership traits to add:
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="font-bold text-orange-700 bg-white border border-orange-200 px-2 py-1 rounded shadow-sm">Mentorship</span>
                                <span className="font-bold text-orange-700 bg-white border border-orange-200 px-2 py-1 rounded shadow-sm">Collaboration</span>
                              </div>
                        </div>
                     </div>
                     
                     {/* Formatting */}
                     <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="mt-0.5">
                            <CheckCircle size={20} className="text-green-600" />
                        </div>
                        <div>
                           <div className="text-sm font-bold text-slate-900">Formatting Passed</div>
                           <div className="text-xs text-slate-500 mt-1">
                              Margins, font size, and section headers are ATS compliant.
                           </div>
                        </div>
                     </div>

                     {/* Skeleton Lines at bottom */}
                     <div className="pt-2 px-2 space-y-3">
                         <div className="flex gap-4 items-center opacity-20">
                            <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
                            <div className="space-y-2 flex-1">
                                <div className="h-2 bg-slate-400 rounded w-1/3"></div>
                                <div className="h-2 bg-slate-300 rounded w-1/4"></div>
                            </div>
                        </div>
                        <div className="space-y-2 opacity-20">
                            <div className="h-2 bg-slate-300 rounded w-full"></div>
                            <div className="h-2 bg-slate-300 rounded w-5/6"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 2: Resume Builder */}
      <section id="resume-builder" className="py-24 bg-slate-50 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Visual (Left on Desktop) */}
               <div className="flex-1 order-2 lg:order-1 relative w-full flex items-center justify-center">
                  <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 relative overflow-hidden w-full max-w-lg">
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Resume Builder</div>
                      </div>
                      
                      <div className="flex gap-6">
                         {/* Sidebar */}
                         <div className="w-12 flex flex-col gap-4 items-center border-r border-slate-100 pr-4">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg text-blue-600 flex items-center justify-center"><Layout size={16}/></div>
                            <div className="w-8 h-8 text-slate-300 flex items-center justify-center"><FileText size={16}/></div>
                            <div className="w-8 h-8 text-slate-300 flex items-center justify-center"><Zap size={16}/></div>
                         </div>
                         
                         {/* Main Canvas */}
                         <div className="flex-1 bg-slate-50 rounded-xl p-6 relative min-h-[300px]">
                            {/* Document */}
                            <div className="bg-white shadow-sm w-full h-full rounded-lg p-6 transform scale-100 origin-top-left">
                               <div className="h-4 w-1/3 bg-slate-800 rounded mb-4"></div>
                               <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                               <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                               <div className="h-2 w-2/3 bg-slate-100 rounded mb-6"></div>
                               
                               <div className="h-3 w-1/4 bg-slate-300 rounded mb-3"></div>
                               <div className="space-y-2">
                                   <div className="flex gap-2">
                                      <div className="w-1 bg-blue-500 rounded-full"></div>
                                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                                   </div>
                                   <div className="flex gap-2">
                                      <div className="w-1 bg-blue-500 rounded-full"></div>
                                      <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                                   </div>
                               </div>
                            </div>

                            {/* Floating AI Tooltip */}
                            <div className="absolute bottom-4 -right-4 bg-slate-900 text-white p-4 rounded-xl shadow-xl w-64 animate-bounce-slow">
                                <div className="flex items-center gap-2 mb-1">
                                   <Sparkles size={14} className="text-purple-400" />
                                   <span className="font-bold text-xs">AI Enhancement</span>
                                </div>
                                <p className="text-xs text-slate-300 mb-2">Rephrased for impact: "Led team" &rarr; "Orchestrated cross-functional initiative"</p>
                                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                   <div className="w-3/4 h-full bg-purple-500"></div>
                                </div>
                            </div>
                         </div>
                      </div>
                  </div>
                  
                  {/* Background Decor */}
                  <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>
               </div>

               {/* Text Content */}
               <div className="flex-1 order-1 lg:order-2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-xs block bg-purple-100 w-fit px-3 py-1 rounded-full border border-purple-200">
                        Smart Resume Builder
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Build a <span className="text-blue-600">Hired-Worthy</span> Resume in Minutes.</h2>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                     <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                     <p className="text-slate-600 italic">
                        Formatting a resume in Word is a nightmare, generic templates don't pass ATS scans, and writing about yourself is hard.
                     </p>
                  </div>

                  <div className="mb-8">
                     <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                     <p className="text-slate-600 text-lg leading-relaxed">
                        A flexible builder that offers three distinct ways to create the perfect document, backed by powerful AI writing assistants.
                     </p>
                  </div>

                  {/* Three Ways to Build */}
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wide border-b border-slate-200 pb-2">Three Ways to Build</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="mt-1 bg-blue-50 p-1 rounded">
                                <MousePointer size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <strong className="text-slate-900 block">Start from Scratch</strong>
                                <span className="text-slate-500 text-sm">Create a brand new, professional resume using our guided wizard.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="mt-1 bg-blue-50 p-1 rounded">
                                <Upload size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <strong className="text-slate-900 block">Import & Improve</strong>
                                <span className="text-slate-500 text-sm">Upload your existing PDF/Docx. We'll extract your data and reformat it into an ATS-friendly template automatically.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="mt-1 bg-blue-50 p-1 rounded">
                                <Zap size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <strong className="text-slate-900 block">Instant Resume (Game Changer)</strong>
                                <span className="text-slate-500 text-sm">Upload your resume and a specific job description. We will rewrite your summary and skills to match that specific job instantly.</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <button className="bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                     Build My Resume <ArrowRight size={20} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Feature 3: Job Tracker */}
      <section id="job-tracker" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-24">
               
               {/* Text Content */}
               <div className="flex-1 w-full order-2 xl:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs block bg-indigo-100 w-fit px-3 py-1 rounded-full">Job Tracker</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Stop Using Spreadsheets. <br /><span className="text-indigo-600">Start Managing Your Career.</span></h2>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
                     <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                     <p className="text-slate-600 italic">
                        Losing track of which version of your resume you sent, or forgetting to follow up on an application from 2 weeks ago.
                     </p>
                  </div>

                  <div className="mb-8">
                     <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                     <p className="text-lg text-slate-600 leading-relaxed">
                        A centralized Kanban board to track every application, interview, and offer in one visual dashboard.
                     </p>
                  </div>

                  <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wide border-b border-slate-200 pb-2">Key Capabilities</h4>
                  <div className="space-y-6 mb-10">
                     <div className="flex gap-4 items-start">
                        <div className="bg-slate-50 p-2 rounded-lg shadow-sm border border-slate-200 shrink-0">
                           <Layout size={24} className="text-indigo-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg">Pipeline Management</h4>
                           <p className="text-slate-500">Sort jobs into Interested, Applied, Interviewed, Offered, and Rejected.</p>
                        </div>
                     </div>
                     
                     <div className="flex gap-4 items-start">
                        <div className="bg-slate-50 p-2 rounded-lg shadow-sm border border-slate-200 shrink-0">
                           <Globe size={24} className="text-indigo-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg">Browser Extension</h4>
                           <p className="text-slate-500">Add jobs to your tracker automatically from LinkedIn, Indeed, or Glassdoor with a single click—no manual data entry.</p>
                        </div>
                     </div>

                     <div className="flex gap-4 items-start">
                        <div className="bg-slate-50 p-2 rounded-lg shadow-sm border border-slate-200 shrink-0">
                           <TrendingUp size={24} className="text-indigo-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg">Advanced Analytics Suite</h4>
                           <p className="text-slate-500 mb-2">Go beyond simple tracking with data-driven insights:</p>
                           <ul className="text-sm text-slate-500 space-y-2 mt-2">
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></div>
                                <span><strong className="text-slate-700">Job Insights:</strong> Uncover salary benchmarks and market trends for specific roles.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></div>
                                <span><strong className="text-slate-700">Resume Performance Analysis:</strong> Track exactly which resume versions are landing interviews.</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 w-full md:w-auto justify-center">
                     Start Tracking <ArrowRight size={20} />
                  </button>
               </div>

               {/* Visual */}
               <div className="flex-1 w-full order-1 xl:order-2">
                  <div className="relative w-full max-w-2xl mx-auto">
                    {/* Backdrop/Shadow/Glow effects */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2rem] blur-xl opacity-50 -z-10"></div>
                    
                    {/* Main Card (Modal) */}
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                        
                        {/* Header */}
                        <div className="p-6 border-b border-slate-100 flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                {/* Score Circle */}
                                <div className="relative w-14 h-14 flex-shrink-0">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        <path className="text-blue-600" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-slate-900">40%</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Project Manager</h3>
                                    <p className="text-slate-500 text-sm">HDR</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                 <div className="hidden sm:block text-right">
                                    <label className="text-[10px] text-slate-400 block mb-1">Select a resume</label>
                                    <div className="bg-slate-50 border border-slate-200 rounded px-3 py-1.5 text-xs text-slate-700 font-medium flex items-center gap-2 cursor-pointer">
                                        Noah Charnow Old.pdf
                                        <ChevronDown size={14} className="text-slate-400" />
                                    </div>
                                 </div>
                                 <button className="text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-slate-100 px-6 overflow-x-auto scrollbar-hide">
                            {['Job Details', 'Job Insights', 'Resume Analysis', 'Notes'].map((tab) => (
                                <div key={tab} className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${tab === 'Job Insights' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>
                                    {tab}
                                </div>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="p-6 bg-slate-50/50 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-3 text-sm">Salary Benchmarking</h4>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                        <p className="text-sm text-slate-600 mb-2">Based on the role and location, the estimated salary is:</p>
                                        <p className="text-xl font-bold text-green-600 mb-3">$110,000 - $85,000</p>
                                        <p className="text-[10px] text-slate-400 text-right">Data from similar roles in the area.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="relative">
                                 <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={16} className="text-blue-600" />
                                    <h4 className="font-bold text-slate-900 text-sm">AI Interview Questions</h4>
                                 </div>
                                 
                                 <div className="space-y-3 h-[200px] overflow-y-auto pr-2 relative custom-scrollbar">
                                    {/* Selected Indicator */}
                                    <div className="absolute right-0 top-0 w-1 h-16 bg-blue-600 rounded-full"></div>

                                    {[
                                        { title: 'Project and Team Leadership', q: 'Can you describe your experience leading multidisciplinary teams and managing projects from concept through execution?' },
                                        { title: 'Client and Stakeholder Management', q: 'How have you built and maintained strong client relationships and secured stakeholder buy-in for your projects?' },
                                        { title: 'Brand Consistency and Creative Direction', q: 'How do you ensure consistent brand representation across diverse channels and teams?' },
                                        { title: 'Budgeting and Resource Management', q: 'Describe your approach to tracking project budgets and resource allocation.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`bg-white p-3 rounded-xl border shadow-sm transition-all cursor-pointer group ${idx === 0 ? 'border-blue-400 ring-1 ring-blue-100' : 'border-slate-200 hover:border-blue-300'}`}>
                                             <h5 className={`font-bold text-xs mb-1 ${idx === 0 ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>{item.title}</h5>
                                             <p className="text-xs text-slate-500 leading-relaxed">{item.q}</p>
                                        </div>
                                    ))}
                                 </div>
                            </div>
                        </div>

                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Feature 4: Networking */}
      <section id="networking" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Visual */}
                <div className="flex-1 order-1 relative w-full">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
                        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                             <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                             </div>
                             <div className="text-xs font-bold text-slate-400 uppercase">AI Message Generator</div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="border border-blue-500 bg-blue-50 text-blue-700 p-3 rounded-lg text-center text-sm font-bold cursor-pointer">Connection Request</div>
                                    <div className="border border-slate-200 text-slate-500 p-3 rounded-lg text-center text-sm font-medium hover:bg-slate-50 cursor-pointer">Follow-up</div>
                                    <div className="border border-slate-200 text-slate-500 p-3 rounded-lg text-center text-sm font-medium hover:bg-slate-50 cursor-pointer">Thank You Note</div>
                                    <div className="border border-slate-200 text-slate-500 p-3 rounded-lg text-center text-sm font-medium hover:bg-slate-50 cursor-pointer">Ask for Referral</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <div className="flex justify-between mb-2">
                                        <div className="text-xs font-bold text-slate-400">TARGET: RECRUITER @ TECHCORP</div>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Hi [Name], I'm a Product Designer admiring TechCorp's recent UX overhaul. I'd love to connect and keep up with your team's work...
                                    </p>
                                </div>
                                <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                                    <Sparkles size={16} className="text-yellow-400" /> Generate Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="flex-1 order-2">
                    <div className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        Networking Assistant
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Write the Perfect DM, <br/>Every Time.</h2>
                    
                    <div className="mb-6">
                        <h4 className="font-bold text-slate-900 mb-2">The Problem</h4>
                        <p className="text-slate-600">You know you should network, but staring at a blank message box is intimidating. What do you say to a recruiter?</p>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                        <p className="text-lg text-slate-600 leading-relaxed">
                             An AI message generator that crafts the perfect outreach based on who you are targeting.
                        </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-slate-700"><strong>Select Your Goal:</strong> Connection Request, Follow-up, Thank You, etc.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-slate-700"><strong>Target Audience:</strong> Tailor tone for Recruiters, Peers, or Alumni.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-slate-700"><strong>Hassle-Free Response:</strong> Paste a message you received, and we'll reply instantly.</span>
                        </li>
                    </ul>

                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                        Generate a Message <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </div>
      </section>

      {/* Feature 5: Job Alert */}
      <section id="job-alerts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Text */}
                <div className="flex-1">
                    <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        48-Hour Alerts
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Opportunities That Refresh <br/>Faster Than Your Feed.</h2>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                         <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                         <p className="text-slate-600 italic">By the time you find a "great" job on a standard board, it already has 500 applicants.</p>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        We access a database of millions of jobs and filter them strictly by your resume's details—not just a keyword search.
                    </p>

                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wide">The 48-Hour Promise</h4>
                    <div className="space-y-4 mb-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Bell className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-slate-600 text-sm">Our alert page refreshes entirely every 48 hours.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Filter className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-slate-600 text-sm">We only show you fresh opportunities where you are a high-percentage match.</p>
                            </div>
                        </div>
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                        Set My Alerts <ArrowRight size={20} />
                    </button>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                    <div className="relative">
                        {/* Notification List Mockup */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-slate-900">Today's Top Matches</h3>
                                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full animate-pulse">Live Updates</span>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                                        <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-orange-500' : 'bg-slate-300'}`}></div>
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400 text-xs">Logo</div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-slate-800 rounded w-1/2 mb-1"></div>
                                            <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-green-600 font-bold text-sm">98% Match</div>
                                            <div className="text-slate-400 text-xs">1h ago</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-50 z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-50 z-0"></div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Feature 6: Job Board */}
      <section id="job-board" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Visual */}
                <div className="flex-1 order-1 w-full">
                     <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4">
                        {/* Filter Bar */}
                        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
                            <div className="px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-bold whitespace-nowrap">My Best Fit</div>
                            <div className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold whitespace-nowrap">Date Posted</div>
                            <div className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold whitespace-nowrap">Salary > $120k</div>
                            <div className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold whitespace-nowrap">Remote</div>
                        </div>
                        {/* Job List */}
                        <div className="space-y-3">
                             <div className="border border-green-200 bg-green-50/50 rounded-xl p-4 relative">
                                <div className="absolute -top-3 right-4 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                                    99% MATCH
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold text-slate-900">Product Manager</h4>
                                        <p className="text-xs text-slate-500">Spotify • Remote</p>
                                    </div>
                                    <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center font-bold text-xs">S</div>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">Tech</span>
                                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">$140k+</span>
                                </div>
                             </div>

                             <div className="border border-slate-100 rounded-xl p-4 opacity-70">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold text-slate-800">UX Designer</h4>
                                        <p className="text-xs text-slate-500">Airbnb • San Francisco</p>
                                    </div>
                                    <div className="w-8 h-8 bg-red-400 text-white rounded flex items-center justify-center font-bold text-xs">A</div>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <span className="text-[10px] font-bold text-slate-400">82% Match</span>
                                </div>
                             </div>
                        </div>
                     </div>
                </div>

                {/* Text */}
                <div className="flex-1 order-2">
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        Smart Match Board
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Job Board That <br/>Actually Knows You.</h2>
                    
                    <div className="mb-6">
                         <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                         <p className="text-slate-600">Wasting hours reading job descriptions that look good in the title but require 5 more years of experience than you have.</p>
                    </div>

                    <div className="mb-8">
                         <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                         <p className="text-lg text-slate-600 leading-relaxed">
                            An "un-ordinary" job board that runs a compatibility formula on every single listing before you click it.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-1"><Zap size={16} className="text-yellow-500"/> Instant Scan</h5>
                            <p className="text-xs text-slate-500">Check whether a job matches your resume instantly, right from search.</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-1"><TrendingUp size={16} className="text-blue-500"/> "Best Match" Sorting</h5>
                            <p className="text-xs text-slate-500">Sort by statistical likelihood to land the role, not date posted.</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-1"><Filter size={16} className="text-purple-500"/> Precision Filters</h5>
                            <p className="text-xs text-slate-500">Granular control for Salary, Remote, and Experience Level.</p>
                        </div>
                    </div>

                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                        Find My Match <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </div>
      </section>

      {/* Feature 7: Cover Letter Generator */}
      <section id="cover-letter" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Text */}
                <div className="flex-1">
                    <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        Cover Letter Writer
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The End of Cover <br/>Letter Stress.</h2>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                         <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                         <p className="text-slate-600 italic">You skip applying to jobs because they require a cover letter, and you hate writing them.</p>
                    </div>

                    <div className="mb-8">
                         <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                         <p className="text-lg text-slate-600 leading-relaxed">
                            Turn your resume and a job description into a persuasive, tailored cover letter instantly.
                         </p>
                    </div>

                    <div className="relative pl-8 space-y-4 mb-8 border-l-2 border-cyan-200">
                        <div className="relative">
                            <span className="absolute -left-[39px] w-5 h-5 bg-cyan-100 rounded-full border-4 border-white"></span>
                            <p className="text-sm text-slate-600"><strong>Reads your resume</strong> to understand your proven skills.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[39px] w-5 h-5 bg-cyan-100 rounded-full border-4 border-white"></span>
                             <p className="text-sm text-slate-600"><strong>Reads the job description</strong> to understand their requirements.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[39px] w-5 h-5 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></span>
                             <p className="text-sm text-slate-900 font-bold">Generates a bridge letter explaining why YOU are the solution.</p>
                        </div>
                    </div>

                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                        Write My Cover Letter <ArrowRight size={20} />
                    </button>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                    <div className="relative flex items-center justify-center">
                        {/* Doc 1: Resume */}
                        <div className="w-32 h-40 bg-white border border-slate-200 rounded-lg shadow-sm p-2 absolute left-0 top-0 transform -rotate-6 z-0 opacity-80">
                            <div className="h-1 bg-slate-200 w-1/2 mb-2 rounded"></div>
                            <div className="space-y-1">
                                <div className="h-1 bg-slate-100 w-full rounded"></div>
                                <div className="h-1 bg-slate-100 w-full rounded"></div>
                            </div>
                        </div>
                        {/* Doc 2: Job Desc */}
                        <div className="w-32 h-40 bg-white border border-slate-200 rounded-lg shadow-sm p-2 absolute right-0 top-10 transform rotate-6 z-0 opacity-80">
                            <div className="h-1 bg-blue-100 w-1/3 mb-2 rounded"></div>
                            <div className="space-y-1">
                                <div className="h-1 bg-slate-100 w-full rounded"></div>
                                <div className="h-1 bg-slate-100 w-full rounded"></div>
                            </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg">
                            <ArrowRight className="text-cyan-500" />
                        </div>
                        {/* Final Doc */}
                        <div className="w-48 h-60 bg-white border border-slate-200 rounded-lg shadow-2xl p-4 relative z-20 mt-12 transform hover:scale-105 transition-transform">
                            <div className="flex justify-between items-center mb-4">
                                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                                    <PenTool size={14} className="text-cyan-600" />
                                </div>
                                <div className="text-[10px] text-slate-400">Generated now</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-slate-800 w-1/3 rounded mb-2"></div>
                                <div className="h-1.5 bg-slate-200 w-full rounded"></div>
                                <div className="h-1.5 bg-slate-200 w-full rounded"></div>
                                <div className="h-1.5 bg-slate-200 w-full rounded"></div>
                                <div className="h-1.5 bg-slate-200 w-5/6 rounded"></div>
                                <div className="h-4"></div>
                                <div className="h-1.5 bg-slate-200 w-full rounded"></div>
                                <div className="h-1.5 bg-slate-200 w-4/5 rounded"></div>
                            </div>
                            <div className="absolute bottom-4 right-4 text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">Perfect Match</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Feature 8: Ask JobProMax AI */}
      <section id="career-coach" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Visual */}
                <div className="flex-1 order-1 w-full">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[400px]">
                        {/* Chat Header */}
                        <div className="bg-violet-600 p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                                <Sparkles size={16} />
                            </div>
                            <div className="text-white font-bold">Career Coach</div>
                        </div>
                        {/* Chat Body */}
                        <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-4">
                            <div className="flex justify-end">
                                <div className="bg-violet-600 text-white p-3 rounded-l-2xl rounded-tr-2xl text-sm max-w-[80%] shadow-md">
                                    How much should I ask for in salary negotiations?
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-white text-slate-700 p-3 rounded-r-2xl rounded-tl-2xl text-sm max-w-[90%] shadow-sm border border-slate-200">
                                    <p className="mb-2">Based on your experience as a Senior Designer and the market data for San Francisco:</p>
                                    <p className="font-bold text-violet-600">$145k - $165k Base</p>
                                    <p className="text-xs text-slate-400 mt-1">Don't forget to ask for equity!</p>
                                </div>
                            </div>
                        </div>
                        {/* Chat Input */}
                        <div className="p-4 border-t border-slate-100 bg-white flex gap-2">
                            <div className="flex-1 bg-slate-100 rounded-full h-10 px-4 flex items-center text-sm text-slate-400">Ask anything...</div>
                            <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                <Send size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="flex-1 order-2">
                    <div className="inline-block bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        AI Career Coach
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your Personal <br/>AI Career Coach.</h2>
                    
                    <div className="mb-6">
                         <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                         <p className="text-slate-600">Specific career questions usually require expensive coaches or hours of searching through generic advice on Google.</p>
                    </div>

                    <div className="mb-8">
                         <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                         <p className="text-lg text-slate-600 leading-relaxed">
                             A smart chat interface where you can ask anything and get career-based answers grounded in your specific data.
                         </p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                <FileText className="w-5 h-5 text-violet-600" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900">Resume-Aware</h5>
                                <p className="text-sm text-slate-600">It reads your past resume scans to understand your specific context.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                <Globe className="w-5 h-5 text-violet-600" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900">Latest Knowledge</h5>
                                <p className="text-sm text-slate-600">Continually updated with hiring trends and salary data.</p>
                            </div>
                        </div>
                    </div>

                    <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                        Start Chatting <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </div>
      </section>

      {/* Feature 9: Browser Extension */}
      <section id="extension" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Text */}
                <div className="flex-1">
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        Chrome Extension
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your Smart Sidekick for LinkedIn, Indeed, & Glassdoor.</h2>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                         <h4 className="font-bold text-slate-900 mb-1">The Problem</h4>
                         <p className="text-slate-600 italic">Constant tab-switching to copy-paste job descriptions into analysis tools is slow, annoying, and kills your momentum.</p>
                    </div>

                    <div className="mb-8">
                         <h4 className="font-bold text-slate-900 mb-2">The Solution</h4>
                         <p className="text-lg text-slate-600 leading-relaxed">
                            A powerful browser extension that brings JobProMax's tools directly to the job boards you visit every day.
                         </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                         <li className="flex items-start gap-3">
                            <div className="mt-1 bg-blue-50 p-1 rounded"><Search size={14} className="text-blue-600"/></div>
                            <div>
                                <strong className="text-slate-900 block">On-Page Scanning</strong>
                                <span className="text-slate-500 text-sm">Automatically detects description and runs AI Scan.</span>
                            </div>
                         </li>
                         <li className="flex items-start gap-3">
                            <div className="mt-1 bg-blue-50 p-1 rounded"><UserPlus size={14} className="text-blue-600"/></div>
                            <div>
                                <strong className="text-slate-900 block">One-Click Save</strong>
                                <span className="text-slate-500 text-sm">Add directly to Job Tracker pipeline.</span>
                            </div>
                         </li>
                    </ul>

                    <button className="bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                        Add to Chrome <Globe size={20} />
                    </button>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full flex justify-center">
                     <div className="relative">
                        {/* The Extension Popup Card */}
                        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 w-[320px] relative z-10">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Sparkles className="w-4 h-4 text-blue-500" />
                                        <span className="font-bold text-lg text-blue-600 tracking-tight">JobProMax</span>
                                    </div>
                                    <div className="text-[9px] text-slate-400 leading-none ml-5">powered by JobHelpers</div>
                                </div>
                                <div className="flex gap-3 text-blue-600">
                                    <LogOut size={18} />
                                    <X size={18} />
                                </div>
                            </div>

                            {/* Job Content Box */}
                            <div className="border border-slate-200 rounded-lg p-3 mb-4 shadow-sm relative">
                                <h4 className="font-bold text-sm text-slate-900 mb-2">Project Manager</h4>
                                <div className="text-xs text-slate-600 leading-relaxed h-24 overflow-hidden relative">
                                    About the job About the company: Avenue Code is the leading software consultancy focused on delivering end-to-end development solutions for digital tra...
                                </div>
                                {/* Scrollbar graphic/indicator */}
                                <div className="absolute right-1 top-8 bottom-8 w-1 bg-slate-100 rounded-full">
                                    <div className="h-8 bg-slate-400 rounded-full w-full mt-2"></div>
                                </div>
                                <div className="absolute bottom-1 right-2">
                                     <ChevronDown size={14} className="text-slate-400" />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="space-y-3">
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded text-sm shadow-md transition-colors uppercase tracking-wide">
                                    ADD TO JOB TRACKER
                                </button>
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded text-sm shadow-md transition-colors uppercase tracking-wide">
                                    SCAN WITH YOUR RESUME
                                </button>
                            </div>
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20">
                             <div className="flex relative">
                                <Sparkles className="w-3 h-3 text-blue-500 absolute -top-1 -left-1" />
                                <span className="font-bold text-xl text-blue-700">J</span>
                             </div>
                        </div>
                        
                        {/* Background Decor to simulate page content behind */}
                        <div className="absolute -inset-10 bg-slate-100 rounded-2xl -z-10 border border-slate-200 opacity-50"></div>
                     </div>
                </div>

            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to land your dream job?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join 300,000+ job seekers who are getting hired faster with JobProMax.
          </p>
          <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all transform hover:-translate-y-1">
             Get Started for Free
          </button>
        </div>
      </section>

    </div>
  );
};

export default FeaturesPage;