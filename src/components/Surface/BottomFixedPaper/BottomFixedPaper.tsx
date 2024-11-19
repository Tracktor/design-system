import { Paper, PaperProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export type BottomFixedPaperProps = PaperProps;

const BottomFixedPaper = ({ children, sx, ...props }: BottomFixedPaperProps, ref: Ref<HTMLDivElement>) => (
  <Paper
    square
    elevation={0}
    ref={ref}
    sx={{
      borderTop: ({ palette }) => `1px solid ${palette.divider}`,
      bottom: 0,
      left: 0,
      paddingX: 2,
      paddingY: 3,
      position: "fixed",
      right: 0,
      zIndex: 10,
      ...sx,
    }}
    {...props}
  >
    {children}
  </Paper>
);

export default forwardRef(BottomFixedPaper);
