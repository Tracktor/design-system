import { Box, SxProps, Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";
import FileViewer from "@/components/DataDisplay/FileViewer";

interface ThumbnailFileViewerPros {
  src: string;
  fileName?: string;
  thumbWidth?: number | string;
  thumbHeight?: number | string;
  fileViewWidth?: number | string;
  fileViewHeight?: number | string;
  isFileViewActive?: boolean;
  sx?: SxProps;
}

const styles = {
  container: {
    ":hover": {
      opacity: 0.8,
    },
    alignSelf: "center",
    backgroundColor: ({ palette }: Theme) => palette.background.paper,
    boxShadow: 4,
    overflow: "hidden",
    position: "relative",
  },
  viewerFile: {
    border: 0,
    objectFit: "cover",
    pointerEvents: "none",
  },
  viewerImage: {
    border: 0,
    objectFit: "cover",
  },
};

const ThumbnailFileViewer = ({
  src,
  thumbWidth,
  thumbHeight,
  fileName,
  isFileViewActive,
  fileViewWidth,
  fileViewHeight,
  sx,
}: ThumbnailFileViewerPros) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const isImage = !src?.endsWith(".pdf") && !src.startsWith("blob:");
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : src;

  console.log(isFileViewActive);

  const errorHandle = useCallback(() => {
    setIsError(true);
  }, []);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Handle error
  useEffect(() => {
    const object = iframeRef.current;
    object?.addEventListener("error", errorHandle);

    return () => {
      object?.removeEventListener("error", errorHandle);
    };
  }, [errorHandle, iframeRef]);

  return (
    <>
      <Box
        data-test="fileViewer"
        onClick={handleToggleOpen}
        sx={{
          ...styles.container,
          cursor: "pointer",
          display: "block",
          flexBasis: thumbWidth,
          flexShrink: 0,
          thumbHeight,
          thumbWidth,
          ...sx,
        }}
      >
        <Box
          component={isImage ? "img" : "iframe"}
          key={data}
          overflow="hidden"
          height={isImage ? "100%" : "auto"}
          width="100%"
          src={data}
          ref={iframeRef}
          sx={isImage ? styles.viewerImage : styles.viewerFile}
        />
      </Box>
      <FileViewer src={src} open={isOpen} onClose={handleToggleOpen} fileName={fileName} width={fileViewWidth} height={fileViewHeight} />
    </>
  );
};

export default ThumbnailFileViewer;
