import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import colorsDark from "@/styles/colors/dark.module.scss";
import colorsLight from "@/styles/colors/light.module.scss";

const components: ThemeOptions["components"] = {};

const paletteLight: ThemeOptions["palette"] = {
  action: {
    active: colorsLight.actionActive,
    disabled: colorsLight.actionDisabled,
    disabledBackground: colorsLight.actionDisabledBackground,
    focus: colorsLight.actionFocus,
    hover: colorsLight.actionHover,
    selected: colorsLight.actionSelected,
  },
  background: {
    default: colorsLight.background,
  },
  divider: colorsLight.divider,
  error: {
    dark: colorsLight.errorDark,
    light: colorsLight.errorLight,
    main: colorsLight.errorMain,
  },
  info: {
    dark: colorsLight.infoDark,
    light: colorsLight.infoLight,
    main: colorsLight.infoMain,
  },
  mode: "light",
  primary: {
    dark: colorsLight.primaryDark,
    light: colorsLight.primaryLight,
    main: colorsLight.primaryMain,
  },
  secondary: {
    dark: colorsLight.secondaryDark,
    light: colorsLight.secondaryLight,
    main: colorsLight.secondaryMain,
  },
  success: {
    dark: colorsLight.successDark,
    light: colorsLight.successLight,
    main: colorsLight.successMain,
  },
  text: {
    disabled: colorsLight.textDisabled,
    primary: colorsLight.textPrimary,
    secondary: colorsLight.textSecondary,
  },
  warning: {
    dark: colorsLight.warningDark,
    light: colorsLight.warningLight,
    main: colorsLight.warningMain,
  },
};

const paletteDark: ThemeOptions["palette"] = {
  background: {
    default: colorsDark.background,
  },
  error: {
    dark: colorsDark.errorDark,
    light: colorsDark.errorLight,
    main: colorsDark.errorMain,
  },
  info: {
    dark: colorsDark.infoDark,
    light: colorsDark.infoLight,
    main: colorsDark.infoMain,
  },
  mode: "dark",
  primary: {
    dark: colorsDark.primaryDark,
    light: colorsDark.primaryLight,
    main: colorsDark.primaryMain,
  },
  secondary: {
    dark: colorsDark.secondaryDark,
    light: colorsDark.secondaryLight,
    main: colorsDark.secondaryMain,
  },
  success: {
    dark: colorsDark.successDark,
    light: colorsDark.successLight,
    main: colorsDark.successMain,
  },
  text: {
    disabled: colorsDark.textDisabled,
    primary: colorsDark.textPrimary,
    secondary: colorsDark.textSecondary,
  },
  warning: {
    dark: colorsDark.warningDark,
    light: colorsDark.warningLight,
    main: colorsDark.warningMain,
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Poppins", "sans-serif"].join(","),
};

export const lightTheme = createTheme({
  components,
  palette: paletteLight,
  typography,
});

export const darkTheme = createTheme({
  components,
  palette: paletteDark,
  typography,
});

export default lightTheme;
