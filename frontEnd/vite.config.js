/* eslint-disable prettier/prettier */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@images": "/src/assets/images",
      "@styles": "/src/assets/styles",
    },
  },
});