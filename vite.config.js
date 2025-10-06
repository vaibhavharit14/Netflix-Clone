// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({ // 👈 required for GitHub Pages
  plugins: [react()],
})
