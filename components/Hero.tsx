import React from 'react';
import { FileText, CheckCircle, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-visible bg-white selection:bg-blue-100 selection:text-blue-900 z-10">
      
      {/* 
        Aurora Mesh Gradient Background 
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Base Layer */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Aurora Blob 1: Top Left - Primary Blue */}
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/20 blur-[100px] animate-blob mix-blend-multiply"></div>
          
          {/* Aurora Blob 2: Top Right - Cyan/Teal */}
          <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-400/20 blur-[100px] animate-blob mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
          
          {/* Aurora Blob 3: Bottom/Center - Violet/Purple */}
          <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-violet-400/20 blur-[120px] animate-blob mix-blend-multiply" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-sm font-medium mb-8 hover:border-blue-300 transition-colors cursor-pointer shadow-sm hover:shadow-md">
           <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
           New: AI Cover Letter Generator
           <ArrowRight size={14} className="text-slate-400" />
        </div>

        {/* Headline - Refined Size */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] max-w-6xl mx-auto drop-shadow-sm">
          The Fastest Way To A <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-2">Perfect Resume</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          JobProMax helps you build a resume that beats the ATS and lands you more interviews. 
          Professional templates, AI-driven feedback, and instant formatting.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
           <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 ring-4 ring-blue-600/10">
              <FileText className="w-5 h-5" />
              Build My Resume
           </button>
           <button className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg">
              <Play className="w-5 h-5 text-slate-400 fill-slate-400" />
              Watch Demo
           </button>
        </div>

        {/* Trusted By Section - Re-added */}
        <div className="mb-16 md:mb-24">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-xl md:text-2xl font-bold font-serif text-slate-600">Google</div>
                <div className="text-xl md:text-2xl font-bold text-slate-600">Microsoft</div>
                <div className="text-xl md:text-2xl font-bold italic text-slate-600">Amazon</div>
                <div className="text-xl md:text-2xl font-bold tracking-tighter text-slate-600">Uber</div>
                <div className="text-xl md:text-2xl font-bold text-blue-600">Meta</div>
                <div className="text-xl md:text-2xl font-bold font-mono text-red-600">Netflix</div>
            </div>
        </div>

        {/* Dashboard Mockup - Overlapping Video Section */}
        {/* Added negative margin-bottom to pull it down over the next section */}
        <div className="relative mx-auto max-w-6xl md:-mb-32 lg:-mb-40 z-30">
            <div className="bg-slate-900 rounded-[1.5rem] shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/10 group cursor-pointer relative z-10 transform transition-transform duration-700 hover:scale-[1.01]">
                {/* Window Controls */}
                <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    <div className="ml-4 px-3 py-1 bg-slate-800 rounded-md text-[10px] text-slate-400 font-mono w-64 text-center border border-white/5 hidden sm:block">
                        jobpromax.com/builder
                    </div>
                </div>
                
                {/* App Interface Mockup - Auto-playing Video */}
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover opacity-90"
                      poster="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
                    >
                      {/* Placeholder video */}
                      <source src="https://assets.mixkit.co/videos/preview/mixkit-working-on-a-computer-keyboard-typing-1725-large.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
                    
                    {/* Floating Success Badge */}
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-4 animate-bounce-slow max-w-[200px] md:max-w-xs z-20">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-green-600" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm md:text-base font-bold text-slate-900">Resume Optimized</p>
                            <p className="text-xs md:text-sm text-slate-500">Ready for download</p>
                        </div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/50">
                             <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-blue-600 fill-blue-600 ml-1" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decorative Glow behind dashboard - subtly adjusted for new theme */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/30 via-violet-600/30 to-cyan-500/30 blur-3xl -z-10 rounded-[3rem] opacity-70"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;