import kairosCoverAsset from '../assets/projects/kairos-cover.webp';
import kairosIGAsset from '../assets/projects/kairosIG.webp';
import kairosLogoAsset from '../assets/projects/kairos-logo.webp';
import unaVidaConscienteAsset from '../assets/projects/unaVidaConciente.webp';
import vidaLogoAsset from '../assets/projects/vida-logo.webp';
import reinaSophiaAsset from '../assets/projects/reinaSophia.webp';
import reinaSophiaLogoAsset from '../assets/projects/reina-sophia-logo.webp';
import { assetUrl } from '../lib/assetUrl';

const kairosCover = assetUrl(kairosCoverAsset);
const kairosIG = assetUrl(kairosIGAsset);
const kairosLogo = assetUrl(kairosLogoAsset);
const unaVidaConsciente = assetUrl(unaVidaConscienteAsset);
const vidaLogo = assetUrl(vidaLogoAsset);
const reinaSophia = assetUrl(reinaSophiaAsset);
const reinaSophiaLogo = assetUrl(reinaSophiaLogoAsset);

export type Project = {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  logo?: string;
  logoAlt?: string;
  tags?: string[];
  slug: string;
  ariaLabel: string;
  results: string;
};

// Los slugs quedan preparados para enlazar los futuros casos de estudio.
export const featuredProjects: Project[] = [
  {
    id: 'kairos-website',
    title: 'KAIROS DESIGN & CONSTRUCTION',
    category: 'Sitio web corporativo',
    description: 'Proyecto web para una empresa de diseño y construcción, enfocado en presentar sus servicios, identidad visual y portafolio de proyectos de forma profesional.',
    image: kairosCover,
    imageAlt: 'Proyecto web Kairos Design & Construction',
    logo: kairosLogo,
    logoAlt: 'Logo Kairos Design & Construction',
    tags: ['Diseño web', 'Construcción', 'Arquitectura', 'Marca corporativa'],
    slug: '/proyectos/kairos-design-construction',
    ariaLabel: 'Ver caso de estudio de Kairos Design & Construction',
    results: 'Proyecto real',
  },
  {
    id: 'kairos-instagram',
    title: 'KAIROS DESIGN & CONSTRUCTION',
    category: 'Gestión de Instagram',
    description: 'Gestión y administración de la cuenta de Instagram de Kairos Design & Construction, enfocada en fortalecer su presencia digital mediante contenido visual atractivo, comunicación de marca y consistencia en redes sociales.',
    image: kairosIG,
    imageAlt: 'Gestión de Instagram para Kairos Design & Construction',
    logo: kairosLogo,
    logoAlt: 'Logo Kairos Design & Construction',
    tags: ['Instagram', 'Redes sociales', 'Community Management', 'Contenido visual'],
    slug: '/proyectos/kairos-instagram',
    ariaLabel: 'Ver caso de estudio de Instagram de Kairos Design & Construction',
    results: 'Proyecto real',
  },
  {
    id: 'una-vida-consciente',
    title: 'UNA VIDA CONSCIENTE',
    category: 'Landing page / Embudo de ventas',
    description: 'Diseño y desarrollo de una landing page tipo embudo de ventas para el producto digital “Emprendiendo con un hijo autista”, enfocada en comunicar una oferta clara, conectar emocionalmente con madres cuidadoras y dirigir el tráfico hacia Hotmart mediante campañas de Google Ads.',
    image: unaVidaConsciente,
    imageAlt: 'Landing page de Una Vida Consciente',
    logo: vidaLogo,
    logoAlt: 'Logo Una Vida Consciente',
    tags: ['Landing Page', 'Embudo de ventas', 'Hotmart', 'Google Ads', 'Conversión'],
    slug: '/proyectos/una-vida-consciente',
    ariaLabel: 'Ver caso de estudio de Una Vida Consciente',
    results: 'Proyecto real',
  },
  {
    id: 'reina-sophia-residences',
    title: 'REINA SOPHIA RESIDENCES',
    category: 'Sitio web inmobiliario',
    description: 'Diseño y desarrollo de una plataforma web inmobiliaria para Reina Sophia Residences, enfocada en presentar el proyecto residencial en Aruba, sus modelos de vivienda, beneficios de inversión, galería visual y formularios de captación de clientes potenciales.',
    image: reinaSophia,
    imageAlt: 'Sitio web inmobiliario de Reina Sophia Residences',
    imagePosition: '85% center',
    logo: reinaSophiaLogo,
    logoAlt: 'Logo Reina Sophia Residences',
    tags: ['Real Estate', 'Sitio web', 'Inversión inmobiliaria', 'Supabase', 'Dashboard'],
    slug: '/proyectos/reina-sophia-residences',
    ariaLabel: 'Ver caso de estudio de Reina Sophia Residences',
    results: 'Proyecto real',
  },
];
