import { IconButton } from "@mui/material";
import { MouseEvent } from "react";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

export interface DialogCloseProps {
  onClick?: (e: MouseEvent) => void;
}

const DialogCloseIcon = ({ onClick }: DialogCloseProps) => (
  <IconButton
    aria-label="close"
    onClick={onClick}
    sx={{
      position: "absolute",
      right: ({ spacing }) => spacing(2),
      top: ({ spacing }) => spacing(1),
    }}
  >
    <CloseIcon />
  </IconButton>
);

export default DialogCloseIcon;
