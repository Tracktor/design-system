import { Box, SxProps, Theme } from "@mui/material";
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.svg";
import Lightbox from "@/components/Feedback/Lightbox";

interface FileViewerPros extends PropsWithChildren {
  src?: string | null;
  srcThumb?: string | null;
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
  onClickThumb?: () => void;
  onClose?(): void;
}

const styles = {
  container: {
    alignSelf: "center",
    backgroundColor: ({ palette }: Theme) => palette.background.paper,
    boxShadow: 4,
    flexShrink: 0,
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
    display: "block",
    msOverflowStyle: "none",
    objectFit: "cover",
    overflow: "hidden",
    pointerEvents: "none !important",
    scrollbarWidth: "none",
  },
  viewFile: {
    border: 0,
    display: "block",
    height: "100vh",
    margin: "auto",
    width: {
      md: "50vw",
      xs: "100%",
    },
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
  children,
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
  onClickThumb,
  variant,
}: FileViewerPros) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const lowercaseSrc = src?.toLowerCase();
  const isImage = !lowercaseSrc?.endsWith(".pdf") && !lowercaseSrc?.startsWith("blob:");
  const isPdf = lowercaseSrc?.endsWith(".pdf");
  const iframeRef = useRef<HTMLObjectElement>(null);
  const data = isError ? notFoundImage : srcThumb || src;
  const opacity = disableLightbox ? 1 : 0.8;

  const toggleOpen = () => {
    setInternalOpen((prevState) => !prevState);
  };

  const close = () => {
    setInternalOpen(false);
    onClose?.();
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

  return (
    <>
      {!disableThumb && !children && (
        <Box
          data-test="fileViewer"
          onClick={() => {
            onClickThumb?.();
            toggleOpen();
          }}
          width={width}
          height={height}
          sx={{
            ...styles.container,
            ":hover": { opacity },
            borderRadius: variant === "rounded" ? 1 : "0",
            cursor: disableLightbox ? "default" : "pointer",
            display: "block",
            pointerEvents: disableLightbox ? "none" : "auto",
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

      {!disableLightbox && src && (
        <Lightbox open={open !== undefined ? open : internalOpen} onClose={close} src={src} title={fileName}>
          <Box
            component={isPdf ? "iframe" : "img"}
            src={src || srcThumb || undefined}
            width={widthLightbox}
            height={heightLightbox}
            sx={{
              ...(isPdf ? styles.viewFile : styles.viewImage),
              ...sxLightbox,
            }}
          />
        </Lightbox>
      )}
      {children && (
        <Box
          onClick={toggleOpen}
          sx={{
            ":hover": { opacity },
            cursor: "pointer",
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default FileViewer;
