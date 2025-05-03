import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    assetsInclude: [
      "**/*.pdf",
      "**/*.JPG",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.JPEG",
    ],
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
