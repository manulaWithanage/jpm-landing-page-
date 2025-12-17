import React from 'react';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <div className="bg-slate-50 pt-40 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
             Have questions about our pricing, features, or enterprise solutions? We're here to help.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                        Fill out the form and our team will get back to you within 24 hours. For immediate assistance, check out our Help Center or FAQ.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Email Us</h3>
                                <p className="text-slate-500 mb-1">General Inquiries</p>
                                <a href="mailto:hello@jobpromax.com" className="text-blue-600 font-medium hover:underline">hello@jobpromax.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Live Chat</h3>
                                <p className="text-slate-500 mb-1">Available Mon-Fri, 9am-5pm PST</p>
                                <button className="text-blue-600 font-medium hover:underline text-left">Start a chat</button>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Office</h3>
                                <p className="text-slate-500">
                                    123 Market Street, Suite 400<br/>
                                    San Francisco, CA 94105
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="jane@example.com" />
                        </div>

                        <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">Topic</label>
                             <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                                <option>General Inquiry</option>
                                <option>Billing Support</option>
                                <option>Enterprise Sales</option>
                                <option>Partnership</option>
                             </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;