import React, { useEffect, useRef, useState } from 'react';

const InteractiveGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxCount, setBoxCount] = useState(0);

  useEffect(() => {
    const calculateBoxes = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        const boxSize = 50; // Fixed square size
        const cols = Math.ceil(width / boxSize);
        const rows = Math.ceil(height / boxSize);
        setBoxCount(cols * rows);
      }
    };

    calculateBoxes();

    // Recalculate on resize
    window.addEventListener('resize', calculateBoxes);
    return () => window.removeEventListener('resize', calculateBoxes);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    // Expanded palette: Teal, Pink, Purple, Cyan, Orange, Lime, Indigo, Rose
    const colors = [
      "#2dd4bf", // Teal
      "#f472b6", // Pink
      "#8b5cf6", // Purple
      "#06b6d4", // Cyan
      "#fb923c", // Orange
      "#84cc16", // Lime
      "#6366f1", // Indigo
      "#f43f5e"  // Rose
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Instant color on hover
    target.style.backgroundColor = randomColor;
    target.style.transition = 'none';

    // Smooth fade out after a brief moment
    setTimeout(() => {
      target.style.backgroundColor = 'transparent';
      target.style.transition = 'background-color 3s ease-in-out';
    }, 0);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0 grid overflow-hidden auto-rows-[50px] pointer-events-auto"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, 50px)',
        justifyContent: 'center'
      }}
    >
      {[...Array(boxCount)].map((_, i) => (
        <div
          key={i}
          className="border-[0.5px] border-slate-800/20 dark:border-white/5 w-full h-full"
          onMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
}

export default InteractiveGrid;
