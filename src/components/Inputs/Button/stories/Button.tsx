import type { ElementType } from "react";
import Component, { ButtonProps } from "@/components/Inputs/Button";

const Button = <C extends ElementType>(props: ButtonProps<C>) => <Component {...props} />;

export default Button;
