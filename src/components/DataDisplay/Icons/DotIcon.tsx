interface CheckIconProps {
  color?: string;
}

const DotIcon = ({ color = "currentColor" }: CheckIconProps) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" rx="3" fill={color} />
  </svg>
);

export default DotIcon;
