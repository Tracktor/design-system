import { SvgIcon, SxProps } from "@mui/material";

interface CloseIconProps {
  color?: string;
  sx?: SxProps;
}

const ChevronLeftDoubleIcon = ({ sx, color = "currentColor" }: CloseIconProps) => (
  <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" sx={sx}>
    <path
      d="M12 11.3334L8.66667 8.00002L12 4.66669M7.33333 11.3334L4 8.00002L7.33333 4.66669"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default ChevronLeftDoubleIcon;
