import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreeCanvas from './components/ThreeCanvas';
import Services from './components/Services';
import AIAutomation from './components/AIAutomation';
import Stats from './components/Stats';
import Footer from './components/Footer';
import FeaturedProjects from './components/FeaturedProjects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Marquee from './components/Marquee';
import BrandLogo from './components/BrandLogo';

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-100 bg-brand-purple/95 backdrop-blur-2xl flex items-center justify-center p-8 text-white"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4"
        >
          <BrandLogo className="w-28 h-16" compact />
          <div className="h-10 w-0.5 bg-white/20" />
          <div className="text-2xl font-display font-bold tracking-widest overflow-hidden">
            <motion.span
              key="dym"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block"
            >
              DYM DIGITAL
            </motion.span>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-8 left-0 right-0 h-0.5 bg-brand-neon origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-brand-neon selection:text-white min-h-screen text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ThreeCanvas />
          <Navbar />
          
          <main>
            <Hero />
            <Stats />
            <Services />
            <Marquee />
            <AIAutomation />
            <FeaturedProjects />
            <Process />
            <Testimonials />
            <FAQ />
            
            {/* CTA Section */}
            <section id="contact" className="py-32 px-6 sm:px-12 relative overflow-hidden">
              <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center border-white/15 relative bg-brand-purple/35">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-neon/25 blur-[100px] -z-1" />
                
                <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">
                  El futuro de tu empresa <br />
                  <span className="text-gradient-neon">empieza hoy</span>
                </h2>
                <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
                  No te quedes atrás en la carrera digital. Únete a las marcas líderes que ya están utilizando nuestra tecnología para dominar el mercado.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="px-12 py-5 bg-brand-neon text-white font-bold rounded-full hover:scale-105 transition-all text-lg cursor-pointer">
                    Agendar reunión estratégica
                  </button>
                  <button className="px-12 py-5 glass border-white/20 rounded-full font-bold hover:bg-white/10 transition-all text-lg cursor-pointer">
                    Ver casos de éxito
                  </button>
                </div>
              </div>
            </section>
          </main>
          
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
