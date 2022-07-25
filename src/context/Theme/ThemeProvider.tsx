import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import type { ReactNode } from "react";
import defaultTheme from "@/constants/theme";
import ThemeContext, { ThemeContextDefaultValue } from "@/context/Theme/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
}

const ThemeProvider = ({ children, includeCssBaseline = true }: ThemeProviderProps) => (
  <ThemeContext.Provider value={ThemeContextDefaultValue}>
    <ThemeProviderMUI theme={defaultTheme}>
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  </ThemeContext.Provider>
);

export default ThemeProvider;
