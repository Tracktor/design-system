import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import colors from "@/styles/colors.module.scss";

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Poppins", "sans-serif"].join(","),
};

const components: ThemeOptions["components"] = {};

export const lightTheme = createTheme({
  components,
  palette: {
    background: {
      default: colors.white,
    },
    mode: "light",
    primary: {
      main: colors.blue500,
    },
    secondary: {
      main: colors.yellow500,
    },
  },
  typography,
});

export const darkTheme = createTheme({
  components,
  palette: {
    background: {
      default: colors.black,
    },
    mode: "dark",
    primary: {
      main: colors.blue500,
    },
    secondary: {
      main: colors.yellow500,
    },
  },
  typography,
});

export default lightTheme;
