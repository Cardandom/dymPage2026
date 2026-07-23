const logoSrc = new URL('../assets/logo1-web.png', import.meta.url).href;

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export default function BrandLogo({ className = '', compact = false }: BrandLogoProps) {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f7f7f7] ${compact ? 'p-1' : 'p-1.5'} shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      <img
        src={logoSrc}
        alt="DYM DIGITAL"
        width={432}
        height={330}
        decoding="async"
        draggable={false}
        className="block h-full w-full object-contain"
      />
    </div>
  );
}
