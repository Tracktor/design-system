import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies, name } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "[name]",
      formats: ["es"],
      name,
    },
    minify: "esbuild",
    outDir: "lib",
    rollupOptions: {
      external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
      output: {
        chunkFileNames: (a) => (a.name.endsWith(".js") ? a.name : "[name].js"),
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        manualChunks: {
          "icons/icons-material": ["@mui/icons-material/index.js"],
        },
      },
    },
  },
  plugins: [react(), dts()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
