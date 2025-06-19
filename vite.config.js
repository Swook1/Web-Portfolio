import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Web-Portofolio/', // Nama repository Anda
  build: {
    outDir: 'dist'
  }
})
