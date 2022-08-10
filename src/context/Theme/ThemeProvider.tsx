import { CssBaseline, ThemeProvider as ThemeProviderMUI, GlobalStyles, css } from "@mui/material";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import { lightTheme } from "@/constants/theme";

export interface ThemeProviderProps {
  children: ReactNode;
  importFont?: boolean;
  includeCssBaseline?: boolean;
  theme?: DefaultTheme;
}

const ThemeProvider = ({ children, importFont = true, includeCssBaseline = true, theme = lightTheme }: ThemeProviderProps) => {
  const fontFamily = lightTheme.typography.fontFamily?.split(",")[0];

  return (
    <ThemeProviderMUI theme={theme}>
      {importFont && (
        <GlobalStyles
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=${fontFamily}:wght@300;400;500;700&display=swap");
          `}
        />
      )}
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
