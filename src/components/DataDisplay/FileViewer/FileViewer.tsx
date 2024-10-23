import { Box, SxProps, Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";
import { Lightbox } from "@/main";

interface FileViewerPros {
  srcThumbnail: string;
  srcFileViewer?: string;
  fileName?: string;
  thumbWidth?: number | string;
  thumbHeight?: number | string;
  fileViewWidth?: number | string;
  fileViewHeight?: number | string;
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
  thumbFile: {
    border: 0,
    objectFit: "cover",
    pointerEvents: "none",
  },
  thumbImage: {
    border: 0,
    objectFit: "cover",
  },
  viewClickFile: {
    border: 0,
    height: "100vh",
    width: "50vw",
  },
  viewClickImage: {
    border: 0,
    height: "100%",
    width: "100%",
  },
};

const FileViewer = ({
  srcThumbnail,
  srcFileViewer,
  thumbWidth,
  thumbHeight,
  fileName,
  fileViewWidth,
  fileViewHeight,
  sx,
}: FileViewerPros) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const isImage = !srcThumbnail?.endsWith(".pdf") && !srcThumbnail.startsWith("blob:");
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : srcThumbnail;
  const isPdf = srcFileViewer && /\.pdf$/i.test(srcFileViewer.toLowerCase());

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const errorHandle = useCallback(() => {
    setIsError(true);
  }, []);

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
          sx={isImage ? styles.thumbImage : styles.thumbFile}
        />
      </Box>
      {srcFileViewer && (
        <Lightbox open={isOpen} onClose={handleToggleOpen} src={srcFileViewer} title={fileName}>
          <Box
            component={isPdf ? "iframe" : "img"}
            width={fileViewWidth}
            height={fileViewHeight}
            src={srcFileViewer}
            sx={isPdf ? styles.viewClickFile : styles.viewClickImage}
          />
        </Lightbox>
      )}
    </>
  );
};

export default FileViewer;
