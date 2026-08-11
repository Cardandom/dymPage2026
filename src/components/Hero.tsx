'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/src/config/contact';

const generalWhatsAppUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

export default function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-svh flex flex-col items-center justify-center px-4 py-32 overflow-hidden"
      id="hero"
    >
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-brand-neon"
        >
          <Sparkles size={16} />
          <span>El futuro del marketing ya está aquí</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-8 leading-[0.92]"
        >
          ESCALAMOS MARCAS <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-neon via-white to-brand-purple bg-size-[200%_auto] animate-gradient-x">
            IMPULSADAS POR IA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          DYM Digital combina creatividad premium con tecnología de vanguardia para dominar el ecosistema digital global.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-brand-neon text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
          >
            <span className="relative z-10 flex items-center gap-2">
              Empezar ahora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-brand-purple translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <Link
            href="/#services"
            className="px-8 py-4 rounded-full glass font-semibold border-white/20 hover:bg-white/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
          >
            Ver servicios
          </Link>
        </motion.div>
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-brand-neon/20 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-brand-purple/20 rounded-full blur-[120px] -z-1" />
    </section>
  );
}
