import { Box, CircularProgress, Fade, IconButton, Modal, ModalProps } from "@mui/material";
import { ReactNode, useState } from "react";

export interface LightboxProps extends Omit<ModalProps, "children"> {
  src?: string;
  children?: ReactNode;
  onClose?(event: {}, reason: "backdropClick" | "escapeKeyDown" | "closeButton"): void;
}

const Lightbox = ({ children, open, onClose, src, ...props }: LightboxProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Modal open={open} onClose={onClose} {...props}>
      <>
        <IconButton
          size="small"
          aria-label="close"
          onClick={(e) => onClose?.(e, "closeButton")}
          sx={{
            "&:hover": {
              background: ({ palette }) => palette.augmentColor({ color: { main: palette.background.default } }).light,
            },
            background: ({ palette }) => palette.background.default,
            fontSize: 35,
            height: 30,
            position: "absolute",
            right: 15,
            top: 15,
            width: 30,
          }}
        >
          &times;
        </IconButton>
        <Box
          sx={{
            left: "50%",
            outline: 0,
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {children || (
            <>
              {!isLoaded && (
                <Box position="absolute" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                  <CircularProgress />
                </Box>
              )}
              <Fade in={open && isLoaded}>
                <Box component="img" src={src} width="100%" onLoad={handleLoad} />
              </Fade>
            </>
          )}
        </Box>
      </>
    </Modal>
  );
};

export default Lightbox;
