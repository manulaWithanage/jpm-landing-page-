import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, absolutely. You can cancel your subscription from your account settings at any time. You'll retain access to premium features until the end of your current billing period."
    },
    {
      question: "How does the AI resume scanning work?",
      answer: "Our AI analyzes your resume against millions of job descriptions and industry standards. It identifies keyword gaps, formatting issues, and content improvements to increase your chances of passing ATS (Applicant Tracking Systems)."
    },
    {
      question: "Is my personal data safe?",
      answer: "Security is our top priority. We use bank-level encryption to protect your data. We never share your personal information with third parties without your explicit consent."
    },
    {
      question: "What is the difference between the Free and Premium plans?",
      answer: "The Free plan gives you a taste of our tools with limited scans and job tracking. Premium unlocks unlimited AI scans, deep insights, automated cover letter generation, and our exclusive networking features."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with our premium features. No questions asked."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Have questions? We're here to help.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-blue-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-600 flex-shrink-0 ml-4" size={20} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0 ml-4" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-500 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;