import { css, CssBaseline, GlobalStyles, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import { commonTheme } from "@/constants/theme";
import useThemeProvider from "@/context/Theme/useThemeProvider";

export interface ThemeProviderProps {
  children: ReactNode;
  importFont?: boolean;
  includeCssBaseline?: boolean;
  theme?: "dark" | "light" | DefaultTheme;
}

const ThemeProvider = ({ children, importFont = true, includeCssBaseline = true, theme = "light" }: ThemeProviderProps) => {
  const { getTheme } = useThemeProvider();
  const fontName = commonTheme.typography.fontFamily?.split(",")[0];

  return (
    <ThemeProviderMUI theme={getTheme(theme)}>
      {importFont && (
        <GlobalStyles
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=${fontName}:wght@300;400;500;700&display=swap");
          `}
        />
      )}
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
