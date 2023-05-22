import { Box, Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress, Stack } from "@mui/material";
import { ElementType, ForwardedRef, forwardRef, ReactNode } from "react";

export type ButtonProps<C extends ElementType = "button", P = {}> = MuiButtonProps<
  C,
  P & {
    component?: C;
    loading?: boolean;
    loadingIndicator?: ReactNode;
    loadingPosition?: "start" | "end";
  }
>;

interface LoaderProps {
  size: ButtonProps["size"];
  loadingPosition?: ButtonProps["loadingPosition"];
  position?: "relative" | "absolute";
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

const WrapChildren = ({ children, loading, loadingIndicator, loadingPosition, size }: ButtonProps) => {
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

const Button = <C extends ElementType>(props: ButtonProps<C>, ref: ForwardedRef<any>) => {
  const { children, disabled, loading, loadingIndicator, loadingPosition, size, ...restProps } = props;

  return (
    <MuiButton disabled={disabled || loading} ref={ref} size={size} {...restProps}>
      <WrapChildren loading={loading} loadingIndicator={loadingIndicator} loadingPosition={loadingPosition} size={size}>
        {children}
      </WrapChildren>
    </MuiButton>
  );
};

export default forwardRef(Button);
