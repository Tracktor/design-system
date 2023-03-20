import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import { dependencies, name, peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        colors: resolve(__dirname, "src/colors.ts"),
        main: resolve(__dirname, "src/main.ts"),
      },
      fileName: "[name]",
      name,
    },
    minify: "esbuild",
    rollupOptions: {
      external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
      output: {
        globals: {
          "@mui/material": "material",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    dts(),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "src/config/setupTests.ts",
  },
});
