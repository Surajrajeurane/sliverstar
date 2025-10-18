import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800 focus:outline-none"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <div className="prose text-slate-600">
                    {children}
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Have questions? We've got answers.</p>
                    </div>
                    <div>
                        <FAQItem question="What is Google AdX?">
                            <p>Google Ad Exchange (AdX) is a premium marketplace for buying and selling advertising space. It provides access to a larger pool of advertisers, including major brands, which often results in higher CPMs and overall revenue compared to standard AdSense.</p>
                        </FAQItem>
                        <FAQItem question="What are the eligibility requirements?">
                            <p>While requirements can be strict, they generally include having high-quality, original content, significant monthly traffic (often 500k+ pageviews), and adherence to all Google Publisher Policies. We help assess your site's readiness and guide you through the process.</p>
                        </FAQItem>
                        <FAQItem question="How long does the approval process take?">
                            <p>After you submit your details and complete the payment, our team begins the review immediately. The entire process typically takes between 24 to 72 hours, though it can vary depending on Google's review queue. We will keep you updated via email.</p>
                        </FAQItem>
                        <FAQItem question="What if my application is rejected?">
                            <p>If your application is not approved, we will provide you with the specific reasons for the rejection and actionable feedback on what to improve. The platform fee is for the service of processing and managing your application and is non-refundable.</p>
                        </FAQItem>
                        <FAQItem question="Why is there a $20 platform fee?">
                             <p>The nominal $20 fee covers the administrative and expert review costs associated with preparing, submitting, and managing your application. It allows us to dedicate resources to ensure your site has the best possible chance of approval and to provide personalized support throughout the process.</p>
                        </FAQItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
