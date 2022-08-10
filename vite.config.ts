import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import { peerDependencies, dependencies, name } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "[name]",
      formats: ["cjs", "es"],
      name,
    },
    minify: "esbuild",
    outDir: "lib",
    rollupOptions: {
      external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    dts(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    coverage: {
      exclude: ["node_modules/", "src/config/setupTests.ts"],
      reporter: ["text", "html"],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: "src/config/setupTests.ts",
  },
});
