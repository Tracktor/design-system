import { ReactElement } from "react";
import { Chip, ChipProps } from "@/main";

export const variantChip = {
  canceled: { color: "error" },
  confirmed: { color: "success" },
  costing: { color: "default" },
  ended: { color: "default" },
  linking: { color: "info" },
  oneShot: { color: "success" },
  quotation: { color: "default" },
  request: { color: "warning" },
  requested: { color: "info" },
  started: { color: "success" },
  subleasing: { color: "warning" },
  validated: { color: "warning" },
  waiting_for_confirmation: { color: "info" },
  waiting_for_validation: { color: "success" },
} as const;

interface ChipStatusProps {
  status?: keyof typeof variantChip | string;
  size?: ChipProps["size"];
  variant?: ChipProps["variant"];
  lineThrough?: boolean;
  dot?: boolean;
  label?: string;
  sx?: ChipProps["sx"];
  deleteIcon?: ReactElement;
  disabled?: boolean;
}

const ChipStatus = ({
  label,
  status,
  sx,
  deleteIcon,
  lineThrough,
  disabled,
  dot = true,
  variant = "outlined",
  size = "small",
}: ChipStatusProps) => {
  const statusToLowerCase = String(status)?.toLowerCase();
  const color = variantChip[statusToLowerCase as keyof typeof variantChip]?.color || "default";

  return (
    <Chip
      lineThrough={lineThrough}
      disabled={disabled}
      dot={dot}
      color={color}
      deleteIcon={deleteIcon}
      label={label}
      size={size}
      variant={variant}
      sx={sx}
      data-test="dealStatus"
      onDelete={deleteIcon ? () => {} : undefined}
    />
  );
};

export default ChipStatus;
