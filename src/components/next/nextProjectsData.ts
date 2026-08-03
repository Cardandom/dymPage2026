import type { StaticImageData } from 'next/image';
import kairosCoverAsset from '../../assets/projects/kairos-cover.webp';
import kairosIGAsset from '../../assets/projects/kairosIG.webp';
import kairosLogoAsset from '../../assets/projects/kairos-logo.webp';
import reinaSophiaLogoAsset from '../../assets/projects/reina-sophia-logo.webp';
import reinaSophiaAsset from '../../assets/projects/reinaSophia.webp';
import unaVidaConscienteAsset from '../../assets/projects/unaVidaConciente.webp';
import vidaLogoAsset from '../../assets/projects/vida-logo.webp';
import {
  featuredProjects,
  type FeaturedProjectId,
  type Project,
} from '../projectsData';

type NextProjectAssets = {
  image: StaticImageData;
  logo: StaticImageData;
};

const projectAssets = {
  'kairos-website': {
    image: kairosCoverAsset,
    logo: kairosLogoAsset,
  },
  'kairos-instagram': {
    image: kairosIGAsset,
    logo: kairosLogoAsset,
  },
  'una-vida-consciente': {
    image: unaVidaConscienteAsset,
    logo: vidaLogoAsset,
  },
  'reina-sophia-residences': {
    image: reinaSophiaAsset,
    logo: reinaSophiaLogoAsset,
  },
} satisfies Record<FeaturedProjectId, NextProjectAssets>;

export type NextProject = Omit<Project, 'image' | 'logo'> & {
  image: StaticImageData;
  logo?: StaticImageData;
};

export const nextFeaturedProjects: NextProject[] = featuredProjects.map((project) => {
  const assets = projectAssets[project.id];

  return {
    ...project,
    image: assets.image,
    logo: assets.logo,
  };
});
