import React, { useState, useEffect, useRef } from 'react';
import './ConfirmTargetCTA.css';

interface Dot {
  id: number;
  angle: number;
  radius: number;
  speed: number;
  opacity: number;
}

export const ConfirmTargetCTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState<Dot[]>([]);
  const containerRef = useRef<HTMLButtonElement>(null);
  const animationFrameRef = useRef<number>();

  // Initialize dots
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const dotCount = isMobile ? 3 : 4;

    const initialDots: Dot[] = Array.from({ length: dotCount }, (_, i) => ({
      id: i,
      angle: (i / dotCount) * Math.PI * 2,
      radius: 85 + Math.random() * 5, // Start at 85-90%
      speed: 0.8 + Math.random() * 0.4, // 6-10s to center
      opacity: 0.85 + Math.random() * 0.15
    }));

    setDots(initialDots);
  }, []);

  // Animate dots spiral-in
  useEffect(() => {
    const animate = () => {
      setDots(prevDots =>
        prevDots.map(dot => {
          let newRadius = dot.radius - dot.speed;
          let newOpacity = dot.opacity;

          // Fade out in last 12% of path
          if (newRadius < 18) {
            newOpacity = dot.opacity - 0.02;
          }

          // Reset when reached center or faded
          if (newRadius < 12 || newOpacity < 0) {
            return {
              ...dot,
              radius: 85 + Math.random() * 5,
              angle: Math.random() * Math.PI * 2,
              speed: 0.8 + Math.random() * 0.4,
              opacity: 0.85 + Math.random() * 0.15
            };
          }

          return {
            ...dot,
            radius: newRadius,
            angle: dot.angle + 0.01, // Slight spiral
            opacity: newOpacity
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  // Mouse move tracking for magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;

    // Damping - max 6px movement
    setMousePos({
      x: Math.max(-6, Math.min(6, x * 0.1)),
      y: Math.max(-6, Math.min(6, y * 0.1))
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);

    // Trigger click pulse
    const pulse = document.querySelector('.cta-click-pulse');
    if (pulse) {
      pulse.classList.remove('active');
      void (pulse as HTMLElement).offsetWidth; // Force reflow
      pulse.classList.add('active');
    }

    // Open form after feedback
    setTimeout(() => {
      window.open('https://api.leadconnectorhq.com/widget/form/vt4QR61BC3YlZj3ph6Wp', '_blank');
    }, 200);
  };

  return (
    <section className="cta-section">
      {/* Layer A: Background grid + rings */}
      <div className="cta-background">
        <div className="cta-grid"></div>
        <div className={`cta-rings ${isHovered ? 'hovered' : ''}`}>
          <div className="cta-ring ring-1"></div>
          <div className="cta-ring ring-2"></div>
          <div className="cta-ring ring-3"></div>
          <div className="cta-ring ring-4"></div>
          <div className="cta-ring ring-5"></div>
        </div>
      </div>

      {/* Layer B: Moving dots */}
      <div className="cta-dots">
        {dots.map(dot => (
          <div
            key={dot.id}
            className="cta-dot"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${dot.angle}rad) translateX(${dot.radius}%) rotate(-${dot.angle}rad)`,
              opacity: dot.opacity * (isHovered ? 1.1 : 1)
            }}
          />
        ))}
      </div>

      {/* Layer C: Center core glow */}
      <div className={`cta-core ${isHovered ? 'hovered' : ''}`}>
        <div className="cta-core-glow"></div>
        <div className="cta-click-pulse"></div>
      </div>

      {/* Layer D: Clickable hit-area + text */}
      <button
        ref={containerRef}
        className={`cta-hit-area ${isPressed ? 'pressed' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={handleClick}
        aria-label="Confirm your seat. Invitation required."
      >
        <div
          className="cta-text-container"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(${isHovered ? 1.02 : 1})`
          }}
        >
          <div className="cta-text-primary">CONFIRM YOUR SEAT HERE</div>
          <div className="cta-text-secondary">Invitation Required</div>
        </div>
      </button>
    </section>
  );
};
