import { css, CssBaseline, GlobalStyles, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import { commonTheme } from "@/constants/theme";
import useThemeProvider from "@/context/Theme/useThemeProvider";

export interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  theme?: "dark" | "light" | DefaultTheme;
  font?: {
    googleFontName?: string;
    import?: boolean;
    fontWeight?: number[];
  };
}

const ThemeProvider = ({
  children,
  includeCssBaseline = true,
  theme = "light",
  font = {
    fontWeight: [400, 500, 700],
    import: true,
  },
}: ThemeProviderProps) => {
  const { getTheme } = useThemeProvider();
  const googleFontName = font?.googleFontName || commonTheme.typography.fontFamily?.split(",")[0];
  const googleWeight = font.fontWeight?.join(";");

  return (
    <ThemeProviderMUI theme={getTheme(theme)}>
      {font.import && (
        <GlobalStyles
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=${googleFontName}:wght@${googleWeight}&display=swap");
          `}
        />
      )}
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
