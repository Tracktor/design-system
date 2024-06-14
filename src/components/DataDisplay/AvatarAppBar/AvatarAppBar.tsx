import { Avatar, AvatarProps } from "@mui/material";
import { dark } from "@/constants/colors";

const AvatarAppBar = ({ sx, ...props }: AvatarProps) => (
  <Avatar
    variant="rounded"
    sx={{
      "& svg": {
        color: dark?.palette?.text?.disabled,
      },
      backgroundColor: dark?.palette?.grey?.[100],
      color: dark?.palette?.text?.primary,
      ...sx,
    }}
    {...props}
  />
);

export default AvatarAppBar;
