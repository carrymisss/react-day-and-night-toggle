import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  server: {
    host: true,
    port: 5665
  },
  build: {
    rollupOptions: {
      external: ['styled-components'],
    },
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      fileName: "main",
      formats: ["es", "cjs"],
    },
  },
})
