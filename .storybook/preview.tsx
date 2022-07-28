import type {FunctionComponent} from "react";
import ThemeProvider from "../src/context/Theme/ThemeProvider";
import { darkTheme } from "../src/constants/theme";

const storyBookTheme = {
  ...darkTheme, ...{
    palette: {
      ...darkTheme.palette,
      background: {
        ...darkTheme.palette.background,
        default: "#333",
      },
    },
  }
}

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story: FunctionComponent) => (
    <ThemeProvider theme={storyBookTheme}>
      <Story/>
    </ThemeProvider>
  ),
];