'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Bot, LineChart, Globe, Zap, Shield, Cpu } from 'lucide-react';
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/src/config/contact';

const services = [
  {
    title: "Estrategia IA",
    desc: "Utilizamos estrategias a la vanguardia que se adaptan a cada cliente o empresa.",
    icon: Bot,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    href: "/#ai",
    external: false,
  },
  {
    title: "Performance Ads",
    desc: "Campañas ultra-optimizadas con algoritmos de aprendizaje automático.",
    icon: LineChart,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    href: getWhatsAppUrl(WHATSAPP_MESSAGES.performanceAds),
    external: true,
  },
  {
    title: "Branding Elite",
    desc: "Diseñamos desde lo más sencillo hasta lo más élite, sin dejar de lado el pensamiento del cliente, haciendo de su branding la mejor elección.",
    icon: Globe,
    color: "from-brand-neon/20 to-brand-purple/20",
    borderColor: "border-brand-neon/20",
    href: getWhatsAppUrl(WHATSAPP_MESSAGES.branding),
    external: true,
  },
  {
    title: "Automatización",
    desc: "Ecosistemas digitales que funcionan solos, ahorrando tiempo y costes.",
    icon: Zap,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20",
    href: "/#ai",
    external: false,
  },
  {
    title: "Data Analytics",
    desc: "Visualización de datos en tiempo real para decisiones empresariales críticas.",
    icon: Cpu,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20",
    href: getWhatsAppUrl(WHATSAPP_MESSAGES.dataAnalytics),
    external: true,
  },
  {
    title: "Web Experience",
    desc: "Sitios ultra-rápidos e inmersivos diseñados para convertir visitas en clientes.",
    icon: Shield,
    color: "from-blue-600/20 to-indigo-600/20",
    borderColor: "border-blue-600/20",
    href: getWhatsAppUrl(WHATSAPP_MESSAGES.webExperience),
    external: true,
  },
];

type Service = (typeof services)[number];

function ServiceCardContent({ service }: { service: Service }) {
  return (
    <>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-neon/20 transition-colors" />

      <div className="w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
        <service.icon className="text-brand-neon" size={28} />
      </div>

      <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
      <p className="text-white/60 leading-relaxed">
        {service.desc}
      </p>

      <div className="mt-8 flex items-center text-sm font-semibold text-brand-neon opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
        SABER MÁS <span className="ml-2">→</span>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            SERVICIOS <span className="text-brand-neon font-light">EXCLUSIVE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-xl"
          >
            Soluciones de marketing de próxima generación para empresas que no aceptan menos que la excelencia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              {service.external ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block h-full p-8 rounded-3xl glass backdrop-blur-2xl border ${service.borderColor} bg-linear-to-br ${service.color} hover:border-brand-neon/50 transition-all duration-500 cursor-pointer overflow-hidden relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon`}
                >
                  <ServiceCardContent service={service} />
                </a>
              ) : (
                <Link
                  href={service.href}
                  className={`group block h-full p-8 rounded-3xl glass backdrop-blur-2xl border ${service.borderColor} bg-linear-to-br ${service.color} hover:border-brand-neon/50 transition-all duration-500 cursor-pointer overflow-hidden relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon`}
                >
                  <ServiceCardContent service={service} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
