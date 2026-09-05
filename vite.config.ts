import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      ViteWebfontDownload()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      sourcemap: true,
    },
    server: {
      
      hmr: process.env.DISABLE_HMR !== 'true',
      
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
