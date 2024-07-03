import { SvgIcon, SvgIconProps } from "@mui/material";

interface CheckIconProps {
  color?: string;
  fontSize?: SvgIconProps["fontSize"];
  sx?: SvgIconProps["sx"];
}

const UploadIcon = ({ fontSize, sx, color = "currentColor" }: CheckIconProps) => (
  <SvgIcon width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" fontSize={fontSize} sx={sx}>
    <g clipPath="url(#clip0_12914_201806)">
      <path
        d="M22 10H14C12.9 10 12.01 10.9 12.01 12L12 28C12 29.1 12.89 30 13.99 30H26C27.1 30 28 29.1 28 28V16L22 10ZM26 28H14V12H21V17H26V28ZM16 23.01L17.41 24.42L19 22.84V27H21V22.84L22.59 24.43L24 23.01L20.01 19L16 23.01Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12914_201806">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default UploadIcon;
