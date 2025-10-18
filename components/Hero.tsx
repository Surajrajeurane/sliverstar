
import React from 'react';

const Hero: React.FC = () => {
  
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
          Effortless AdX Approval for Your Website
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Stop waiting and start earning. Silverstar India fast-tracks your AdX approval, handling the entire process so you can focus on your content.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
