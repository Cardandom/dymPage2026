import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Brain, Cpu, Network, Lightbulb } from 'lucide-react';

export default function AIAutomation() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} id="ai" className="py-32 px-6 sm:px-12 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          style={{ scale }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-brand-neon/10 rounded-full blur-[100px] animate-pulse" />
          <motion.div
            style={{ rotate }}
            className="w-full h-full relative z-10 p-12 border border-slate-200 bg-white/90 rounded-3xl shadow-[0_20px_80px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center gap-12"
          >
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-6 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm"
              >
                <Brain size={40} className="text-brand-neon" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="p-6 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm"
              >
                <Cpu size={40} className="text-slate-900" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="p-6 rounded-2xl flex items-center justify-center bg-slate-50 border border-brand-neon/30 shadow-sm"
              >
                <Network size={40} className="text-brand-neon" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="p-6 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm"
              >
                <Lightbulb size={40} className="text-slate-900" />
              </motion.div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-display font-black text-brand-neon mb-2">Más tiempo</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">Para hacer crecer tu negocio.</div>
            </div>
          </motion.div>

          {/* Decorative lines */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-neon/15 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-brand-purple/15 rounded-full animate-reverse-spin-slow" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/25 text-brand-purple text-xs font-bold tracking-[0.2em] mb-6"
          >
            TECNOLOGÍA E INTELIGENCIA ARTIFICIAL
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-slate-900"
          >
            Automatización que <br />
            <span className="text-brand-neon">Impulsa tu Negocio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg mb-10 leading-relaxed"
          >
            Ayudamos a empresas y emprendedores a ahorrar tiempo, organizar mejor sus procesos y conseguir más oportunidades de venta. Creamos páginas web y soluciones digitales que automatizan tareas, facilitan la atención de clientes y hacen que tu negocio trabaje de manera más eficiente.
          </motion.p>

          <ul className="space-y-6">
            {[
              "Respuestas automáticas para tus clientes",
              "Formularios y contactos organizados",
              "Seguimiento de posibles clientes",
              "Menos tareas manuales y más tiempo para tu negocio"
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-center gap-4 text-slate-800"
              >
                <div className="w-6 h-6 rounded-full border border-brand-neon flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-brand-neon rounded-full" />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
