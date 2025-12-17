import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-600">
      <div className="bg-slate-50 pt-40 pb-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: October 24, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed mb-4">
                Welcome to JobProMax. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. The Data We Collect About You</h2>
            <p className="leading-relaxed mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Profile Data</strong> includes your username and password, resumes/CVs uploaded, job applications tracked, interests, preferences, feedback and survey responses.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Personal Data</h2>
            <p className="leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>To provide our AI resume analysis and job matching services.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="leading-relaxed mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Legal Rights</h2>
            <p className="leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Details</h2>
            <p className="leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@jobpromax.com" className="text-blue-600 hover:underline">privacy@jobpromax.com</a>.
            </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;