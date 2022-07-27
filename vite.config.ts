import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "[name]",
      formats: ["es"],
      name: "design-system",
    },
    minify: true,
    outDir: "lib",
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material", "@mui/icons-material", "@emotion/styled", "@emotion/react"],
      output: {
        dir: "lib",
        format: "es",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        inlineDynamicImports: false,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  plugins: [react(), dts()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
