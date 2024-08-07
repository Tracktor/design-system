import { SvgIcon } from "@mui/material";

interface CheckIconProps {
  color?: string;
}

const CheckIcon = ({ color = "currentColor" }: CheckIconProps) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M8.79508 15.8749L4.62508 11.7049L3.20508 13.1149L8.79508 18.7049L20.7951 6.70492L19.3851 5.29492L8.79508 15.8749Z"
      fill={color}
    />
  </SvgIcon>
);

export default CheckIcon;
