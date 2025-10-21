import { AccordionProps, Accordion as Component } from "@mui/material";

const Accordion = ({ children, ...props }: AccordionProps) => <Component {...props}>{children}</Component>;

export default Accordion;
