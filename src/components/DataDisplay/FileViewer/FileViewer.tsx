import { Box, SxProps, Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";
import { Lightbox } from "@/main";

interface FileViewerPros {
  src: string;
  fileName?: string;
  sx?: SxProps;
  sxViewer?: SxProps;
  isViewerActive?: boolean;
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

const FileViewer = ({ src, fileName, sx, sxViewer, isViewerActive = true }: FileViewerPros) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const isImage = !src?.endsWith(".pdf") && !src.startsWith("blob:");
  const isPdf = /\.pdf$/i.test(src.toLowerCase());
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : src;

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
      {isViewerActive && (
        <Lightbox open={isOpen} onClose={handleToggleOpen} src={src} title={fileName}>
          <Box
            component={isPdf ? "iframe" : "img"}
            src={src}
            sx={{
              ...(isPdf ? styles.viewFile : styles.viewImage),
              ...sxViewer,
            }}
          />
        </Lightbox>
      )}
    </>
  );
};

export default FileViewer;
