
import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import HeroBackground from './components/3d/HeroBackground';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, useSpring, motion } from 'framer-motion';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check system preference or logic here if needed
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`font-sans antialiased text-slate-800 dark:text-slate-200 selection:bg-primary selection:text-black cursor-none transition-colors duration-500`}>
      <Preloader />
      <CustomCursor />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark to-accent dark:from-primary dark:to-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Global Persistent 3D Background */}
      <HeroBackground theme={theme} />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
