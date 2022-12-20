import { createTheme } from "@mui/material";
import { commonTheme, darkTheme, lightTheme } from "@/config/theme";
import type { ThemeProviderProps } from "@/context/Theme/ThemeProvider";

const useThemeProvider = () => {
  const getTheme = (theme: ThemeProviderProps["theme"]): NonNullable<ThemeProviderProps["theme"]> | {} => {
    if (theme === "dark") {
      return darkTheme;
    }

    if (theme === "light") {
      return lightTheme;
    }

    if (theme?.palette?.mode === "dark") {
      return createTheme(theme, darkTheme);
    }

    if (theme?.palette?.mode === "light") {
      return createTheme(theme, lightTheme);
    }

    return createTheme(theme, commonTheme);
  };

  return { getTheme };
};

export default useThemeProvider;
