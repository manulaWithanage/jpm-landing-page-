import React from 'react';
import { Calendar, Clock, Video, ArrowRight, X } from 'lucide-react';

interface BookTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookTimeModal: React.FC<BookTimeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const team = [
    {
      name: 'Yocelyn',
      role: 'Client Success Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      description: 'Expert in resume strategy, career coaching, and maximizing your JobProMax subscription.',
      availability: 'Mon - Fri, 9am - 5pm EST'
    },
    {
      name: 'Manny',
      role: 'Technical Support Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      description: 'Specialist in account setup, technical troubleshooting, and enterprise integrations.',
      availability: 'Mon - Fri, 10am - 6pm EST'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
         <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500 transition-colors z-20"
         >
            <X size={24} />
         </button>
         
         <div className="p-8 md:p-12">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
                    Schedule a Meeting
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                    We're Here to <span className="text-blue-600">Help</span>
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Choose a team member below to schedule a 1-on-1 video consultation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.map((member, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
                        <div className="relative mb-6">
                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
                        
                        <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                            {member.description}
                        </p>

                        <div className="w-full space-y-4 mt-auto">
                            <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                                <div className="flex items-center gap-1">
                                    <Video size={14} /> Zoom
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} /> 30 Min
                                </div>
                            </div>

                            <button className="w-full bg-slate-900 text-white hover:bg-blue-600 font-bold py-3.5 rounded-xl shadow-lg transition-all transform group-hover:-translate-y-1 flex items-center justify-center gap-2">
                                Book with {member.name} <ArrowRight size={18} />
                            </button>
                            
                            <p className="text-xs text-slate-400">
                                {member.availability}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                 <p className="text-slate-400 text-sm">Need to manage an existing appointment? <button className="text-blue-600 font-bold hover:underline">Click here</button></p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BookTimeModal;