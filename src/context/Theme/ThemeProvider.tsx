import { CssBaseline, ThemeProvider as ThemeProviderMUI, GlobalStyles, css } from "@mui/material";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import { commonTheme, darkTheme, lightTheme } from "@/constants/theme";

export interface ThemeProviderProps {
  children: ReactNode;
  importFont?: boolean;
  includeCssBaseline?: boolean;
  theme?: "dark" | "light" | DefaultTheme;
}

const getTheme = (theme: ThemeProviderProps["theme"]) => {
  if (theme === "dark") {
    return darkTheme;
  }
  if (theme === "light") {
    return lightTheme;
  }

  return theme || {};
};

const ThemeProvider = ({ children, importFont = true, includeCssBaseline = true, theme = "light" }: ThemeProviderProps) => {
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
