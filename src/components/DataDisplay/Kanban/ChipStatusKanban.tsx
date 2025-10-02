import { ReactElement } from "react";
import { Chip, ChipProps, KanbanChipMapping, variantKanbanChip } from "@/main";

interface ChipStatusProps {
  status?: keyof typeof variantKanbanChip | keyof KanbanChipMapping | string;
  size?: ChipProps["size"];
  variant?: ChipProps["variant"];
  lineThrough?: boolean;
  dot?: boolean;
  label?: string;
  sx?: ChipProps["sx"];
  deleteIcon?: ReactElement;
  disabled?: boolean;
  statusMapping?: KanbanChipMapping;
}

const ChipStatusKanban = ({
  label,
  status,
  sx,
  deleteIcon,
  lineThrough,
  disabled,
  statusMapping,
  dot = true,
  variant = "outlined",
  size = "small",
}: ChipStatusProps) => {
  const statusToLowerCase = String(status)?.toLowerCase();
  const mapping = statusMapping ?? variantKanbanChip;
  const { color, variant: mappedVariant } = (statusToLowerCase && mapping[statusToLowerCase]) || { color: "default" };

  return (
    <Chip
      lineThrough={lineThrough}
      disabled={disabled}
      dot={dot}
      color={color}
      deleteIcon={deleteIcon}
      label={label}
      size={size}
      variant={mappedVariant || variant}
      sx={sx}
      data-test="dealStatus"
      onDelete={deleteIcon ? () => {} : undefined}
    />
  );
};

export default ChipStatusKanban;
