import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProjectCaseStudyBySlug,
  getPublishedProjectCaseStudies,
  type ProjectCaseStudy,
} from '@/src/data/projectCaseStudies';
import { SITE_NAME, SITE_URL } from '@/src/config/site';

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPublishedProject(slug: string): ProjectCaseStudy {
  const project = getProjectCaseStudyBySlug(slug);

  if (!project || project.status !== 'published') {
    notFound();
  }

  return project;
}

function getMetadataImage(project: ProjectCaseStudy): string | undefined {
  if (!project.ogImage) {
    return undefined;
  }

  return typeof project.ogImage === 'string' ? project.ogImage : project.ogImage.src;
}

export function generateStaticParams() {
  return getPublishedProjectCaseStudies().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  const title = project.seoTitle ?? `${project.name} | ${SITE_NAME}`;
  const description = project.seoDescription ?? project.shortDescription;
  const canonical = `${SITE_URL}/proyectos/${project.slug}/`;
  const image = getMetadataImage(project);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

type ListSectionProps = {
  title: string;
  eyebrow: string;
  items: readonly string[];
};

function ListSection({ title, eyebrow, items }: ListSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-4 text-sm leading-7 text-slate-300 sm:text-base">
            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-brand-neon shadow-[0_0_12px_rgba(255,134,14,0.7)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPublishedProject(slug);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#05020d] text-white selection:bg-brand-neon selection:text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(60,0,190,0.42),transparent_34%),radial-gradient(circle_at_88%_30%,rgba(255,134,14,0.12),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 sm:pt-12 lg:px-12">
        <Link
          href="/#cases"
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-brand-neon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-4 focus-visible:ring-offset-[#05020d]"
        >
          <span aria-hidden="true">←</span>
          Volver a casos de éxito
        </Link>

        <header className="pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">
                  {project.service}
                </p>
                {project.badge && (
                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200">
                    {project.badge}
                  </span>
                )}
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {project.shortDescription}
              </p>

              {project.tags.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Etiquetas del proyecto">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {(project.websiteUrl || project.instagramUrl) && (
                <div className="mt-9 flex flex-wrap gap-4">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-neon px-5 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#05020d]"
                    >
                      Visitar sitio web
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.instagramUrl && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition-colors hover:border-brand-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-4 focus-visible:ring-offset-[#05020d]"
                    >
                      Ver Instagram
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {project.logo && (
              <div className="mx-auto flex w-full max-w-sm items-center justify-center rounded-[2rem] border border-white/10 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-10">
                <Image
                  src={project.logo.src}
                  alt={project.logo.alt}
                  sizes="(max-width: 1023px) 70vw, 288px"
                  className="h-auto max-h-48 w-full object-contain"
                />
              </div>
            )}
          </div>

          <div className="relative mt-14 aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:mt-20 sm:aspect-[16/9] lg:rounded-[2.75rem]">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(100vw - 4rem), 1184px"
              className="object-cover"
              style={project.coverImage.objectPosition ? { objectPosition: project.coverImage.objectPosition } : undefined}
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#05020d]/45 via-transparent to-transparent" />
          </div>
        </header>

        <div className="mt-20 space-y-8 sm:mt-28">
          {project.longDescription && project.longDescription.length > 0 && (
            <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:grid-cols-[0.75fr_1.6fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">Contexto</p>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Descripción general</h2>
              </div>
              <div className="space-y-5">
                {project.longDescription.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}

          {(project.challenges.length > 0 || (project.solution && project.solution.length > 0)) && (
            <div className="grid gap-8 lg:grid-cols-2">
              {project.challenges.length > 0 && (
                <ListSection title="Desafío o necesidad" eyebrow="El punto de partida" items={project.challenges} />
              )}
              {project.solution && project.solution.length > 0 && (
                <ListSection title="Solución desarrollada" eyebrow="La respuesta" items={project.solution} />
              )}
            </div>
          )}

          {(project.services.length > 0 || project.technologies.length > 0) && (
            <div className="grid gap-8 lg:grid-cols-2">
              {project.services.length > 0 && (
                <ListSection title="Servicios incluidos" eyebrow="Alcance" items={project.services} />
              )}
              {project.technologies.length > 0 && (
                <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">Stack</p>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Tecnologías</h2>
                  <ul className="mt-7 flex flex-wrap gap-3" aria-label="Tecnologías utilizadas">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-xl border border-brand-purple/50 bg-brand-purple/20 px-4 py-3 font-mono text-xs text-slate-200"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}

          {project.gallery.length > 0 && (
            <section className="pt-8 sm:pt-12">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">Exploración visual</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Galería del proyecto</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <figure
                    key={`${image.alt}-${index}`}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(50vw - 3rem), 580px"
                        className="object-cover"
                        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.results && project.results.length > 0 && (
            <ListSection title="Resultados o estado" eyebrow="Resultado" items={project.results} />
          )}
        </div>

        <section className="mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-brand-purple/60 via-brand-purple/30 to-brand-neon/15 px-6 py-14 text-center shadow-[0_30px_100px_rgba(60,0,190,0.2)] sm:mt-32 sm:px-12 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-neon">Tu próximo proyecto</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            ¿Necesitas una solución digital como esta?
          </h2>
          <Link
            href="/#contact"
            className="mt-9 inline-flex rounded-full bg-brand-neon px-7 py-4 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-purple"
          >
            Hablemos de tu proyecto
          </Link>
        </section>
      </div>
    </main>
  );
}
