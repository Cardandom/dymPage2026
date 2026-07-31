# DYM Digital

Sitio web oficial de DYM Digital, agencia de marketing enfocada en diseño web, automatización, embudos de venta, campañas digitales y presencia online para negocios.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Next.js (migración en curso)
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber

## Instalación local

```bash
npm install
npm run dev:vite
```

Vite continúa siendo el sistema predeterminado durante la migración. Los entornos se ejecutan y compilan por separado:

```bash
npm run dev:vite
npm run dev:next
npm run build:vite
npm run build:next
```

Next.js utiliza `SITE_URL` como URL canónica server-only. Copia `.env.example` a `.env.local` si necesitas sobrescribir el dominio en un entorno local.
