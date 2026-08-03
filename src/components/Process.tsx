'use client';

import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Conocemos tu negocio",
    desc: "Analizamos tus necesidades, tus objetivos y la situación actual de tu negocio para identificar las mejores oportunidades."
  },
  {
    num: "02",
    title: "Creamos un plan",
    desc: "Definimos una estrategia clara y personalizada, con las herramientas y soluciones que realmente necesita tu proyecto."
  },
  {
    num: "03",
    title: "Lo ponemos en marcha",
    desc: "Diseñamos y desarrollamos tu página web, aplicación, campaña o solución digital, cuidando cada detalle del proceso."
  },
  {
    num: "04",
    title: "Medimos y mejoramos",
    desc: "Revisamos los resultados y realizamos mejoras para que tu proyecto siga creciendo y funcionando cada vez mejor."
  }
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-32 px-6 sm:px-12 bg-white">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-neon/10 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-brand-purple/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-purple font-mono text-xs tracking-[0.25em] uppercase mb-5"
          >
            Metodologia
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900">
            Nuestro <span className="text-brand-neon italic">metodo</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Conocemos tu negocio, creamos una solución a tu medida y te acompañamos durante todo el proceso para ayudarte a obtener mejores resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_18px_70px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_90px_rgba(15,23,42,0.1)] transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/0 via-brand-neon/0 to-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 block text-6xl font-display font-black text-slate-900/10 group-hover:text-brand-neon/20 transition-colors mb-8">
                {step.num}
              </span>
              <h3 className="relative z-10 text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-neon transition-colors">
                {step.title}
              </h3>
              <p className="relative z-10 text-slate-600 leading-relaxed font-light">
                {step.desc}
              </p>
              <div className="relative z-10 mt-8 h-px w-full bg-slate-200 group-hover:bg-brand-neon/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
