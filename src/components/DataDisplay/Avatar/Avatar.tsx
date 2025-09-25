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
  <C extends ElementType = "div">(
    { secondarySrc, secondaryAvatarProps, size, sx, ...props }: AvatarProps<C>,
    ref: MuiAvatarProps["ref"],
  ) => {
    if (secondarySrc || secondaryAvatarProps) {
      const primaryWidth = size ? SIZES[size].primary : parseSize(isValidSx(sx) ? sx.width : undefined);
      const primaryHeight = size ? SIZES[size].primary : parseSize(isValidSx(sx) ? sx.height : undefined);
      const secondarySize = getSecondarySize(sx, size);
      const gapY = secondarySize.width / 3;
      const gapX = secondarySize.height / 3;

      return (
        <Box
          sx={{
            display: "flex",
            height: primaryHeight + gapY,
            position: "relative",
            width: primaryWidth + gapX,
            ...(sx?.margin && { margin: sx.margin }),
            ...(sx?.m && { m: sx.m }),
            ...(sx?.marginTop && { marginTop: sx.marginTop }),
            ...(sx?.mt && { mt: sx.mt }),
            ...(sx?.marginRight && { marginRight: sx.marginRight }),
            ...(sx?.mr && { mr: sx.mr }),
            ...(sx?.marginBottom && { marginBottom: sx.marginBottom }),
            ...(sx?.mb && { mb: sx.mb }),
            ...(sx?.marginLeft && { marginLeft: sx.marginLeft }),
            ...(sx?.ml && { ml: sx.ml }),
            ...(sx?.marginX && { marginX: sx.marginX }),
            ...(sx?.mx && { mx: sx.mx }),
            ...(sx?.marginY && { marginY: sx.marginY }),
            ...(sx?.my && { my: sx.my }),
            ...(sx?.padding && { padding: sx.padding }),
            ...(sx?.p && { p: sx.p }),
            ...(sx?.paddingTop && { paddingTop: sx.paddingTop }),
            ...(sx?.pt && { pt: sx.pt }),
            ...(sx?.paddingRight && { paddingRight: sx.paddingRight }),
            ...(sx?.pr && { pr: sx.pr }),
            ...(sx?.paddingBottom && { paddingBottom: sx.paddingBottom }),
            ...(sx?.pb && { pb: sx.pb }),
            ...(sx?.paddingLeft && { paddingLeft: sx.paddingLeft }),
            ...(sx?.pl && { pl: sx.pl }),
            ...(sx?.paddingX && { paddingX: sx.paddingX }),
            ...(sx?.px && { px: sx.px }),
            ...(sx?.paddingY && { paddingY: sx.paddingY }),
            ...(sx?.py && { py: sx.py }),
          }}
        >
          <MuiAvatar
            {...props}
            ref={ref}
            sx={{
              ...(size && {
                height: SIZES[size].primary,
                width: SIZES[size].primary,
              }),
              ...sx,
            }}
          />
          <MuiAvatar
            {...secondaryAvatarProps}
            src={secondarySrc}
            sx={{
              bottom: 0,
              height: secondarySize.height,
              outline: ({ palette }) => `2px solid ${palette.common.white}`,
              position: "absolute",
              right: 0,
              width: secondarySize.width,
              ...secondaryAvatarProps?.sx,
            }}
          />
        </Box>
      );
    }

    return (
      <MuiAvatar
        {...props}
        ref={ref}
        sx={{
          ...(size && { height: SIZES[size].primary, width: SIZES[size].primary }),
          ...sx,
        }}
      />
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
