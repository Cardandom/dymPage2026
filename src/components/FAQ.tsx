import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Por que elegir marketing basado en IA?",
    a: "La IA permite procesar billones de puntos de datos en milisegundos, optimizando presupuestos y personalizando mensajes a un nivel que ningun humano podria alcanzar."
  },
  {
    q: "En cuanto tiempo vere resultados?",
    a: "Dependiendo del sector, solemos ver mejoras significativas en las metricas clave (CTR, CPA) en las primeras 4-6 semanas de implementacion."
  },
  {
    q: "Trabajan con empresas pequenas?",
    a: "Nos enfocamos en empresas que ya tienen una validacion de mercado y buscan escalar de manera agresiva a nivel nacional o internacional."
  },
  {
    q: "Es DYM Digital una agencia de marketing tradicional?",
    a: "No. Somos un estudio hibrido de tecnologia y creatividad. Fusionamos el arte visual premium con la ciencia de datos avanzada."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-32 px-6 sm:px-12 bg-white">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-neon/10 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-brand-purple/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-purple font-mono text-xs tracking-[0.25em] uppercase mb-5"
          >
            Preguntas frecuentes
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900">
            Resolvemos tus <span className="text-brand-neon italic">dudas</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Respuestas claras y directas sobre el proceso, los tiempos y la forma en que trabajamos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-[2rem] border bg-white shadow-[0_18px_70px_rgba(15,23,42,0.05)] overflow-hidden transition-all ${isOpen ? 'border-brand-neon/30' : 'border-slate-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-8 sm:px-10 py-7 flex items-center justify-between text-left gap-6 group"
                >
                  <span className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-800 group-hover:text-brand-neon'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-brand-neon border-brand-neon text-white' : 'bg-slate-50 border-slate-200 text-slate-900 group-hover:border-brand-neon group-hover:text-brand-neon'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 sm:px-10 pb-8">
                        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
