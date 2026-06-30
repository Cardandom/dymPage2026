import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Auditoría Digital",
    desc: "Análisis profundo de tu presencia digital actual y detección de fugas de ingresos."
  },
  {
    num: "02",
    title: "Estrategia de Escalado",
    desc: "Hoja de ruta personalizada utilizando IA para maximizar el crecimiento en tiempo récord."
  },
  {
    num: "03",
    title: "Ejecución Elite",
    desc: "Implementación de campañas de performance, branding y automatizaciones inteligentes."
  },
  {
    num: "04",
    title: "Optimización Real-Time",
    desc: "Ajuste continuo basado en datos vivos para garantizar el máximo ROI posible."
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6 sm:px-12 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">NUESTRO <span className="text-brand-neon">MÉTODO</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
            Un proceso refinado basado en datos y tecnología de vanguardia para garantizar el éxito de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden">
           {steps.map((step, idx) => (
             <div key={step.num} className="p-12 bg-black/40 hover:bg-brand-neon/5 transition-colors group">
                <span className="text-6xl font-display font-black text-white/5 group-hover:text-brand-neon/20 transition-colors block mb-8">
                  {step.num}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-neon transition-colors">{step.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  {step.desc}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
