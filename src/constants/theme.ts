import { createTheme, ThemeOptions } from "@mui/material";
import commonColors from "@/styles/colors/common.module.scss";
import darkColors from "@/styles/colors/dark.module.scss";
import lightColors from "@/styles/colors/light.module.scss";

const commonThemeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: 8,
          },
        },
        {
          props: { variant: "filled" },
          style: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiInputBase-root": {
              borderRadius: 8,
            },
          },
        },
        {
          props: { variant: "filled" },
          style: {
            "& .MuiInputBase-root": {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
          },
        },
      ],
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 11px",
        },
      },
    },
  },
  palette: {
    error: {
      dark: commonColors.errorDark,
      light: commonColors.errorLight,
      main: commonColors.errorMain,
    },
    info: {
      dark: commonColors.infoDark,
      light: commonColors.infoLight,
      main: commonColors.infoMain,
    },
    primary: {
      dark: commonColors.primaryDark,
      light: commonColors.primaryLight,
      main: commonColors.primaryMain,
    },
    secondary: {
      dark: commonColors.secondaryDark,
      light: commonColors.secondaryLight,
      main: commonColors.secondaryMain,
    },
    success: {
      dark: commonColors.successDark,
      light: commonColors.successLight,
      main: commonColors.successMain,
    },
    warning: {
      dark: commonColors.warningDark,
      light: commonColors.warningLight,
      main: commonColors.warningMain,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    action: {
      active: lightColors.actionActive,
      disabled: lightColors.actionDisabled,
      disabledBackground: lightColors.actionDisabledBackground,
      focus: lightColors.actionFocus,
      hover: lightColors.actionHover,
      selected: lightColors.actionSelected,
    },
    background: {
      default: lightColors.background,
    },
    divider: lightColors.divider,
    mode: "light",
    text: {
      disabled: lightColors.textDisabled,
      primary: lightColors.textPrimary,
      secondary: lightColors.textSecondary,
    },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    action: {
      active: darkColors.actionActive,
      disabled: darkColors.actionDisabled,
      disabledBackground: darkColors.actionDisabledBackground,
      focus: darkColors.actionFocus,
      hover: darkColors.actionHover,
      selected: darkColors.actionSelected,
    },
    background: {
      default: darkColors.background,
      paper: darkColors.paper,
    },
    divider: darkColors.divider,
    mode: "dark",
    text: {
      disabled: darkColors.textDisabled,
      primary: darkColors.textPrimary,
      secondary: darkColors.textSecondary,
    },
  },
};

export const commonTheme = createTheme(commonThemeOptions);
export const lightTheme = createTheme(commonThemeOptions, lightThemeOptions);
export const darkTheme = createTheme(commonThemeOptions, darkThemeOptions);

export default lightTheme;
