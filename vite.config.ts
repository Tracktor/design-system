import path from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
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
    outDir: "lib",
    rollupOptions: {
      external: ["react", "react-dom"],
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
  plugins: [react(), dts(), external(), postcss({ modules: true }), resolve(), terser()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
