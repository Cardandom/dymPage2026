import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPageLayout, { LegalSection } from '@/src/components/legal/LegalPageLayout';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/src/config/contact';

const canonicalUrl = 'https://dymdigital.com/politica-de-privacidad';

export const metadata: Metadata = {
  title: {
    absolute: 'Política de Privacidad y Tratamiento de Datos',
  },
  description: 'Consulta cómo DYM Digital recopila, utiliza y protege la información de usuarios, clientes y visitantes de dymdigital.com.',
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad y Tratamiento de Datos Personales"
      updatedAt="Septiembre de 2026"
      introduction="Esta política explica de forma sencilla cómo DYM Digital puede recopilar, utilizar, conservar y proteger la información personal relacionada con sus visitantes, prospectos y clientes."
    >
      <LegalSection id="responsable" title="1. Responsable del tratamiento">
        <p>El responsable del tratamiento de la información es:</p>
        <ul>
          <li>DYM Digital, nombre comercial</li>
          <li><a href="https://dymdigital.com/">https://dymdigital.com/</a></li>
          <li><a href={CONTACT_EMAIL_URL}>{CONTACT_EMAIL}</a></li>
          <li><a href={WHATSAPP_URL}>{WHATSAPP_DISPLAY}</a></li>
          <li>Colombia</li>
        </ul>
      </LegalSection>

      <LegalSection id="informacion-recopilada" title="2. Información que podemos recopilar">
        <p>Según la forma en que te relaciones con DYM Digital, podemos recopilar:</p>
        <ul>
          <li>Nombre, teléfono y dirección de correo electrónico.</li>
          <li>Información que envíes voluntariamente por WhatsApp o email.</li>
          <li>Datos relacionados con los servicios, necesidades o proyectos solicitados.</li>
          <li>Información técnica y de navegación, como dispositivo, navegador, páginas visitadas, origen de la visita e interacciones con el sitio.</li>
          <li>Identificadores generados por herramientas de analítica o publicidad cuando estas sean instaladas, se encuentren activas y corresponda su uso.</li>
        </ul>
        <p>DYM Digital no solicita deliberadamente datos personales sensibles a través de este sitio.</p>
      </LegalSection>

      <LegalSection id="finalidades" title="3. Finalidades del tratamiento">
        <p>Podemos utilizar la información para:</p>
        <ul>
          <li>Responder solicitudes y contactar a personas interesadas en nuestros servicios.</li>
          <li>Preparar propuestas, cotizaciones y alcances de proyectos.</li>
          <li>Prestar servicios y gestionar relaciones comerciales.</li>
          <li>Mejorar el sitio web, nuestros procesos y nuestros servicios.</li>
          <li>Analizar la navegación e identificar los canales que generan oportunidades comerciales.</li>
          <li>Medir campañas publicitarias y sus resultados.</li>
          <li>Realizar acciones de marketing o remarketing cuando corresponda y exista el consentimiento requerido.</li>
          <li>Cumplir obligaciones legales, contractuales y administrativas aplicables.</li>
        </ul>
      </LegalSection>

      <LegalSection id="terceros" title="4. Servicios de terceros">
        <p>
          Para operar, comunicar y medir sus servicios, DYM Digital utiliza o podrá utilizar proveedores
          como Vercel, WhatsApp, Instagram, Google Analytics, Google Ads y Google Tag Manager.
        </p>
        <p>
          Cada servicio puede tratar información conforme a sus propias políticas. Google Tag Manager y Google
          Consent Mode permiten administrar el estado de consentimiento, pero su presencia no implica que Google
          Analytics o Google Ads estén configurados o activos actualmente.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="5. Cookies y tecnologías similares">
        <p>
          El sitio puede utilizar cookies y tecnologías similares para funcionar, recordar preferencias y,
          cuando exista autorización, realizar analítica y medición publicitaria. Consulta los detalles y las
          categorías en nuestra <Link href="/politica-de-cookies/">Política de Cookies</Link>.
        </p>
      </LegalSection>

      <LegalSection id="derechos" title="6. Derechos del titular">
        <p>
          De acuerdo con la normativa colombiana aplicable en materia de protección de datos personales,
          el titular puede, según corresponda:
        </p>
        <ul>
          <li>Conocer, acceder, actualizar y rectificar sus datos personales.</li>
          <li>Consultar la utilización que se ha dado a su información.</li>
          <li>Solicitar la supresión de sus datos cuando sea procedente.</li>
          <li>Revocar la autorización cuando legalmente sea posible.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio u otra autoridad competente, una vez agotado el trámite aplicable ante el responsable.</li>
        </ul>
        <p>Estos derechos se atenderán dentro de los límites y procedimientos previstos por la normativa aplicable.</p>
      </LegalSection>

      <LegalSection id="contacto" title="7. Canal de contacto">
        <p>
          Para consultas o solicitudes relacionadas con tus datos personales, escribe a{' '}
          <a href={CONTACT_EMAIL_URL}>{CONTACT_EMAIL}</a>. Incluye información suficiente para identificar
          tu solicitud y poder responderla adecuadamente.
        </p>
      </LegalSection>

      <LegalSection id="seguridad" title="8. Seguridad de la información">
        <p>
          DYM Digital adopta medidas técnicas, administrativas y organizacionales razonables para proteger
          la información frente a accesos no autorizados, pérdida, alteración o uso indebido. Ningún sistema
          es completamente infalible, por lo que no es posible prometer seguridad absoluta.
        </p>
      </LegalSection>

      <LegalSection id="conservacion" title="9. Conservación de la información">
        <p>
          Los datos se conservarán durante el tiempo necesario para cumplir las finalidades informadas,
          atender la relación comercial y satisfacer las obligaciones legales, contractuales o administrativas
          que resulten aplicables. Después podrán eliminarse o anonimizarse cuando corresponda.
        </p>
      </LegalSection>

      <LegalSection id="proveedores-internacionales" title="10. Proveedores e infraestructura internacional">
        <p>
          Algunos proveedores tecnológicos pueden almacenar o procesar información mediante infraestructura
          ubicada fuera de Colombia. Cuando corresponda, DYM Digital procurará que dicho tratamiento se realice
          con salvaguardas razonables y de acuerdo con la normativa aplicable.
        </p>
      </LegalSection>

      <LegalSection id="menores" title="11. Información de menores de edad">
        <p>
          Los servicios de DYM Digital están dirigidos principalmente a empresas, emprendedores y personas con
          capacidad para contratar servicios profesionales. No buscamos recopilar deliberadamente información
          personal de menores de edad a través del sitio.
        </p>
      </LegalSection>

      <LegalSection id="cambios" title="12. Cambios en esta política">
        <p>
          DYM Digital podrá actualizar esta política para reflejar cambios en sus servicios, proveedores o
          requisitos aplicables. La versión vigente indicará siempre su fecha de última actualización.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
