import { Backdrop, Paper, PaperProps, Popper, PopperProps } from "@mui/material";
import { ReactNode } from "react";

interface DialogPopperProps {
  /**
   * Open state
   */
  open: boolean | undefined;
  /**
   * Anchor element
   */
  anchorEl: HTMLElement | Element | null | undefined;
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Popper placement
   */
  placement?: PopperProps["placement"];
  /**
   * Paper variant
   */
  variant?: PaperProps["variant"];
  /**
   * Callback fired when the backdrop is clicked.
   */
  onClose?(): void;
}

const DialogPopper = ({ open, anchorEl, onClose, children, placement, variant = "outlined" }: DialogPopperProps) => (
  <Backdrop open={!!open} onClick={onClose} sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    <Popper open={!!open} anchorEl={anchorEl} placement={placement} sx={{ maxWidth: "100%" }}>
      <Paper
        role="dialog"
        aria-modal="false"
        variant={variant}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        sx={{ borderRadius: 1.5 }}
      >
        {children}
      </Paper>
    </Popper>
  </Backdrop>
);

export default DialogPopper;
