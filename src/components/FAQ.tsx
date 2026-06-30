import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "¿Por qué elegir marketing basado en IA?",
    a: "La IA permite procesar billones de puntos de datos en milisegundos, optimizando presupuestos y personalizando mensajes a un nivel que ningún humano podría alcanzar."
  },
  {
    q: "¿En cuánto tiempo veré resultados?",
    a: "Dependiendo del sector, solemos ver mejoras significativas en las métricas clave (CTR, CPA) en las primeras 4-6 semanas de implementación."
  },
  {
    q: "¿Trabajan con empresas pequeñas?",
    a: "Nos enfocamos en empresas que ya tienen una validación de mercado y buscan escalar de manera agresiva a nivel nacional o internacional."
  },
  {
    q: "¿Es DYM Digital una agencia de marketing tradicional?",
    a: "No. Somos un estudio híbrido de tecnología y creatividad. Fusionamos el arte visual premium con la ciencia de datos avanzada."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-32 px-6 sm:px-12 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-20 italic">PREGUNTAS <span className="text-brand-neon">FRECUENTES</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={openIndex === i ? "text-xl md:text-2xl font-bold text-brand-neon transition-colors" : "text-xl md:text-2xl font-bold text-white transition-colors group-hover:text-white/70"}>
                  {faq.q}
                </span>
                <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-white/50 text-lg leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
