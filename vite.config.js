import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 your repo name here – must match exactly
  base: '/hospital-frontend-cicd/',
  plugins: [react()],
})
