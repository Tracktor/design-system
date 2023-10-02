import { alpha, ComponentsPropsList, createTheme, getOverlayAlpha, responsiveFontSizes, Theme, ThemeOptions } from "@mui/material";
import type { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Children, isValidElement } from "react";
import landscape from "@/assets/img/landscape.svg";
import { defaultFontFamily } from "@/constants/fonts";

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

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      outline: string;
    };
  }
  interface PaletteOptions {
    border?: {
      outline?: string;
    };
  }
}

const actionStyleOverrides: Partial<
  OverridesStyleRules<"root" | "spacing", "MuiDialogActions" | "MuiCardActions", Omit<Theme, "components">>
> = {
  root: ({ theme, ownerState }) => {
    const children = Children.toArray(ownerState.children);
    const lastChild = children[children.length - 1];

    if (isValidElement(lastChild)) {
      if (lastChild.props.variant === "contained" || lastChild.props.variant === "outlined") {
        return {
          padding: theme.spacing(3),
        };
      }

      if (lastChild.props.size === "small") {
        return {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        };
      }
    }

    return undefined;
  },
};

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
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
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
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(!ownerState.square && { borderRadius: 12 }),
        }),
      },
      variants: [
        {
          props: {
            variant: "elevation",
          },
          style: () => ({
            borderColor: "transparent",
          }),
        },
        {
          props: {
            variant: "outlined",
          },
          style: ({ theme }) => {
            const { common } = theme.palette;
            const backgroundImageColor = alpha(common.white, +getOverlayAlpha(1));

            return {
              backgroundImage: `linear-gradient(${backgroundImageColor}, ${backgroundImageColor})`,
            };
          },
        },
      ],
    },
    MuiCardActions: {
      styleOverrides: actionStyleOverrides,
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({ padding: theme.spacing(3) }),
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "rounded" },
          style: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius / 2,
          }),
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
    MuiDialogActions: {
      styleOverrides: actionStyleOverrides,
    },
    MuiDialogTitle: {
      defaultProps: {
        variant: "h3",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingRight: theme.spacing(7),
        }),
      },
    },
    MuiFormControlLabel: {
      variants: [
        {
          props: { variant: "card" },
          style: ({ theme }) => ({
            "& .MuiRadio-root": {
              border: `solid 1px ${theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.border.outline}`,
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
            "& .MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
              paddingBottom: 12.5,
              paddingTop: 12.5,
            },
            "& .MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputMultiline": {
              paddingBottom: 0,
              paddingTop: 0,
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
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiSvgIcon-root": {
            fontSize: theme.typography.pxToRem(20),
          },
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }) => {
          const { mode, common } = theme.palette;
          const backgroundImageColor = alpha(common.white, +getOverlayAlpha(mode === "light" ? 10 : 5));

          return {
            "& .MuiMenu-list": {
              padding: theme.spacing(1),
            },
            "& .MuiMenu-list .MuiMenuItem-root": {
              ...theme.typography.body2,
              borderRadius: theme.shape.borderRadius / 2,
              lineHeight: theme.typography.pxToRem(24),
              padding: theme.spacing(1, 2),
            },
            "& .MuiPaper-elevation": {
              backgroundImage: `linear-gradient(${backgroundImageColor}, ${backgroundImageColor})`,
              boxShadow: mode === "light" ? theme.shadows[10] : theme.shadows[5],
            },
          };
        },
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
              ...(theme.palette.mode === "light" && {
                borderColor: theme.palette.grey[200],
              }),
            },
            borderRadius: theme.shape.borderRadius,
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
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:first-of-type": {
            marginLeft: 0,
          },
          "&:last-of-type": {
            marginRight: 0,
          },
          marginLeft: theme.spacing(1.5),
          marginRight: theme.spacing(1.5),
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
      },
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
      styleOverrides: {
        root: {
          // Remove the default spin button on number inputs
          "& .MuiOutlinedInput-root": {
            /* Chrome, Safari, Edge, Opera */
            "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            /* Firefox */
            "input[type=number]": {
              MozAppearance: "textfield",
            },
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            "& .MuiInputBase-root": {
              borderRadius: theme.shape.borderRadius,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && {
                borderColor: theme.palette.grey[200],
              }),
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
            const isColumnDirection = dir === "column";
            const smallHeight = isColumnDirection ? 130 : 60;
            const mediumHeight = isColumnDirection ? 150 : 80;

            return {
              ...(ownerState?.label && {
                "& .MuiFormHelperText-root": {
                  position: "absolute",
                  top: "100%",
                },
                "& .MuiInputBase-input, .MuiOutlinedInput-notchedOutline legend": {
                  display: "none",
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
                  flexDirection: isColumnDirection ? "column" : "row",
                  fontSize: theme.typography.pxToRem(14),
                  height: "100%",
                  justifyContent: isColumnDirection ? "center" : "left",
                  maxWidth: "100%",
                  ...(!isColumnDirection && { paddingRight: theme.spacing(2) }),
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
                  ...(isColumnDirection && { marginBottom: theme.spacing(1) }),
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
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          padding: "8px 11px",
        }),
      },
    },
  },
  palette: {
    error: {
      dark: "#C73443",
      light: "#FF9A9C",
      main: "#FF686E",
    },
    grey: {
      100: "#E3E8E8",
      200: "#D2D8D8",
      300: "#9DAAAB",
      400: "#7B8B8C",
      50: "#F5F7F7",
      500: "#586C6D",
      600: "#354D4F",
      700: "#233E40",
      800: "#001F21",
    },
    info: {
      dark: "#0059AE",
      light: "#85B4FF",
      main: "#4D85E0",
    },
    primary: {
      dark: "#006C74",
      light: "#33AFB7",
      main: "#009BA6",
    },
    secondary: {
      dark: "#B18E00",
      light: "#FED533",
      main: "#FECB00",
    },
    success: {
      dark: "#41936E",
      light: "#7DDBB1",
      main: "#5DD39E",
    },
    warning: {
      dark: "#C77800",
      light: "#FFD95B",
      main: "#FFA726",
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.10),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.03)",
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
      },
      h2: {
        fontSize: pxToRem(32),
        fontWeight: 600,
      },
      h3: {
        fontSize: pxToRem(24),
        fontWeight: 600,
      },
      h4: {
        fontSize: pxToRem(20),
        fontWeight: 500,
      },
      h5: {
        fontSize: pxToRem(16),
        fontWeight: 500,
      },
      h6: {
        fontSize: pxToRem(14),
        fontWeight: 500,
      },
    };
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 0, 0, 0.12)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
    },
    background: {
      default: "#F5F7F7",
      paper: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    mode: "light",
    text: {
      disabled: "#ADAFAF",
      primary: "#000000",
      secondary: "#616365",
    },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
    border: {
      outline: "rgba(255, 255, 255, 0.23)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    mode: "dark",
    text: {
      disabled: "#636262",
      primary: "#ffffff",
      secondary: "#999999",
    },
  },
};

export const commonTheme = responsiveFontSizes(createTheme(commonThemeOptions));
export const lightTheme = responsiveFontSizes(createTheme(commonThemeOptions, lightThemeOptions));
export const darkTheme = responsiveFontSizes(createTheme(commonThemeOptions, darkThemeOptions));

export default lightTheme;
