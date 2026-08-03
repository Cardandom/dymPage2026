import Image from 'next/image';
import logoAsset from '../assets/logo1-web.png';

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export default function BrandLogo({ className = '', compact = false }: BrandLogoProps) {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f7f7f7] ${compact ? 'p-1' : 'p-1.5'} shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      <Image
        src={logoAsset}
        alt="DYM DIGITAL"
        width={logoAsset.width}
        height={logoAsset.height}
        decoding="async"
        draggable={false}
        className="block h-full w-full object-contain"
      />
    </div>
  );
}
