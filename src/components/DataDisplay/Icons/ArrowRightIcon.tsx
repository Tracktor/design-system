import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface CloseIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const ArrowRightIcon = ({ sx, fontSize, color = "currentColor" }: CloseIconProps) => (
  <SvgIcon width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" sx={sx} fontSize={fontSize}>
    <path d="M6 2L5.295 2.705L8.085 5.5L2 5.5L2 6.5L8.085 6.5L5.295 9.295L6 10L10 6L6 2Z" fill={color} fillOpacity="0.54" />
  </SvgIcon>
);

export default ArrowRightIcon;
