import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;