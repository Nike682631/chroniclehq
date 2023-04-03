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
        families: ['Inter', 'Crimson Pro', 'Open Sans', 'Material+Icons'],
      },
    }),
    react()
  ]
})
