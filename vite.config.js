import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],
  server: {
    proxy: {
      '/youtube-suggestions': {
        target: 'https://suggestqueries.google.com/complete/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/youtube-suggestions/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            // Add client and ds parameters to the request
            const url = new URL(proxyReq.path, 'https://suggestqueries.google.com');
            if (!url.searchParams.has('client')) {
              url.searchParams.append('client', 'firefox');
            }
            if (!url.searchParams.has('ds')) {
              url.searchParams.append('ds', 'yt');
            }
            proxyReq.path = url.pathname + url.search;
          });
        }
      }
    }
  }
})
