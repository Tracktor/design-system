import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import colors from "@/styles/colors.module.scss";

const components: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        borderRadius: 3,
        ...(ownerState.color === "secondary" && {
          "&:hover": {
            backgroundColor: colors.yellow500,
            borderColor: colors.yellow500,
            color: colors.black,
          },
          backgroundColor: colors.yellow500,
          borderColor: colors.yellow500,
          color: colors.dark,
        }),
      }),
    },
  },
};

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
  },
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
  },
});

export default lightTheme;
