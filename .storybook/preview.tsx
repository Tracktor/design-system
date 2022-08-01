import type { FunctionComponent } from "react";
import ThemeProvider from "../src/context/Theme/ThemeProvider";
import { darkTheme } from "../src/constants/theme";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'dark-on',
    lightClass: 'lights-on',
    current: 'dark',
    stylePreview: true
  }
}

export const decorators = [
  (Story: FunctionComponent) => (
    <ThemeProvider theme={darkTheme}>
      <Story/>
    </ThemeProvider>
  ),
];