'use client';

import Image from 'next/image';
import logoAsset from '../../assets/logo1-web.png';

type NextBrandLogoProps = {
  className?: string;
  compact?: boolean;
  loading?: 'eager' | 'lazy';
  sizes?: string;
  variant?: 'default' | 'footer';
};

export default function NextBrandLogo({
  className = '',
  compact = false,
  loading,
  sizes,
  variant = 'default',
}: NextBrandLogoProps) {
  const containerStyles = variant === 'footer'
    ? 'rounded-xl bg-brand-neon p-0 shadow-sm'
    : `rounded-2xl bg-[#f7f7f7] ${compact ? 'p-1' : 'p-1.5'} shadow-[0_12px_40px_rgba(0,0,0,0.18)]`;

  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden ${containerStyles} ${className}`}
    >
      <Image
        src={logoAsset}
        alt="DYM Digital"
        width={logoAsset.width}
        height={logoAsset.height}
        sizes={sizes}
        loading={loading}
        decoding="async"
        draggable={false}
        className="block h-full w-full object-contain"
      />
    </div>
  );
}
