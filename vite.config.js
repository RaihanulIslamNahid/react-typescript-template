import { defineConfig } from 'vite'
import * as path from 'path'

import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  base: '/issey-miyake/', // Change to the name of your repo for Github pages, otherwise use './'
  build: {
    outDir: '../dist',
  },
  server: {
    host: true, // to test on other devices with IP address
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
