import { IconButton } from "@mui/material";
import { MouseEvent } from "react";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

export interface DialogCloseProps {
  onClick?: (e: MouseEvent) => void;
  position?: "absolute" | "relative";
}

const DialogCloseIcon = ({ onClick, position = "absolute" }: DialogCloseProps) => (
  <IconButton
    aria-label="close"
    onClick={onClick}
    sx={{
      marginLeft: position === "absolute" ? undefined : "auto",
      position,
      right: ({ spacing }) => spacing(2),
      top: ({ spacing }) => spacing(1),
    }}
  >
    <CloseIcon />
  </IconButton>
);

export default DialogCloseIcon;
