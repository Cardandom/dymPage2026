'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import type { NextProject } from './nextProjectsData';

type NextProjectCardProps = NextProject & {
  index: number;
};

const coverSizes = '(max-width: 767px) calc(100vw - 3rem), (max-width: 1375px) calc(50vw - 4.5rem), 616px';
const logoSizes = '(max-width: 767px) 70vw, (max-width: 1375px) 29vw, 357px';

export default function NextProjectCard({
  id,
  title,
  category,
  description,
  image,
  imageAlt,
  imagePosition,
  logo,
  logoAlt,
  tags,
  slug,
  ariaLabel,
  results,
  index,
}: NextProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
      aria-label={ariaLabel}
      data-project-slug={slug}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-[2.5rem] mb-8 border border-slate-200 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={coverSizes}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

        {logo && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
            <div className="w-[70%] overflow-hidden rounded-xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-700 ease-out group-hover:[clip-path:inset(0_0_0_0)] md:w-[58%]">
              <Image
                src={logo}
                alt={logoAlt ?? `Logo de ${title}`}
                sizes={logoSizes}
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        )}

        <div className="absolute top-8 right-8 z-20 px-6 py-2 bg-slate-900 text-white rounded-full font-bold text-sm translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all shadow-lg">
          {results}
        </div>
      </div>

      <div className="flex justify-between items-start gap-6">
        <div className="min-w-0 flex-1">
          <h3
            id={`${id}-title`}
            className="text-3xl font-display font-bold text-slate-900 group-hover:text-brand-neon transition-colors"
          >
            {title}
          </h3>
          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mt-2">
            {category}
          </p>

          {description && (
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              {description}
            </p>
          )}

          {tags && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Etiquetas del proyecto">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center group-hover:border-brand-neon group-hover:bg-brand-neon transition-all shadow-sm">
          <ArrowUpRight className="text-slate-900 group-hover:text-white transition-colors" />
        </div>
      </div>
    </motion.article>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.14645 13.8536C0.951184 14.0488 0.634602 14.0488 0.43934 13.8536C0.244077 13.6583 0.244077 13.3417 0.43934 13.1464L1.14645 13.8536ZM13.8536 1.85355C14.0488 1.65829 14.0488 1.34171 13.8536 1.14645C13.6583 0.951184 13.3417 0.951184 13.1464 1.14645L13.8536 1.85355ZM13.1464 1.14645L1.14645 13.1464L0.43934 13.8536L13.8536 1.85355L13.1464 1.14645ZM13.5 1V1.5H14H14.5V1V0.5H14H13.5V1ZM13.5 1H14V0.5V0H13.5V0.5V1ZM13.5 1V1.5H14H14.5V1V0.5H14H13.5V1ZM14 1H8.5V2H14V1ZM14 1V6.5H13V1H14Z" fill="currentColor" />
    </svg>
  );
}
