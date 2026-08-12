'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import BrandLogo from './BrandLogo';

type NavbarProps = {
  brandLogo?: React.ReactNode;
};

const navLinks = [
  { name: 'Servicios', href: '/#services' },
  { name: 'Estrategia IA', href: '/#ai' },
  { name: 'Casos de éxito', href: '/#cases' },
  { name: 'Contacto', href: '/#contact' },
];

export default function Navbar({ brandLogo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-4",
        isScrolled ? "bg-brand-purple/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent"
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center">
        <Link
          href="/#hero"
          aria-label="Ir al inicio de DYM Digital"
          className="w-fit justify-self-start rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon [&>*]:!h-[4.375rem] [&>*]:!w-[5.75rem] sm:[&>*]:!h-[6.125rem] sm:[&>*]:!w-[8.125rem]"
        >
          {brandLogo ?? <BrandLogo className="h-[4.5rem] w-24 sm:h-20 sm:w-28" compact />}
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name} 
              href={link.href}
              className="whitespace-nowrap rounded-sm text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="justify-self-end rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon md:hidden"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-purple/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-sm text-2xl font-display font-semibold transition-colors hover:text-brand-neon focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
