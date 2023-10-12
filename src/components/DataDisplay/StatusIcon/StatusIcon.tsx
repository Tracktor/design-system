import { alpha, SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

const SIZE_DEFAULT = 16;
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
  fontSize?: "inherit" | "xSmall" | "small" | "medium" | "large";
}

const StatusIcon = ({ color, sx, fontSize = "xSmall" }: StatusIconProps, ref: ForwardedRef<SVGSVGElement>) => {
  const { palette } = useTheme();
  const colorProps = color || palette.grey.A700;
  const colorIcon = isTypeColor(color) ? palette?.[color]?.main : colorProps;
  const colorOpacity = alpha(colorIcon, 0.2);

  return (
    <SvgIcon
      viewBox="0 0 16 16"
      ref={ref}
      fontSize={fontSize === "xSmall" ? undefined : fontSize}
      sx={{
        ...(fontSize === "xSmall" && { fontSize: SIZE_DEFAULT }),
        ...sx,
      }}
    >
      <circle cx="8" cy="8" r="8" fill={colorOpacity} />
      <circle cx="8" cy="8" r="4" fill={colorIcon} />
    </SvgIcon>
  );
};

export default forwardRef(StatusIcon);
