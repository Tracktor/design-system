import { SvgIcon } from "@mui/material";

interface CloseIconProps {
  color?: string;
}

const CloseIcon = ({ color = "currentColor" }: CloseIconProps) => (
  <SvgIcon
    sx={{
      fill: ({ palette }) => {
        if (color) {
          return color;
        }

        return palette.mode === "dark" ? palette.common.white : palette.common.black;
      },
    }}
    height={24}
    width={24}
  >
    <path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
  </SvgIcon>
);

export default CloseIcon;
