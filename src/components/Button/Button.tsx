import ButtonMui, { ButtonProps } from "@mui/material/Button";

// eslint-disable-next-line react/jsx-props-no-spreading
export const Button = ({ children = "Tracktor", ...props }: ButtonProps) => <ButtonMui {...props}>{children}</ButtonMui>;

export default Button;
