import { ImageList as Component, ImageListProps } from "@mui/material";

const ImageList = ({ children, ...props }: ImageListProps) => <Component {...props}>{children}</Component>;

export default ImageList;
