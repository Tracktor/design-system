import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps, Box, SxProps, Theme } from "@mui/material";

export interface AvatarProps extends MuiAvatarProps {
  secondarySrc?: string;
  secondaryAvatarProps?: Omit<MuiAvatarProps, "src">;
  size?: "small" | "medium" | "large";
}

const SIZES = {
  large: {
    primary: 40,
    secondary: 32,
  },
  medium: {
    primary: 32,
    secondary: 24,
  },
  small: {
    primary: 24,
    secondary: 16,
  },
} as const;

type SizeValue = number | string;

type SxWithSize = {
  height?: SizeValue;
  width?: SizeValue;
  [key: string]: unknown;
};

const parseSize = (value: SizeValue | undefined): number => {
  if (value === undefined) return SIZES.medium.primary;

  if (typeof value === "number") {
    return value;
  }

  const numericValue = parseFloat(value);
  return Number.isNaN(numericValue) ? SIZES.medium.primary : numericValue;
};

const getSecondarySize = (sx?: SxProps<Theme>, size?: AvatarProps["size"]) => {
  if (size) {
    return {
      height: SIZES[size].secondary,
      width: SIZES[size].secondary,
    };
  }

  if (!sx || typeof sx !== "object") {
    return {
      height: SIZES.medium.secondary,
      width: SIZES.medium.secondary,
    };
  }

  const { height, width } = sx as SxWithSize;

  return {
    height: Math.max(parseSize(height) - (SIZES.medium.primary - SIZES.medium.secondary), SIZES.small.secondary),
    width: Math.max(parseSize(width) - (SIZES.medium.primary - SIZES.medium.secondary), SIZES.small.secondary),
  };
};

const Avatar = ({ secondarySrc, secondaryAvatarProps, size, ...props }: AvatarProps) => {
  if (!secondarySrc) {
    return (
      <MuiAvatar
        {...props}
        sx={{
          ...(size && { height: SIZES[size].primary, width: SIZES[size].primary }),
          ...props.sx,
        }}
      />
    );
  }

  const { height, width } = getSecondarySize(props.sx, size);

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <MuiAvatar
        {...props}
        sx={{
          ...(size && { height: SIZES[size].primary, width: SIZES[size].primary }),
          ...props.sx,
        }}
      />
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
