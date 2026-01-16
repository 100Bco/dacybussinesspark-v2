import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

export const PlexusSphereSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const size = Math.min(window.innerWidth * 0.9, 600);
      canvas.width = size;
      canvas.height = size;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Initialize nodes in 3D sphere
    const nodeCount = 80;
    const radius = canvas.width * 0.35;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create nodes distributed on a sphere surface
    nodesRef.current = Array.from({ length: nodeCount }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
      };
    });

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotation += 0.003;

      // Update and draw nodes
      nodesRef.current.forEach((node) => {
        // Gentle floating motion
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Keep nodes roughly on sphere surface with soft boundaries
        const dist = Math.sqrt(node.x ** 2 + node.y ** 2 + node.z ** 2);
        if (dist > radius * 1.2 || dist < radius * 0.8) {
          const scale = radius / dist;
          node.x *= scale;
          node.y *= scale;
          node.z *= scale;
          node.vx *= -0.5;
          node.vy *= -0.5;
          node.vz *= -0.5;
        }
      });

      // Sort nodes by z-depth for proper rendering
      const sortedNodes = [...nodesRef.current].sort((a, b) => a.z - b.z);

      // Draw connections
      ctx.strokeStyle = '#1a1a1a';
      sortedNodes.forEach((node, i) => {
        sortedNodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dz = node.z - otherNode.z;
          const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);

          // Draw line if nodes are close enough
          if (distance < radius * 0.6) {
            const opacity = 1 - distance / (radius * 0.6);

            // Apply rotation
            const rotatedX1 = node.x * Math.cos(rotation) - node.z * Math.sin(rotation);
            const rotatedZ1 = node.x * Math.sin(rotation) + node.z * Math.cos(rotation);
            const rotatedX2 = otherNode.x * Math.cos(rotation) - otherNode.z * Math.sin(rotation);
            const rotatedZ2 = otherNode.x * Math.sin(rotation) + otherNode.z * Math.cos(rotation);

            // Calculate depth-based darkness
            const depth1 = (rotatedZ1 / radius + 1) / 2;
            const depth2 = (rotatedZ2 / radius + 1) / 2;
            const avgDepth = (depth1 + depth2) / 2;

            const gray = Math.floor(26 + avgDepth * 60);
            ctx.strokeStyle = `rgba(${gray}, ${gray}, ${gray}, ${opacity * 0.4})`;
            ctx.lineWidth = 0.5;

            ctx.beginPath();
            ctx.moveTo(centerX + rotatedX1, centerY + node.y);
            ctx.lineTo(centerX + rotatedX2, centerY + otherNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      sortedNodes.forEach((node) => {
        const rotatedX = node.x * Math.cos(rotation) - node.z * Math.sin(rotation);
        const rotatedZ = node.x * Math.sin(rotation) + node.z * Math.cos(rotation);

        // Calculate depth for size and color variation
        const depth = (rotatedZ / radius + 1) / 2; // 0 to 1
        const size = 1.5 + depth * 2.5; // Larger dots in front
        const gray = Math.floor(20 + depth * 70);

        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
        ctx.beginPath();
        ctx.arc(centerX + rotatedX, centerY + node.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-canvas py-12 md:py-16 lg:py-20">
      <div className="px-6 md:px-8 lg:px-16 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center">
          {/* Canvas Container */}
          <div className="relative w-full max-w-[600px] mx-auto mb-8 md:mb-10">
            <canvas
              ref={canvasRef}
              className="w-full h-auto"
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
              }}
            />

            {/* Center Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-ink text-center px-6 leading-tight tracking-tight max-w-md">
                Gathering the pieces of the industry
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
