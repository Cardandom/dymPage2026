import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 sm:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-neon rounded-lg flex items-center justify-center font-bold text-black text-xl">D</div>
              <span className="text-2xl font-display font-bold tracking-tighter">DYM DIGITAL</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-lg leading-[1.1]">
              ¿Listo para dominar el <span className="text-brand-neon">ecosistema digital</span>?
            </h3>
            <button className="px-8 py-4 bg-brand-neon text-black rounded-full font-bold hover:scale-105 transition-all glow-neon">
              Comenzar Auditoría IA
            </button>
          </div>
          
          <div>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-8">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-neon transition-colors">Inicio</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-neon transition-colors">Servicios</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-neon transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-neon transition-colors">Estrategia IA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-8">Redes Sociales</h4>
            <div className="flex flex-wrap gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-full px-6 py-2 outline-none focus:border-brand-neon w-full" />
                <button className="bg-white text-black px-4 rounded-full font-bold">OK</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} DYM Digital Agency. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px] -z-1" />
    </footer>
  );
}
