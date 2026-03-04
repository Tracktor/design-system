import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const PenLineIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-2 -2 28 28" {...props}>
    <path d="M12 20h9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default PenLineIcon;
