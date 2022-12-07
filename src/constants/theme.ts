import { createTheme, ThemeOptions } from "@mui/material";
import commonColors from "@/styles/colors/common.module.scss";
import darkColors from "@/styles/colors/dark.module.scss";
import lightColors from "@/styles/colors/light.module.scss";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    rounded: true;
  }
}

declare module "@mui/material/FormControlLabel" {
  interface FormControlLabelProps {
    variant?: "card";
  }
}

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
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && { borderColor: commonColors.grey300 }),
        }),
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: 4,
          },
        },
      ],
    },
    MuiFormControlLabel: {
      variants: [
        {
          props: { variant: "card" },
          style: ({ theme }) => {
            console.log(theme);

            return {
              "& .MuiRadio-root": {
                border: `solid 1px ${theme.palette.mode === "light" ? commonColors.grey300 : darkColors.outlineBorder}`,
                borderRadius: theme.shape.borderRadius,
                height: "100%",
                left: 0,
                margin: 0,
                position: "absolute",
                top: 0,
                width: "100%",
              },
              "& .MuiRadio-root > span": {
                display: "none",
              },
              "& .MuiRadio-root.Mui-checked": {
                borderColor: theme.palette.primary.main,
              },
              margin: `${theme.spacing(1)} 0 `,
              padding: theme.spacing(2),
              position: "relative",
            };
          },
        },
      ],
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && { borderColor: commonColors.grey300 }),
            },
            borderRadius: 8,
          }),
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
          style: ({ theme }) => ({
            "& .MuiInputBase-root": {
              borderRadius: 8,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && { borderColor: commonColors.grey300 }),
            },
          }),
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
    grey: {
      200: commonColors.grey200,
      300: commonColors.grey300,
      50: commonColors.grey50,
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
  shape: {
    borderRadius: 8,
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
