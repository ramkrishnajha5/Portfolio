import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-400 mb-2">
          &copy; {currentYear} Ram Krishna Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;