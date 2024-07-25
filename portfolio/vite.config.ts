import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@icons': fileURLToPath( new URL('./src/assets/icons/', import.meta.url)),
      '@translations': fileURLToPath( new URL('./src/i18n/translation/index.ts', import.meta.url)),
      '@': fileURLToPath( new URL('./src/', import.meta.url)),
    }
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: '**/*.svg'
    })
  ],
})
