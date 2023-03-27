import { css, CssBaseline, GlobalStyles, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import type { ReactNode } from "react";
import { commonTheme } from "@/config/theme";
import { defaultFontWeight } from "@/constants/fonts";
import useThemeProvider from "@/context/Theme/useThemeProvider";

export interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  includeScrollBarStyle?: boolean;
  theme?: "dark" | "light" | ThemeOptions;
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

const ScrollBarStyle = () => (
  <GlobalStyles
    styles={css`
      * {
        scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
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

const ThemeProvider = ({
  children,
  includeCssBaseline = true,
  includeScrollBarStyle = true,
  theme = "light",
  font = defaultFont,
}: ThemeProviderProps) => {
  const { getTheme } = useThemeProvider();
  const fontOptions = { ...defaultFont, ...font };
  const fontName = fontOptions?.googleFontName || commonTheme.typography.fontFamily?.split(",")[0];
  const fontWeight = fontOptions?.fontWeight?.join(";");

  return (
    <ThemeProviderMUI theme={getTheme(theme)}>
      {fontOptions.import && (
        <GlobalStyles
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=${fontName}:wght@${fontWeight}&display=swap");
          `}
        />
      )}

      {includeScrollBarStyle && <ScrollBarStyle />}
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
