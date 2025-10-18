import React from 'react';

const Terms: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div id="terms" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Terms of Service</h2>
            <div className="prose text-slate-600">
              <p>By using the services of Silverstar India ("Service"), you agree to be bound by these Terms of Service. Our service consists of managing and submitting your website for Google AdX approval. The platform fee is for the service rendered and is non-refundable, regardless of the application outcome. We do not guarantee approval, as the final decision rests with Google. You must ensure your website complies with all Google Publisher Policies.</p>
            </div>
          </div>
          <div id="privacy" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Privacy Policy</h2>
            <div className="prose text-slate-600">
              <p>We collect information you provide, such as your website URL, email address, and network code, solely for the purpose of providing our AdX approval service. We do not share your personal information with third parties, except as necessary to submit your application to Google. We are committed to protecting your data and privacy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
