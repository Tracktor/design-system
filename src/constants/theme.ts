import { createTheme } from "@mui/material/styles";
import colors from "@/styles/colors.module.scss";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: colors.white,
    },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: colors.black,
    },
    mode: "dark",
  },
});

export default lightTheme;
