import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup",
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": `${path.resolve(__dirname, "src/components")}`,
      "@utils": `${path.resolve(__dirname, "src/utils")}`,
      "@store": `${path.resolve(__dirname, "src/store")}`,
      "@features": `${path.resolve(__dirname, "src/features")}`,
      "@hooks": `${path.resolve(__dirname, "src/hooks")}`,
      "@pages": `${path.resolve(__dirname, "src/pages")}`,
      "@constants": `${path.resolve(__dirname, "src/constants")}`,
      "@servers": `${path.resolve(__dirname, "src/servers")}`,
      "@utility": `${path.resolve(__dirname, "src/utility")}`,
      "@services": `${path.resolve(__dirname, "src/services")}`,
      "@data": `${path.resolve(__dirname, "src/data")}`,
      "@context": `${path.resolve(__dirname, "src/context")}`,
    },
  },
});
