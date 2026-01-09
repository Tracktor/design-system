import notFoundIcon from "@/assets/img/file-not-found-icon.png";
import JPGIcon from "@/assets/img/jpg-icon.png";
import notFoundImage from "@/assets/img/not-found-img.jpg";
import PDFIcon from "@/assets/img/pdf-icon.png";
import PNGIcon from "@/assets/img/png-icon.png";
import sheetIcon from "@/assets/img/sheet-icon.png";
import sheetsImage from "@/assets/img/sheets.png";

const getThumbnailPath = (iconOnly: boolean, isError: boolean, isDocument: boolean, extension: string, src: string, srcThumb: string) => {
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

    if (isError) {
      return notFoundIcon;
    }

    return iconMap[extension ?? ""] || notFoundIcon;
  }

  if (isDocument) {
    return sheetsImage;
  }

  if (isError) {
    return notFoundImage;
  }

  return srcThumb || src || undefined;
};

export default getThumbnailPath;
