export default function StaticCosmicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,112,243,0.18),transparent_38%),radial-gradient(circle_at_82%_24%,rgba(60,0,190,0.2),transparent_36%),radial-gradient(circle_at_52%_82%,rgba(255,134,14,0.12),transparent_34%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-[140px]" />
      <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-purple/15 blur-[150px]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-neon/8 blur-[170px]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.45)_0.7px,transparent_0.7px)] [background-size:34px_34px]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050505]/20 to-[#050505]" />
    </div>
  );
}
