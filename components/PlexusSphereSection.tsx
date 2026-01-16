import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
}

interface PlexusSphereProps {
  isMobile?: boolean;
}

export const PlexusSphereSection: React.FC<PlexusSphereProps> = ({ isMobile = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- 1. BẢNG THÔNG SỐ (CONFIGURATION) ---
  const config = {
    // Số lượng hạt (Nodes):
    // Desktop để 150 cho dày, Mobile giảm xuống 70 cho mượt.
    particleCount: isMobile ? 70 : 150,

    // Khoảng cách kết nối (Connection Threshold):
    // Nếu 2 điểm gần nhau hơn khoảng này (px) thì vẽ đường kẻ.
    connectionDistance: isMobile ? 80 : 110,

    // Bán kính quả cầu (Radius):
    radius: isMobile ? 130 : 200,

    // Tốc độ xoay (Rotation Speed):
    // 0.0015 là tốc độ "chill", sang trọng. Tăng lên sẽ xoay nhanh hơn.
    rotationSpeed: 0.0015,

    // Hiệu ứng phối cảnh (Perspective/FOV):
    // Càng nhỏ thì hiệu ứng 3D càng gắt (gần to, xa nhỏ). 450 là trung tính.
    perspective: 450,

    // Độ mờ cơ bản của đường kẻ (Line Opacity):
    lineBaseOpacity: 0.8
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    // --- 2. THUẬT TOÁN FIBONACCI SPHERE ---
    // Giúp rải đều các điểm lên mặt cầu, không bị tụ lại ở 2 cực.

    const points: Point[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      const k = i + 0.5;
      const phi = Math.acos(1 - 2 * k / config.particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;

      points.push({
        x: Math.cos(theta) * Math.sin(phi) * config.radius,
        y: Math.sin(theta) * Math.sin(phi) * config.radius,
        z: Math.cos(phi) * config.radius
      });
    }

    let angleY = 0;

    // Xử lý Resize màn hình
    const resize = () => {
        if(containerRef.current) {
            width = containerRef.current.offsetWidth;
            height = containerRef.current.offsetHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr); // Retina fix
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }
    };

    window.addEventListener('resize', resize);
    resize();

    // --- 3. VÒNG LẶP RENDER (RENDER LOOP) ---
    const render = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);

      const centerX = width / 2;
      const centerY = height / 2;

      angleY += config.rotationSpeed;

      // Tính toán vị trí 3D -> 2D
      const projectedPoints = points.map(p => {
        // Xoay quanh trục Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        let x = p.x * cosY - p.z * sinY;
        let z = p.z * cosY + p.x * sinY;
        let y = p.y;

        // Nghiêng nhẹ trục X (Tilt) để nhìn góc 3/4 đẹp hơn
        const tilt = 0.3;
        const cosT = Math.cos(tilt);
        const sinT = Math.sin(tilt);
        let y_rot = y * cosT - z * sinT;
        let z_rot = z * cosT + y * sinT;
        y = y_rot;
        z = z_rot;

        // Phối cảnh xa gần (Perspective Projection)
        const scale = config.perspective / (config.perspective + z + config.radius * 1.5);
        const projX = x * scale + centerX;
        const projY = y * scale + centerY;

        return { x: projX, y: projY, z: z, scale: scale, renderX: x, renderY: y, renderZ: z };
      });

      // Vẽ đường nối (Connections)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        for (let j = i + 1; j < projectedPoints.length; j++) {
            const p2 = projectedPoints[j];

            // Tính khoảng cách 3D thực tế
            const dx = p1.renderX - p2.renderX;
            const dy = p1.renderY - p2.renderY;
            const dz = p1.renderZ - p2.renderZ;
            const dist3d = Math.sqrt(dx*dx + dy*dy + dz*dz);

            if (dist3d < config.connectionDistance) {
                // Hạt càng xa nhau, dây càng mờ
                const alpha = 1 - (dist3d / config.connectionDistance);
                // Hạt ở sâu bên trong thì mờ hơn (Depth Cue)
                const depth = (p1.scale + p2.scale) * 0.5;

                ctx.strokeStyle = `rgba(30, 30, 30, ${alpha * depth * config.lineBaseOpacity})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      }

      // Vẽ hạt (Nodes)
      for (let i = 0; i < projectedPoints.length; i++) {
          const p = projectedPoints[i];
          const radius = isMobile ? 1.5 : 2.5;
          // Độ trong suốt dựa trên chiều sâu
          const alpha = Math.min(1, Math.max(0.2, p.scale));

          ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * p.scale, 0, Math.PI * 2);
          ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, config.particleCount, config.connectionDistance, config.radius, config.rotationSpeed, config.perspective, config.lineBaseOpacity]);

  return (
    <section
      ref={containerRef}
      style={{
        height: '600px',
        width: '100%',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />

      {/* --- 4. HIỆU ỨNG BÓNG ĐỔ (FLOOR SHADOW) --- */}
      <div style={{
          position: 'absolute',
          bottom: '12%',              // Đặt bóng nằm thấp xuống sàn
          left: '50%',
          transform: 'translateX(-50%)', // Căn giữa
          width: '50%',               // Chiều rộng bóng bằng 50% khung
          height: '40px',             // Chiều cao bóng (hình oval dẹt)
          // Gradient tròn: Tâm đen mờ (0.08) lan ra trong suốt (0)
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(10px)',       // Làm nhòe để tạo cảm giác bóng mềm (Ambient Occlusion)
          pointerEvents: 'none'
      }}></div>

      {/* Central Text */}
      <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          pointerEvents: 'none',
          padding: '0 20px',
      }}>
         <h2 style={{
             fontFamily: '"Playfair Display", serif',
             fontSize: 'clamp(28px, 5vw, 48px)',
             color: '#1A1A1A',
             margin: '0 auto',
             fontWeight: 500,
             letterSpacing: '-0.02em',
             lineHeight: 1.1,
             // Halo màu trắng quanh chữ để tách chữ khỏi các đường dây đen
             textShadow: '0 0 30px rgba(255,255,255,0.9), 0 0 15px rgba(255,255,255,0.9)'
         }}>
             Gathering the<br/>pieces of the industry
         </h2>
      </div>
    </section>
  );
};
