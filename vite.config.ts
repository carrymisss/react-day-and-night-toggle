import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
			include: /\.(jsx|tsx)$/,
			babel: {
				plugins: ['styled-components'],
				babelrc: false,
				configFile: false,
			},
		}),
    legacy({
        modernPolyfills: ['es/global-this']
      }),
  ],
  server: {
    host: true,
    port: 5665
  },
    build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      formats: ["es", "cjs"],
    },
  },
})
