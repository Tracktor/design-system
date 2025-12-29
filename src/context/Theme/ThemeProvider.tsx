import { CssBaseline, createTheme, css, GlobalStyles, ThemeOptions, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import { frFR, Localization } from "@mui/material/locale";
import { createContext, ReactNode, useEffect, useMemo } from "react";
import { commonTheme, darkTheme, lightTheme } from "@/config/theme";
import { defaultFontWeight } from "@/constants/fonts";

type Language = "en" | "fr";

export interface ThemeProviderProps {
  /**
   * Children to render
   */
  children: ReactNode;
  /**
   * Set HTML and body height to 100%
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
   * Theme mode
   */
  theme?: "light" | "dark" | ThemeOptions | Localization;
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

export const ThemeContext = createContext<{ language: Language }>({
  language: "en",
});

const ScrollBarStyle = ({ theme }: { theme: ThemeProviderProps["theme"] }) => (
  <GlobalStyles
    styles={css`
      * {
        scrollbar-color: ${
          theme === "dark" ? "rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05)"
        };
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
  theme,
  language = "en",
  font = defaultFont,
}: ThemeProviderProps) => {
  const fontOptions = { ...defaultFont, ...font };
  const fontName = fontOptions?.googleFontName || commonTheme.typography.fontFamily?.split(",")[0];
  const fontWeight = fontOptions?.fontWeight?.join(";");
  const themeContextValue = useMemo(() => ({ language: language as Language }), [language]);

  const memoizedTheme = useMemo(() => {
    const themeOptions = typeof theme === "object" ? theme : {};
    const languages = {
      ...(language === "fr" && frFR),
    };

    if (theme === "dark" || (typeof theme === "object" && "palette" in theme && theme?.palette?.mode === "dark")) {
      return createTheme(darkTheme, themeOptions, languages);
    }

    if (!theme || theme === "light" || (typeof theme === "object" && "palette" in theme && theme?.palette?.mode === "light")) {
      return createTheme(lightTheme, themeOptions, languages);
    }

    return createTheme(commonTheme, themeOptions, languages);
  }, [theme, language]);

  /**
   * Inject Google Fonts via <link> tags for better Lighthouse performance
   */
  useEffect(() => {
    if (!fontOptions.import || typeof document === "undefined") {
      return;
    }

    const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${fontName}:wght@${fontWeight}&display=swap`;
    const preconnectUrls = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"]; // Add preconnect links for faster font loading

    for (const url of preconnectUrls) {
      const existingPreconnect = document.head.querySelector(`link[rel="preconnect"][href="${url}"]`);

      if (!existingPreconnect) {
        const preconnectLink = document.createElement("link");

        preconnectLink.rel = "preconnect";
        preconnectLink.href = url;
        if (url === "https://fonts.gstatic.com") {
          preconnectLink.crossOrigin = "anonymous";
        }
        document.head.appendChild(preconnectLink);
      }
    }

    // Add Google Fonts stylesheet link
    const existingFontLink = document.head.querySelector(`link[href="${googleFontsUrl}"]`);

    if (!existingFontLink) {
      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = googleFontsUrl;
      document.head.appendChild(fontLink);
    }

    // Cleanup on unmount or when font changes
    return () => {
      const fontLink = document.head.querySelector(`link[href="${googleFontsUrl}"]`);
      fontLink?.remove();
    };
  }, [fontName, fontWeight, fontOptions.import]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProviderMUI theme={memoizedTheme}>
        <GlobalStyles
          styles={css`
            ::-webkit-calendar-picker-indicator {
              filter: invert(${theme === "dark" ? 1 : 0});
            }
          `}
        />
        {includeCssBaseline && <CssBaseline enableColorScheme={enableColorScheme} />}
        {fullHeight && <FullHeightStyle />}
        {includeScrollBarStyle && <ScrollBarStyle theme={theme} />}
        {children}
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
