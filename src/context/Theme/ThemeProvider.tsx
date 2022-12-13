import { css, CssBaseline, GlobalStyles, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import type { DefaultTheme } from "@mui/private-theming/defaultTheme";
import type { ReactNode } from "react";
import { commonTheme } from "@/config/theme";
import defaultFontWeight from "@/constants/defaultFontWeight";
import useThemeProvider from "@/context/Theme/useThemeProvider";

export interface ThemeProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  theme?: "dark" | "light" | DefaultTheme;
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

const ThemeProvider = ({ children, includeCssBaseline = true, theme = "light", font = defaultFont }: ThemeProviderProps) => {
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
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
