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

export const getBaseConfig = (hasHeader: boolean, hasSubtitles: boolean, hasFooter: boolean): number => {
  switch (true) {
    case hasHeader && hasSubtitles:
      return BASE_HEIGHT_CONFIG["header-subtitles"];
    case hasHeader && !hasSubtitles:
      return BASE_HEIGHT_CONFIG["header-only"];
    case hasSubtitles && hasFooter:
      return BASE_HEIGHT_CONFIG["footer-subtitles"];
    case hasFooter && !hasHeader && !hasSubtitles:
      return BASE_HEIGHT_CONFIG["footer-only"];
    case hasSubtitles && !hasHeader && !hasFooter:
      return BASE_HEIGHT_CONFIG["subtitles-only"];
    default:
      return BASE_HEIGHT_CONFIG.default;
  }
};

export const getFooterConfig = (hasHeader: boolean, hasSubtitles: boolean, hasRightFooter: boolean): number => {
  if (hasHeader && hasSubtitles) {
    return FOOTER_HEIGHT_CONFIG["header-subtitles"];
  }

  if (hasHeader) {
    return FOOTER_HEIGHT_CONFIG["header-only"];
  }

  if (hasRightFooter) {
    return FOOTER_HEIGHT_CONFIG.rightFooter;
  }

  return FOOTER_HEIGHT_CONFIG.default;
};

export const getConfig = (hasHeader: boolean, hasSubtitles: boolean, hasFooter: boolean, hasRightFooter: boolean) => ({
  baseHeight: getBaseConfig(hasHeader, hasSubtitles, hasFooter),
  footerHeight: hasFooter ? getFooterConfig(hasHeader, hasSubtitles, hasRightFooter) : 0,
});
