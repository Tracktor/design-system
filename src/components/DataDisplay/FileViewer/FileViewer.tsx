import { Box, SxProps, Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";
import { Lightbox } from "@/main";

interface FileViewerPros {
  src: string;
  srcThumb?: string;
  fileName?: string;
  width?: number | string;
  height?: number | string;
  sx?: SxProps;
  widthLightbox?: number | string;
  heightLightbox?: number | string;
  sxLightbox?: SxProps;
  disableLightbox?: boolean;
  disableThumb?: boolean;
  open?: boolean;
  onClose?(): void;
}

const styles = {
  container: {
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

const FileViewer = ({
  src,
  srcThumb,
  fileName,
  width,
  height,
  sx,
  widthLightbox,
  heightLightbox,
  sxLightbox,
  disableLightbox,
  disableThumb,
  open,
  onClose,
}: FileViewerPros) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const isImage = !src?.endsWith(".pdf") && !src.startsWith("blob:");
  const isPdf = /\.pdf$/i.test(src.toLowerCase());
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : srcThumb || src;

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
      {!disableThumb && (
        <Box
          data-test="fileViewer"
          onClick={handleToggleOpen}
          width={width}
          height={height}
          sx={{
            ...styles.container,
            ":hover": {
              opacity: disableLightbox ? 1 : 0.8,
            },
            cursor: disableLightbox ? "default" : "pointer",
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
      )}

      {!disableLightbox && (
        <Lightbox open={open || isOpen} onClose={onClose || handleToggleOpen} src={src} title={fileName}>
          <Box
            component={isPdf ? "iframe" : "img"}
            src={src}
            width={widthLightbox}
            height={heightLightbox}
            sx={{
              ...(isPdf ? styles.viewFile : styles.viewImage),
              ...sxLightbox,
            }}
          />
        </Lightbox>
      )}
    </>
  );
};

export default FileViewer;
