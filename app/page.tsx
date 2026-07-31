export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-brand-purple/20 sm:p-12">
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.28em] text-brand-blue">
          Fase 1 · Diagnóstico
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          DYM Digital
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/70 sm:text-xl">
          Infraestructura de Next.js preparada
        </p>
      </section>
    </main>
  );
}
