import { Modal as Component, ModalProps } from "@mui/material";

const Modal = ({ children, ...props }: ModalProps) => <Component {...props}>{children}</Component>;

export default Modal;
