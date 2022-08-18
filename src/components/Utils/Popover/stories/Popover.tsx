import { Popover as Component, PopoverProps } from "@mui/material";

const Popover = ({ children, ...props }: PopoverProps) => <Component {...props}>{children}</Component>;

export default Popover;
