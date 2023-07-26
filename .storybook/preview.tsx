import { FunctionComponent, useEffect, useState } from "react";
import ThemeProvider from "../src/context/Theme/ThemeProvider";
import { themes } from "@storybook/theming";
import { DARK_MODE_EVENT_NAME, useDarkMode } from "storybook-dark-mode";
import { Preview } from "@storybook/react";
import { addons } from "@storybook/preview-api";

const channel = addons.getChannel();

const ThemeWrapper = (props: any) => {
  const isDarkMode = useDarkMode()
  const [isDark, setDark] = useState(isDarkMode);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => {
      channel.off(DARK_MODE_EVENT_NAME, setDark)
    }
  }, [channel, setDark]);

  return (
    <ThemeProvider theme={isDark ? "dark" : "light"}>
      {props.children}
    </ThemeProvider>
  );
}

const decorators = [
  (Story: FunctionComponent) => (
    <ThemeWrapper>
      <Story/>
    </ThemeWrapper>
  ),
];

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
        brandImage: "../src/assets/img/tracktor-white.svg"
      },
      light: {
        ...themes.light,
        brandImage: "../src/assets/img/tracktor-black.svg"
      },
      darkClass: "dark-on",
      lightClass: "lights-on",
      current: "dark",
      stylePreview: true,
    },
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        order: ["Introduction", "Installation", "Styles"]
      },
    },
  },
};

export default preview;


