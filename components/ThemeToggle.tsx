
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg text-slate-900 dark:text-white hover:scale-110 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-indigo-600" />}
    </button>
  );
};

export default ThemeToggle;
