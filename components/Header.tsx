import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <StarIcon className="w-8 h-8 text-slate-400" />
            <span className="text-2xl font-bold text-slate-800 tracking-wide">
              Silverstar <span className="text-sky-600">India</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-sky-600 font-medium transition">How It Works</a>
            <a href="#about-us" className="text-slate-600 hover:text-sky-600 font-medium transition">About Us</a>
            <a href="#faq" className="text-slate-600 hover:text-sky-600 font-medium transition">FAQ</a>
            <a href="#application-form" className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-5 rounded-full text-sm transition-transform transform hover:scale-105">
              Apply Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;