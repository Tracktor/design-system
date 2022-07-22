import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `design-system.${format}.js`,
      formats: ["es"],
      name: "design-system",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        Accordion: "src/components/Accordion.ts",
        Button: "src/components/Button.ts",
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        inlineDynamicImports: false,
        // eslint-disable-next-line consistent-return
        manualChunks(id) {
          if (id.includes("Accordion")) {
            return "chunk/Accordion";
          }
          if (id.includes("Button")) {
            return "Button";
          }
        },
      },
    },
  },
  plugins: [react(), dts()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
