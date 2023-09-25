import { Box, IconButton, Modal, ModalProps } from "@mui/material";
import { ReactNode } from "react";

export interface LightboxProps extends Omit<ModalProps, "children"> {
  src?: string;
  children?: ReactNode;
  onClose?(event: {}, reason: "backdropClick" | "escapeKeyDown" | "closeButton"): void;
}

const Lightbox = ({ children, open, onClose, src, ...props }: LightboxProps) => (
  <Modal open={open} onClose={onClose} {...props}>
    <Box
      sx={{
        left: "50%",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <IconButton
        size="small"
        aria-label="close"
        onClick={(e) => onClose?.(e, "closeButton")}
        sx={{
          "&:hover": {
            background: ({ palette }) => palette.augmentColor({ color: { main: palette.background.default } }).light,
          },
          background: ({ palette }) => palette.background.default,
          fontSize: 30,
          height: 30,
          position: "absolute",
          right: -15,
          top: -15,
          width: 30,
        }}
      >
        &times;
      </IconButton>
      {children || <Box component="img" src={src} width="100%" />}
    </Box>
  </Modal>
);

export default Lightbox;
