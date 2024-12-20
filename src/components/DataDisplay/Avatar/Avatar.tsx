import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps, Box, SxProps, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ElementType, forwardRef } from "react";

export type AvatarProps<C extends ElementType = "div"> = {
  secondarySrc?: string;
  secondaryAvatarProps?: Omit<MuiAvatarProps, "src">;
  size?: "small" | "medium" | "large";
} & Omit<MuiAvatarProps<C>, keyof OverridableComponent<any>>;

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

const isValidSx = (sx: SxProps<Theme> | undefined): sx is { height?: SizeValue; width?: SizeValue } =>
  sx !== undefined && typeof sx === "object" && !Array.isArray(sx);

const parseSize = (value: SizeValue | undefined): number => {
  if (value === undefined) return SIZES.medium.primary;

  if (typeof value === "number") {
    return value;
  }

  const numericValue = parseFloat(value);
  return Number.isNaN(numericValue) ? SIZES.medium.primary : numericValue;
};

const getSecondarySize = (sx?: SxProps<Theme>, size?: AvatarProps<any>["size"]) => {
  if (size) {
    return {
      height: SIZES[size].secondary,
      width: SIZES[size].secondary,
    };
  }

  if (isValidSx(sx)) {
    const { height, width } = sx;

    return {
      height: Math.max(parseSize(height) - (SIZES.medium.primary - SIZES.medium.secondary), SIZES.small.secondary),
      width: Math.max(parseSize(width) - (SIZES.medium.primary - SIZES.medium.secondary), SIZES.small.secondary),
    };
  }

  return {
    height: SIZES.medium.secondary,
    width: SIZES.medium.secondary,
  };
};

const Avatar = forwardRef(
  <C extends ElementType = "div">({ secondarySrc, secondaryAvatarProps, size, ...props }: AvatarProps<C>, ref: MuiAvatarProps["ref"]) => {
    if (secondarySrc) {
      const { height, width } = getSecondarySize(props.sx, size);

      return (
        <Box sx={{ display: "flex", position: "relative" }}>
          <MuiAvatar
            ref={ref}
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
    }

    return (
      <MuiAvatar
        ref={ref}
        {...props}
        sx={{
          ...(size && { height: SIZES[size].primary, width: SIZES[size].primary }),
          ...props.sx,
        }}
      />
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
