export default function CTA() {
  return (
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
  );
}
