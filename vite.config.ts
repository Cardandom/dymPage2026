import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Three.js core is a single large module, isolated behind the lazy-loaded 3D canvas.
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          onlyExplicitManualChunks: true,
          manualChunks(id) {
            const moduleId = id.replace(/\\/g, '/');

            if (!moduleId.includes('/node_modules/')) {
              return;
            }

            if (moduleId.includes('/node_modules/@react-three/drei/')) {
              return 'vendor-three-drei';
            }

            if (moduleId.includes('/node_modules/@react-three/fiber/')) {
              return 'vendor-three-fiber';
            }

            if (
              moduleId.includes('/node_modules/three-stdlib/') ||
              moduleId.includes('/node_modules/camera-controls/') ||
              moduleId.includes('/node_modules/maath/') ||
              moduleId.includes('/node_modules/troika-three-text/')
            ) {
              return 'vendor-three-drei';
            }

            if (moduleId.includes('/node_modules/three/')) {
              return 'vendor-three';
            }

            if (
              moduleId.includes('/node_modules/motion/') ||
              moduleId.includes('/node_modules/framer-motion/')
            ) {
              return 'vendor-motion';
            }

            if (
              moduleId.includes('/node_modules/react/') ||
              moduleId.includes('/node_modules/react-dom/') ||
              moduleId.includes('/node_modules/scheduler/')
            ) {
              return 'vendor-react';
            }

            if (
              moduleId.includes('/node_modules/lucide-react/') ||
              moduleId.includes('/node_modules/react-icons/')
            ) {
              return 'vendor-icons';
            }

            if (moduleId.includes('/node_modules/gsap/')) {
              return 'vendor-gsap';
            }

            return 'vendor';
          },
        },
      },
    },
    server: {
      // HMR can be disabled through the DISABLE_HMR environment variable.
      // File watching can be disabled to prevent flickering during automated edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
