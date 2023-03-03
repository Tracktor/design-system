import { alpha, ComponentsPropsList, createTheme, Theme, ThemeOptions } from "@mui/material";
import landscape from "@/assets/img/landscape.svg";
import { defaultFontFamily } from "@/constants/fonts";
import commonColors from "@/styles/colors/common.module.scss";
import darkColors from "@/styles/colors/dark.module.scss";
import lightColors from "@/styles/colors/light.module.scss";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    rounded: true;
  }
  interface ChipPropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/FormControlLabel" {
  interface FormControlLabelProps {
    variant?: "card";
    size?: "small" | "medium";
  }
}

const PaperDropdownElevation = 10;

const commonThemeOptions: ThemeOptions = {
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(!ownerState.square && { borderRadius: 12 }),
          ...(ownerState.variant === "standard" && {
            border: `solid 1px ${theme.palette[ownerState.severity || "success"].main}`,
          }),
        }),
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            borderColor: "transparent",
            color: "white",
          },
        },
      ],
    },
    MuiAutocomplete: {
      variants: [
        {
          props: { size: "small" },
          style: {
            "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
              paddingBottom: 10,
              paddingTop: 10,
            },
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
          props: { size: "medium" },
          style: {
            padding: "11.75px 24px",
          },
        },
        {
          props: { size: "large" },
          style: {
            padding: "14.88px 24px",
          },
        },
        {
          props: { size: "medium", variant: "outlined" },
          style: {
            padding: "10.75px 24px",
          },
        },
        {
          props: { size: "large", variant: "outlined" },
          style: {
            padding: "13.88px 24px",
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && { borderColor: commonColors.grey200 }),
          borderRadius: 12,
        }),
      },
      variants: [
        {
          props: {
            variant: undefined,
          },
          style: () => ({
            borderColor: "transparent",
          }),
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: 4,
          },
        },
        {
          props: { size: "xSmall" },
          style: ({ theme }) => ({
            "& .MuiChip-deleteIcon": {
              fontSize: theme.typography.pxToRem(14),
            },
            "& .MuiChip-icon": {
              fontSize: theme.typography.pxToRem(16),
            },
            "& .MuiChip-label": {
              fontSize: theme.typography.pxToRem(12),
              paddingLeft: 8,
              paddingRight: 8,
            },
            height: 20,
          }),
        },
      ],
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          elevation: 0,
        },
      },
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
          props: { size: "small", variant: "card" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          }),
        },
      ],
    },
    MuiInputBase: {
      variants: [
        {
          props: { size: "small" },
          style: {
            "& .MuiOutlinedInput-input.MuiInputBase-inputSizeSmall:not(.MuiInputBase-inputMultiline)": {
              paddingBottom: 12.5,
              paddingTop: 12.5,
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      variants: [
        {
          props: { size: "small" },
          style: {
            "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)": {
              transform: "translate(14px, 12px) scale(1)",
            },
          },
        },
      ],
    },
    MuiMenu: {
      defaultProps: {
        elevation: PaperDropdownElevation,
      },
    },
    MuiPaper: {
      variants: [
        {
          props: {
            square: false,
          },
          style: ({ theme }) => ({
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: 12,
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
        {
          props: { disableUnderline: true, variant: "standard" },
          style: ({ theme }) => ({
            "& .MuiSelect-select": {
              background: "none !important",
            },
            color: theme.palette.text.secondary,
          }),
        },
      ],
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `solid 1px ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        ref: (instance) => {
          instance?.addEventListener("change", (e: Event) => {
            const target = e.target as HTMLInputElement;

            if (target?.files && target?.type === "file" && target?.tagName === "INPUT") {
              const fileName = target?.files[0]?.name;
              const label = instance?.querySelector("label");

              if (label && fileName) {
                label.textContent = fileName;
              }
            }
          });
        },
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
        {
          props: { type: "search" },
          style: ({ theme }) => {
            const fillColor = encodeURIComponent(theme.palette.action.active);

            return {
              "& .MuiInputBase-input::-webkit-search-cancel-button": {
                "&:hover": {
                  backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
                },
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' fill='${fillColor}'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20px 20px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: theme.typography.pxToRem(24),
                height: 28,
                WebkitAppearance: "none",
                width: 28,
              },
            };
          },
        },
        {
          props: {
            type: "file",
          },
          style: ({
            theme,
            ownerState,
            fullWidth,
            dir,
          }: { theme: Theme; ownerState?: Record<string, any> } & ComponentsPropsList["MuiTextField"]) => {
            const isSmallSize = ownerState?.size === "small";
            const smallHeight = dir === "column" ? 130 : 60;
            const mediumHeight = dir === "column" ? 150 : 80;

            return {
              ...(ownerState?.label && {
                "& .MuiFormHelperText-root": {
                  position: "absolute",
                  top: "100%",
                },
                "& .MuiInputBase-input, .MuiOutlinedInput-notchedOutline legend": {
                  height: 0,
                  opacity: 0,
                  width: 0,
                },
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiInputLabel-root": {
                  alignItems: "center",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: dir === "column" ? "column" : "row",
                  fontSize: theme.typography.pxToRem(14),
                  height: "100%",
                  justifyContent: dir === "column" ? "center" : "left",
                  maxWidth: "100%",
                  pointerEvents: "auto",
                  transform: "none !important",
                  whiteSpace: "initial",
                  width: "100%",
                },
                "& .MuiInputLabel-root:before": {
                  content: `url(${landscape})`,
                  height: 30,
                  marginLeft: theme.spacing(2),
                  marginRight: theme.spacing(2),
                  width: 33,
                  ...(dir === "column" && { marginBottom: theme.spacing(1) }),
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderStyle: "dashed",
                  top: 0,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                },
                height: isSmallSize ? smallHeight : mediumHeight,
                justifyContent: "center",
                maxWidth: fullWidth ? "100%" : 400,
                width: "100%",
              }),
            };
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
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.17),0px 1px 1px 0px rgba(0,0,0,0.11),0px 1px 3px 0px rgba(0,0,0,0.09)",
    "0px 3px 1px -2px rgba(0,0,0,0.17),0px 2px 2px 0px rgba(0,0,0,0.11),0px 1px 5px 0px rgba(0,0,0,0.09)",
    "0px 3px 3px -2px rgba(0,0,0,0.17),0px 3px 4px 0px rgba(0,0,0,0.11),0px 1px 8px 0px rgba(0,0,0,0.09)",
    "0px 2px 4px -1px rgba(0,0,0,0.17),0px 4px 5px 0px rgba(0,0,0,0.11),0px 1px 10px 0px rgba(0,0,0,0.09)",
    "0px 3px 5px -1px rgba(0,0,0,0.17),0px 5px 8px 0px rgba(0,0,0,0.11),0px 1px 14px 0px rgba(0,0,0,0.09)",
    "0px 3px 5px -1px rgba(0,0,0,0.17),0px 6px 10px 0px rgba(0,0,0,0.11),0px 1px 18px 0px rgba(0,0,0,0.09)",
    "0px 4px 5px -2px rgba(0,0,0,0.17),0px 7px 10px 1px rgba(0,0,0,0.11),0px 2px 16px 1px rgba(0,0,0,0.09)",
    "0px 5px 5px -3px rgba(0,0,0,0.17),0px 8px 10px 1px rgba(0,0,0,0.11),0px 3px 14px 2px rgba(0,0,0,0.09)",
    "0px 5px 6px -3px rgba(0,0,0,0.17),0px 9px 12px 1px rgba(0,0,0,0.11),0px 3px 16px 2px rgba(0,0,0,0.09)",
    "0px 6px 6px -3px rgba(0,0,0,0.17),0px 10px 14px 1px rgba(0,0,0,0.11),0px 4px 18px 3px rgba(0,0,0,0.09)",
    "0px 6px 7px -4px rgba(0,0,0,0.17),0px 11px 15px 1px rgba(0,0,0,0.11),0px 4px 20px 3px rgba(0,0,0,0.09)",
    "0px 7px 8px -4px rgba(0,0,0,0.17),0px 12px 17px 2px rgba(0,0,0,0.11),0px 5px 22px 4px rgba(0,0,0,0.09)",
    "0px 7px 8px -4px rgba(0,0,0,0.17),0px 13px 19px 2px rgba(0,0,0,0.11),0px 5px 24px 4px rgba(0,0,0,0.09)",
    "0px 7px 9px -4px rgba(0,0,0,0.17),0px 14px 21px 2px rgba(0,0,0,0.11),0px 5px 26px 4px rgba(0,0,0,0.09)",
    "0px 8px 9px -5px rgba(0,0,0,0.17),0px 15px 22px 2px rgba(0,0,0,0.11),0px 6px 28px 5px rgba(0,0,0,0.09)",
    "0px 8px 10px -5px rgba(0,0,0,0.17),0px 16px 24px 2px rgba(0,0,0,0.11),0px 6px 30px 5px rgba(0,0,0,0.09)",
    "0px 8px 11px -5px rgba(0,0,0,0.17),0px 17px 26px 2px rgba(0,0,0,0.11),0px 6px 32px 5px rgba(0,0,0,0.09)",
    "0px 9px 11px -5px rgba(0,0,0,0.17),0px 18px 28px 2px rgba(0,0,0,0.11),0px 7px 34px 6px rgba(0,0,0,0.09)",
    "0px 9px 12px -6px rgba(0,0,0,0.17),0px 19px 29px 2px rgba(0,0,0,0.11),0px 7px 36px 6px rgba(0,0,0,0.09)",
    "0px 10px 13px -6px rgba(0,0,0,0.17),0px 20px 31px 3px rgba(0,0,0,0.11),0px 8px 38px 7px rgba(0,0,0,0.09)",
    "0px 10px 13px -6px rgba(0,0,0,0.17),0px 21px 33px 3px rgba(0,0,0,0.11),0px 8px 40px 7px rgba(0,0,0,0.09)",
    "0px 10px 14px -6px rgba(0,0,0,0.17),0px 22px 35px 3px rgba(0,0,0,0.11),0px 8px 42px 7px rgba(0,0,0,0.09)",
    "0px 11px 14px -7px rgba(0,0,0,0.17),0px 23px 36px 3px rgba(0,0,0,0.11),0px 9px 44px 8px rgba(0,0,0,0.09)",
    "0px 11px 15px -7px rgba(0,0,0,0.17),0px 24px 38px 3px rgba(0,0,0,0.11),0px 9px 46px 8px rgba(0,0,0,0.09)",
  ],
  shape: {
    borderRadius: 8,
  },
  typography: () => {
    const fontSize = 14;
    const htmlFontSize = 16;
    const coefficient = fontSize / 14;
    const pxToRem = (size: number) => `${(size / htmlFontSize) * coefficient}rem`;

    return {
      fontFamily: defaultFontFamily,
      h1: {
        fontSize: pxToRem(40),
        fontWeight: 700,
        lineHeight: "60px",
      },
      h2: {
        fontSize: pxToRem(32),
        fontWeight: 600,
        lineHeight: "48px",
      },
      h3: {
        fontSize: pxToRem(24),
        fontWeight: 600,
        lineHeight: "36px",
      },
      h4: {
        fontSize: pxToRem(20),
        fontWeight: 500,
        lineHeight: "30px",
      },
      h5: {
        fontSize: pxToRem(16),
        fontWeight: 500,
        lineHeight: "24px",
      },
      h6: {
        fontSize: pxToRem(14),
        fontWeight: 500,
        lineHeight: "21px",
      },
    };
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
