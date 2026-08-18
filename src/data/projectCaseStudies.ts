import type { StaticImageData } from 'next/image';
import kairosCoverAsset from '../assets/projects/kairos-cover.webp';
import kairosAbout from '../assets/projects/kairos-web/kairos-about.webp';
import kairosHomeDesktop from '../assets/projects/kairos-web/kairos-home-desktop.webp';
import kairosProjectBonaVista from '../assets/projects/kairos-web/kairos-project-bona-vista.webp';
import kairosServices from '../assets/projects/kairos-web/kairos-services.webp';
import kairosIGAsset from '../assets/projects/kairosIG.webp';
import kairosLogoAsset from '../assets/projects/kairos-logo.webp';
import mundoBusinessColorSystem from '../assets/projects/mundo-business-services/mundo-business-color-system.webp';
import mundoBusinessCover from '../assets/projects/mundo-business-services/mundo-business-cover.webp';
import mundoBusinessIdentitySystem from '../assets/projects/mundo-business-services/mundo-business-identity-system.webp';
import mundoBusinessLogo from '../assets/projects/mundo-business-services/mundo-business-logo.png';
import mundoBusinessLogoVariations from '../assets/projects/mundo-business-services/mundo-business-logo-variations.webp';
import mundoBusinessStationery from '../assets/projects/mundo-business-services/mundo-business-stationery.webp';
import mundoBusinessTypography from '../assets/projects/mundo-business-services/mundo-business-typography.webp';
import mundoBusinessVisualLanguage from '../assets/projects/mundo-business-services/mundo-business-visual-language.webp';
import pureMedicalApplications from '../assets/projects/pure-medical/pure-medical-applications.webp';
import pureMedicalCommercial from '../assets/projects/pure-medical/pure-medical-commercial.webp';
import pureMedicalCorporatePresence from '../assets/projects/pure-medical/pure-medical-corporate-presence.webp';
import pureMedicalCover from '../assets/projects/pure-medical/pure-medical-cover.webp';
import pureMedicalIdentity from '../assets/projects/pure-medical/pure-medical-identity.webp';
import pureMedicalLogo from '../assets/projects/pure-medical/pure-medical-logo.png';
import pureMedicalProduct from '../assets/projects/pure-medical/pure-medical-product.webp';
import reinaSophiaContact from '../assets/projects/reina-sophia/reina-sophia-contact.webp';
import reinaSophiaGallery from '../assets/projects/reina-sophia/reina-sophia-gallery.webp';
import reinaSophiaHome from '../assets/projects/reina-sophia/reina-sophia-home.webp';
import reinaSophiaModelLuca from '../assets/projects/reina-sophia/reina-sophia-model-luca.webp';
import reinaSophiaModelOliver from '../assets/projects/reina-sophia/reina-sophia-model-oliver.webp';
import reinaSophiaLogoAsset from '../assets/projects/reina-sophia-logo.webp';
import theCocoTravelCover from '../assets/projects/the-coco-travel/the-coco-travel-cover.webp';
import theCocoTravelExperience from '../assets/projects/the-coco-travel/the-coco-travel-experience.jpg';
import theCocoTravelGroup from '../assets/projects/the-coco-travel/the-coco-travel-group.jpg';
import theCocoTravelLogo from '../assets/projects/the-coco-travel/the-coco-travel-logo.png';
import theCocoTravelPeru from '../assets/projects/the-coco-travel/the-coco-travel-peru.jpg';
import theCocoTravelQuito from '../assets/projects/the-coco-travel/the-coco-travel-quito.jpg';
import unisexMarysCatalog from '../assets/projects/unisex-marys/unisex-marys-catalog.webp';
import unisexMarysContact from '../assets/projects/unisex-marys/unisex-marys-contact.webp';
import unisexMarysGallery from '../assets/projects/unisex-marys/unisex-marys-gallery.webp';
import unisexMarysHome from '../assets/projects/unisex-marys/unisex-marys-home.webp';
import unisexMarysLogo from '../assets/projects/unisex-marys/unisex-marys-logo.webp';
import unisexMarysPromotions from '../assets/projects/unisex-marys/unisex-marys-promotions.webp';
import unisexMarysServices from '../assets/projects/unisex-marys/unisex-marys-services.webp';
import unaVidaDiagnosticSolution from '../assets/projects/una-vida-consciente/una-vida-diagnostic-solution.webp';
import unaVidaFaq from '../assets/projects/una-vida-consciente/una-vida-faq.webp';
import unaVidaHeroDesktop from '../assets/projects/una-vida-consciente/una-vida-hero-desktop.webp';
import unaVidaMobile from '../assets/projects/una-vida-consciente/una-vida-mobile.webp';
import unaVidaOffer from '../assets/projects/una-vida-consciente/una-vida-offer.webp';
import unaVidaResources from '../assets/projects/una-vida-consciente/una-vida-resources.webp';
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
  heroDescription?: string;
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
  ctaTitle?: string;

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
    shortDescription:
      'Experiencia web inmobiliaria desarrollada para presentar Reina Sophia Residences, sus modelos residenciales, recursos visuales, ubicación y canales de contacto dentro de una experiencia moderna y responsive.',
    longDescription: [
      'Reina Sophia Residences requería una presencia digital capaz de comunicar visualmente una propuesta inmobiliaria en Aruba y organizar información relacionada con sus modelos, características, ubicación y avance del proyecto.',
      'La experiencia fue concebida para combinar renders, contenido comercial y navegación visual dentro de un recorrido que permita a potenciales compradores conocer el desarrollo y sus distintas propuestas residenciales.',
      'El código incorpora una arquitectura en desarrollo para autenticación, portal de clientes y administración de avances, sin presentarla como una funcionalidad pública finalizada.',
    ],
    coverImage: {
      src: reinaSophiaHome,
      alt: 'Hero del sitio web inmobiliario de Reina Sophia Residences en Aruba',
    },
    logo: {
      src: reinaSophiaLogoAsset,
      alt: 'Logo Reina Sophia Residences',
    },
    gallery: [
      {
        src: reinaSophiaHome,
        alt: 'Hero audiovisual del sitio web de Reina Sophia Residences',
      },
      {
        src: reinaSophiaGallery,
        alt: 'Galería interactiva de renders del proyecto residencial en Aruba',
      },
      {
        src: reinaSophiaModelLuca,
        alt: 'Página de presentación del modelo residencial Luca Boutique House',
      },
      {
        src: reinaSophiaModelOliver,
        alt: 'Página de presentación del modelo residencial Oliver Boutique House',
      },
      {
        src: reinaSophiaContact,
        alt: 'Sección de ubicación, información comercial y contacto del proyecto',
      },
    ],
    tags: ['Real Estate', 'Desarrollo web', 'Experiencia inmobiliaria', 'Aruba'],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'Supabase',
    ],
    services: [
      'Diseño y desarrollo web inmobiliario',
      'Arquitectura de información',
      'Presentación visual de proyectos y modelos',
      'Integración de galerías y renders',
      'Animación interactiva mediante video y scroll',
      'Integración de ubicación e información de contacto',
      'Diseño responsive',
      'Arquitectura en desarrollo para portal de clientes y administración',
    ],
    challenges: [
      'Comunicar visualmente una propuesta inmobiliaria de alto componente gráfico',
      'Organizar modelos, renders y características sin saturar la navegación',
      'Integrar galerías y secuencias audiovisuales manteniendo una experiencia fluida',
      'Facilitar el acceso a la ubicación y la información de contacto del proyecto',
      'Preparar una arquitectura privada sin confundir funcionalidades en desarrollo con entregables públicos',
    ],
    solution: [
      'Hero audiovisual orientado a comunicar la propuesta residencial en Aruba',
      'Galería interactiva para explorar renders y vistas del desarrollo',
      'Páginas dedicadas a los modelos Luca y Oliver con características y recursos visuales',
      'Secciones animadas mediante video y desplazamiento controlado con GSAP',
      'Integración de mapa, ubicación e información comercial visible',
      'Navegación responsive adaptada a escritorio, tablet y móvil',
      'Arquitectura en desarrollo con Supabase para autenticación, portal de clientes y administración',
    ],
    results: [
      'Implementación pública disponible para presentar Reina Sophia Residences en Aruba',
      'Modelos Luca y Oliver organizados en páginas inmobiliarias dedicadas',
      'Galería de renders integrada dentro de una experiencia interactiva',
      'Ubicación e información comercial incorporadas al recorrido público',
      'Experiencia responsive con navegación adaptada a distintos dispositivos',
    ],
    websiteUrl: 'https://www.jbsseco.com/',
    instagramUrl: undefined,
    status: 'published',
    seoTitle: 'Reina Sophia Residences | Desarrollo web inmobiliario en Aruba',
    seoDescription:
      'Caso de desarrollo web para Reina Sophia Residences, una experiencia inmobiliaria orientada a presentar modelos residenciales, renders, ubicación y contacto en Aruba.',
    ogImage: reinaSophiaHome,
    featured: true,
    order: 4,
    ariaLabel: 'Ver caso de estudio de Reina Sophia Residences',
    badge: 'Proyecto real',
  },
  {
    slug: 'unisex-marys',
    name: 'UNISEX MARY’S',
    service: 'Sitio web para spa y salón de belleza',
    shortDescription:
      'Sitio web responsive para presentar servicios de belleza y bienestar, promociones, resultados, ubicación y canales de contacto dentro de una experiencia visual fácil de explorar.',
    longDescription: [
      'Unisex Mary’s necesitaba consolidar su presencia digital en una experiencia capaz de presentar con claridad su oferta de belleza, cuidado personal y bienestar en Medellín.',
      'El sitio organiza categorías, promociones y un catálogo con búsqueda y filtros para facilitar la exploración de tratamientos faciales, peluquería, masajes, uñas, servicios corporales y cuidado masculino.',
      'La experiencia conecta el descubrimiento de cada servicio con WhatsApp, información de contacto y acceso a la ubicación del negocio, dentro de una navegación responsive para dispositivos móviles y de escritorio.',
    ],
    coverImage: {
      src: unisexMarysHome,
      alt: 'Página principal del sitio web de Unisex Mary’s',
    },
    logo: {
      src: unisexMarysLogo,
      alt: 'Logo de Unisex Mary’s',
    },
    gallery: [
      {
        src: unisexMarysServices,
        alt: 'Categorías de servicios de belleza y bienestar de Unisex Mary’s',
      },
      {
        src: unisexMarysPromotions,
        alt: 'Promociones y experiencias especiales presentadas por Unisex Mary’s',
      },
      {
        src: unisexMarysCatalog,
        alt: 'Catálogo con búsqueda y filtros de servicios de Unisex Mary’s',
      },
      {
        src: unisexMarysGallery,
        alt: 'Galería interactiva de transformaciones de Unisex Mary’s',
      },
      {
        src: unisexMarysContact,
        alt: 'Sección de ubicación y contacto de Unisex Mary’s en Medellín',
      },
    ],
    tags: ['Diseño web', 'Beauty & Wellness', 'Catálogo de servicios', 'Experiencia responsive'],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'Three.js',
      'React Three Fiber',
    ],
    services: [
      'Diseño y desarrollo web',
      'Arquitectura de información',
      'Catálogo digital con categorías, búsqueda y filtros',
      'Presentación de promociones y transformaciones',
      'Integración de contacto directo mediante WhatsApp',
      'Integración de ubicación mediante Google Maps',
      'Diseño responsive',
      'SEO técnico y datos estructurados del negocio',
      'Animaciones e interacciones visuales',
    ],
    challenges: [
      'Organizar una oferta amplia de servicios sin saturar la navegación',
      'Facilitar la búsqueda y exploración de tratamientos por categoría',
      'Presentar promociones y resultados de manera visible dentro del recorrido',
      'Mantener una experiencia clara y funcional en dispositivos móviles',
      'Conectar cada servicio con canales directos de contacto y ubicación',
    ],
    solution: [
      'Experiencia visual alineada con la identidad del spa y salón de belleza',
      'Catálogo interactivo organizado por categorías, búsqueda textual y filtros',
      'Sección dedicada a promociones con acceso directo a WhatsApp',
      'Galería interactiva para comparar transformaciones y resultados',
      'Información del negocio, horarios, teléfono y ubicación centralizados',
      'Navegación responsive con CTAs de WhatsApp accesibles durante el recorrido',
      'Metadata, sitemap, manifest y datos estructurados para SEO local',
    ],
    results: [
      'Sitio web publicado en el dominio oficial de Unisex Mary’s',
      'Catálogo digital de servicios disponible con búsqueda y filtros',
      'Promociones y transformaciones integradas dentro de la experiencia',
      'WhatsApp, teléfono, horarios y ubicación centralizados en el sitio',
      'Experiencia responsive terminada para escritorio y dispositivos móviles',
      'Presencia digital propia disponible en producción',
    ],
    websiteUrl: 'https://unisexmarysspa.com/',
    instagramUrl: undefined,
    status: 'published',
    seoTitle: 'Unisex Mary’s | Sitio web para spa y salón de belleza',
    seoDescription:
      'Caso de desarrollo web para Unisex Mary’s: experiencia responsive con catálogo de servicios, promociones, transformaciones, ubicación y contacto por WhatsApp.',
    ogImage: unisexMarysHome,
    featured: true,
    order: 5,
    ariaLabel: 'Ver caso de éxito de Unisex Mary’s',
    badge: 'Sitio publicado',
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
  {
    slug: 'mundo-business-services',
    name: 'MUNDO BUSINESS SERVICES',
    service: 'Branding e identidad corporativa',
    shortDescription:
      'Desarrollo de una identidad corporativa integral para Mundo Business Services, definiendo su sistema visual, lineamientos de marca y aplicaciones para mantener una comunicación profesional y consistente.',
    longDescription: [
      'Mundo Business Services necesitaba estructurar una identidad visual capaz de transmitir profesionalismo, confianza y solidez dentro de una propuesta empresarial vinculada a servicios y educación financiera.',
      'El proyecto se desarrolló a partir de la creación y documentación de un sistema corporativo que permitiera utilizar la marca de manera consistente en diferentes formatos, evitando variaciones que pudieran afectar su reconocimiento visual.',
      'El resultado fue consolidado en un manual de identidad corporativa que reúne los principales lineamientos gráficos de la marca y sirve como referencia para futuras aplicaciones de comunicación, diseño y material empresarial.',
    ],
    coverImage: {
      src: mundoBusinessCover,
      alt: 'Presentación editorial de la identidad corporativa de Mundo Business Services',
    },
    logo: {
      src: mundoBusinessLogo,
      alt: 'Logo de Mundo Business Services',
    },
    gallery: [
      {
        src: mundoBusinessIdentitySystem,
        alt: 'Construcción del isotipo y sistema visual de Mundo Business Services',
        caption:
          '01 — Construcción de identidad. Desarrollo del sistema visual y definición de los elementos que conforman la identidad de Mundo Business Services.',
      },
      {
        src: mundoBusinessColorSystem,
        alt: 'Paleta cromática corporativa de Mundo Business Services',
        caption:
          '02 — Sistema cromático. Paleta corporativa orientada a transmitir confianza, estabilidad y profesionalismo.',
      },
      {
        src: mundoBusinessLogoVariations,
        alt: 'Versiones positivas, negativas y de alto contraste de la marca',
        caption:
          '03 — Adaptabilidad de la marca. Versiones y criterios de aplicación preparados para distintos contextos visuales.',
      },
      {
        src: mundoBusinessTypography,
        alt: 'Sistema tipográfico de la identidad corporativa',
        caption:
          '04 — Sistema tipográfico. Jerarquías y familias tipográficas organizadas para construir una comunicación consistente.',
      },
      {
        src: mundoBusinessStationery,
        alt: 'Mockup editorial de papelería y tarjetas corporativas sin datos personales',
        caption:
          '05 — Aplicaciones corporativas. Traslado del sistema de identidad a papelería empresarial sin exponer información privada.',
      },
      {
        src: mundoBusinessVisualLanguage,
        alt: 'Composición del sistema de comunicación visual de la marca',
        caption:
          '06 — Sistema de comunicación visual. Integración del logotipo, color, tipografía y recursos gráficos para futuras piezas.',
      },
    ],
    tags: ['Branding', 'Identidad visual', 'Manual de marca', 'Diseño corporativo'],
    technologies: [],
    services: [
      'Branding e identidad corporativa',
      'Diseño y estructuración de logotipo e isotipo',
      'Sistema cromático',
      'Sistema tipográfico',
      'Normas de construcción y protección de marca',
      'Versiones y adaptaciones del logotipo',
      'Definición de usos correctos e incorrectos',
      'Diseño de fondos corporativos',
      'Aplicaciones de papelería corporativa',
      'Diseño de piezas promocionales',
      'Manual de identidad corporativa',
    ],
    challenges: [
      'Construir una identidad visual reconocible y coherente con la actividad de la empresa',
      'Establecer criterios claros para el uso correcto del logotipo y sus diferentes versiones',
      'Definir un sistema consistente de colores, tipografías y elementos gráficos',
      'Prevenir alteraciones o aplicaciones incorrectas de la identidad',
      'Trasladar el nuevo sistema visual a piezas corporativas de uso real',
      'Crear una guía capaz de mantener la consistencia de la marca al desarrollar nuevos materiales',
    ],
    solution: [
      'Desarrollo y estructuración de la identidad visual de Mundo Business Services',
      'Definición del logotipo, isotipo y criterios de composición',
      'Establecimiento de áreas de protección y reglas para preservar la legibilidad de la marca',
      'Desarrollo de un sistema cromático corporativo y alternativas de aplicación',
      'Definición de lineamientos tipográficos para diferentes niveles de comunicación',
      'Creación de versiones de la marca para distintos fondos y escenarios de reproducción',
      'Documentación de usos permitidos e incorrectos',
      'Diseño de recursos y aplicaciones corporativas alineados con la nueva identidad',
      'Consolidación de los criterios de marca dentro de un manual de identidad corporativa',
    ],
    results: [
      'Identidad corporativa documentada mediante un sistema visual estructurado',
      'Criterios de uso de marca definidos para mantener consistencia entre diferentes aplicaciones',
      'Sistema de colores y tipografías establecido para la comunicación corporativa',
      'Versiones y reglas de aplicación del logotipo organizadas para diferentes contextos visuales',
      'Aplicaciones corporativas desarrolladas como referencia para el uso real de la identidad',
      'Manual de identidad disponible como guía interna para futuras piezas de comunicación y diseño',
    ],
    status: 'published',
    seoTitle: 'Mundo Business Services | Branding e identidad corporativa',
    seoDescription:
      'Caso de branding para Mundo Business Services: identidad visual, sistema cromático, tipografía, aplicaciones corporativas y manual de marca.',
    ogImage: mundoBusinessCover,
    ctaTitle: '¿Necesitas construir una identidad sólida para tu empresa?',
    featured: true,
    order: 7,
    ariaLabel: 'Ver caso de éxito de Mundo Business Services',
    badge: 'Proyecto real',
  },
  {
    slug: 'pure-medical',
    name: 'PURE MEDICAL',
    service: 'Branding e identidad visual',
    shortDescription:
      'Desarrollo de una identidad visual profesional para Pure Medical, distribuidora de productos médicos, trasladando la marca a diferentes aplicaciones corporativas y comerciales para construir una presencia coherente dentro del sector salud.',
    heroDescription:
      'Desarrollo de una identidad visual orientada al sector médico, diseñada para proyectar profesionalismo, confianza y consistencia en diferentes puntos de contacto de la marca. El proyecto contempla la aplicación del sistema visual sobre elementos corporativos, materiales promocionales y presentaciones vinculadas a productos médicos.',
    longDescription: [
      'Pure Medical es una empresa dedicada a la distribución de productos médicos que necesitaba construir una presencia visual reconocible y profesional para respaldar su comunicación corporativa y comercial.',
      'El proyecto se enfocó en desarrollar una identidad capaz de funcionar de forma consistente en diferentes aplicaciones, manteniendo una estética limpia, moderna y asociada al sector salud.',
      'La identidad fue trasladada a diversos puntos de contacto de la marca, desde materiales corporativos y promocionales hasta aplicaciones relacionadas con la presentación de productos.',
    ],
    coverImage: {
      src: pureMedicalCover,
      alt: 'Identidad corporativa de Pure Medical aplicada a papelería y materiales empresariales',
    },
    logo: {
      src: pureMedicalLogo,
      alt: 'Logotipo de Pure Medical',
    },
    gallery: [
      {
        src: pureMedicalIdentity,
        alt: 'Sistema visual de Pure Medical aplicado a materiales corporativos',
        caption:
          '01 — Identidad corporativa. Presentación del sistema visual de Pure Medical aplicado a diferentes materiales empresariales y puntos de contacto de la marca.',
      },
      {
        src: pureMedicalApplications,
        alt: 'Identidad de Pure Medical aplicada a camisetas y taza corporativa',
        caption:
          '02 — Aplicaciones de marca. Adaptación de la identidad a elementos promocionales y merchandising corporativo, manteniendo reconocimiento y consistencia visual.',
      },
      {
        src: pureMedicalCorporatePresence,
        alt: 'Papelería y documentos corporativos con la identidad visual de Pure Medical',
        caption:
          '03 — Presencia corporativa. Aplicación del sistema gráfico sobre papelería, documentos y diferentes materiales utilizados en la comunicación empresarial.',
      },
      {
        src: pureMedicalProduct,
        alt: 'Aplicación visual de Afebril Parche Frío presentada por un profesional médico',
        caption:
          '04 — Identidad de producto. Desarrollo y aplicación visual para Afebril — Parche Frío, trasladando criterios gráficos hacia la presentación de un producto del sector médico.',
      },
      {
        src: pureMedicalCommercial,
        alt: 'Presentación comercial de Afebril Parche Frío en un entorno de farmacia',
        caption:
          '05 — Aplicación comercial. Presentación del producto dentro de un entorno relacionado con salud y distribución farmacéutica, reforzando la conexión entre identidad corporativa y producto.',
      },
    ],
    tags: ['Branding', 'Identidad visual', 'Diseño corporativo', 'Packaging'],
    technologies: [],
    services: [
      'Branding',
      'Identidad visual',
      'Diseño de logotipo',
      'Sistema visual corporativo',
      'Papelería corporativa',
      'Aplicaciones de marca',
      'Merchandising corporativo',
      'Aplicaciones digitales',
      'Diseño gráfico',
      'Presentación visual de productos',
      'Packaging / identidad de producto',
    ],
    challenges: [
      'Construir una identidad visual profesional para una empresa del sector médico',
      'Conseguir una imagen limpia y fácilmente reconocible',
      'Crear consistencia entre diferentes aplicaciones de la marca',
      'Adaptar la identidad tanto a materiales corporativos como promocionales',
      'Permitir que la marca funcionara correctamente en soportes físicos y digitales',
      'Desarrollar una estética que transmitiera confianza y profesionalismo',
      'Llevar el lenguaje visual corporativo hacia aplicaciones vinculadas con productos médicos',
    ],
    solution: [
      'Desarrollo de la identidad visual de Pure Medical',
      'Creación y aplicación del logotipo corporativo',
      'Desarrollo de recursos gráficos asociados a la marca',
      'Aplicación de identidad sobre papelería y materiales corporativos',
      'Adaptación de marca a soportes promocionales',
      'Desarrollo de aplicaciones para prendas y merchandising',
      'Aplicación de identidad en entornos digitales',
      'Desarrollo visual para presentación de productos',
      'Creación de piezas destinadas a mantener consistencia entre diferentes puntos de contacto de la empresa',
    ],
    results: [
      'Identidad visual aplicada de forma consistente en diferentes soportes',
      'Presencia corporativa estructurada alrededor de un mismo lenguaje gráfico',
      'Marca adaptable a aplicaciones físicas y digitales',
      'Sistema visual preparado para diferentes puntos de contacto empresariales',
      'Integración de la identidad dentro de materiales promocionales',
      'Aplicación gráfica desarrollada para la presentación de productos médicos',
      'Mayor coherencia visual entre comunicación corporativa, merchandising y producto',
    ],
    status: 'published',
    seoTitle: 'Pure Medical | Branding e identidad visual',
    seoDescription:
      'Caso de branding para Pure Medical: identidad visual aplicada a materiales corporativos, promocionales y presentaciones de producto del sector médico.',
    ogImage: pureMedicalCover,
    ctaTitle: '¿Tu empresa necesita una identidad que transmita confianza?',
    featured: true,
    order: 8,
    ariaLabel: 'Ver caso de éxito de Pure Medical',
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
