import { Skeleton, SkeletonProps, Typography, TypographyProps } from "@mui/material";
import { PropsWithChildren } from "react";

export interface TypographySkeletonProps extends PropsWithChildren {
  /**
   * Loading state
   */
  isLoading: boolean;
  /**
   * Empty text when there is no data
   */
  emptyText?: string;
  /**
   * Typography props
   * @default { color: "text.secondary", variant: "body2" }
   */
  typographyProps?: TypographyProps;
  /**
   * Skeleton props
   */
  skeletonProps?: SkeletonProps;
}

const TypographySkeleton = ({
  isLoading,
  children,
  emptyText,
  typographyProps = { color: "text.secondary", variant: "body2" },
  skeletonProps,
}: TypographySkeletonProps) => {
  if (isLoading) {
    return (
      <Typography {...typographyProps}>
        <Skeleton {...skeletonProps} />
      </Typography>
    );
  }

  if (children) {
    return <Typography {...typographyProps}>{children}</Typography>;
  }

  return (
    <Typography {...typographyProps} color="text.disabled">
      {emptyText}
    </Typography>
  );
};

export default TypographySkeleton;
