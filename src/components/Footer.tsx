'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import type { ReactNode } from 'react';
import { CONTACT_EMAIL, CONTACT_EMAIL_URL, SOCIAL_LINKS } from '@/src/config/contact';

type FooterProps = {
  year: number;
  brandLogo?: ReactNode;
};

export default function Footer({ year, brandLogo }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white py-20 px-6 sm:px-12">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-brand-purple/10 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          <div className="col-span-1 lg:col-span-2 max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              {brandLogo ?? (
                <div className="w-11 h-11 rounded-xl bg-brand-neon text-black flex items-center justify-center font-bold text-xl shadow-sm">
                  D
                </div>
              )}
              <span className="text-2xl font-display font-bold tracking-tighter text-slate-900">
                DYM DIGITAL
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-[1.08] text-slate-900"
            >
              ¿Estás listo para iniciar tu <span className="text-brand-neon">carrera digital</span>?
            </motion.h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#services"
                className="px-8 py-4 rounded-full border border-slate-200 text-slate-900 font-bold hover:border-brand-neon hover:text-brand-neon transition-colors bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Navegacion
            </h4>
            <ul className="space-y-4">
              <li><Link href="/#hero" className="text-slate-600 hover:text-brand-neon transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon">Inicio</Link></li>
              <li><Link href="/#services" className="text-slate-600 hover:text-brand-neon transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon">Servicios</Link></li>
              <li><Link href="/#cases" className="text-slate-600 hover:text-brand-neon transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon">Casos de Exito</Link></li>
              <li><Link href="/#ai" className="text-slate-600 hover:text-brand-neon transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon">Estrategia IA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Contacto
            </h4>
            <div className="space-y-6">
              <a
                href={CONTACT_EMAIL_URL}
                className="inline-block text-slate-600 hover:text-brand-neon transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
              >
                {CONTACT_EMAIL}
              </a>
              <div>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de DYM Digital"
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-900 hover:bg-brand-neon hover:border-brand-neon hover:text-black transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 text-center text-slate-500 text-sm md:text-left">
          <p>(c) {year} DYM Digital Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
