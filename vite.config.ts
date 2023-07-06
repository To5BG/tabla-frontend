// vite.config.ts
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { PORT } from './config';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: PORT
  },
  build: {
    target: 'esnext'
  }
});
