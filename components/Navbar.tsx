import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Animate navbar entry
    gsap.fromTo(
      ".nav-container",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="nav-container fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between gap-8 md:gap-12 min-w-[300px] max-w-5xl">
          
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold font-display tracking-tighter text-white hover:text-primary transition-colors">
            RKJ<span className="text-primary">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
             <button onClick={() => handleNavClick('#contact')} className="px-5 py-2 bg-primary text-background font-bold text-sm rounded-full hover:bg-white transition-colors">
               Let's Talk
             </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-2"
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div 
        className={`fixed inset-0 bg-background/98 z-[60] flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <HiX size={40} />
        </button>

        <div className="flex flex-col space-y-8 text-center">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-4xl font-display font-bold text-slate-300 hover:text-primary transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;