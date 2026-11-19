import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base relativa: funciona no dev local, no preview e em qualquer subpasta
  // de hospedagem (ex.: GitHub Pages em /zelarvet/).
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
