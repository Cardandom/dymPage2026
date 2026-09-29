import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/src/components/legal/LegalPageLayout';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/src/config/contact';

const canonicalUrl = 'https://dymdigital.com/politica-de-cookies';

export const metadata: Metadata = {
  title: {
    absolute: 'Política de Cookies',
  },
  description: 'Consulta cómo DYM Digital utiliza cookies y tecnologías similares para funcionamiento, analítica y medición de publicidad.',
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      updatedAt="Septiembre de 2026"
      introduction="Esta política explica qué son las cookies, qué categorías puede utilizar DYM Digital y cómo puedes administrar tus preferencias."
    >
      <LegalSection id="que-son" title="¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos que un sitio puede guardar en tu navegador para recordar información
          sobre la visita. También pueden utilizarse tecnologías similares, como el almacenamiento local del
          navegador, para conservar determinadas preferencias.
        </p>
      </LegalSection>

      <LegalSection id="necesarias" title="1. Cookies necesarias o esenciales">
        <p>
          Permiten el funcionamiento básico, la seguridad y la navegación del sitio. No se desactivan desde el
          panel de preferencias porque son necesarias para prestar las funciones solicitadas. El almacenamiento
          de tu elección sobre cookies pertenece a esta categoría.
        </p>
      </LegalSection>

      <LegalSection id="analitica" title="2. Analítica">
        <p>
          Ayuda a comprender cómo se utiliza el sitio, qué páginas reciben visitas y cómo puede mejorarse la
          experiencia. DYM Digital podrá utilizar Google Analytics para estas finalidades cuando la herramienta
          sea instalada y el visitante haya otorgado el consentimiento correspondiente.
        </p>
      </LegalSection>

      <LegalSection id="publicidad" title="3. Publicidad y medición">
        <p>DYM Digital podrá utilizar Google Ads, cuando se instale y corresponda, para:</p>
        <ul>
          <li>Atribuir visitas y resultados a una fuente o campaña.</li>
          <li>Medir conversiones.</li>
          <li>Evaluar el rendimiento de campañas publicitarias.</li>
          <li>Realizar remarketing cuando corresponda y exista consentimiento.</li>
        </ul>
      </LegalSection>

      <LegalSection id="funcionales" title="4. Funcionales">
        <p>
          Permiten recordar opciones del visitante o habilitar características adicionales que mejoran la
          experiencia. Si se desactivan, algunas funciones opcionales podrían no estar disponibles.
        </p>
      </LegalSection>

      <LegalSection id="consentimiento" title="Consentimiento y control de preferencias">
        <p>Cuando se muestre el aviso de cookies, el visitante puede:</p>
        <ul>
          <li>Aceptar todas las categorías.</li>
          <li>Rechazar las cookies no esenciales.</li>
          <li>Configurar individualmente sus preferencias de analítica, publicidad y funciones.</li>
        </ul>
        <p>
          La selección queda guardada en el navegador y puede modificarse desde el enlace “Preferencias de
          cookies” disponible en el pie de página.
        </p>
        <p>
          DYM Digital utiliza Google Consent Mode para comunicar estas preferencias a Google Tag Manager. La
          presencia del contenedor no significa que Google Analytics o Google Ads estén configurados: esas
          herramientas solo podrán activarse posteriormente de acuerdo con la categoría autorizada.
        </p>
      </LegalSection>

      <LegalSection id="contacto" title="Contacto">
        <p>Si tienes preguntas sobre esta política, puedes comunicarte con DYM Digital:</p>
        <ul>
          <li><a href={CONTACT_EMAIL_URL}>{CONTACT_EMAIL}</a></li>
          <li><a href={WHATSAPP_URL}>{WHATSAPP_DISPLAY}</a></li>
        </ul>
      </LegalSection>
    </LegalPageLayout>
  );
}
