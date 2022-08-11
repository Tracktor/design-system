import { Accordion as Component, AccordionProps } from "@mui/material";

const Accordion = ({ children, ...props }: AccordionProps) => <Component {...props}>{children}</Component>;

export default Accordion;
