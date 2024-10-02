import { Chip as ChipMui, ChipProps as ChipPropsMui, useTheme } from "@mui/material";
import { forwardRef, Ref } from "react";
import DotIcon from "@/components/DataDisplay/Icons/DotIcon";

interface ChipProps extends ChipPropsMui {
  dot?: boolean;
}

const Chip = ({ dot, color, variant, ...props }: ChipProps, ref: Ref<HTMLDivElement>) => {
  const { palette } = useTheme();

  const dotColor = {
    default: palette.text.secondary,
    error: palette.error.main,
    info: palette.info.main,
    primary: palette.text.primary,
    secondary: palette.secondary.main,
    success: palette.success.main,
    warning: palette.warning.main,
  };

  return (
    <ChipMui
      ref={ref}
      variant={variant}
      color={color}
      icon={
        dot ? (
          <DotIcon
            color={dotColor[color || "default"]}
            fontSize="inherit"
            sx={{
              height: 8,
              marginLeft: 1,
              width: 8,
            }}
          />
        ) : undefined
      }
      {...props}
    />
  );
};

export default forwardRef(Chip);
