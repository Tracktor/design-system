import { Card, CardProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export interface CardModalProps extends CardProps {}

const CardModal = ({ children, sx, ...props }: CardProps, ref: Ref<HTMLDivElement>) => (
  <Card
    sx={{
      boxShadow: 24,
      left: "50%",
      maxWidth: 500,
      p: 3,
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      ...sx,
    }}
    ref={ref}
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  >
    {children}
  </Card>
);

export default forwardRef(CardModal);
