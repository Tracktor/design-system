import { Card, CardProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export type CardModalProps = Omit<CardProps, "css">;

const CardModal = ({ children, sx, ...props }: CardModalProps, ref: Ref<HTMLDivElement>) => (
  <Card
    sx={{
      boxShadow: 24,
      left: "50%",
      maxHeight: "90%",
      maxWidth: 500,
      overflow: "auto",
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
