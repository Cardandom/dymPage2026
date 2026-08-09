import type { StaticImageData } from 'next/image';
import kairosCoverAsset from '../assets/projects/kairos-cover.webp';
import kairosAbout from '../assets/projects/kairos-web/kairos-about.png';
import kairosHomeDesktop from '../assets/projects/kairos-web/kairos-home-desktop.png';
import kairosProjectBonaVista from '../assets/projects/kairos-web/kairos-project-bona-vista.png';
import kairosServices from '../assets/projects/kairos-web/kairos-services.png';
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
import unaVidaDiagnosticSolution from '../assets/projects/una-vida-consciente/una-vida-diagnostic-solution.png';
import unaVidaFaq from '../assets/projects/una-vida-consciente/una-vida-faq.png';
import unaVidaHeroDesktop from '../assets/projects/una-vida-consciente/una-vida-hero-desktop.png';
import unaVidaMobile from '../assets/projects/una-vida-consciente/una-vida-mobile.png';
import unaVidaOffer from '../assets/projects/una-vida-consciente/una-vida-offer.png';
import unaVidaResources from '../assets/projects/una-vida-consciente/una-vida-resources.png';
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
    shortDescription:
      'Sitio corporativo para presentar los servicios de diseño arquitectónico y construcción de Kairos, exhibir proyectos realizados y centralizar el contacto con clientes en Aruba.',
    longDescription: [
      'Kairos Design & Construction necesitaba organizar su propuesta de arquitectura y construcción dentro de una presencia digital profesional, visual y coherente con su marca.',
      'El sitio reúne información corporativa, servicios, proyectos realizados, preguntas frecuentes y canales de contacto, permitiendo explorar el trabajo de la empresa y sus distintas áreas de especialización.',
      'La experiencia está orientada a presentar proyectos arquitectónicos y de construcción de forma clara, facilitar consultas comerciales y comunicar la presencia de Kairos en Aruba.',
    ],
    coverImage: {
      src: kairosCoverAsset,
      alt: 'Proyecto web Kairos Design & Construction',
    },
    logo: {
      src: kairosLogoAsset,
      alt: 'Logo Kairos Design & Construction',
    },
    gallery: [
      {
        src: kairosHomeDesktop,
        alt: 'Página principal del sitio web de Kairos Design & Construction',
      },
      {
        src: kairosServices,
        alt: 'Servicios de arquitectura y construcción presentados en el sitio de Kairos',
      },
      {
        src: kairosAbout,
        alt: 'Sección corporativa de Kairos Design & Construction',
      },
      {
        src: kairosProjectBonaVista,
        alt: 'Página de proyecto Bona Vista en el sitio web de Kairos Design & Construction',
      },
    ],
    tags: ['Diseño web', 'Arquitectura', 'Construcción', 'Sitio corporativo'],
    technologies: [],
    services: [
      'Diseño y desarrollo web corporativo',
      'Arquitectura y organización de contenido',
      'Presentación de servicios y proyectos',
      'Integración de formulario de contacto',
      'Adaptación responsive',
    ],
    challenges: [
      'Organizar los distintos servicios de arquitectura y construcción dentro de una navegación clara',
      'Presentar un portafolio amplio de proyectos sin perder jerarquía visual',
      'Facilitar las consultas de potenciales clientes',
      'Comunicar de forma profesional la experiencia y presencia de Kairos en Aruba',
    ],
    solution: [
      'Estructura de navegación para contenido corporativo, servicios y proyectos',
      'Páginas individuales para presentar proyectos realizados',
      'Sección de preguntas frecuentes para resolver dudas comerciales',
      'Formulario y datos de contacto accesibles desde el sitio',
      'Experiencia visual orientada a destacar arquitectura, construcción y proyectos',
    ],
    results: [
      'Sitio web publicado en el dominio oficial de Kairos Design & Construction',
      'Portafolio público de proyectos y servicios disponible para potenciales clientes',
      'Formulario y canales de contacto integrados en la experiencia',
      'Información corporativa, servicios y preguntas frecuentes centralizados en un mismo sitio',
    ],
    websiteUrl: 'https://kairosdesignandconstructions.com/',
    status: 'published',
    seoTitle: 'Kairos Design & Construction | Caso de éxito web en Aruba',
    seoDescription:
      'Caso de éxito de Kairos Design & Construction: sitio corporativo para presentar servicios de arquitectura, construcción, proyectos y contacto en Aruba.',
    ogImage: kairosCoverAsset,
    featured: true,
    order: 1,
    ariaLabel: 'Ver caso de estudio de Kairos Design & Construction',
    badge: 'Proyecto real',
  },
  {
    slug: 'kairos-gestion-instagram',
    name: 'KAIROS DESIGN & CONSTRUCTION',
    service: 'Diseño de contenido para Instagram',
    shortDescription:
      'Diseño de contenido visual para Instagram orientado a presentar proyectos arquitectónicos, procesos de obra, transformaciones y comunicación corporativa con una identidad gráfica consistente.',
    longDescription: [
      'Kairos Design & Construction necesitaba trasladar su identidad corporativa al entorno de Instagram y presentar de forma visual los distintos tipos de proyectos, procesos y servicios de la empresa.',
      'El contenido combina proyectos arquitectónicos, planos, avances de obra, transformaciones antes y después, piezas informativas y comunicación corporativa bajo una línea gráfica reconocible.',
      'El trabajo se enfocó en mantener coherencia visual entre formatos distintos y facilitar la presentación de temas técnicos de arquitectura y construcción dentro de una red social predominantemente visual.',
    ],
    coverImage: {
      src: kairosIGAsset,
      alt: 'Gestión de Instagram para Kairos Design & Construction',
    },
    logo: {
      src: kairosLogoAsset,
      alt: 'Logo Kairos Design & Construction',
    },
    gallery: [],
    tags: ['Instagram', 'Diseño de contenido', 'Identidad visual', 'Arquitectura'],
    technologies: [],
    services: [
      'Diseño de piezas para redes sociales',
      'Adaptación de identidad visual para Instagram',
      'Presentación visual de proyectos y avances de obra',
      'Diseño de contenido informativo',
      'Organización visual de destacados',
      'Diseño de formatos para publicaciones y reels',
    ],
    challenges: [
      'Mantener coherencia visual entre distintos tipos de contenido',
      'Comunicar procesos arquitectónicos y de construcción de forma comprensible',
      'Combinar proyectos, avances de obra y contenido educativo dentro de una misma identidad',
      'Adaptar la imagen corporativa de Kairos a formatos propios de Instagram',
    ],
    solution: [
      'Sistema visual consistente basado en la identidad corporativa de Kairos',
      'Piezas destinadas a mostrar planos, proyectos y avances de construcción',
      'Contenido antes y después para comunicar transformaciones',
      'Piezas informativas para explicar temas relacionados con arquitectura y construcción',
      'Portadas de destacados alineadas con la identidad visual de la marca',
    ],
    results: [
      'Presencia visual de Kairos documentada mediante una cuadrícula de contenido coherente',
      'Uso consistente de identidad, logotipo y paleta corporativa',
      'Diversidad de formatos para proyectos, procesos de obra y contenido informativo',
      'Organización visual de publicaciones y destacados alineada con la actividad de la empresa',
    ],
    instagramUrl: 'https://www.instagram.com/kairosdesign.construction/',
    status: 'published',
    seoTitle: 'Kairos Design & Construction | Contenido para Instagram',
    seoDescription:
      'Caso de contenido visual para Instagram de Kairos Design & Construction, con piezas de arquitectura, proyectos, avances de obra y comunicación corporativa.',
    ogImage: kairosIGAsset,
    featured: true,
    order: 2,
    ariaLabel: 'Ver caso de estudio de Instagram de Kairos Design & Construction',
    badge: 'Proyecto real',
  },
  {
    slug: 'una-vida-consciente',
    name: 'UNA VIDA CONSCIENTE',
    service: 'Landing page / Embudo de ventas',
    shortDescription:
      'Landing page y embudo digital para presentar el producto “Emprendiendo con un Hijo Autista”, explicar sus recursos, resolver objeciones y dirigir la compra hacia un checkout externo de Hotmart.',
    longDescription: [
      'El proyecto consistió en desarrollar una experiencia de venta digital para presentar de forma clara una oferta de recursos dirigida a madres cuidadoras y familias relacionadas con el autismo.',
      'La landing construye un recorrido progresivo desde el contexto y las necesidades de la audiencia hasta la explicación de la solución, los recursos incluidos, testimonios, preguntas frecuentes y la oferta final.',
      'La experiencia conecta los distintos llamados a la acción con un checkout externo de Hotmart e incorpora una base de medición mediante Google Tag Manager, además de páginas de contacto, privacidad y términos.',
    ],
    coverImage: {
      src: unaVidaHeroDesktop,
      alt: 'Hero de la landing page del producto Emprendiendo con un Hijo Autista',
    },
    logo: {
      src: vidaLogoAsset,
      alt: 'Logo Una Vida Consciente',
    },
    gallery: [
      {
        src: unaVidaHeroDesktop,
        alt: 'Hero de la landing page del producto Emprendiendo con un Hijo Autista',
      },
      {
        src: unaVidaDiagnosticSolution,
        alt: 'Secciones de diagnóstico y solución dentro del embudo digital',
      },
      {
        src: unaVidaResources,
        alt: 'Presentación de los recursos incluidos en la oferta digital',
      },
      {
        src: unaVidaOffer,
        alt: 'Sección de oferta y llamado a la acción conectado con Hotmart',
      },
      {
        src: unaVidaFaq,
        alt: 'Preguntas frecuentes de la landing page',
      },
      {
        src: unaVidaMobile,
        alt: 'Experiencia responsive de la landing page en dispositivo móvil',
      },
    ],
    tags: ['Landing Page', 'Embudo de ventas', 'Hotmart', 'Google Tag Manager'],
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Motion',
      'Google Tag Manager',
      'Hotmart',
    ],
    services: [
      'Diseño y desarrollo de landing page',
      'Arquitectura de embudo de ventas',
      'Organización de propuesta, beneficios y oferta',
      'Integración con checkout externo de Hotmart',
      'Implementación base de Google Tag Manager',
      'Diseño responsive',
      'Metadata y SEO técnico básico',
      'Implementación de páginas legales y contacto por email',
    ],
    challenges: [
      'Comunicar una oferta sensible y especializada de forma clara y respetuosa',
      'Organizar múltiples recursos dentro de una propuesta fácil de comprender',
      'Construir continuidad entre problema, solución, confianza y compra',
      'Resolver objeciones antes del CTA final',
      'Mantener una experiencia coherente en escritorio y dispositivos móviles',
    ],
    solution: [
      'Landing page estructurada mediante una progresión narrativa orientada a conversión',
      'Secciones específicas para contexto, diagnóstico, solución, beneficios y recursos',
      'Presentación diferenciada de los elementos incluidos en la oferta',
      'Testimonios y preguntas frecuentes como elementos de confianza',
      'CTAs distribuidos a lo largo de la experiencia y conectados con Hotmart',
      'Integración de Google Tag Manager como base para medición',
      'Contacto por email y páginas independientes de privacidad y términos',
    ],
    results: [
      'Landing funcional desarrollada con Next.js y una arquitectura orientada al recorrido de compra',
      'Checkout externo de Hotmart integrado en los principales llamados a la acción',
      'Google Tag Manager cargado a nivel de aplicación',
      'Experiencia responsive para escritorio y dispositivos móviles',
      'Contacto, política de privacidad y términos integrados dentro de la experiencia',
    ],
    status: 'published',
    websiteUrl: undefined,
    instagramUrl: undefined,
    seoTitle: 'Una Vida Consciente | Landing y embudo para producto digital',
    seoDescription:
      'Caso de desarrollo de una landing page y embudo digital para presentar recursos, resolver objeciones y dirigir la compra hacia un checkout de Hotmart.',
    ogImage: unaVidaHeroDesktop,
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
