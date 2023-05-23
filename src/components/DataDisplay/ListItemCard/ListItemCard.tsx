import { Alert, Box, Card, Skeleton, SxProps } from "@mui/material";
import { memo, ReactNode } from "react";

const DEFAULT_EMPTY_MESSAGE = "No data";

const SIZES = {
  large: 80,
  medium: 50,
  small: 40,
};

export interface ListItemCardProps {
  /**
   * If list is loading item render loading skeleton
   */
  isLoading?: boolean;
  /**
   * If list is empty item render empty message
   */
  isEmpty?: boolean;
  /**
   * List item content
   */
  children?: ReactNode;
  /**
   * Empty message if list is empty
   */
  emptyMessage?: string;
  /**
   * Custom styles
   */
  sx?: SxProps;
  /**
   * Set custom height
   */
  height?: number;
  /**
   * Set predefined size, ignored if prop height is provided
   */
  size?: "small" | "medium" | "large";
}

const ListItemCard = ({ children, isEmpty, isLoading, emptyMessage, sx, height, size = "medium" }: ListItemCardProps) => {
  if (isLoading) {
    return <Skeleton width="100%" variant="rounded" height={height || SIZES[size]} sx={{ marginBottom: 1 }} />;
  }

  if (isEmpty) {
    return (
      <Alert severity="info" sx={{ width: "100%" }}>
        {emptyMessage || DEFAULT_EMPTY_MESSAGE}
      </Alert>
    );
  }

  return (
    <Card
      sx={{
        ...{
          alignItems: "center",
          display: "flex",
          height: height || SIZES[size],
          marginBottom: 1,
          px: 2,
          width: "100%",
        },
        ...sx,
      }}
      variant="outlined"
      component="li"
    >
      <Box flex="auto">{children}</Box>
    </Card>
  );
};

export default memo(ListItemCard);
