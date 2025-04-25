import { Box, SxProps, Theme, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import notFoundImage from "@/assets/img/not-found-img.jpg";
import sheetsImage from "@/assets/img/sheets.png";
import Lightbox from "@/components/Feedback/Lightbox";
import isDocumentType from "@/utils/isDocumentType";

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
    userSelect: "none",
  },
  extension: {
    backgroundColor: ({ palette }: Theme) => palette.common.white,
    bottom: "10%",
    paddingX: 0.8,
    position: "absolute",
    right: 0,
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
  height = 152,
  width = 220,
}: FileViewerPros) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lowercaseSrc = src?.toLowerCase();
  const isImage = !lowercaseSrc?.endsWith(".pdf") && !lowercaseSrc?.startsWith("blob:") && !lowercaseSrc?.endsWith(".eml");
  const isPdf = lowercaseSrc?.endsWith(".pdf");
  const opacity = disableLightbox ? 1 : 0.8;
  const isThumbnailReady = disableThumb ? true : !isLoading;
  const isDocument = isDocumentType(src) || isDocumentType(srcThumb);
  const shouldDisplayLightbox = (isImage || isPdf) && !isDocument && isThumbnailReady && !isError && !disableLightbox && src;
  const extension = src?.split(".").pop()?.toLowerCase();

  const getSrcThumb = () => {
    if (isDocument) {
      return sheetsImage;
    }

    return isError ? notFoundImage : srcThumb || src || undefined;
  };

  const toggleOpen = () => {
    setInternalOpen((prevState) => !prevState);
  };

  const close = () => {
    setInternalOpen(false);
    onClose?.();
  };

  const handleError = () => {
    setIsError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleClick = () => {
    onClickThumb?.();
    toggleOpen();
  };

  return (
    <>
      {!disableThumb && !children && (
        <Box
          data-test="fileViewer"
          width={width}
          height={height}
          onClick={handleClick}
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
            overflow="hidden"
            width="100%"
            component={isImage ? "img" : "iframe"}
            height={isImage ? "100%" : "auto"}
            key={getSrcThumb()}
            src={getSrcThumb()}
            onError={handleError}
            onLoad={handleLoad}
            sx={{
              ...styles.thumb,
              objectFit: isDocument ? "contain" : "cover",
              padding: isDocument ? "15%" : 0,
            }}
          />
          {isDocument && (
            <Typography sx={styles.extension} variant="body3" color="black">
              {extension}
            </Typography>
          )}
        </Box>
      )}

      {/* Lightbox */}
      {shouldDisplayLightbox && (
        <Lightbox open={open !== undefined && (isPdf || isImage) ? open : internalOpen} onClose={close} src={src} title={fileName}>
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
