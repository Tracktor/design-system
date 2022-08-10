const path = require("path");
const {mergeConfig} = require("vite");

module.exports = {
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
  framework: "@storybook/react",
  features: {
    "storyStoreV7": true
  },
  stories: [
    "../src/stories/Introduction/Introduction.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
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
}