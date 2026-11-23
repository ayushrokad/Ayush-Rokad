'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  vx: number;
  vy: number;
}

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    // Number of particles: restrained density
    const particleCount = Math.floor((width * height) / 18000);
    const count = Math.min(Math.max(particleCount, 35), 70);

    const particles: Particle[] = Array.from({ length: count }, () => {
      const baseAlpha = 0.12 + Math.random() * 0.35;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.8 + Math.random() * 1.4,
        baseAlpha,
        alpha: baseAlpha,
        twinkleSpeed: 0.0015 + Math.random() * 0.002,
        twinkleOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -0.02 - Math.random() * 0.06, // subtle upward drift
      };
    });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let lastTime = performance.now();

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          // Slow drift
          p.x += p.vx;
          p.y += p.vy;

          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          // Gentle sinusoidal twinkle
          p.alpha =
            p.baseAlpha +
            Math.sin(time * p.twinkleSpeed + p.twinkleOffset) * 0.15;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(241, 240, 236, ${Math.max(0.05, Math.min(0.65, p.alpha))})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
