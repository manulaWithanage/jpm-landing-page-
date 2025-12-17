import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Layout, FileText, Sparkles, Send, PenTool, X, Zap, CheckCircle, ChevronDown, TrendingUp, Filter, Bell, UserPlus, LogOut, Globe, Search } from 'lucide-react';

interface FeaturesProps {
  onNavigate: (page: string, hash?: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      title: "AI Resume Scanner",
      id: "resume-scan",
      tagline: "Beat the Bots",
      tagColor: "bg-red-100 text-red-700",
      body: "Instantly analyze your resume against any job description to uncover missing keywords and fix formatting errors.",
      btnText: "Scan Now",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 w-full h-full relative overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                            <path className="text-green-500" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-slate-900">72%</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-900">Match Score</div>
                        <div className="text-[8px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">Good Match</div>
                    </div>
                </div>
                <div className="text-[8px] text-slate-400 font-medium hidden sm:block">Sr. Product Designer</div>
            </div>
            
            {/* Content Mockup - Scaled down from FeaturesPage */}
            <div className="space-y-2 flex-1 overflow-hidden">
                {/* Hard Skills Gap */}
                <div className="p-2 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-3 h-3 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[8px] font-bold border border-red-200">!</div>
                        <div className="text-[9px] font-bold text-slate-900">Hard Skills Gap</div>
                    </div>
                    <div className="text-[8px] text-slate-500 mb-1">Missing keywords:</div>
                    <div className="flex gap-1 flex-wrap">
                        <span className="text-[7px] font-bold text-red-700 bg-white border border-red-200 px-1 rounded">Agile</span>
                        <span className="text-[7px] font-bold text-red-700 bg-white border border-red-200 px-1 rounded">Figma</span>
                        <span className="text-[7px] font-bold text-red-700 bg-white border border-red-200 px-1 rounded">Prototyping</span>
                    </div>
                </div>

                {/* Soft Skills Gap */}
                <div className="p-2 bg-orange-50 rounded-lg border border-orange-100">
                     <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-3 h-3 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[8px] font-bold border border-orange-200">!</div>
                        <div className="text-[9px] font-bold text-slate-900">Soft Skills Gap</div>
                    </div>
                    <div className="flex gap-1">
                        <span className="text-[7px] font-bold text-orange-700 bg-white border border-orange-200 px-1 rounded">Mentorship</span>
                        <span className="text-[7px] font-bold text-orange-700 bg-white border border-orange-200 px-1 rounded">Collab</span>
                    </div>
                </div>

                {/* Formatting */}
                <div className="flex items-start gap-1.5 p-2 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircle size={10} className="text-green-600 mt-0.5" />
                    <div>
                       <div className="text-[9px] font-bold text-slate-900">Formatting Passed</div>
                       <div className="text-[7px] text-slate-500 leading-tight">Margins & fonts ATS compliant.</div>
                    </div>
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Smart Resume Builder",
      id: "resume-builder",
      tagline: "Design That Hires",
      tagColor: "bg-purple-100 text-purple-700",
      body: "Create from scratch, import an old file, or use AI to rewrite your bullet points for specific job targets.",
      btnText: "Create Resume",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-2 border-b border-slate-100 bg-slate-50/50">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-[6px] font-bold text-slate-300 uppercase tracking-widest">Builder</div>
            </div>
            
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-8 border-r border-slate-100 flex flex-col items-center gap-3 pt-3 bg-slate-50/30">
                    <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><Layout size={10} /></div>
                    <div className="w-5 h-5 text-slate-300 flex items-center justify-center"><FileText size={10} /></div>
                    <div className="w-5 h-5 text-slate-300 flex items-center justify-center"><Zap size={10} /></div>
                </div>
                
                {/* Main Canvas */}
                <div className="flex-1 p-3 bg-slate-50/50 relative">
                    <div className="bg-white shadow-sm w-full h-full rounded p-3 relative transform scale-100 origin-top-left">
                        {/* Document Skeleton */}
                        <div className="h-2 w-1/3 bg-slate-800 rounded mb-2"></div>
                        <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
                        <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
                        <div className="h-1 w-2/3 bg-slate-100 rounded mb-3"></div>
                        
                        <div className="h-1.5 w-1/4 bg-slate-300 rounded mb-1.5"></div>
                        <div className="space-y-1">
                            <div className="flex gap-1">
                                <div className="w-0.5 bg-blue-500 rounded-full"></div>
                                <div className="h-1 w-full bg-slate-100 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-0.5 bg-blue-500 rounded-full"></div>
                                <div className="h-1 w-5/6 bg-slate-100 rounded"></div>
                            </div>
                        </div>

                        {/* Floating AI Tooltip */}
                        <div className="absolute bottom-2 right-2 bg-slate-900 text-white p-2 rounded-lg shadow-lg w-32 animate-bounce-slow">
                            <div className="flex items-center gap-1 mb-1">
                               <Sparkles size={8} className="text-purple-400" />
                               <span className="font-bold text-[8px]">AI Enhancement</span>
                            </div>
                            <p className="text-[6px] text-slate-300 mb-1">"Led team" &rarr; "Orchestrated initiative"</p>
                            <div className="w-full h-0.5 bg-slate-700 rounded-full overflow-hidden">
                               <div className="w-3/4 h-full bg-purple-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Job Tracker",
      id: "job-tracker",
      tagline: "Your Career CRM",
      tagColor: "bg-indigo-100 text-indigo-700",
      body: "Visualize your job search. Organize applications into a drag-and-drop board and track your interview pipeline.",
      btnText: "View Board",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 flex-shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                            <path className="text-blue-600" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-[8px] text-slate-900">40%</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-900 leading-tight">Project Manager</div>
                        <div className="text-[8px] text-slate-500">HDR</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                     <div className="hidden sm:flex flex-col items-end">
                         <span className="text-[6px] text-slate-400 mb-0.5">Select a resume</span>
                         <div className="border border-slate-200 rounded px-1.5 py-0.5 text-[7px] text-slate-600 flex items-center gap-1 bg-slate-50">
                             Noah Charnow Old.pdf <ChevronDown size={8} className="text-slate-400"/>
                         </div>
                     </div>
                     <X size={10} className="text-slate-300" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 px-3 gap-3 bg-white">
                {['Job Details', 'Job Insights', 'Resume Analysis', 'Notes'].map((tab, i) => (
                    <div key={tab} className={`py-2 text-[7px] font-bold border-b-2 transition-colors ${tab === 'Job Insights' ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent'}`}>
                        {tab}
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="p-3 grid grid-cols-2 gap-3 flex-1 bg-slate-50/30 overflow-hidden">
                {/* Left: Salary */}
                <div className="flex flex-col gap-1.5">
                     <h4 className="text-[8px] font-bold text-slate-900">Salary Benchmarking</h4>
                     <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-1 flex-1">
                        <p className="text-[7px] text-slate-500 leading-tight">Based on the role and location, the estimated salary is:</p>
                        <p className="text-[10px] sm:text-[11px] font-bold text-green-600 my-1">$110,000 - $85,000</p>
                        <p className="text-[6px] text-slate-400 mt-auto">Data from similar roles in the area.</p>
                     </div>
                </div>

                {/* Right: Interview Questions */}
                <div className="flex flex-col gap-1.5 relative">
                     <div className="flex items-center gap-1">
                         <Sparkles size={8} className="text-blue-600" />
                         <h4 className="text-[8px] font-bold text-slate-900">AI Interview Questions</h4>
                     </div>
                     <div className="space-y-2 overflow-hidden">
                         {/* Card 1 */}
                         <div className="bg-white p-2 rounded-lg border border-blue-200 shadow-sm relative">
                             <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-500 rounded-r"></div>
                             <h5 className="text-[7px] font-bold text-blue-700 mb-1 pl-1">Project and Team Leadership</h5>
                             <p className="text-[6px] text-slate-500 leading-relaxed pl-1">Can you describe your experience leading multidisciplinary teams and managing projects...?</p>
                         </div>
                         {/* Card 2 */}
                         <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm opacity-70">
                             <h5 className="text-[7px] font-bold text-slate-800 mb-1">Client and Stakeholder Management</h5>
                             <p className="text-[6px] text-slate-500 leading-relaxed">How have you built and maintained strong client relationships...</p>
                         </div>
                     </div>
                     {/* Scrollbar indication */}
                     <div className="absolute right-[-2px] top-4 bottom-0 w-0.5 bg-slate-200 rounded-full">
                          <div className="h-1/3 bg-slate-300 w-full rounded-full"></div>
                     </div>
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Networking Assistant",
      id: "networking",
      tagline: "Perfect Outreach",
      tagColor: "bg-pink-100 text-pink-700",
      body: "Generate personalized connection requests and follow-up messages to recruiters without the writer's block.",
      btnText: "Write Message",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full overflow-hidden flex flex-col">
            <div className="bg-slate-50/50 p-2 border-b border-slate-200 flex justify-between items-center">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-[8px] font-bold text-slate-400 uppercase">Message Gen</div>
            </div>
            <div className="p-3 space-y-2 flex-1 flex flex-col justify-center">
                <div className="flex gap-2">
                    <div className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded text-[8px] font-bold">Connect</div>
                    <div className="bg-white border border-slate-200 text-slate-500 px-2 py-1 rounded text-[8px]">Follow-up</div>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                    <div className="text-[8px] font-bold text-slate-400 mb-1">TO: RECRUITER</div>
                    <div className="space-y-1">
                        <div className="h-1 w-full bg-slate-200 rounded"></div>
                        <div className="h-1 w-full bg-slate-200 rounded"></div>
                        <div className="h-1 w-3/4 bg-slate-200 rounded"></div>
                    </div>
                </div>
                <button className="w-full bg-slate-900 text-white py-1.5 rounded text-[8px] font-bold flex items-center justify-center gap-1">
                    <Sparkles size={8} className="text-yellow-400" /> Generate
                </button>
            </div>
        </div>
      )
    },
    {
      title: "48-Hour Alerts",
      id: "job-alerts",
      tagline: "Fresh Opportunities",
      tagColor: "bg-orange-100 text-orange-700",
      body: "Get a curated list of high-match jobs that refreshes every two days. Stop scrolling, start applying.",
      btnText: "See Alerts",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full overflow-hidden p-4 relative flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 text-[10px] sm:text-xs">Top Matches</h3>
                <span className="bg-orange-50 text-orange-500 text-[8px] font-bold px-1.5 py-0.5 rounded border border-orange-100">Live</span>
            </div>
            <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 1 ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
                        <div className="w-6 h-6 bg-slate-50 rounded border border-slate-100 flex items-center justify-center text-[5px] font-bold text-slate-400 flex-shrink-0">LOGO</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-1.5 bg-slate-800 rounded-full w-3/4"></div>
                            <div className="h-1 bg-slate-200 rounded-full w-1/2"></div>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <div className="text-green-600 font-bold text-[8px]">98%</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )
    },
    {
      title: "Smart Match Board",
      id: "job-board",
      tagline: "Quality Over Quantity",
      tagColor: "bg-green-100 text-green-700",
      body: "A job board that sorts listings by your \"Match Score\" rather than date posted. Find where you fit best.",
      btnText: "Find Jobs",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full overflow-hidden p-3 flex flex-col justify-center">
            <div className="flex gap-1 mb-2 overflow-hidden">
                <div className="px-2 py-0.5 bg-slate-900 text-white rounded-full text-[8px] font-bold whitespace-nowrap">Best Fit</div>
                <div className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[8px] whitespace-nowrap">Remote</div>
            </div>
            <div className="space-y-2">
                <div className="border border-green-200 bg-green-50/30 rounded-lg p-2 relative">
                    <div className="absolute -top-1.5 right-2 bg-green-600 text-white text-[6px] font-bold px-1 rounded">99% MATCH</div>
                    <div className="flex justify-between items-start mb-1">
                        <div>
                            <div className="h-2 w-16 bg-slate-900 rounded mb-1"></div>
                            <div className="h-1.5 w-10 bg-slate-400 rounded"></div>
                        </div>
                        <div className="w-4 h-4 bg-black text-white rounded flex items-center justify-center text-[6px]">S</div>
                    </div>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-6 bg-white border border-slate-200 rounded"></div>
                        <div className="h-1.5 w-8 bg-white border border-slate-200 rounded"></div>
                    </div>
                </div>
                <div className="border border-slate-100 rounded-lg p-2 opacity-60">
                    <div className="flex justify-between items-start mb-1">
                        <div>
                            <div className="h-2 w-14 bg-slate-800 rounded mb-1"></div>
                            <div className="h-1.5 w-12 bg-slate-400 rounded"></div>
                        </div>
                        <div className="w-4 h-4 bg-red-400 text-white rounded flex items-center justify-center text-[6px]">A</div>
                    </div>
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Cover Letter Writer",
      id: "cover-letter",
      tagline: "Done in Seconds",
      tagColor: "bg-cyan-100 text-cyan-700",
      body: "Turn your resume and a job description into a persuasive, tailored cover letter instantly.",
      btnText: "Draft Letter",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center scale-90">
            {/* Doc 1 */}
            <div className="absolute left-4 top-4 w-12 h-16 bg-white border border-slate-200 shadow-sm rounded p-1 transform -rotate-6 z-0">
                <div className="space-y-1">
                    <div className="h-1 bg-slate-200 w-1/2 rounded"></div>
                    <div className="h-0.5 bg-slate-100 w-full rounded"></div>
                    <div className="h-0.5 bg-slate-100 w-full rounded"></div>
                </div>
            </div>
            {/* Doc 2 */}
            <div className="absolute right-4 top-4 w-12 h-16 bg-white border border-slate-200 shadow-sm rounded p-1 transform rotate-6 z-0">
                <div className="space-y-1">
                    <div className="h-1 bg-blue-100 w-1/2 rounded"></div>
                    <div className="h-0.5 bg-slate-100 w-full rounded"></div>
                    <div className="h-0.5 bg-slate-100 w-full rounded"></div>
                </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md">
                <ArrowRight size={12} className="text-cyan-500" />
            </div>
            {/* Final Doc */}
            <div className="absolute bottom-2 w-20 h-24 bg-white border border-slate-200 shadow-lg rounded-lg p-2 z-20 flex flex-col">
                <div className="flex justify-between items-center mb-1">
                    <div className="w-4 h-4 bg-cyan-100 rounded-full flex items-center justify-center"><PenTool size={6} className="text-cyan-600" /></div>
                </div>
                <div className="space-y-1">
                    <div className="h-1 bg-slate-800 w-1/3 rounded"></div>
                    <div className="h-0.5 bg-slate-200 w-full rounded"></div>
                    <div className="h-0.5 bg-slate-200 w-full rounded"></div>
                    <div className="h-0.5 bg-slate-200 w-full rounded"></div>
                </div>
                <div className="mt-auto self-end text-[6px] font-bold text-cyan-600 bg-cyan-50 px-1 rounded">Perfect</div>
            </div>
        </div>
      )
    },
    {
      title: "AI Career Coach",
      id: "career-coach",
      tagline: "Expert Advice",
      tagColor: "bg-violet-100 text-violet-700",
      body: "Ask anything—from salary negotiation tips to interview prep—based on your specific resume data.",
      btnText: "Start Chat",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full overflow-hidden flex flex-col">
            <div className="bg-violet-600 p-2 flex items-center gap-2">
                <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-white"><Sparkles size={8} /></div>
                <div className="text-white font-bold text-[10px]">Coach</div>
            </div>
            <div className="flex-1 p-2 bg-slate-50/50 space-y-2 overflow-hidden flex flex-col justify-center">
                <div className="flex justify-end">
                    <div className="bg-violet-600 text-white p-1.5 rounded-l-lg rounded-tr-lg text-[8px] max-w-[85%] shadow-sm">
                        Salary negotiation tips?
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="bg-white text-slate-700 p-1.5 rounded-r-lg rounded-tl-lg text-[8px] max-w-[90%] shadow-sm border border-slate-200">
                        <p className="mb-1">Based on SF market data:</p>
                        <p className="font-bold text-violet-600">$145k - $165k</p>
                    </div>
                </div>
            </div>
            <div className="p-2 border-t border-slate-100 bg-white flex gap-1">
                <div className="flex-1 bg-slate-100 rounded-full h-5"></div>
                <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center text-white"><Send size={8} /></div>
            </div>
        </div>
      )
    },
    {
      title: "Chrome Extension",
      id: "extension",
      tagline: "Analyze Anywhere",
      tagColor: "bg-slate-200 text-slate-700",
      body: "Bring JobProMax to LinkedIn & Indeed. Scan jobs and save them to your tracker with one click.",
      btnText: "Install Now",
      graphic: (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full p-2 relative flex flex-col items-center justify-center">
            {/* Extension Window */}
            <div className="w-4/5 bg-white rounded-lg shadow-md border border-slate-200 p-2 z-10">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-0.5">
                        <Sparkles size={6} className="text-blue-500" />
                        <span className="font-bold text-[8px] text-blue-600">JobProMax</span>
                    </div>
                    <X size={8} className="text-slate-400" />
                </div>
                <div className="border border-slate-100 rounded p-1.5 mb-1.5">
                    <div className="h-1.5 w-2/3 bg-slate-800 rounded mb-1"></div>
                    <div className="h-1 w-full bg-slate-200 rounded mb-0.5"></div>
                    <div className="h-1 w-3/4 bg-slate-200 rounded"></div>
                </div>
                <div className="h-4 w-full bg-blue-500 rounded flex items-center justify-center text-[6px] text-white font-bold">ADD TO TRACKER</div>
            </div>
            {/* Floating Bubble */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20">
                <span className="font-bold text-[10px] text-blue-600">J</span>
            </div>
            {/* Background lines representing web page */}
            <div className="absolute inset-0 z-0 p-2 opacity-10">
                <div className="space-y-2">
                    <div className="h-2 bg-slate-800 w-1/4 rounded"></div>
                    <div className="h-32 bg-slate-400 w-full rounded"></div>
                </div>
            </div>
        </div>
      )
    }
  ];

  // Auto-scroll Effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      // Only auto-scroll if user is not interacting
      if (!isDown && !isPaused) {
        // If we've scrolled past the first set (seamless loop point), reset
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
          scrollContainer.scrollLeft = 0;
        } else {
          // Scroll speed
          scrollContainer.scrollLeft += 0.5;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDown, isPaused]);

  // Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Everything you need to <span className="text-blue-600">get hired</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Discover our AI-powered tools designed to optimize every step of your job search journey. 
            <span className="hidden md:inline"> Drag to explore all features.</span>
          </p>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-12 cursor-grab active:cursor-grabbing scrollbar-hide select-none pt-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
      >
        {/* Render list twice for seamless loop */}
        {[...features, ...features].map((feature, index) => (
          <div 
            key={index} 
            className="min-w-[300px] md:min-w-[340px] bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col h-[500px] hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex-shrink-0 group"
          >
            {/* Top Content */}
            <div className="mb-6">
              <span className={`inline-block ${feature.tagColor} text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide`}>
                {feature.tagline}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm line-clamp-3">
                {feature.body}
              </p>
            </div>
            
            {/* Graphic Area - Now flex-1 to fill space and remove whitespace gap */}
            <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-center items-center overflow-hidden mb-6 relative group-hover:bg-blue-50/30 transition-colors w-full">
               {feature.graphic}
            </div>

            {/* Action Button */}
            <button 
              onClick={() => onNavigate('features', feature.id)}
              className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm"
            >
              {feature.btnText} <ArrowRight size={16} />
            </button>
          </div>
        ))}
        
        {/* Spacer for right padding in scroll view */}
        <div className="w-2 flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Features;