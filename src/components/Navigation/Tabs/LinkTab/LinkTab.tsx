import { Tab } from "@mui/material";
import type { TabProps } from "@mui/material/Tab/Tab";
import type { ElementType, MouseEvent } from "react";

export interface LinkTabProps extends Omit<TabProps, "onClick"> {
  component?: ElementType;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  label?: string;
  href?: string;
}

const LinkTab = ({ component = "a", ...props }: LinkTabProps) => (
  <Tab
    component={component}
    onClick={(e: MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  />
);

export default LinkTab;
