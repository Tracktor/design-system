import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const MoreHorizIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-2 -2 28 28" {...props}>
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="19" cy="12" r="1" fill="currentColor" />
    <circle cx="5" cy="12" r="1" fill="currentColor" />
  </SvgIcon>
);

export default MoreHorizIcon;
