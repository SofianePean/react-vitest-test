/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  // NEW
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], // <==
    setupFiles: "./setupTests.ts",
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },
  plugins: [react(), checker({ typescript: true })],
});
