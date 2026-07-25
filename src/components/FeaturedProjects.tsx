import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { featuredProjects } from './projectsData';

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
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
