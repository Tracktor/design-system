import { Paper, PaperProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export interface BottomFixedPaperProps extends PaperProps {
  /**
   * The position of the paper.
   * @default "fixed"
   */
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  /**
   * The padding of the paper.
   * @default y = 3, x = 2
   */
  padding?: number | string;
  /**
   * The direction of the paper.
   */
  direction?: "row" | "column";
}

const BottomFixedPaper = (
  { children, sx, padding, direction, position = "fixed", ...props }: BottomFixedPaperProps,
  ref: Ref<HTMLDivElement>,
) => (
  <Paper
    square
    elevation={0}
    ref={ref}
    sx={{
      borderTop: ({ palette }) => `1px solid ${palette.divider}`,
      bottom: 0,
      left: 0,
      padding,
      paddingX: padding ? undefined : 2,
      paddingY: padding ? undefined : 3,
      position,
      right: 0,
      zIndex: 10,
      ...(direction === "column" && {
        display: "flex",
        flexDirection: "column",
      }),
      ...(direction === "row" && {
        display: "flex",
        flexDirection: "row",
      }),
      ...sx,
    }}
    {...props}
  >
    {children}
  </Paper>
);

export default forwardRef(BottomFixedPaper);
