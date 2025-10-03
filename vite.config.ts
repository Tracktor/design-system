import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig as UserConfigVite } from "vite";
import dts from "vite-plugin-dts";
import { UserConfig as InlineConfigVitest } from "vitest/config";
import { dependencies, name, peerDependencies } from "./package.json";

type UserConfig = UserConfigVite & {
  test: InlineConfigVitest["test"];
};

const allDependencies = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];
const external = Array.from(new Set(allDependencies));

const config: UserConfig = {
  build: {
    lib: {
      entry: {
        colors: resolve(__dirname, "colors/main.ts"),
        main: resolve(__dirname, "src/main.ts"),
      },
      fileName: "[name]",
      name,
    },
    minify: "esbuild",
    rollupOptions: {
      external,
      output: {
        globals: {
          "@mui/material": "material",
          "@tracktor/react-utils": "TracktorReactUtils",
          react: "React",
          "react-dom": "ReactDOM",
          "react-virtualized-auto-sizer": "ReactVirtualizedAutoSizer",
          "react-window": "ReactWindow",
          "react-window-infinite-loader": "ReactWindowInfiniteLoader",
        },
      },
    },
  },
  plugins: [
    dts({
      exclude: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/stories/**/*",
        "**/*.stories.tsx",
        "**/*.stories.ts",
        "vite.config.ts",
        "test.config.ts",
      ],
    }),
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
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "test.config.ts",
  },
};

export default defineConfig(config);
