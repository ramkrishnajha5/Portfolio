import React, { useRef, useLayoutEffect } from 'react';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            const getScrollAmount = () => {
                let trackWidth = track.scrollWidth;
                return -(trackWidth - window.innerWidth);
            };

            gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (PROJECTS.length),
                    end: () => `+=${track.scrollWidth - window.innerHeight}`,
                    invalidateOnRefresh: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative h-screen bg-background-light dark:bg-[#050505] overflow-hidden transition-colors duration-500"
        >
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
            </div>

            {/* Title - Fixed position */}
            <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20 pointer-events-none">
                <h2 className="text-sm md:text-sm font-bold tracking-[0.2em] text-primary-dark dark:text-primary uppercase mb-2">
                    My Work
                </h2>
                <h2 className="font-display text-5xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[0.9]">
                    <span className="block md:inline">SELECTED </span>
                    <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-accent dark:from-primary dark:to-accent whitespace-nowrap">
                        WORKS
                    </span>
                </h2>
            </div>

            <div className="relative z-10 w-full h-full flex items-center mt-[20px] md:mt-[25px] lg:mt-[30px]">

                {/* Horizontal Scroll Track */}
                <div
                    ref={trackRef}
                    className="flex items-center gap-6 md:gap-12"
                >
                    {/* Start Spacer */}
                    <div className="w-[10vw] md:w-[20vw] shrink-0" />

                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className="relative shrink-0"
                        >
                            <div className="
                w-[85vw] h-[55vh]            /* Mobile - fixed height */
                md:w-[65vw] md:h-[60vh]      /* Tablet */
                lg:w-[40vw] lg:h-[65vh]      /* Desktop - reasonable height */
                flex flex-col relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-xl dark:shadow-2xl transition-all duration-500 hover:border-primary/50 group"
                            >

                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 dark:from-[#121212] dark:to-[#000] z-0 pointer-events-none" />

                                <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">

                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-4 shrink-0">
                                        <span className="text-3xl md:text-5xl font-display font-bold text-slate-200 dark:text-white/5 group-hover:text-primary-dark/10 dark:group-hover:text-primary/20 transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                        <div className="flex gap-3">
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-110 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-primary-dark dark:hover:bg-primary transition-all hover:scale-110 shadow-lg"
                                            >
                                                <FaExternalLinkAlt size={15} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Body Content */}
                                    <div className="flex flex-col flex-1 overflow-hidden">
                                        <h3 className="text-xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2 leading-tight shrink-0">
                                            {project.title}
                                        </h3>

                                        {project.tagline && (
                                            <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider shrink-0">{project.tagline}</p>
                                        )}

                                        {/* Scrollable Description - Smaller font */}
                                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mb-4">
                                            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 shrink-0 border-t border-slate-100 dark:border-white/5">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="px-2 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary-dark dark:text-primary bg-primary/10 border border-primary/20 rounded-md whitespace-nowrap">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-[10vw] md:w-[20vw] shrink-0" />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.2);
          border-radius: 2px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
        }
      `}} />
        </section>
    );
};

export default Projects;