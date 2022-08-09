import { CssBaseline, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import defaultTheme from "@/constants/theme";
import "@/styles/fonts.module.scss";

export interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  theme?: DefaultTheme;
}

const ThemeProvider = ({ children, includeCssBaseline = true, theme = defaultTheme }: ThemeProviderProps) => (
  <ThemeProviderMUI theme={theme}>
    {includeCssBaseline && <CssBaseline />}
    {children}
  </ThemeProviderMUI>
);

export default ThemeProvider;
