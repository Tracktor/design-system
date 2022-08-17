import { Paper as Component, PaperProps } from "@mui/material";

const Paper = ({ children, ...props }: PaperProps) => <Component {...props}>{children}</Component>;

export default Paper;
