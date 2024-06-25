import { Chip as ChipMui, ChipProps as ChipPropsMui, useTheme } from "@mui/material";
import DotIcon from "@/components/DataDisplay/Icons/DotIcon";

interface ChipProps extends ChipPropsMui {
  dot?: boolean;
}

const Chip = ({ dot, color, variant, ...props }: ChipProps) => {
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

  return <ChipMui variant={variant} color={color} icon={dot ? <DotIcon color={dotColor[color || "default"]} /> : undefined} {...props} />;
};

export default Chip;
