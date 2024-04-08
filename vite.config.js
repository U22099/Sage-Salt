import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SageSalt/",
  plugins: [react()],
  assetsInclude: ["**/*.{JPG,PNG,jpg,png}"],
})
