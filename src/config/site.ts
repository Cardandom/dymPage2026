const DEFAULT_SITE_URL = "https://dymdigital.com";

function resolveSiteUrl(value: string | undefined) {
  const candidate = value?.trim().replace(/\/+$/, "") || DEFAULT_SITE_URL;

  try {
    return new URL(candidate).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_NAME = "DYM Digital";
export const SITE_TITLE = "DYM Digital | Soluciones Digitales y Software";
export const SITE_DESCRIPTION =
  "DYM Digital crea soluciones digitales, software, sitios web, automatizaciones, embudos de venta, campañas publicitarias e identidad de marca para negocios que quieren crecer.";
export const SITE_URL = resolveSiteUrl(process.env.SITE_URL);
export const SITE_ORIGIN = new URL(SITE_URL);
export const HOME_URL = `${SITE_URL}/`;
