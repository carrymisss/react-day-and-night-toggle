import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return ({
    plugins: [
      react(),
      legacy({
        modernPolyfills: ['es/global-this']
      }),
    ],
    build: {
      sourcemap: true,
      reportCompressedSize: true
    },
    server: {
      host: true,
      port: 5657
    }
  });
});
