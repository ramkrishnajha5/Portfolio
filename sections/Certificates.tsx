
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Certifications</h2>
      </div>

      <div className="flex flex-col gap-32">
        {CERTIFICATES.map((cert, index) => (
          // Sticky Stacking Effect
          <div 
            key={cert.id} 
            className="sticky top-32 group"
          >
            <div 
              className="bg-white dark:bg-[#0f0f0f] border border-black/10 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2"
              style={{
                transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                zIndex: index + 1
              }}
            >
              {/* Decorative Number */}
              <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-bold text-9xl text-slate-900 dark:text-white select-none pointer-events-none">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {cert.platform}
                </div>
                
                <h3 className="text-2xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 max-w-lg">
                  {cert.name}
                </h3>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  {cert.institution}
                </p>

                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-800 dark:text-white border-b border-black dark:border-white pb-1 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-colors"
                >
                  View Credential <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
