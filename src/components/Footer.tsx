'use client';

import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import type { ReactNode } from 'react';

const socialLinks = [Instagram, Linkedin, Twitter];

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
              <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-900 font-bold hover:border-brand-neon hover:text-brand-neon transition-colors bg-white">
                Ver servicios
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Navegacion
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-brand-neon transition-colors">Inicio</a></li>
              <li><a href="#" className="text-slate-600 hover:text-brand-neon transition-colors">Servicios</a></li>
              <li><a href="#" className="text-slate-600 hover:text-brand-neon transition-colors">Casos de Exito</a></li>
              <li><a href="#" className="text-slate-600 hover:text-brand-neon transition-colors">Estrategia IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Redes Sociales
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-900 hover:bg-brand-neon hover:border-brand-neon hover:text-black transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-50 border border-slate-200 rounded-full px-6 py-3 outline-none focus:border-brand-neon focus:bg-white w-full text-slate-900 placeholder:text-slate-400"
                />
                <button className="bg-brand-neon text-black px-5 rounded-full font-bold hover:scale-105 transition-all shadow-sm">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>(c) {year} DYM Digital Agency. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-neon transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-neon transition-colors">Terminos</a>
            <a href="#" className="hover:text-brand-neon transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
