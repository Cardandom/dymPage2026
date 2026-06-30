import React from "react";
import gsap from "gsap";

export default function Marquee() {
  const tickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!tickerRef.current) return;

    const ticker = tickerRef.current;
    const tickerWidth = ticker.scrollWidth;
    
    gsap.to(ticker, {
      x: `-${tickerWidth / 2}`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const items = [
    "AI DRIVEN", "PREMIUM BRANDING", "PERFORMANCE ELITE", "GLOBAL SCALE", "FUTURE READY", "INNOVATION FIRST", "DATA MASTERED", "CRAFTED DESIGN", "ULTRA MODERN", "TECH NATIVE"
  ];

  return (
    <div className="py-20 overflow-hidden border-y border-white/5 bg-black whitespace-nowrap">
      <div ref={tickerRef} className="flex gap-20 items-center w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-20">
            <span className="text-6xl md:text-8xl font-display font-black text-white/5 uppercase tracking-tighter hover:text-brand-neon transition-colors duration-500">
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
