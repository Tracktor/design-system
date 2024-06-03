import {
  alpha,
  ComponentsPropsList,
  createTheme,
  getOverlayAlpha,
  PaletteMode,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Children, CSSProperties, isValidElement } from "react";
import { ButtonProps } from "@/components/Inputs/Button";
import { defaultFontFamily } from "@/constants/fonts";

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/InputLabel" {
  interface InputLabelPropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    xSmall: true;
  }
}

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

  // eslint-disable-next-line no-shadow
  interface Theme {
    size: {
      mobileNavBarHeight: number;
      tabletNavBarHeight: number;
    };
  }

  // eslint-disable-next-line no-shadow
  interface ThemeOptions {
    size?: {
      mobileNavBarHeight?: number;
      tabletNavBarHeight?: number;
    };
  }

  interface PaletteColor {
    black: string;
  }

  interface SimplePaletteColorOptions {
    black?: string;
  }

  interface TypographyVariants {
    body3: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: CSSProperties;
  }
}

declare module "@mui/system" {
  interface Shape {
    borderRadiusL: number;
    borderRadiusS: number;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
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
          ...(!ownerState.square && { borderRadius: theme.shape.borderRadiusL }),
          ...(ownerState.variant === "standard" && {
            border: `solid 1px ${theme.palette[ownerState.severity || "success"].main}`,
          }),
        }),
      },
      variants: [
        {
          props: {
            variant: "filled",
          },
          style: {
            borderColor: "transparent",
            color: "white",
          },
        },
        {
          props: {
            variant: "standard",
          },
          style: ({ theme, severity }: { theme: Theme } & ComponentsPropsList["MuiAlert"]) => ({
            backgroundColor: alpha(theme.palette[severity || "success"].main, 0.08),
            color: theme.palette.mode === "dark" ? theme.palette[severity || "success"].light : theme.palette[severity || "success"].dark,
          }),
        },
      ],
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }) => ({
          marginTop: theme.spacing(0.5),
        }),
      },
      variants: [
        {
          props: { size: "xSmall" },
          style: {
            "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
              transform: "translate(12px, 8px) scale(1)",
            },
            "& .MuiOutlinedInput-root": {
              paddingBottom: 1,
              paddingTop: 1,
            },
          },
        },
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
    MuiBadge: {
      styleOverrides: {
        badge: ({ theme, ownerState }) => {
          const getBadgeTextColor = (mode: PaletteMode, color?: string) => {
            if ((mode === "dark" && color === "error") || (mode === "dark" && color === "default")) {
              return theme.palette.common.white;
            }

            if ((mode === "light" && color === "secondary") || (mode === "light" && color === "default")) {
              return theme.palette.common.black;
            }

            return theme.palette.mode === "dark" ? theme.palette.common.black : theme.palette.common.white;
          };

          return {
            backgroundColor: theme.palette.mode === "light" && ownerState.color === "default" ? theme.palette.grey[100] : ownerState.color,
            borderRadius: theme.shape.borderRadiusS,
            color: getBadgeTextColor(theme.palette.mode, ownerState.color),
          };
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          lineHeight: 1,
          paddingLeft: "24px",
          paddingRight: "24px",
          textTransform: "none",
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
          props: { size: "small" },
          style: {
            minHeight: 40,
          },
        },
        {
          props: { size: "medium" },
          style: {
            minHeight: 48,
          },
        },
        {
          props: { size: "large" },
          style: {
            minHeight: 56,
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
        {
          props: { variant: "link" },
          style: ({ theme, ownerState }: { theme: Theme; ownerState?: ButtonProps } & ComponentsPropsList["MuiButton"]) => {
            const color =
              ownerState?.color === "inherit" ? theme.palette.text.primary : theme.palette?.[ownerState?.color || "primary"]?.main;

            return {
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
                textDecorationColor: alpha(color || theme.palette.primary.main, 0.4),
              },
              color,
              fontSize: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              minHeight: "auto",
              padding: 0,
              textDecoration: "underline",
              textTransform: "none",
            };
          },
        },
      ],
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(!ownerState.square && {
            borderRadius: theme.shape.borderRadiusL,
          }),
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
            borderRadius: theme.shape.borderRadiusS,
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
              "&:before": {
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.79508%2015.8749L4.62508%2011.7049L3.20508%2013.1149L8.79508%2018.7049L20.7951%206.70492L19.3851%205.29492L8.79508%2015.8749Z%22%20fill%3D%22%23${theme.palette.primary.main.replace(
                  "#",
                  "",
                )}%22%2F%3E%3C%2Fsvg%3E")`,
                bottom: 0,
                content: "''",
                display: "block",
                height: 20,
                marginTop: -2,
                position: "absolute",
                right: theme.spacing(1.5),
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
              },
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              borderColor: theme.palette.primary.main,
            },
            backgroundColor: theme.palette.background.paper,
            margin: "inherit",
            padding: theme.spacing(2),
            paddingRight: theme.spacing(5),
            position: "relative",
          }),
        },
        {
          props: { size: "small", variant: "card" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
            paddingRight: theme.spacing(6),
          }),
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? theme.palette.background.paper : "transparent",
        }),
      },
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
        {
          props: { size: "xSmall" },
          style: {
            "& .MuiInputBase-input.MuiFilledInput-input": {
              paddingBottom: 3.5,
              paddingTop: 13.5,
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              paddingBottom: 8.5,
              paddingTop: 8.5,
            },
            "&.MuiInputBase-multiline": {
              paddingBottom: 0,
              paddingTop: 0,
            },
            "&.MuiInputBase-multiline textarea": {
              height: 50,
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      variants: [
        {
          props: { size: "xSmall" },
          style: {
            "&.MuiInputLabel-filled.MuiInputLabel-sizeXSmall": {
              transform: "translate(12px, 0px) scale(0.75)",
            },
            "&.MuiInputLabel-outlined.MuiInputLabel-sizeXSmall:not(.MuiInputLabel-shrink), &.MuiInputLabel-filled.MuiInputLabel-sizeXSmall:not(.MuiInputLabel-shrink)":
              {
                transform: "translate(14px, 8px) scale(1)",
              },
          },
        },
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
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        list: ({ theme }) => ({
          "& .MuiMenuItem-root": {
            ...theme.typography.body2,
            borderRadius: theme.shape.borderRadiusS,
            lineHeight: theme.typography.pxToRem(24),
            padding: theme.spacing(1, 2),
          },
          minWidth: 200,
          padding: theme.spacing(1),
        }),
        root: ({ theme }) => ({
          marginTop: theme.spacing(0.5),
        }),
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
            borderRadius: theme.shape.borderRadiusL,
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
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom",
        },
      },
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
                "& .MuiFormLabel-asterisk": {
                  display: "contents",
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
                  content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.59 32'%3E%3Crect width='35.59' height='32' fill='none'/%3E%3Cg%3E%3Cg%3E%3Cpath d='m32.26,1H3.34c-1.23,0-2.22.9-2.22,2v26c0,1.1,1,2,2.22,2h28.92c1.23,0,2.22-.9,2.22-2V3c0-1.1-1-2-2.22-2Z' fill='none' stroke='%23adafaf' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.3'/%3E%3Cpath d='m7.79,23l5.13-6.15c.19-.23.44-.42.71-.56.28-.14.59-.22.91-.24.32-.02.64.02.94.12.3.1.57.26.8.46l1.52,1.37,4.89-5.87c.21-.25.48-.45.78-.59.31-.14.65-.21.99-.21s.69.07.99.21c.31.14.58.34.78.59l3.96,4.75' fill='none' stroke='%23adafaf' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.3'/%3E%3Cpath d='m9.45,11c1.54,0,2.78-1.12,2.78-2.5s-1.24-2.5-2.78-2.5-2.78,1.12-2.78,2.5,1.25,2.5,2.78,2.5Z' fill='none' stroke='%23adafaf' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.3'/%3E%3Cpath d='m1.11,23h33.37' fill='none' stroke='%23adafaf' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
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
        root: ({ theme, ownerState }) => ({
          "&.Mui-selected": {
            ...(ownerState.color &&
              ownerState.color !== "standard" && { backgroundColor: alpha(theme.palette[ownerState.color].main, 0.12) }),
          },
          borderRadius: theme.shape.borderRadius,
          padding: "8px 11px",
        }),
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            minHeight: 40,
          },
        },
        {
          props: { size: "medium" },
          style: {
            minHeight: 48,
          },
        },
        {
          props: { size: "large" },
          style: {
            minHeight: 56,
          },
        },
      ],
    },
  },
  palette: {
    grey: {
      100: "#e3e8e8",
      200: "#d2d8d8",
      300: "#9dabab",
      400: "#7a8b8c",
      50: "#f5f7f7",
      500: "#586c6d",
      600: "#354c4f",
      700: "#233d3f",
      800: "#011e21",
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
    borderRadiusL: 12,
    borderRadiusS: 4,
  },
  size: {
    mobileNavBarHeight: 88,
    tabletNavBarHeight: 64,
  },
  typography: () => {
    const fontSize = 14;
    const htmlFontSize = 16;
    const coefficient = fontSize / 14;
    const pxToRem = (size: number) => `${(size / htmlFontSize) * coefficient}rem`;

    return {
      body3: {
        fontSize: pxToRem(12),
      },
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
    error: {
      dark: "#C73443",
      light: "#FF9A9C",
      main: "#FF686E",
    },
    info: {
      dark: "#0059AE",
      light: "#85B4FF",
      main: "#4D85E0",
    },
    mode: "light",
    primary: {
      black: "#004E53",
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
    text: {
      disabled: "#ADAFAF",
      primary: "#000000",
      secondary: "#616365",
    },
    warning: {
      dark: "#C77800",
      light: "#FFD95B",
      main: "#FFA726",
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
    error: {
      dark: "#d32f2f",
      light: "#e57273",
      main: "#f44236",
    },
    info: {
      dark: "#0089d0",
      light: "#4ec4f7",
      main: "#2ab6f5",
    },
    mode: "dark",
    primary: {
      dark: "#009ca6",
      light: "#50c6ce",
      main: "#35b0b7",
    },
    secondary: {
      dark: "#6001ee",
      light: "#d5bffa",
      main: "#9964f4",
    },
    success: {
      dark: "#388e3c",
      light: "#81c784",
      main: "#66bb69",
    },
    text: {
      disabled: "#636262",
      primary: "#ffffff",
      secondary: "#999999",
    },
    warning: {
      dark: "#f57c01",
      light: "#ffb74d",
      main: "#fea727",
    },
  },
};

export const commonTheme = responsiveFontSizes(createTheme(commonThemeOptions));
export const lightTheme = responsiveFontSizes(createTheme(commonThemeOptions, lightThemeOptions));
export const darkTheme = responsiveFontSizes(createTheme(commonThemeOptions, darkThemeOptions));

export default {
  commonTheme,
  darkTheme,
  lightTheme,
};
