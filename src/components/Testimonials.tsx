'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import unisexMarysLogo from '@/src/assets/projects/unisex-marys/unisex-marys-logo.webp';
import karlyPerazaPhoto from '@/src/assets/testimonials/karly-peraza.webp';
import mariaGracielaLoboPhoto from '@/src/assets/testimonials/maria-graciela-lobo.webp';

const testimonials = [
  {
    name: "Lcda. Karly Peraza",
    role: "Coordinadora de Gestión Organizacional, JBSECO",
    text: "DYM Digital ha sido un aliado fundamental en el diseño, la ejecución y la organización de todo nuestro sistema comercial y digital. Su aporte nos permitió ordenar cada proceso y construir una presencia de marca sólida y coherente.",
    avatar: karlyPerazaPhoto
  },
  {
    name: "Arq. María Graciela Lobo",
    role: "CEO, Kairos Design & Construction",
    text: "Gracias a DYM Digital logramos entrar al mercado digital con una estrategia clara. Su gestión de nuestras redes sociales y el desarrollo de la página web nos ayudaron a fortalecer nuestra presencia y conectar con nuevos clientes.",
    avatar: mariaGracielaLoboPhoto
  },
  {
    name: "Unisex Mary’s",
    role: "Spa y peluquería",
    text: "Me encantó mi página web, tal cual como quería que se reflejara mi spa y peluquería, muy cumplidos y precios razonables.",
    avatar: unisexMarysLogo
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Quote size={60} className="text-brand-neon/20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold">CLIENTES <span className="text-gradient-neon italic">SATISFECHOS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass rounded-[2.5rem] border-white/5 hover:border-brand-neon/30 transition-all flex flex-col justify-between"
            >
              <p className="text-xl text-white/80 italic leading-relaxed mb-10">&quot;{t.text}&quot;</p>
              
              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover grayscale border border-white/10"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
