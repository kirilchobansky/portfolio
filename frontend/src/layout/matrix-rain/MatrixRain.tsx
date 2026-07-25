import React, { useEffect, useRef } from 'react';

export default function MatrixRain(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initial dark fill to prevent white/clear canvas flash
    ctx.fillStyle = '#05080c';
    ctx.fillRect(0, 0, width, height);

    const chars = '010101010101ABCDEF';
    const fontSize = 12;
    const columns = Math.floor(width / fontSize);

    // FIX #2: Random negative starting offsets so NO initial top row appears!
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -60); // Staggered entry from off-screen
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.fillStyle = '#05080c';
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);

    let lastTime = 0;
    const fpsInterval = 60; // Smooth, slow ambient pace

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;

      lastTime = currentTime - (elapsed % fpsInterval);

      // Dark background trail layer
      ctx.fillStyle = 'rgba(57, 88, 73, 0.28)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Fira Code", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only draw drops that have reached visible screen space (y >= 0)
        if (drops[i] >= 0) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          const isHead = Math.random() > 0.96;
          
          ctx.fillStyle = isHead ? '#80ffbb' : '#00a344';

          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillText(text, x, y);

          if (y > height && Math.random() > 0.985) {
            drops[i] = 0; // Reset to top
          }
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    // FIX #1: Clean unmount handling so Vite HMR hot-reloads instantly without needing refreshes
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.5
      }}
    />
  );
}