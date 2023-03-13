import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';
import cssModules from 'vite-plugin-css-modules';

export default defineConfig({
  plugins: [
    react(),
    sass(),
    cssModules({
      generateScopedName: '[local]__[hash:base64:5]'
    })
  ],
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  build: {
    rollupOptions: {
      input: 'src/main.tsx'
    }
  }
});