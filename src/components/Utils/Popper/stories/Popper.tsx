import { Popper as Component, PopperProps } from "@mui/material";

const Popper = ({ children, ...props }: PopperProps) => <Component {...props}>{children}</Component>;

export default Popper;
