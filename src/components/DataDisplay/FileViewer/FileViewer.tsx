import { Box } from "@mui/material";
import { Lightbox } from "@/main";

interface FullSizeViewProps {
  src: string;
  fileName?: string;
  open: boolean;
  onClose?(): void;
  width?: number | string;
  height?: number | string;
}

const styles = {
  viewFile: {
    border: 0,
    height: "100vh",
    width: "50vw",
  },
  viewImage: {
    border: 0,
    height: "100%",
    width: "100%",
  },
};

const FileViewer = ({ src, fileName, onClose, open, width = 100, height = 80 }: FullSizeViewProps) => {
  const isImage = /\.(png|jpe?g|gif|bmp|webp|avif|tiff?|svg)$/i.test(src.toLowerCase()) && !src.startsWith("blob:");
  const isPdf = /\.pdf$/i.test(src.toLowerCase());

  if (!isPdf && !isImage) {
    return null;
  }

  return (
    <Lightbox open={open} onClose={onClose} src={src} title={fileName}>
      {isImage ? null : (
        <Box
          component={isImage ? "img" : "iframe"}
          width={width}
          height={height}
          src={src}
          sx={isImage ? styles.viewImage : styles.viewFile}
        />
      )}
    </Lightbox>
  );
};

export default FileViewer;
