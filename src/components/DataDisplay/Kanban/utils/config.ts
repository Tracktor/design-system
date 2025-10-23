export const HEIGHT_LINE_BODY3 = 18;
export const HEADER_HEIGHT = 25;
export const IMG_SIZE = 40;

type BaseHeightKey = "header-subtitles" | "header-only" | "footer-subtitles" | "footer-only" | "subtitles-only" | "default";
type FooterHeightKey = "header-subtitles" | "header-only" | "rightFooter" | "default";

export const BASE_HEIGHT_CONFIG: Record<BaseHeightKey, number> = {
  default: 64,
  "footer-only": 64,
  "footer-subtitles": 60,
  "header-only": 72,
  "header-subtitles": 54,
  "subtitles-only": 45,
};

export const FOOTER_HEIGHT_CONFIG: Record<FooterHeightKey, number> = {
  default: 25,
  "header-only": 30,
  "header-subtitles": 34,
  rightFooter: 20,
};

export const getConfigKey = (hasHeader: boolean, hasSubtitles: boolean, hasFooter: boolean): BaseHeightKey => {
  if (hasHeader && hasSubtitles) {
    return "header-subtitles";
  }

  if (hasHeader && !hasSubtitles) {
    return "header-only";
  }

  if (hasFooter && hasSubtitles) {
    return "footer-subtitles";
  }

  if (hasFooter && !hasSubtitles) {
    return "footer-only";
  }

  if (!(hasHeader || hasFooter) && hasSubtitles) {
    return "subtitles-only";
  }

  return "default";
};

export const getFooterConfigKey = (hasHeader: boolean, hasSubtitles: boolean, hasRightFooter: boolean): FooterHeightKey => {
  if (hasHeader && hasSubtitles) {
    return "header-subtitles";
  }

  if (hasHeader && !hasSubtitles) {
    return "header-only";
  }

  if (hasRightFooter) {
    return "rightFooter";
  }

  return "default";
};
