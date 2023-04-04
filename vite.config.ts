import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: true,
    }),
    Unfonts({
      google: {
        families: [{
          name: 'Inter',
          styles: 'ital,wght@0,400,800;',
        }, 'Crimson Pro', 'Open Sans', 'Material+Icons'],
      },
    }),
    react()
  ]
})
