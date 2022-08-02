import CssBaseline from "@mui/material/CssBaseline";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import defaultTheme from "@/constants/theme";

interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  theme?: DefaultTheme;
}

const ThemeProvider = ({ children, includeCssBaseline = true, theme = defaultTheme }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    {includeCssBaseline && <CssBaseline />}
    {children}
  </ThemeProvider>
);

export default ThemeProvider;
