import AIAutomation from "@/src/components/AIAutomation";
import CTA from "@/src/components/CTA";
import FAQ from "@/src/components/FAQ";
import FeaturedProjects from "@/src/components/FeaturedProjects";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Marquee from "@/src/components/Marquee";
import Navbar from "@/src/components/Navbar";
import Process from "@/src/components/Process";
import Services from "@/src/components/Services";
import Stats from "@/src/components/Stats";
import Testimonials from "@/src/components/Testimonials";
import NextPreloader from "@/src/components/next/NextPreloader";
import StaticCosmicBackground from "@/src/components/next/StaticCosmicBackground";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="next-site relative isolate min-h-screen overflow-x-hidden text-white selection:bg-brand-neon selection:text-white">
      <StaticCosmicBackground />
      <NextPreloader />

      <noscript>
        <style>{`
          .next-preloader-failsafe { display: none !important; }
          .next-site [style*="opacity: 0"],
          .next-site [style*="opacity:0"] {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style>
      </noscript>

      <div className="relative z-10">
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

        <Footer year={currentYear} />
      </div>
    </div>
  );
}
