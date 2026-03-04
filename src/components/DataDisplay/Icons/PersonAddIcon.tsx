import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const PersonAddIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-2 -2 28 28" {...props}>
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="19" x2="19" y1="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="22" x2="16" y1="11" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default PersonAddIcon;
