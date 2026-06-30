import { motion } from 'motion/react';

const stats = [
  { label: "Marcas Escaladas", value: "500+", delay: 0 },
  { label: "Inversión Gestionada", value: "$120M+", delay: 0.1 },
  { label: "ROI Promedio", value: "12X", delay: 0.2 },
  { label: "Países", value: "45", delay: 0.3 }
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: stat.delay }}
            className="flex flex-col gap-2"
          >
            <div className="text-4xl md:text-6xl font-display font-black text-white">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-brand-neon font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
