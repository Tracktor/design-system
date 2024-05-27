import { css, CssBaseline, GlobalStyles, ThemeOptions, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import type { ReactNode } from "react";
import { commonTheme } from "@/config/theme";
import { defaultFontWeight } from "@/constants/fonts";
import useThemeProvider from "@/context/Theme/useThemeProvider";

export interface ThemeProviderProps {
  /**
   * Children to render
   */
  children: ReactNode;
  /**
   * Set html and body height to 100%
   */
  fullHeight?: boolean;
  /**
   * Include CssBaseline
   */
  includeCssBaseline?: boolean;
  /**
   * Include scroll bar style
   */
  includeScrollBarStyle?: boolean;
  /**
   * Theme to use
   */
  theme?: "dark" | "light" | ThemeOptions;
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme?: boolean;
  /**
   * Font options
   */
  font?: {
    googleFontName?: string; // Google font name to load
    import?: boolean; // Inject font @import in css
    fontWeight?: number[]; // Font weight to load
  };
}

const defaultFont: ThemeProviderProps["font"] = {
  fontWeight: defaultFontWeight,
  import: true,
};

const ScrollBarStyle = ({ theme }: { theme: ThemeProviderProps["theme"] }) => (
  <GlobalStyles
    styles={css`
      * {
        scrollbar-color: ${theme === "dark"
          ? "rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05)"};
        scrollbar-width: thin;
      }

      *::-webkit-scrollbar {
        height: 6px;
        width: 6px;
      }

      *::-webkit-scrollbar-button {
        height: 0;
        width: 0;
      }

      *::-webkit-scrollbar-corner {
        background: transparent;
      }

      *::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 10px;
      }

      *::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
      }
    `}
  />
);

const FullHeightStyle = () => (
  <GlobalStyles
    styles={css`
      html,
      body,
      #root {
        height: 100%;
      }
    `}
  />
);

const ThemeProvider = ({
  children,
  enableColorScheme,
  includeCssBaseline = true,
  includeScrollBarStyle = true,
  fullHeight = true,
  theme = "light",
  font = defaultFont,
}: ThemeProviderProps) => {
  const { getTheme } = useThemeProvider();
  const fontOptions = { ...defaultFont, ...font };
  const fontName = fontOptions?.googleFontName || commonTheme.typography.fontFamily?.split(",")[0];
  const fontWeight = fontOptions?.fontWeight?.join(";");
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <ThemeProviderMUI theme={getTheme(theme)}>
      <GlobalStyles
        styles={css`
          ::-webkit-calendar-picker-indicator {
            filter: invert(${mode === "dark" ? 1 : 0});
          }
        `}
      />
      {fontOptions.import && (
        <GlobalStyles
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=${fontName}:wght@${fontWeight}&display=swap");
          `}
        />
      )}
      {includeCssBaseline && <CssBaseline enableColorScheme={enableColorScheme} />}
      {fullHeight && <FullHeightStyle />}
      {includeScrollBarStyle && <ScrollBarStyle theme={theme} />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
