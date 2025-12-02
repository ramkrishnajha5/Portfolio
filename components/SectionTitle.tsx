import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && <p className="text-secondary mt-4 max-w-2xl text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;