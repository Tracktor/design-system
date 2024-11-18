import { Button, ButtonProps } from "@mui/material";
import { dark } from "@/constants/colors";

const ActionAppBar = ({ sx, ...props }: ButtonProps) => (
  <Button
    variant="outlined"
    size="small"
    sx={{
      "&:hover": {
        backgroundColor: dark?.palette?.action?.hover,
        borderColor: dark?.palette?.primary.main,
      },
      backgroundColor: dark?.palette?.grey?.["100"],
      borderColor: dark?.palette?.divider,
      color: dark?.palette?.text?.primary,
      ...sx,
    }}
    {...props}
  />
);

export default ActionAppBar;
