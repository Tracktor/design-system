import { Box, SxProps, Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";

interface ThumbnailViewPros {
  src: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
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

const ThumbnailViewer = ({ src, height, width, onClick, sx }: ThumbnailViewPros) => {
  const [isError, setIsError] = useState(false);
  const isImage = !src?.endsWith(".pdf") && !src.startsWith("blob:");
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : src;

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
    <Box
      data-test="fileViewer"
      onClick={onClick}
      sx={{
        ...styles.container,
        cursor: "pointer",
        display: "block",
        flexBasis: width,
        flexShrink: 0,
        height,
        width,
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
  );
};

export default ThumbnailViewer;
