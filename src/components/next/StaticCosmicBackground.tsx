export default function StaticCosmicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020204]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 16% 18%, rgba(0, 62, 146, 0.3), transparent 38%), radial-gradient(circle at 84% 26%, rgba(43, 10, 112, 0.26), transparent 40%), radial-gradient(circle at 52% 92%, rgba(125, 48, 0, 0.18), transparent 34%)',
        }}
      />
      <div className="absolute -left-48 top-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-blue/8 blur-[160px]" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-purple/10 blur-[180px]" />
      <div className="absolute -bottom-56 left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-neon/6 blur-[190px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.35)_0.6px,transparent_0.6px)] [background-size:38px_38px]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/10 to-black/70" />
    </div>
  );
}
