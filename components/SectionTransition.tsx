import React, { useEffect, useRef, useState } from 'react';

export const SectionTransition: React.FC = () => {
  const curtainRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!curtainRef.current) return;

      const element = curtainRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress when element enters viewport
      // Progress goes from 0 (top of viewport) to 1 (element fully passed)
      let progress = 0;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Element is in viewport
        progress = Math.min(Math.max((viewportHeight - rect.top) / viewportHeight, 0), 1);
      } else if (rect.top <= 0) {
        // Element has passed
        progress = 1;
      }

      setScrollProgress(progress);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate curtain position based on scroll progress
  // 0 = closed (covers viewport), 1 = fully open (revealed)
  const curtainHeight = Math.max(0, 100 - scrollProgress * 100);

  return (
    <div
      ref={curtainRef}
      className="relative w-full h-0"
      style={{
        position: 'relative',
        zIndex: 30
      }}
    >
      {/* Curtain overlay that slides down */}
      <div
        className="fixed top-0 left-0 w-full pointer-events-none"
        style={{
          height: `${curtainHeight}vh`,
          background: 'linear-gradient(to bottom, #1a1a1a 0%, #1a1a1a 85%, transparent 100%)',
          transition: 'height 0.1s linear',
          willChange: 'height',
        }}
      >
        {/* Bottom edge decoration - creates curtain-like effect */}
        <div
          className="absolute bottom-0 left-0 w-full h-24"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 26, 26, 0.3) 50%, transparent 100%)',
            opacity: scrollProgress < 0.95 ? 1 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
        />
      </div>
    </div>
  );
};
