import ButtonMui, { ButtonProps } from "@mui/material/Button";

export const Button = ({ children = "Tracktor" }: ButtonProps) => <ButtonMui>{children}</ButtonMui>;

export default Button;
