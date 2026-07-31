import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import CTA from './components/CTA';

const loadThreeCanvas = () => import('./components/ThreeCanvas');
const ThreeCanvas = React.lazy(loadThreeCanvas);

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
          <BrandLogo className="h-24 w-32 sm:h-28 sm:w-36" compact />
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
    void loadThreeCanvas();

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
          <React.Suspense
            fallback={<div className="fixed inset-0 -z-10 bg-[#050505]" aria-hidden="true" />}
          >
            <ThreeCanvas />
          </React.Suspense>
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
            <CTA />
          </main>
          
          <Footer year={new Date().getFullYear()} />
        </motion.div>
      )}
    </div>
  );
}
