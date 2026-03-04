import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const ChatBubbleIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-2 -2 28 28" {...props}>
    <path
      d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default ChatBubbleIcon;
