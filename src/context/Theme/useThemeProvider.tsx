import { createTheme } from "@mui/material";
import { useCallback } from "react";
import { commonTheme, darkTheme, lightTheme } from "@/config/theme.config";
import type { ThemeProviderProps } from "@/context/Theme/ThemeProvider";

const useThemeProvider = () => {
  const getTheme = useCallback((theme: ThemeProviderProps["theme"]): NonNullable<ThemeProviderProps["theme"]> | {} => {
    if (theme === "dark") {
      return darkTheme;
    }

    if (theme === "light") {
      return lightTheme;
    }

    if (theme?.palette?.mode === "dark") {
      return createTheme(darkTheme, theme);
    }

    if (theme?.palette?.mode === "light") {
      return createTheme(lightTheme, theme);
    }

    return createTheme(commonTheme, theme || {});
  }, []);

  return { getTheme };
};

export default useThemeProvider;
