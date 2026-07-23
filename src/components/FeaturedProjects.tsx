import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const kairosCover = new URL('../assets/projects/kairos-cover.webp', import.meta.url).href;
const kairosLogo = new URL('../assets/projects/kairos-logo.webp', import.meta.url).href;

type Project = {
  title: string;
  category: string;
  image: string;
  results: string;
  description?: string;
  tags?: string[];
  href?: string;
  logo?: string;
  imageAlt?: string;
  logoAlt?: string;
};

const projects: Project[] = [
  {
    title: "KAIROS DESIGN & CONSTRUCTION",
    category: "Sitio web corporativo",
    description: "Proyecto web para una empresa de diseño y construcción, enfocado en presentar sus servicios, identidad visual y portafolio de proyectos de forma profesional.",
    tags: ["Diseño web", "Construcción", "Arquitectura", "Marca corporativa"],
    href: "/proyectos/kairos-design-construction",
    image: kairosCover,
    logo: kairosLogo,
    imageAlt: "Proyecto web Kairos Design & Construction",
    logoAlt: "Logo Kairos Design & Construction",
    results: "Proyecto real"
  },
  {
    title: "EcoSphere Global",
    category: "Digital Strategy",
    image: "https://picsum.photos/seed/tech2/800/600",
    results: "+180% Revenue"
  },
  {
    title: "Lumina Labs",
    category: "AI Automation",
    image: "https://picsum.photos/seed/tech3/800/600",
    results: "3x Growth"
  },
  {
    title: "Visionary Group",
    category: "Web Experience",
    image: "https://picsum.photos/seed/tech4/800/600",
    results: "Top 1% Industry"
  }
];

export default function FeaturedProjects() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden py-32 px-6 sm:px-12 bg-white"
    >
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-neon/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-purple font-mono text-xs tracking-[0.25em] uppercase mb-5"
            >
              Proyectos seleccionados
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] text-slate-900">
              Casos de <span className="text-brand-neon italic">exito</span>
            </h2>
          </div>

          <button className="group inline-flex items-center gap-2 text-lg font-semibold text-slate-900 border-b border-slate-300 pb-2 hover:border-brand-neon transition-colors">
            Ver portafolio completo
            <ExternalLink size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-[2.5rem] mb-8 border border-slate-200 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {project.logo && (
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <div className="w-[70%] overflow-hidden rounded-xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-700 ease-out group-hover:[clip-path:inset(0_0_0_0)] md:w-[58%]">
                      <img
                        src={project.logo}
                        alt={project.logoAlt ?? `Logo ${project.title}`}
                        className="block h-auto w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                )}

                <div className="absolute top-8 right-8 z-20 px-6 py-2 bg-slate-900 text-white rounded-full font-bold text-sm translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all shadow-lg">
                  {project.results}
                </div>
              </div>

              <div className="flex justify-between items-start gap-6">
                <div className="min-w-0 flex-1">
                  <h3 className="text-3xl font-display font-bold text-slate-900 group-hover:text-brand-neon transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mt-2">
                    {project.category}
                  </p>

                  {project.description && (
                    <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                  )}

                  {project.tags && (
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Etiquetas del proyecto">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center group-hover:border-brand-neon group-hover:bg-brand-neon transition-all shadow-sm">
                  <ArrowUpRight className="text-slate-900 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.14645 13.8536C0.951184 14.0488 0.634602 14.0488 0.43934 13.8536C0.244077 13.6583 0.244077 13.3417 0.43934 13.1464L1.14645 13.8536ZM13.8536 1.85355C14.0488 1.65829 14.0488 1.34171 13.8536 1.14645C13.6583 0.951184 13.3417 0.951184 13.1464 1.14645L13.8536 1.85355ZM13.1464 1.14645L1.14645 13.1464L0.43934 13.8536L13.8536 1.85355L13.1464 1.14645ZM13.5 1V1.5H14H14.5V1V0.5H14H13.5V1ZM13.5 1H14V0.5V0H13.5V0.5V1ZM13.5 1V1.5H14H14.5V1V0.5H14H13.5V1ZM14 1H8.5V2H14V1ZM14 1V6.5H13V1H14Z" fill="currentColor" />
    </svg>
  );
}
