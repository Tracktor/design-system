import { alpha, createTheme, ThemeOptions } from "@mui/material";
import type { ChangeEvent } from "react";
import landscape from "@/assets/img/landscape.svg";
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
    size?: "small" | "medium";
  }
}

let currentMuiTextFieldRef: null | HTMLDivElement = null;

const commonThemeOptions: ThemeOptions = {
  components: {
    MuiAlert: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
      variants: [
        {
          props: { color: "primary", variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            borderColor: alpha(theme.palette.primary.main, 0.5),
          }),
        },
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
        {
          props: { size: "small" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
          }),
        },
        {
          props: { size: "medium" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
          }),
        },
        {
          props: { size: "large" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          }),
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && { borderColor: commonColors.grey200 }),
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
          style: ({ theme }) => ({
            "& .MuiRadio-root": {
              border: `solid 1px ${theme.palette.mode === "light" ? commonColors.grey200 : darkColors.outlineBorder}`,
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
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              borderColor: theme.palette.primary.main,
            },
            margin: "inherit",
            padding: theme.spacing(2),
            position: "relative",
          }),
        },
        {
          props: { size: "small" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          }),
        },
      ],
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && { borderColor: commonColors.grey200 }),
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
      defaultProps: {
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          const { currentTarget } = e;

          if (
            currentTarget?.files &&
            currentTarget?.type === "file" &&
            currentTarget?.tagName === "INPUT" &&
            currentMuiTextFieldRef?.classList.contains("picture")
          ) {
            const fileName = currentTarget?.files[0]?.name;
            const label = currentMuiTextFieldRef?.querySelector("label");

            if (label && fileName) {
              label.textContent = fileName;
            }
          }
        },
        ref: (instance) => {
          currentMuiTextFieldRef = instance;
        },
      },
      styleOverrides: {
        root: ({ theme, fullWidth }) => ({
          "&.picture": {
            "& .MuiInputBase-input, .MuiOutlinedInput-notchedOutline legend": {
              display: "none",
            },
            "& .MuiInputBase-root": {
              height: "100%",
            },
            "& .MuiInputLabel-root": {
              alignItems: "center",
              cursor: "pointer",
              display: "flex",
              fontSize: 14,
              height: "100%",
              maxWidth: "100%",
              pointerEvents: "auto",
              transform: "none",
              whiteSpace: "initial",
              width: "100%",
            },
            "& .MuiInputLabel-root:before": {
              content: `url(${landscape})`,
              height: 30,
              marginLeft: theme.spacing(2),
              marginRight: theme.spacing(2),
              width: 33,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderStyle: "dashed",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
            height: 80,
            justifyContent: "center",
            maxWidth: fullWidth ? "100%" : 400,
            width: "100%",
          },
        }),
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            "& .MuiInputBase-root": {
              borderRadius: 8,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && { borderColor: commonColors.grey200 }),
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
      100: commonColors.grey100,
      200: commonColors.grey200,
      300: commonColors.grey300,
      400: commonColors.grey400,
      50: commonColors.grey50,
      500: commonColors.grey500,
      600: commonColors.grey600,
      700: commonColors.grey700,
      800: commonColors.grey800,
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
