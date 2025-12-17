import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-600">
      <div className="bg-slate-50 pt-40 pb-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms and Conditions</h1>
            <p className="text-slate-500">Last updated: October 24, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed mb-4">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and JobProMax ("we," "us" or "our"), concerning your access to and use of the JobProMax website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p className="leading-relaxed">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
            <p className="leading-relaxed mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h2>
            <p className="leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subscriptions and Payments</h2>
            <p className="leading-relaxed mb-4">
                You agree to pay all fees and charges associated with your subscription. We reserve the right to change the price of any subscription or service at any time. All payments are non-refundable unless otherwise stated in our Refund Policy.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Disclaimer</h2>
            <p className="leading-relaxed mb-4">
                The Site is provided on an as-is and as-available basis. You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof.
            </p>
            <p className="leading-relaxed">
                We make no warranties or representations about the accuracy or completeness of the Site's content or the content of any websites linked to the Site.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site.
            </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;