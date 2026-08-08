export const CONTACT_EMAIL = 'ventas@dymdigital.com';
export const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}`;

export const WHATSAPP_DISPLAY = '+57 322 438 0294';
export const WHATSAPP_NUMBER = '573224380294';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_MESSAGES = {
  general:
    'Hola, vengo desde dymdigital.com y quisiera información sobre sus servicios.',
  scheduleCall:
    'Hola, vengo desde dymdigital.com y quisiera coordinar una llamada para hablar sobre mi proyecto.',
  project:
    'Hola, vengo desde dymdigital.com y quisiera conversar sobre un proyecto digital para mi negocio.',
} as const;

export const SOCIAL_LINKS = {
  instagram: null,
  facebook: null,
  linkedin: null,
} as const;

export function getWhatsAppUrl(message?: string) {
  if (!message) {
    return WHATSAPP_URL;
  }

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
