import { NoSsr as Component, NoSsrProps } from "@mui/material";

const NoSsr = ({ children, ...props }: NoSsrProps) => <Component {...props}>{children}</Component>;

export default NoSsr;
