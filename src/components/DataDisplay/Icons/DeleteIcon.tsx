import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const DeleteIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-2 -2 28 28" {...props}>
    <path d="M3 6h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default DeleteIcon;
