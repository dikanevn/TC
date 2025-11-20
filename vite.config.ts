import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TC/', // Для GitHub Pages
  server: {
    hmr: true, // Hot Module Replacement включен по умолчанию
  },
  build: {
    outDir: 'dist',
  },
})

