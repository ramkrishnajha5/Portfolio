
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<TrailParticle[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let lastTrailTime = 0;
    const trailInterval = 30; // Create trail particle every 30ms

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });

      // Throttle trail particle creation
      const now = Date.now();
      if (now - lastTrailTime >= trailInterval) {
        lastTrailTime = now;

        // Add trail particle
        const newParticle: TrailParticle = {
          id: trailIdRef.current++,
          x: e.clientX,
          y: e.clientY,
        };

        setTrails((prev) => [...prev, newParticle]);

        // Remove particle after 2 seconds
        setTimeout(() => {
          setTrails((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 2000);
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Trail Particles - Smoky Effect */}
      {trails.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 hidden md:block animate-fadeOut"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.8) 0%, rgba(45, 212, 191, 0.3) 50%, transparent 100%)',
            filter: 'blur(8px)',
            mixBlendMode: 'screen',
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />

      {/* Follower */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes cursorTrailFadeOut {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
        }

        .animate-fadeOut {
          animation: cursorTrailFadeOut 2s ease-out forwards;
        }
      `}} />
    </>
  );
};

export default CustomCursor;
