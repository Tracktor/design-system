import { createTheme } from "@mui/material/styles";
import colors from "@/styles/colors.module.scss";

const primary = {
  main: colors.blue500,
};

export const lightTheme = createTheme({
  palette: {
    background: {
      default: colors.white,
    },
    mode: "light",
    primary,
  },
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: colors.black,
    },
    mode: "dark",
    primary,
  },
});

export default lightTheme;
