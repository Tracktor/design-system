import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = {
  assetsInclude: ["/sb-preview/runtime.js"],
  plugins: [
    react(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
};

export default defineConfig(config);
