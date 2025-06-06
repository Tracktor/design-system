import { Box, CircularProgress, Fade, IconButton, Modal, ModalProps } from "@mui/material";
import { MouseEvent, ReactNode, useState } from "react";

export interface LightboxProps extends Omit<ModalProps, "children"> {
  src?: string;
  children?: ReactNode;
  onClose?(event: MouseEvent | {} | undefined, reason?: "backdropClick" | "escapeKeyDown" | "closeButton"): void;
}

const Lightbox = ({ children, open, onClose, src, ...props }: LightboxProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleClose = (event: MouseEvent | object | undefined, reason: "backdropClick" | "escapeKeyDown" | "closeButton") => {
    if (event) {
      onClose?.(event, reason);
      setIsLoaded(false);
    }

    return (e: MouseEvent) => {
      onClose?.(e, reason);
      setIsLoaded(false);
    };
  };

  return (
    <Modal open={open} onClose={handleClose} {...props}>
      <Box>
        <IconButton
          size="small"
          aria-label="close"
          onClick={handleClose(undefined, "closeButton")}
          sx={{
            "&:hover": {
              background: ({ palette }) => palette.augmentColor({ color: { main: palette.background.default } }).light,
            },
            background: ({ palette }) => palette.background.default,
            fontSize: 35,
            height: 30,
            position: "absolute",
            right: { sm: 15, xs: 10 },
            top: { sm: 15, xs: 10 },
            width: 30,
            zIndex: 9999,
          }}
        >
          &times;
        </IconButton>
        {!isLoaded && !children && (
          <Box position="absolute" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
        <Box
          sx={{
            left: "50%",
            outline: 0,
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: { lg: "auto", md: "90%", sm: "80%", xs: "100%" },
          }}
        >
          {children || (
            <Fade in={open && isLoaded}>
              <Box component="img" src={src} width="100%" onLoad={handleLoad} />
            </Fade>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Lightbox;
