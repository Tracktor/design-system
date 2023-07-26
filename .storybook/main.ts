import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "storybook-dark-mode"
  ],
  core: {
    "builder": "@storybook/builder-vite"
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    "storyStoreV7": true
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [{find: "@", replacement: path.resolve(__dirname, "../src")}],
      }
    });
  },
};
export default config;
