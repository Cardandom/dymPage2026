import logoSrc from '../assets/dym-logo.svg';

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export default function BrandLogo({ className = '', compact = false }: BrandLogoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-2xl bg-white ${compact ? 'p-1.5' : 'p-2'} shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      <img
        src={logoSrc}
        alt="DYM DIGITAL"
        className="block h-full w-full object-contain"
      />
    </div>
  );
}
