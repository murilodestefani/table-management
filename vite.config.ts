import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"), 
      "@services": path.resolve(__dirname, "./src/services"), 
      "@routes": path.resolve(__dirname, "./src/routes"), 
      "@context": path.resolve(__dirname, "./src/context"), 
      "@images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
  plugins: [react()],
});
