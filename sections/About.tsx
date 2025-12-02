
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../constants';
import { FaHeart, FaSearch } from 'react-icons/fa';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">About Me</h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Beyond the Code.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Main Bio - Spans 2 cols */}
        <div className="bento-item md:col-span-2 p-8 md:p-12 rounded-3xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-none">
          <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Who I Am</h4>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
        </div>

        {/* Hobbies - Expanded */}
        <div className="bento-item p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col justify-between h-full shadow-sm dark:shadow-none">
           <div>
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400">
                 <FaHeart size={16} />
               </div>
               <h4 className="text-xl font-bold text-slate-900 dark:text-white">When I'm not coding</h4>
             </div>
             <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
               I find inspiration in the world around me. I’m an avid movie buff and a cricket enthusiast. 
               Nature is my reset button—I love exploring mountains, lush greenery, and chasing waterfalls, 
               especially when the winter chill sets in. These experiences keep my creativity flowing and perspective fresh.
             </p>
           </div>
           
           <div className="flex flex-wrap gap-2 mt-auto">
             <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-black/40 text-sm text-slate-600 dark:text-slate-300">Movies</span>
             <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-black/40 text-sm text-slate-600 dark:text-slate-300">Cricket</span>
             <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-black/40 text-sm text-slate-600 dark:text-slate-300">Mountains</span>
             <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-black/40 text-sm text-slate-600 dark:text-slate-300">Winter Vibes</span>
           </div>
        </div>

        {/* Looking For - New Card to fill space */}
        <div className="bento-item p-8 md:p-10 rounded-3xl bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900/40 dark:to-black border border-black/5 dark:border-white/10 flex flex-col justify-between h-full group shadow-sm dark:shadow-none">
           <div>
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                 <FaSearch size={16} />
               </div>
               <h4 className="text-xl font-bold text-slate-900 dark:text-white">What I'm Looking For</h4>
             </div>
             <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
               I am actively seeking <strong>internship opportunities</strong> and <strong>freelance projects</strong>. 
               I want to join a team where I can contribute to meaningful products, solve real-world problems, 
               and continue growing as a developer.
             </p>
           </div>
           
           <div className="mt-8">
              <a href="#contact" className="text-primary font-bold hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
                Let's work together <span className="text-xl">→</span>
              </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;
