# DYM Digital

Sitio web oficial de DYM Digital, empresa de tecnología y soluciones digitales especializada en desarrollo de software, aplicaciones móviles, automatización empresarial, sitios web, landing pages, embudos de venta, publicidad digital, branding y presencia online para empresas y emprendedores.

## Tecnologías principales

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Three.js / React Three Fiber

## Instalación local

Instala las dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:3000
```

## Compilación de producción

Genera la compilación optimizada:

```bash
npm run build
```

Ejecuta localmente la versión de producción:

```bash
npm run start
```

## Variables de entorno

Next.js utiliza `SITE_URL` como URL canónica del sitio.

Copia `.env.example` como `.env.local` cuando necesites sobrescribir el dominio en un entorno local:

```bash
cp .env.example .env.local
```

## Estado del proyecto

La migración desde Vite a Next.js está completada.

Next.js es el único framework utilizado para el desarrollo, la compilación y la ejecución en producción del sitio.

El historial de Git y el tag `next-primary-ready` conservan un punto de restauración anterior a la retirada definitiva de Vite.
