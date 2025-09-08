import { Box, SxProps, Theme, Tooltip, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import notFoundIcon from "@/assets/img/file-not-found-icon.png";
import JPGIcon from "@/assets/img/jpg-icon.png";
import notFoundImage from "@/assets/img/not-found-img.jpg";
import PDFIcon from "@/assets/img/pdf-icon.png";
import PNGIcon from "@/assets/img/png-icon.png";
import sheetIcon from "@/assets/img/sheet-icon.png";
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
  iconOnly?: boolean;
}

const styles = {
  container: {
    alignSelf: "center",
    backgroundColor: ({ palette }: Theme) => palette.background.paper,
    boxShadow: 4,
    display: "block",
    flexShrink: 0,
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
  },
  extension: {
    backgroundColor: ({ palette }: Theme) => palette.common.white,
    bottom: "15%",
    left: "50%",
    paddingX: 0.8,
    position: "absolute",
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
  iconOnly,
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
  const fileNameWithExtension = fileName || src?.split("/").pop()?.split("?")[0] || "";

  const getSrcThumb = () => {
    if (iconOnly) {
      const iconMap: Record<string, string> = {
        csv: sheetIcon,
        jpeg: JPGIcon,
        jpg: JPGIcon,
        pdf: PDFIcon,
        png: PNGIcon,
        xls: sheetIcon,
        xlsx: sheetIcon,
      };

      if (isError) return notFoundIcon;

      return iconMap[extension ?? ""] || notFoundIcon;
    }

    if (isDocument) return sheetsImage;
    if (isError) return notFoundImage;

    return srcThumb || src || undefined;
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

  const handleClick = async () => {
    if (isDocument && src) {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = fileNameWithExtension;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    }

    onClickThumb?.();
    toggleOpen();
  };

  return (
    <>
      {!disableThumb && !children && (
        <Tooltip arrow title={isDocument || iconOnly ? fileNameWithExtension : ""}>
          <Box
            data-test="fileViewer"
            width={width}
            height={height}
            onClick={handleClick}
            sx={{
              ...styles.container,
              ":hover": { opacity },
              bgcolor: iconOnly ? "transparent" : undefined,
              borderRadius: variant === "rounded" ? 1 : "0",
              boxShadow: iconOnly ? "none" : undefined,
              cursor: disableLightbox ? "default" : "pointer",
              pointerEvents: disableLightbox ? "none" : "auto",
              ...sx,
            }}
          >
            <Box
              overflow="hidden"
              width="100%"
              component={isImage || iconOnly ? "img" : "iframe"}
              height={isImage || iconOnly ? "100%" : "auto"}
              key={getSrcThumb()}
              src={getSrcThumb()}
              onError={handleError}
              onLoad={handleLoad}
              sx={{
                ...styles.thumb,
                objectFit: isDocument ? "contain" : "cover",
                padding: isDocument && !iconOnly ? "15%" : 0,
              }}
            />
            {isDocument && !iconOnly && (
              <Typography sx={styles.extension} variant="body3" color="black">
                {extension}
              </Typography>
            )}
          </Box>
        </Tooltip>
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
