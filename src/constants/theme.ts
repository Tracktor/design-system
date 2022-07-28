import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
    mode: "dark",
  },
});

export default lightTheme;
