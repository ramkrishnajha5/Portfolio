import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../constants';
import SpotlightCard from '../components/SpotlightCard';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaRobot
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const iconMap: any = {
  "Frontend": FaCode,
  "Backend & APIs": FaServer,
  "Databases": FaDatabase,
  "Tools & Other": FaTools
};

// Skill-specific icons with their brand colors
const skillIconMap: { [key: string]: { icon: any, color: string } } = {
  "HTML": { icon: FaHtml5, color: "text-orange-600" },
  "CSS": { icon: FaCss3Alt, color: "text-blue-600" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-500" },
  "Bootstrap": { icon: FaBootstrap, color: "text-purple-600" },
  "JavaScript": { icon: FaJs, color: "text-yellow-500" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-600" },
  "React": { icon: FaReact, color: "text-cyan-400" },
  "GSAP": { icon: FaCode, color: "text-green-500" },
  "Express.js": { icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
  "REST APIs": { icon: TbApi, color: "text-indigo-500" },
  "MySQL": { icon: SiMysql, color: "text-blue-700" },
  "MongoDB": { icon: SiMongodb, color: "text-green-600" },
  "Firebase": { icon: SiFirebase, color: "text-yellow-600" },
  "Git": { icon: FaGitAlt, color: "text-orange-600" },
  "GitHub": { icon: FaGithub, color: "text-gray-800 dark:text-white" },
  "AI Tools": { icon: FaRobot, color: "text-purple-500" }
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Animate badges in each card separately
      const skillCards = document.querySelectorAll(".skill-card");
      skillCards.forEach((card) => {
        const badges = card.querySelectorAll(".skill-badge");

        // Set initial state for badges to ensure they're visible
        gsap.set(badges, { opacity: 1, scale: 1, y: 0 });

        // Animate badges within this card
        gsap.fromTo(badges,
          {
            scale: 0.8,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: {
              amount: 1, // 1 second for each card's badges
              from: "start",
              ease: "power2.out"
            },
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              toggleActions: "restart none none reset",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-primary dark:text-primary text-primary-dark uppercase mb-4">My Arsenal</h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          Tools & Technologies
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {SKILLS.map((category, index) => {
          const Icon = iconMap[category.title] || FaTools;
          // Frontend gets 2 columns (1.6x wider), others get 1 column each (total = 2+1+1+1 = 5)
          const isFrontend = category.title === "Frontend";

          return (
            <SpotlightCard
              key={category.title}
              className={`skill-card h-full p-6 md:p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300 flex flex-col ${isFrontend ? 'lg:col-span-2' : 'lg:col-span-1'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary">
                  <Icon size={18} />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => {
                  const skillData = skillIconMap[skill] || { icon: FaCode, color: "text-slate-600 dark:text-slate-300" };
                  const SkillIcon = skillData.icon;
                  const iconColor = skillData.color;

                  return (
                    <span
                      key={skill}
                      className="skill-badge px-4 py-2 text-sm font-semibold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-white/5 hover:bg-primary/10 hover:text-primary-dark dark:hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default flex items-center gap-2"
                    >
                      <SkillIcon size={18} className={`flex-shrink-0 ${iconColor}`} />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
