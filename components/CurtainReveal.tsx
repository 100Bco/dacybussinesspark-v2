import React, { useEffect, useState } from 'react';

export const CurtainReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Trigger curtain animation after a short delay
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-0">
      {/* Left Curtain */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-ink z-50 transition-transform duration-[1500ms] ease-out ${
          isRevealed ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.3)'
        }}
      />

      {/* Right Curtain */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-ink z-50 transition-transform duration-[1500ms] ease-out ${
          isRevealed ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.3)'
        }}
      />

      {/* Center Logo During Reveal */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] transition-opacity duration-700 ${
          isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <img
          src="/images/partners/Dacy%20logo.png"
          alt="Dacy Business Park"
          className="h-20 md:h-24 lg:h-32 object-contain"
        />
      </div>
    </div>
  );
};
