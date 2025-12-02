
import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import { FaArrowRight, FaCopy, FaCheck } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "ram03krishna@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
       
       <h2 className="text-[12vw] leading-none font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter mix-blend-difference">
         SAY HELLO
       </h2>

       <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
         Looking for a frontend developer to bring your ideas to life? 
         I'm currently available for freelance projects and internships.
       </p>

       <div className="flex flex-col gap-6 items-center">
         <a 
           href={`mailto:${email}`}
           className="group relative inline-flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-xl font-bold hover:bg-primary dark:hover:bg-primary transition-colors duration-300"
         >
           <span>Let's Talk</span>
           <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
         </a>

         <button 
           onClick={handleCopy}
           className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium tracking-wide"
         >
           {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
           {copied ? "Copied to clipboard!" : "Copy email address"}
         </button>
       </div>

       <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {SOCIALS.map(social => (
            <a 
              key={social.platform} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group"
            >
              <span className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:scale-110 transition-all">
                 <social.icon size={20} />
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">{social.platform}</span>
            </a>
          ))}
       </div>

    </section>
  );
};

export default Contact;
