import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test-gh-env-vars",
  build: {
    outDir: "dist",
  },
});
