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
    const container = canvas?.parentElement;
    const context = canvas?.getContext('2d');

    if (!canvas || !container || !context) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    let isInView = true;
    let isTabVisible = document.visibilityState === 'visible';
    let frameId: number | null = null;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let previousTime = 0;

    const particleCount = () => {
      const estimated = Math.floor((width * height) / 26000);
      return Math.min(Math.max(estimated, 24), 48);
    };

    const particles: Particle[] = [];

    const resize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const desiredCount = particleCount();
      while (particles.length < desiredCount) {
        const baseAlpha = 0.12 + Math.random() * 0.25;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 0.7 + Math.random() * 1.1,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: 0.0008 + Math.random() * 0.001,
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.035,
          vy: -0.012 - Math.random() * 0.035,
        });
      }
      if (particles.length > desiredCount) particles.length = desiredCount;

      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, width);
        particle.y = Math.min(particle.y, height);
      });

      draw(performance.now(), false);
    };

    const draw = (time: number, animate: boolean) => {
      context.clearRect(0, 0, width, height);

      const frameScale = previousTime
        ? Math.min((time - previousTime) / 16.67, 2)
        : 1;

      particles.forEach((particle) => {
        if (animate) {
          particle.x += particle.vx * frameScale;
          particle.y += particle.vy * frameScale;

          if (particle.y < 0) particle.y = height;
          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;

          particle.alpha =
            particle.baseAlpha +
            Math.sin(time * particle.twinkleSpeed + particle.twinkleOffset) * 0.1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(241, 240, 236, ${Math.max(0.06, Math.min(0.48, particle.alpha))})`;
        context.fill();
      });

      previousTime = time;
    };

    const stop = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
      previousTime = 0;
    };

    const tick = (time: number) => {
      frameId = null;
      draw(time, true);
      if (canAnimate()) frameId = requestAnimationFrame(tick);
    };

    const canAnimate = () =>
      !prefersReducedMotion && isInView && isTabVisible;

    const syncAnimation = () => {
      if (canAnimate()) {
        if (frameId === null) frameId = requestAnimationFrame(tick);
      } else {
        stop();
        draw(performance.now(), false);
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      syncAnimation();
    };

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
      syncAnimation();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        syncAnimation();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    motionQuery.addEventListener('change', handleMotionChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    resize();
    syncAnimation();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
