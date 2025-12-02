
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" }
    });

    // Initial State
    tl.set(containerRef.current, { display: 'flex' });
    
    // Animation Sequence: Just open the doors
    tl.to([leftDoorRef.current, rightDoorRef.current], {
      width: '0%', // Shrink width to 0 to open
      duration: 1.5,
      delay: 0.2,
      stagger: 0,
      ease: "power4.inOut"
    })
    .to(containerRef.current, {
      display: 'none',
      duration: 0
    }); // Remove from flow

  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center h-screen w-screen"
    >
      {/* Left Door */}
      <div 
        ref={leftDoorRef} 
        className="absolute left-0 top-0 h-full w-1/2 bg-[#050505] z-20 border-r border-white/5"
      ></div>

      {/* Right Door */}
      <div 
        ref={rightDoorRef} 
        className="absolute right-0 top-0 h-full w-1/2 bg-[#050505] z-20 border-l border-white/5"
      ></div>
    </div>
  );
};

export default Preloader;
