import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps, Box, SxProps, Theme } from "@mui/material";

export interface AvatarProps extends MuiAvatarProps {
  secondarySrc?: string;
  secondaryAvatarProps?: Omit<MuiAvatarProps, "src">;
}

const SECONDARY_SIZE = 32;
const DIFF_SIZE = 8;

type SizeValue = number | string;

type SxWithSize = {
  height?: SizeValue;
  width?: SizeValue;
  [key: string]: unknown;
};

const parseSize = (value: SizeValue | undefined): number => {
  if (value === undefined) return SECONDARY_SIZE;

  if (typeof value === "number") {
    return value;
  }

  const numericValue = parseFloat(value);
  return Number.isNaN(numericValue) ? SECONDARY_SIZE : numericValue;
};

const getSecondarySize = (sx?: SxProps<Theme>) => {
  if (!sx || typeof sx !== "object") {
    return {
      height: SECONDARY_SIZE,
      width: SECONDARY_SIZE,
    };
  }

  const { height, width } = sx as SxWithSize;

  return {
    height: Math.max(parseSize(height) - DIFF_SIZE, SECONDARY_SIZE / 2),
    width: Math.max(parseSize(width) - DIFF_SIZE, SECONDARY_SIZE / 2),
  };
};

const Avatar = ({ secondarySrc, secondaryAvatarProps, ...props }: AvatarProps) => {
  if (!secondarySrc) {
    return <MuiAvatar {...props} />;
  }

  const { height, width } = getSecondarySize(props.sx);

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <MuiAvatar {...props} />
      <MuiAvatar
        src={secondarySrc}
        sx={{
          bottom: -(height / 3),
          height,
          outline: ({ palette }) => `2px solid ${palette.common.white}`,
          position: "absolute",
          right: -(width / 3),
          width,
          ...secondaryAvatarProps?.sx,
        }}
        {...secondaryAvatarProps}
      />
    </Box>
  );
};

export default Avatar;
