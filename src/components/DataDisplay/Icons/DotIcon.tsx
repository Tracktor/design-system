import { SvgIcon, SvgIconProps } from "@mui/material";

interface CheckIconProps {
  color?: string;
  fontSize?: SvgIconProps["fontSize"];
  sx?: SvgIconProps["sx"];
}

const DotIcon = ({ sx, fontSize, color = "currentColor" }: CheckIconProps) => (
  <SvgIcon width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" fontSize={fontSize} sx={sx}>
    <rect x="1" y="1" width="6" height="6" rx="3" fill={color} />
  </SvgIcon>
);

export default DotIcon;
