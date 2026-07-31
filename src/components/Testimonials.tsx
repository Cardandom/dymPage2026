'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alexander Vance",
    role: "CEO, LuxGlobal",
    text: "DYM Digital transformó por completo nuestra percepción de marca. El ROI que logramos gracias a su IA no se compara con nada que hayamos visto antes.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, NextGen",
    text: "La atención al detalle y la capacidad de innovación de su equipo es de otro planeta. Son los mejores en lo que hacen, sin duda alguna.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Marcus Kael",
    role: "Founder, Zenith Labs",
    text: "En menos de 6 meses duplicamos nuestra facturación. DYM Digital no es una agencia, es un partner tecnológico fundamental.",
    avatar: "https://i.pravatar.cc/150?u=3"
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
              <p className="text-xl text-white/80 italic leading-relaxed mb-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale border border-white/10" referrerPolicy="no-referrer" />
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
