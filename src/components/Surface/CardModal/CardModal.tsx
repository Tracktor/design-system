import { Card, CardProps } from "@mui/material";

export interface CardModalProps extends CardProps {}

const CardModal = ({ children, sx, ...props }: CardProps) => (
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
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  >
    {children}
  </Card>
);

export default CardModal;
