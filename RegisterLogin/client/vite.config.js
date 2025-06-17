import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    port: 8080,
    historyApiFallback: true // ✅ ensures browser routes are handled correctly
  }
});
