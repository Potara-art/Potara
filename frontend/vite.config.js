import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    allowedHosts: ["potara.art", "www.potara.art"],
    strictPort: true,
    port: 5173
  }
});
