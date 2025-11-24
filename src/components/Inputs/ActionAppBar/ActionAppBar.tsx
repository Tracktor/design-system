import { Button, ButtonProps } from "@mui/material";
import { dark } from "@/constants/colors";

const ActionAppBar = ({ sx, ...props }: ButtonProps) => (
  <Button
    variant="outlined"
    size="small"
    sx={{
      "&:hover": {
        backgroundColor: dark?.palette?.primary?.dark,
        opacity: dark?.palette?.primary?.dark,
      },
      backgroundColor: dark?.palette.primary.main,
      borderColor: dark?.palette.primary.main,
      color: dark?.palette?.text?.contrast,
      ...sx,
    }}
    {...props}
  />
);

export default ActionAppBar;
