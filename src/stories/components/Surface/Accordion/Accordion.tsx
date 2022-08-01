import AccordionMui, { AccordionProps } from "@mui/material/Accordion";

const Accordion = ({ children, ...props }: AccordionProps) => <AccordionMui {...props}>{children}</AccordionMui>;

export default Accordion;
