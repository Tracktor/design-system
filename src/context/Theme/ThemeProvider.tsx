import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import defaultTheme from "@/constants/theme";
import ThemeContext, { ThemeContextDefaultValue } from "@/context/Theme/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  theme: DefaultTheme;
}

const ThemeProvider = ({ children, includeCssBaseline = true, theme = defaultTheme }: ThemeProviderProps) => (
  <ThemeContext.Provider value={ThemeContextDefaultValue}>
    <ThemeProviderMUI theme={theme}>
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  </ThemeContext.Provider>
);

export default ThemeProvider;
