import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface CloseIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const ChevronIcon = ({ sx, fontSize, color = "currentColor" }: CloseIconProps) => (
  <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" sx={sx} fontSize={fontSize}>
    <path d="M12 6.47003L11.06 5.53003L8 8.58336L4.94 5.53003L4 6.47003L8 10.47L12 6.47003Z" fill={color} fillOpacity="0.54" />
  </SvgIcon>
);

export default ChevronIcon;
