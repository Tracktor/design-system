import { Accordion as AccordionMui, AccordionProps } from "@mui/material";

const Accordion = ({ children, ...props }: AccordionProps) => <AccordionMui {...props}>{children}</AccordionMui>;

export default Accordion;
