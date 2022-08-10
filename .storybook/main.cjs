const path = require("path");
const {mergeConfig} = require("vite");
const react = require("@vitejs/plugin-react");

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
    config.plugins = config.plugins.filter((plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react")));
    config.plugins.push(
      react({
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
        //exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: "@emotion/react",
      })
    );

    return mergeConfig(config, {
      resolve: {
        alias: [{find: "@", replacement: path.resolve(__dirname, "../src")}],
      },
      // esbuild: {
      //   logOverride: {'this-is-undefined-in-esm': 'silent'}
      // }
    });
  },
}