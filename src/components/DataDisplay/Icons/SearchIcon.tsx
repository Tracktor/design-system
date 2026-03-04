import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const SearchIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-2 -2 28 28" {...props}>
    <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m21 21-4.3-4.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default SearchIcon;
