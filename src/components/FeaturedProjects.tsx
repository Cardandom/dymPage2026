import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "TechnoCore AI",
    category: "Branding & Performance",
    image: "https://picsum.photos/seed/tech1/800/600",
    results: "+240% Leads"
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
    <section id="cases" className="py-32 px-6 sm:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-brand-neon font-mono text-sm tracking-widest uppercase mb-4"
              >
                PROYECTOS SELECCIONADOS
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-display font-bold">CASOS DE <span className="text-white/40 italic">ÉXITO</span></h2>
          </div>
          <button className="text-lg font-semibold flex items-center gap-2 group border-b border-brand-neon pb-2">
            Ver portafolio completo <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-8 glass border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-8 right-8 px-6 py-2 bg-brand-neon text-black rounded-full font-bold text-sm translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                  {project.results}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-display font-bold group-hover:text-brand-neon transition-colors">{project.title}</h3>
                  <p className="text-white/40 uppercase tracking-widest text-xs mt-2">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-neon group-hover:bg-brand-neon transition-all">
                   <ArrowUpRight className="text-white group-hover:text-black" />
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
