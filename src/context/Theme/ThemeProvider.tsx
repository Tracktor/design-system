import { CssBaseline, GlobalStyles } from "@mui/material";
import { frFR } from "@mui/material/locale";
import { createTheme, css, ThemeOptions, ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import { ReactNode } from "react";
import { commonTheme, darkTheme, lightTheme } from "@/config/theme";
import { defaultFontWeight } from "@/constants/fonts";

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
   * Theme options
   */
  themeOptions?: ThemeOptions;
  /**
   * Theme mode
   */
  mode?: "light" | "dark";
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme?: boolean;
  /**
   * Language to use
   * @default "en"
   * @supported "en" | "fr"
   */
  language?: string;
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

const ScrollBarStyle = ({ mode }: { mode: ThemeProviderProps["mode"] }) => (
  <GlobalStyles
    styles={css`
      * {
        scrollbar-color: ${mode === "dark"
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
  language,
  themeOptions = {},
  mode = "light",
  font = defaultFont,
}: ThemeProviderProps) => {
  const fontOptions = { ...defaultFont, ...font };
  const fontName = fontOptions?.googleFontName || commonTheme.typography.fontFamily?.split(",")[0];
  const fontWeight = fontOptions?.fontWeight?.join(";");

  const getTheme = () => {
    const languages: ThemeOptions = { ...(language === "fr" && frFR) };

    if (mode === "dark") {
      return createTheme(darkTheme, languages);
    }

    if (mode === "light") {
      return createTheme(lightTheme, themeOptions, languages);
    }

    return createTheme(commonTheme, themeOptions, languages);
  };

  return (
    <ThemeProviderMUI theme={getTheme()}>
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
      {includeScrollBarStyle && <ScrollBarStyle mode={mode} />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
