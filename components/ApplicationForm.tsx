import React, { useState } from 'react';

interface ApplicationFormProps {
  onSubmit: (data: { url: string; email: string; networkCode: string; }) => void;
  isSubmitting: boolean;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit, isSubmitting }) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [networkCode, setNetworkCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !email.trim() || !networkCode.trim()) {
      setError('Please fill out all fields.');
      return;
    }
    // Simple regex for URL validation
    if (!/^[^\s]+\.[^\s]+$/.test(url)) {
      setError('Please enter a valid website URL.');
      return;
    }
    // Simple regex for email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Validation for network code (must be numbers)
    if (!/^\d+$/.test(networkCode)) {
        setError('Please enter a valid numeric network code.');
        return;
    }
    setError('');
    onSubmit({ url, email, networkCode });
    // Don't clear fields immediately, wait for submission success
  };

  return (
    <section id="application-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ready to Start?</h2>
            <p className="text-lg text-slate-600">Submit your website details below to begin the approval process.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-xl shadow-lg space-y-6">
            {error && <p className="text-red-500 bg-red-100 p-3 rounded-md">{error}</p>}
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-2">
                Website URL
              </label>
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-150 ease-in-out"
                disabled={isSubmitting}
              />
            </div>
             <div>
              <label htmlFor="networkCode" className="block text-sm font-medium text-slate-700 mb-2">
                Google Ad Manager Network Code
              </label>
              <input
                type="text"
                id="networkCode"
                value={networkCode}
                onChange={(e) => setNetworkCode(e.target.value)}
                placeholder="e.g., 12345678"
                pattern="[0-9]*"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-150 ease-in-out"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-150 ease-in-out"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-md flex items-center justify-center disabled:bg-slate-500 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Proceed to Payment'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;