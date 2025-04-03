import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: process.env.PORT,
    strictPort: false,
    host: true,
    allowedHosts: ["myloans-hzdfg2dkhuejdka2.centralindia-01.azurewebsites.net","loans-eremhuaua4asdkdj.canadacentral-01.azurewebsites.net"],
  }
})
