import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative so the build works under /Travel-app/ on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
})
