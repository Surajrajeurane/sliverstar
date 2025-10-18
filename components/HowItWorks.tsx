import React from 'react';

// Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const StepIcon: React.FC<{ icon: React.ReactNode; step: number; title: string; description: string }> = ({ icon, step, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="relative mb-4">
      <div className="absolute -inset-2 bg-slate-200 rounded-full blur-sm opacity-50"></div>
      <div className="relative flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-sky-600">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{step}. {title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-slate-100 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Simple Steps to AdX Approval</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our streamlined process makes getting AdX approval quick and hassle-free.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <StepIcon
            step={1}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>}
            title="Submit Your Site"
            description="Fill out our simple form with your website URL and contact details. It only takes a minute."
          />
          <StepIcon
            step={2}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>}
            title="Pay the Fee"
            description="Complete the secure payment of our nominal $20 platform fee using UPI or Crypto."
          />
          <StepIcon
            step={3}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="Get Approved"
            description="Our experts review your application and work to get it approved. We'll notify you via email."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;