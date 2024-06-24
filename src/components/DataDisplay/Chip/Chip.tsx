import { Chip as ChipMui, ChipProps as ChipPropsMui } from "@mui/material";
import DotIcon from "@/components/DataDisplay/Icons/DotIcon";

interface ChipProps extends ChipPropsMui {
  dot?: boolean;
}

const Chip = ({ dot, ...props }: ChipProps) => <ChipMui icon={dot ? <DotIcon /> : undefined} {...props} />;

export default Chip;
