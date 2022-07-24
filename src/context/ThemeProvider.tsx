import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import type { ReactNode } from "react";
import darkTheme from "@/constants/theme";
import ThemeContext, { ThemeContextDefaultValue } from "@/context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
}

const ThemeProvider = ({ children, includeCssBaseline = true }: ThemeProviderProps) => (
  <ThemeContext.Provider value={ThemeContextDefaultValue}>
    <ThemeProviderMUI theme={darkTheme}>
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  </ThemeContext.Provider>
);

export default ThemeProvider;
