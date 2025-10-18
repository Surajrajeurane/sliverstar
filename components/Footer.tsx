import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#terms" className="hover:text-white transition">Terms of Service</a>
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>
        <p>&copy; {currentYear} Silverstar India. All Rights Reserved.</p>
        <p className="text-sm mt-2">A streamlined service to help you grow your digital presence.</p>
      </div>
    </footer>
  );
};

export default Footer;