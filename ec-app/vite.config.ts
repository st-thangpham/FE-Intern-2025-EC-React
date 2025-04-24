// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/app/core'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@shared': path.resolve(__dirname, 'src/app/shared'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@stylesheet': path.resolve(__dirname, 'src/stylesheet'),
    },
  },
});
