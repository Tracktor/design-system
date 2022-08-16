import { Tooltip as Component, TooltipProps } from "@mui/material";

export const Tooltip = ({ children, ...props }: TooltipProps) => <Component {...props}>{children}</Component>;

export default Tooltip;
