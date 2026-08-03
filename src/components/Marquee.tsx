'use client';

import React from "react";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const ticker = tickerRef.current;

    if (!container || !ticker) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let tween: gsap.core.Tween | null = null;
    let resizeFrame: number | null = null;
    let isInViewport = true;
    let isMounted = true;

    const syncPlayback = () => {
      if (!tween) return;

      if (reducedMotionQuery.matches || document.hidden || !isInViewport) {
        tween.pause();
      } else {
        tween.play();
      }
    };

    const createTween = () => {
      tween?.kill();
      tween = null;
      gsap.set(ticker, { x: 0 });

      if (reducedMotionQuery.matches) return;

      const tickerWidth = ticker.scrollWidth;
      if (tickerWidth === 0) return;

      tween = gsap.to(ticker, {
        x: -(tickerWidth / 2),
        duration: 30,
        ease: 'none',
        repeat: -1,
      });

      syncPlayback();
    };

    const context = gsap.context(() => {
      createTween();
    }, container);

    const scheduleMeasurement = () => {
      if (resizeFrame !== null) {
        window.cancelAnimationFrame(resizeFrame);
      }

      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = null;
        createTween();
      });
    };

    const handleVisibilityChange = () => syncPlayback();
    const handleReducedMotionChange = () => createTween();

    const observer = new IntersectionObserver(([entry]) => {
      isInViewport = entry?.isIntersecting ?? true;
      syncPlayback();
    });

    observer.observe(container);
    window.addEventListener('resize', scheduleMeasurement);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    void document.fonts.ready.then(() => {
      if (isMounted) {
        scheduleMeasurement();
      }
    });

    return () => {
      isMounted = false;

      if (resizeFrame !== null) {
        window.cancelAnimationFrame(resizeFrame);
      }

      observer.disconnect();
      window.removeEventListener('resize', scheduleMeasurement);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      tween?.kill();
      context.revert();
      gsap.set(ticker, { clearProps: 'transform' });
    };
  }, []);

  const items = [
    "AI DRIVEN", "PREMIUM BRANDING", "PERFORMANCE ELITE", "GLOBAL SCALE", "FUTURE READY", "INNOVATION FIRST", "DATA MASTERED", "CRAFTED DESIGN", "ULTRA MODERN", "TECH NATIVE"
  ];

  return (
    <div ref={containerRef} className="py-20 border-b-2 overflow-hidden border-y border-black bg-white whitespace-nowrap">
      <div ref={tickerRef} className="flex gap-20 items-center w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-20">
            <span className="text-6xl md:text-8xl font-display font-black text-black/95 uppercase tracking-tighter hover:text-brand-neon transition-colors duration-500">
              {item}
            </span>
            <div className="w-12 h-12 rounded-full border border-brand-neon/20 flex items-center justify-center">
               <div className="w-4 h-4 bg-brand-neon rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
