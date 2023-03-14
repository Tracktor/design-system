import type { Interpolation, Theme } from "@emotion/react";
import { Box, Button as Component, ButtonProps as MuiButtonProps, CircularProgress, Stack } from "@mui/material";
import { forwardRef, ReactNode, Ref } from "react";

export interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  loadingIndicator?: ReactNode;
  loadingPosition?: "start" | "end";
  css?: Interpolation<Theme>;
}

interface WrapChildrenProps {
  loading: ButtonProps["loading"];
  children: ButtonProps["children"];
  loadingIndicator: ButtonProps["loadingIndicator"];
  loadingPosition: ButtonProps["loadingPosition"];
  size: ButtonProps["size"];
}

interface LoaderProps {
  size: ButtonProps["size"];
  position?: "relative" | "absolute";
  loadingPosition?: ButtonProps["loadingPosition"];
}

const ICON_LOADING_SIZE = {
  large: 17,
  medium: 16,
  small: 15,
};

const Loader = ({ size, loadingPosition, position = "absolute" }: LoaderProps) => (
  <Box
    position={position}
    top={0}
    left={0}
    bottom={0}
    right={0}
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{
      ...(position === "relative" && {
        ...(loadingPosition && {
          marginLeft: loadingPosition === "start" ? 0 : 1,
          marginRight: loadingPosition === "start" ? 1 : 0,
        }),
      }),
    }}
  >
    <CircularProgress role="alert" aria-busy="true" color="inherit" size={ICON_LOADING_SIZE[size || "medium"]} />
  </Box>
);

const WrapChildren = ({ children, loading, loadingIndicator, loadingPosition, size }: WrapChildrenProps) => {
  if (loading && loadingPosition) {
    return (
      <Stack direction={loadingPosition === "start" ? "row" : "row-reverse"} alignItems="center">
        <Loader size={size} position="relative" loadingPosition={loadingPosition} />
        {children}
      </Stack>
    );
  }

  if (loading && !loadingIndicator) {
    return (
      <>
        {loading && !loadingIndicator && <Loader size={size} />}
        <Box sx={{ opacity: 0 }}>{children}</Box>
      </>
    );
  }

  if (loading && loadingIndicator) {
    return <> {loadingIndicator} </>;
  }

  return <> {children} </>;
};

const Button = (
  { disabled, children, loading, loadingIndicator, loadingPosition, size, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => (
  <Component disabled={disabled || loading} ref={ref} size={size} {...props}>
    <WrapChildren loading={loading} loadingIndicator={loadingIndicator} loadingPosition={loadingPosition} size={size}>
      {children}
    </WrapChildren>
  </Component>
);

export default forwardRef(Button);
