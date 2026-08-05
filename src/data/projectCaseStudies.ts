import type { StaticImageData } from 'next/image';
import kairosCoverAsset from '../assets/projects/kairos-cover.webp';
import kairosIGAsset from '../assets/projects/kairosIG.webp';
import kairosLogoAsset from '../assets/projects/kairos-logo.webp';
import reinaSophiaLogoAsset from '../assets/projects/reina-sophia-logo.webp';
import reinaSophiaAsset from '../assets/projects/reinaSophia.webp';
import unaVidaConscienteAsset from '../assets/projects/unaVidaConciente.webp';
import vidaLogoAsset from '../assets/projects/vida-logo.webp';

export type ProjectStatus = 'draft' | 'published' | 'archived';

export type ProjectMedia = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  name: string;
  service: string;
  shortDescription: string;
  longDescription?: readonly string[];

  coverImage: ProjectMedia;
  logo?: ProjectMedia;
  gallery: readonly ProjectMedia[];

  tags: readonly string[];
  technologies: readonly string[];
  services: readonly string[];
  challenges: readonly string[];
  solution?: readonly string[];
  results?: readonly string[];

  websiteUrl?: string;
  instagramUrl?: string;

  status: ProjectStatus;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: StaticImageData | string;

  featured: boolean;
  order: number;
  ariaLabel: string;
  badge?: string;
};

export const projectCaseStudies = [
  {
    slug: 'kairos-sitio-web',
    name: 'KAIROS DESIGN & CONSTRUCTION',
    service: 'Sitio web corporativo',
    shortDescription: 'Proyecto web para una empresa de diseño y construcción, enfocado en presentar sus servicios, identidad visual y portafolio de proyectos de forma profesional.',
    coverImage: {
      src: kairosCoverAsset,
      alt: 'Proyecto web Kairos Design & Construction',
    },
    logo: {
      src: kairosLogoAsset,
      alt: 'Logo Kairos Design & Construction',
    },
    gallery: [],
    tags: ['Diseño web', 'Construcción', 'Arquitectura', 'Marca corporativa'],
    technologies: [],
    services: [],
    challenges: [],
    status: 'published',
    featured: true,
    order: 1,
    ariaLabel: 'Ver caso de estudio de Kairos Design & Construction',
    badge: 'Proyecto real',
  },
  {
    slug: 'kairos-gestion-instagram',
    name: 'KAIROS DESIGN & CONSTRUCTION',
    service: 'Gestión de Instagram',
    shortDescription: 'Gestión y administración de la cuenta de Instagram de Kairos Design & Construction, enfocada en fortalecer su presencia digital mediante contenido visual atractivo, comunicación de marca y consistencia en redes sociales.',
    coverImage: {
      src: kairosIGAsset,
      alt: 'Gestión de Instagram para Kairos Design & Construction',
    },
    logo: {
      src: kairosLogoAsset,
      alt: 'Logo Kairos Design & Construction',
    },
    gallery: [],
    tags: ['Instagram', 'Redes sociales', 'Community Management', 'Contenido visual'],
    technologies: [],
    services: [],
    challenges: [],
    status: 'published',
    featured: true,
    order: 2,
    ariaLabel: 'Ver caso de estudio de Instagram de Kairos Design & Construction',
    badge: 'Proyecto real',
  },
  {
    slug: 'una-vida-consciente',
    name: 'UNA VIDA CONSCIENTE',
    service: 'Landing page / Embudo de ventas',
    shortDescription: 'Diseño y desarrollo de una landing page tipo embudo de ventas para el producto digital “Emprendiendo con un hijo autista”, enfocada en comunicar una oferta clara, conectar emocionalmente con madres cuidadoras y dirigir el tráfico hacia Hotmart mediante campañas de Google Ads.',
    coverImage: {
      src: unaVidaConscienteAsset,
      alt: 'Landing page de Una Vida Consciente',
    },
    logo: {
      src: vidaLogoAsset,
      alt: 'Logo Una Vida Consciente',
    },
    gallery: [],
    tags: ['Landing Page', 'Embudo de ventas', 'Hotmart', 'Google Ads', 'Conversión'],
    technologies: [],
    services: [],
    challenges: [],
    status: 'published',
    featured: true,
    order: 3,
    ariaLabel: 'Ver caso de estudio de Una Vida Consciente',
    badge: 'Proyecto real',
  },
  {
    slug: 'reina-sophia-residences',
    name: 'REINA SOPHIA RESIDENCES',
    service: 'Sitio web inmobiliario',
    shortDescription: 'Diseño y desarrollo de una plataforma web inmobiliaria para Reina Sophia Residences, enfocada en presentar el proyecto residencial en Aruba, sus modelos de vivienda, beneficios de inversión, galería visual y formularios de captación de clientes potenciales.',
    coverImage: {
      src: reinaSophiaAsset,
      alt: 'Sitio web inmobiliario de Reina Sophia Residences',
      objectPosition: '85% center',
    },
    logo: {
      src: reinaSophiaLogoAsset,
      alt: 'Logo Reina Sophia Residences',
    },
    gallery: [],
    tags: ['Real Estate', 'Sitio web', 'Inversión inmobiliaria', 'Supabase', 'Dashboard'],
    technologies: [],
    services: [],
    challenges: [],
    status: 'published',
    featured: true,
    order: 4,
    ariaLabel: 'Ver caso de estudio de Reina Sophia Residences',
    badge: 'Proyecto real',
  },
] as const satisfies readonly ProjectCaseStudy[];

export const featuredProjectCaseStudies: readonly ProjectCaseStudy[] = projectCaseStudies
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export function getProjectCaseStudyBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((project) => project.slug === slug);
}

export function getPublishedProjectCaseStudies(): readonly ProjectCaseStudy[] {
  return projectCaseStudies
    .filter((project) => project.status === 'published')
    .sort((a, b) => a.order - b.order);
}
