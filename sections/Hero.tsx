
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants';
import InteractiveGrid from '../components/InteractiveGrid';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reveal visual (Grid side)
      tl.from(".hero-visual", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Text Reveal
      tl.from(".hero-content > *", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.8");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-6">

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

        {/* Left Column: Interactive Grid (Visual) - Hidden on Mobile */}
        <div className="hero-visual order-1 hidden lg:block w-full h-[60vh] lg:h-[80vh] relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/10 pointer-events-none z-10" />
          <InteractiveGrid />
        </div>

        {/* Right Column: Text */}
        <div className="hero-content order-2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">

          <div className="mb-6">
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-primary mb-2 uppercase flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for Work
            </h2>
          </div>

          <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-slate-900 dark:text-white mb-6">
            <span className="block text-[12vw] md:text-[5vw]">
              <span className="inline-block">RAM</span>{' '}
              <span className="inline-block">KRISHNA</span>
            </span>
            <span className="block text-[12vw] md:text-[5vw] text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              JHA
            </span>
          </h1>

          <p className="text-lg md:text-l text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-lg mb-10">
            {PERSONAL_INFO.summary.join(" ")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ram03krishna@gmail.com"
              className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold tracking-wide transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl"
            >
              Let's Talk
              <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/ramkrishnajha5/Portfolio/raw/main/assets/Ram-Krishna-Jha-Resume.pdf"
              download="Ram-Krishna-Jha-Resume.pdf"
              className="px-8 py-4 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-full font-bold tracking-wide hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
            >
              Download Resume
              <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
