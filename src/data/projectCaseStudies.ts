import type { StaticImageData } from 'next/image';
import kairosCoverAsset from '../assets/projects/kairos-cover.webp';
import kairosIGAsset from '../assets/projects/kairosIG.webp';
import kairosLogoAsset from '../assets/projects/kairos-logo.webp';
import reinaSophiaLogoAsset from '../assets/projects/reina-sophia-logo.webp';
import reinaSophiaAsset from '../assets/projects/reinaSophia.webp';
import theCocoTravelCover from '../assets/projects/the-coco-travel/the-coco-travel-cover.jpg';
import theCocoTravelExperience from '../assets/projects/the-coco-travel/the-coco-travel-experience.jpg';
import theCocoTravelGroup from '../assets/projects/the-coco-travel/the-coco-travel-group.jpg';
import theCocoTravelLogo from '../assets/projects/the-coco-travel/the-coco-travel-logo.png';
import theCocoTravelPeru from '../assets/projects/the-coco-travel/the-coco-travel-peru.jpg';
import theCocoTravelQuito from '../assets/projects/the-coco-travel/the-coco-travel-quito.jpg';
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
  {
    slug: 'the-coco-travel',
    name: 'THE COCO TRAVEL',
    service: 'Diseño y desarrollo de sitio web turístico',
    shortDescription:
      'Sitio web turístico bilingüe para presentar destinos, tours y experiencias en Ecuador y Perú, con navegación responsive y contacto internacional.',
    longDescription: [
      'The Coco Travel necesitaba una plataforma digital capaz de organizar y presentar su oferta turística de forma clara para visitantes internacionales.',
      'Se desarrolló un sitio web bilingüe con páginas dedicadas a destinos en Ecuador y Perú, servicios especializados, tours, experiencias y programas turísticos descargables.',
      'La solución incorpora navegación responsive, carruseles visuales, formulario de contacto internacional, selector de idioma y contenidos estructurados para facilitar la exploración de cada experiencia.',
    ],
    coverImage: {
      src: theCocoTravelCover,
      alt: 'Laguna del Quilotoa presentada en el sitio web de The Coco Travel',
      objectPosition: 'center',
    },
    logo: {
      src: theCocoTravelLogo,
      alt: 'Logo de The Coco Travel',
    },
    gallery: [
      {
        src: theCocoTravelExperience,
        alt: 'Experiencia turística en la naturaleza presentada por The Coco Travel',
      },
      {
        src: theCocoTravelGroup,
        alt: 'Grupo de viajeros durante una experiencia de The Coco Travel en Ecuador',
      },
      {
        src: theCocoTravelQuito,
        alt: 'Mitad del Mundo en Quito presentada en el sitio de The Coco Travel',
      },
      {
        src: theCocoTravelPeru,
        alt: 'Machu Picchu presentado entre los destinos de The Coco Travel',
      },
    ],
    tags: ['Diseño web', 'Turismo', 'Sitio bilingüe', 'Experiencias'],
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'i18next',
      'Swiper',
      'AOS',
      'EmailJS',
    ],
    services: [
      'Diseño y desarrollo web',
      'Diseño responsive',
      'Arquitectura de información',
      'Internacionalización en inglés y español',
      'Presentación de destinos y tours',
      'Integración de formulario de contacto',
      'Integración de itinerarios descargables',
    ],
    challenges: [
      'Organizar una oferta amplia de destinos, servicios, tours y experiencias',
      'Presentar contenido para una audiencia internacional',
      'Facilitar la exploración de programas turísticos desde dispositivos móviles',
      'Centralizar información de Ecuador y Perú dentro de una experiencia consistente',
    ],
    solution: [
      'Sitio web multipágina con navegación mediante React Router',
      'Contenido bilingüe administrado mediante i18next',
      'Páginas individuales para destinos, servicios y tours',
      'Carruseles visuales y galerías de experiencias',
      'Itinerarios turísticos descargables en PDF',
      'Formulario internacional con selector telefónico e integración de EmailJS',
      'Mapa integrado y enlaces de contacto',
    ],
    results: [
      'Sitio web publicado en el dominio oficial de The Coco Travel',
      'Dieciocho rutas para destinos, servicios, tours y contenido corporativo',
      'Experiencia disponible en inglés y español',
      'Diseño adaptado a dispositivos móviles y de escritorio',
    ],
    websiteUrl: 'https://www.thecocotravel.com/',
    instagramUrl: 'https://www.instagram.com/co.cotravel/',
    status: 'published',
    seoTitle: 'The Coco Travel | Desarrollo web turístico bilingüe',
    seoDescription:
      'Caso de éxito de The Coco Travel: sitio web turístico bilingüe y responsive para presentar destinos, tours y experiencias en Ecuador y Perú.',
    ogImage: theCocoTravelCover,
    featured: true,
    order: 6,
    ariaLabel: 'Ver caso de éxito de The Coco Travel',
    badge: 'Sitio publicado',
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
