'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import NextBrandLogo from './NextBrandLogo';

export default function NextPreloader() {
  const [visible, setVisible] = React.useState(true);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const shouldReduceMotion = mediaQuery.matches;

    setReduceMotion(shouldReduceMotion);

    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes next-preloader-failsafe {
          to { opacity: 0; visibility: hidden; }
        }

        .next-preloader-failsafe {
          animation: next-preloader-failsafe 0.01s linear 4s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .next-preloader-failsafe {
            animation-delay: 0s;
          }
        }
      `}</style>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: reduceMotion ? 0 : 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            role="status"
            aria-live="polite"
            aria-label="Cargando DYM Digital"
            aria-busy="true"
            className="next-preloader-failsafe pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-brand-purple/95 p-8 text-white backdrop-blur-2xl"
          >
            <div className="relative">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 1 }}
                className="flex items-center gap-4"
              >
                <NextBrandLogo
                  className="h-24 w-32 sm:h-28 sm:w-36"
                  compact
                  loading="eager"
                  sizes="(max-width: 639px) 128px, 144px"
                />
                <div className="h-10 w-0.5 bg-white/20" />
                <div className="overflow-hidden text-2xl font-display font-bold tracking-widest">
                  <motion.span
                    initial={reduceMotion ? false : { y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.5 }}
                    className="inline-block"
                  >
                    DYM DIGITAL
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-0 right-0 h-0.5 origin-left bg-brand-neon"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 2, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
