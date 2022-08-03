import type { FunctionComponent } from "react";
import ThemeProvider from "../src/context/Theme/ThemeProvider";
import { darkTheme, lightTheme } from "../src/constants/theme";
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

const ThemeWrapper = (props: any) => {
  return (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      {props.children}
    </ThemeProvider>
  );
}

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {...themes.dark},
    light: {...themes.light},
    darkClass: 'dark-on',
    lightClass: 'lights-on',
    current: 'dark',
    stylePreview: true
  },
  docs: {
    theme: themes.dark,
  }
}

export const decorators = [
  (Story: FunctionComponent) => (
    <ThemeWrapper>
      <Story/>
    </ThemeWrapper>
  ),
];