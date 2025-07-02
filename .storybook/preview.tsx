import { FunctionComponent } from "react";
import ThemeProvider from "../src/context/Theme/ThemeProvider";
import { Preview } from "@storybook/react";
import { version } from "../package.json";
import SnackbarProvider from "../src/context/Snackbar/SnackbarProvider";
import { StoryContext } from "storybook/internal/csf";

const decorators = [
  (Story: FunctionComponent, context: StoryContext) => {
    const theme = context.globals.theme || "dark";

    return (
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Story />
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
];

const preview: Preview = {
  tags: ["autodocs"],
  decorators,
  globalTypes: {
    measureEnabled: {
      name: "Measure",
      description: "Enable measure addon",
      toolbar: {
        icon: "ruler",
        items: [
          { value: false, title: "Measure off" },
          { value: true, title: "Measure on" }
        ]
      }
    },
    version: {
      toolbar: {
        icon: "info",
        items: [{ value: version, title: `Version ${version}` }],
        showName: true,
        dynamicTitle: true
      }
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" }
        ],
        showName: true,
        dynamicTitle: true
      }
    }
  },
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ["Introduction", "Installation", "Styles"]
      }
    }
  },
  initialGlobals: {
    theme: "dark",
    measureEnabled: false
  }
};

export default preview;
