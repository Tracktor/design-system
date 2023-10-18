import { alpha, SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

const statusIconColor = ["warning", "info", "success", "error", "primary", "secondary"] as const;

type StatusIconColor = (typeof statusIconColor)[number];

const isTypeColor = (x: any): x is StatusIconColor => statusIconColor.includes(x);

export interface StatusIconProps extends Omit<SvgIconProps, "color" | "fontSize"> {
  /**
   * The color of the icon.
   * @default "grey.A700"
   */
  color?: StatusIconColor | string;
  /**
   * The fontSize applied to the icon. Defaults to 16px (xSmall), but can be configured to inherit font size.
   * @default 'medium'
   */
  fontSize?: "inherit" | "small" | "medium" | "large";
  /**
   * The variant to use.
   * @default "filled"
   */
  variant?: "filled" | "outlined";
}

const StatusIcon = ({ color, sx, variant = "filled", fontSize = "medium" }: StatusIconProps, ref: ForwardedRef<SVGSVGElement>) => {
  const { palette } = useTheme();
  const colorInherit = palette.mode === "dark" ? palette.text.disabled : palette.grey[400];
  const colorProps = color || colorInherit;
  const colorIcon = isTypeColor(color) ? palette?.[color]?.main : colorProps;
  const colorOpacity = alpha(colorIcon, 0.2);

  return (
    <SvgIcon
      viewBox="0 0 16 16"
      ref={ref}
      fontSize={fontSize}
      sx={{
        ...(fontSize === "small" && { fontSize: 16 }),
        ...(fontSize === "large" && { fontSize: 32 }),
        ...sx,
      }}
    >
      <circle cx="8" cy="8" r="8" fill={variant === "filled" ? colorOpacity : "transparent"} />
      {variant === "filled" ? (
        <circle cx="8" cy="8" r="4" fill={colorIcon} />
      ) : (
        <circle cx="8" cy="8" r="4" stroke={colorIcon} strokeWidth="2" fill="transparent" />
      )}
    </SvgIcon>
  );
};

export default forwardRef(StatusIcon);
