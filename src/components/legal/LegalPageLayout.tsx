import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import NextBrandLogo from '@/src/components/next/NextBrandLogo';
import StaticCosmicBackground from '@/src/components/next/StaticCosmicBackground';

type LegalPageLayoutProps = {
  title: string;
  updatedAt: string;
  introduction: string;
  children: ReactNode;
};

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section aria-labelledby={id} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:p-8">
      <h2 id={id} className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 [&_a]:font-semibold [&_a]:text-brand-neon [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:pl-1 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

export default function LegalPageLayout({
  title,
  updatedAt,
  introduction,
  children,
}: LegalPageLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#020204] text-white selection:bg-brand-neon selection:text-white">
      <StaticCosmicBackground />

      <div className="relative z-10">
        <Navbar
          brandLogo={(
            <NextBrandLogo
              className="h-[4.5rem] w-24 sm:h-20 sm:w-28"
              compact
              loading="eager"
              sizes="(max-width: 639px) 96px, 112px"
            />
          )}
        />

        <main className="px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
          <article className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-brand-neon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-4 focus-visible:ring-offset-[#05020d]"
            >
              <span aria-hidden="true">←</span>
              Volver al inicio
            </Link>

            <header className="pb-12 pt-12 sm:pb-16 sm:pt-16">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">Legal y privacidad</p>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                Última actualización: {updatedAt}
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {introduction}
              </p>
            </header>

            <div className="space-y-6">{children}</div>
          </article>
        </main>

        <Footer
          year={currentYear}
          brandLogo={(
            <NextBrandLogo
              className="h-11 w-11"
              sizes="44px"
              variant="footer"
            />
          )}
        />
      </div>
    </div>
  );
}
