import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import BrandLogo from './BrandLogo';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#services' },
  { name: 'IA', href: '#ai' },
  { name: 'Casos', href: '#cases' },
  { name: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-4",
        isScrolled ? "bg-brand-purple/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <BrandLogo className="h-[4.5rem] w-24 sm:h-20 sm:w-28" compact />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 rounded-full glass border-white/20 hover:bg-brand-neon transition-all font-semibold flex items-center gap-1 group">
            <span className="text-white group-hover:text-brand-purple transition-colors">Agendar Call</span>
            <ArrowUpRight size={16} className="text-brand-neon group-hover:text-brand-purple" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-purple/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold hover:text-brand-neon transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 rounded-xl bg-brand-neon text-white font-bold">
              Agendar Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
