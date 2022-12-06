import { Tab } from "@mui/material";
import type { MouseEvent } from "react";

export interface LinkTabProps {
  label?: string;
  href?: string;
}

const LinkTab = (props: LinkTabProps) => (
  <Tab
    component="a"
    onClick={(e: MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  />
);

export default LinkTab;
