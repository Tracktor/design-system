import { IconButton } from "@mui/material";
import CloseIcon from "@/components/Icon/CloseIcon";

export interface DialogCloseProps {
  onClick: () => void;
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
