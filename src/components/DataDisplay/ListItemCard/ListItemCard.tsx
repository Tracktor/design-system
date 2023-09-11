import { Alert, Box, Card, ListItem, ListItemProps, Skeleton } from "@mui/material";
import * as React from "react";
import { ForwardedRef, forwardRef, memo, PropsWithChildren } from "react";

const DEFAULT_EMPTY_MESSAGE = "No data";

const SIZES = {
  large: 80,
  medium: 50,
  small: 40,
};

export interface ListItemCardProps extends ListItemProps {
  /**
   * If list is loading item render loading skeleton
   */
  isLoading?: boolean;
  /**
   * If list is empty item render empty message
   */
  isEmpty?: boolean;
  /**
   * Empty message if list is empty
   */
  emptyMessage?: string;
  /**
   * Set custom height
   */
  height?: number;
  /**
   * Set predefined size, ignored if prop height is provided
   */
  size?: "small" | "medium" | "large";
}

const RootComponent = ({ children, ...props }: PropsWithChildren, ref: ForwardedRef<HTMLLIElement>) => (
  <Card component="li" ref={ref} {...props}>
    {children}
  </Card>
);

const RootComponentWithForwardRef = forwardRef(RootComponent);

const ListItemCard = (
  { children, isEmpty, isLoading, emptyMessage, sx, height, onClick, size = "medium", ...props }: ListItemCardProps,
  ref: ForwardedRef<HTMLLIElement>
) => {
  if (isLoading) {
    return <Skeleton width="100%" variant="rounded" height={height || SIZES[size]} sx={{ marginBottom: 1 }} ref={ref} component="li" />;
  }

  if (isEmpty) {
    return (
      <ListItem disablePadding>
        <Alert severity="info" sx={{ width: "100%" }} ref={ref as ForwardedRef<HTMLDivElement>}>
          {emptyMessage || DEFAULT_EMPTY_MESSAGE}
        </Alert>
      </ListItem>
    );
  }

  return (
    <ListItem
      component={RootComponentWithForwardRef}
      ref={ref}
      onClick={onClick}
      sx={{
        ...{
          alignItems: "center",
          display: "flex",
          height: height || SIZES[size],
          marginBottom: 1,
          px: 2,
          width: "100%",
          ...(onClick && {
            "&:hover": {
              backgroundColor: "action.hover",
            },
            cursor: "pointer",
          }),
        },
        ...sx,
      }}
      {...props}
    >
      <Box flex="auto">{children}</Box>
    </ListItem>
  );
};

export default memo(forwardRef(ListItemCard));
