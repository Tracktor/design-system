import type  { FunctionComponent } from "react";
import ThemeProvider  from "../src/context/Theme/ThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story : FunctionComponent) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
  ),
];