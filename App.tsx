import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ApplicationForm from './components/ApplicationForm';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';

type SubmittedDataType = {
  url: string;
  email: string;
  networkCode: string;
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<SubmittedDataType | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFormSubmit = async (data: SubmittedDataType) => {
    setIsSubmitting(true);
    setShowSuccessMessage(false);

    try {
      // --- IMPORTANT ---
      // In a real application, you would send the data to your backend here.
      // The backend server would then securely connect to your 'sliverst_1' database
      // and insert the data.

      /*
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle server errors (e.g., show an error message to the user)
        throw new Error('Failed to submit application');
      }
      */

      // To simulate a network delay, we'll wait for 1 second.
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Once the data is successfully saved in the backend, proceed to payment.
      setSubmittedData(data);
      setIsModalOpen(true);

    } catch (error) {
      console.error("Submission error:", error);
      // Here you would show an error message to the user
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentComplete = () => {
    setIsModalOpen(false);
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {showSuccessMessage && (
          <div className="container mx-auto px-6 py-8 text-center">
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md" role="alert">
              <p className="font-bold text-xl">Application Received!</p>
              <p className="mt-2">Thank you for your submission. We have received your details and will begin the review process shortly after payment confirmation. You will receive an update at {submittedData?.email} within 24-48 hours.</p>
            </div>
          </div>
        )}

        <HowItWorks />
        <ApplicationForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        <AboutUs />
        <FAQ />
        <Terms />
      </main>
      <Footer />

      {isModalOpen && submittedData && (
        <PaymentModal
          onClose={handleCloseModal}
          onPaymentComplete={handlePaymentComplete}
          email={submittedData.email}
        />
      )}
    </div>
  );
};

export default App;