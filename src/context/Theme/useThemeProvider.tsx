import { darkTheme, lightTheme } from "@/constants/theme";
import type { ThemeProviderProps } from "@/context/Theme/ThemeProvider";

const useThemeProvider = () => {
  const getTheme = (theme: ThemeProviderProps["theme"]): Omit<ThemeProviderProps["theme"], "undefined"> => {
    if (theme === "dark") {
      return darkTheme;
    }
    if (theme === "light") {
      return lightTheme;
    }

    return theme || {};
  };

  return { getTheme };
};

export default useThemeProvider;
