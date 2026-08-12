'use client';

import Image from 'next/image';
import logoAsset from '../../assets/logo1-transparent.png';
import footerLogoAsset from '../../assets/logo1-web.png';

type NextBrandLogoProps = {
  className?: string;
  compact?: boolean;
  loading?: 'eager' | 'lazy';
  sizes?: string;
  variant?: 'default' | 'footer';
};

export default function NextBrandLogo({
  className = '',
  loading,
  sizes,
  variant = 'default',
}: NextBrandLogoProps) {
  const displayedAsset = variant === 'footer' ? footerLogoAsset : logoAsset;
  const containerStyles = variant === 'footer'
    ? 'overflow-hidden rounded-xl bg-brand-neon p-0 shadow-sm'
    : 'relative isolate rounded-2xl border border-white/70 bg-white/[0.92] px-2.5 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:border-white/80 hover:bg-white/[0.96] sm:px-3 sm:py-[9px]';

  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center ${containerStyles} ${className}`}
    >
      {variant !== 'footer' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-white/12 opacity-70 blur-xl"
        />
      )}
      <Image
        src={displayedAsset}
        alt="DYM Digital"
        width={displayedAsset.width}
        height={displayedAsset.height}
        sizes={sizes}
        loading={loading}
        decoding="async"
        draggable={false}
        className="relative block h-full w-full object-contain"
      />
    </div>
  );
}
