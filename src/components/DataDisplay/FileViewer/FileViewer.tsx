import { Box, SxProps, Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";
import Lightbox from "@/components/Feedback/Lightbox";

interface FileViewerPros {
  src?: string | null;
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
  variant?: "default" | "rounded";
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
  thumb: {
    "&::-webkit-scrollbar": {
      display: "none !important",
      width: "0 !important",
    },
    border: 0,
    cursor: "pointer",
    msOverflowStyle: "none",
    objectFit: "cover",
    overflow: "hidden",
    pointerEvents: "none !important",
    scrollbarWidth: "none",
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
  variant,
}: FileViewerPros) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const lowercaseSrc = src?.toLowerCase();
  const isImage = !lowercaseSrc?.endsWith(".pdf") && !lowercaseSrc?.startsWith("blob:");
  const isPdf = lowercaseSrc?.endsWith(".pdf");
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : srcThumb || src;

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    onClose?.();
    setIsOpen(false);
  };

  const errorHandle = useCallback(() => {
    setIsError(true);
  }, []);

  /**
   * Handle error
   */
  useEffect(() => {
    const object = iframeRef.current;
    object?.addEventListener("error", errorHandle);

    return () => {
      object?.removeEventListener("error", errorHandle);
    };
  }, [errorHandle, iframeRef]);

  if (!src) {
    return null;
  }

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
            borderRadius: variant === "rounded" ? 1 : "0",
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
            src={data || undefined}
            ref={iframeRef}
            sx={styles.thumb}
          />
        </Box>
      )}

      {!disableLightbox && (
        <Lightbox open={open || isOpen} onClose={handleClose} src={src} title={fileName}>
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
