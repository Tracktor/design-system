import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder : {
        viteConfigPath: path.resolve(__dirname, "./vite.config.ts"),
      }
    },
  },
  stories: ["../src/**/*.mdx", "./**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: [{find: "@", replacement: path.resolve(__dirname, "../src")}],
      }
    });
  },
};

export default config;
