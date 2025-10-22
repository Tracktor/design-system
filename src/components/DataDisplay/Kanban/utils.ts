import { MouseEvent, RefObject, useRef, useState } from "react";
import type { KanbanDataItemProps } from "@/components/DataDisplay/Kanban/Kanban";

const HEIGHT_LINE_BODY3 = 18;
const HEADER_HEIGHT = 25;
export const IMG_SIZE = 40;

type BaseHeightKey = "header-subtitles" | "header-only" | "footer-subtitles" | "footer-only" | "subtitles-only" | "default";
type FooterHeightKey = "header-subtitles" | "header-only" | "rightFooter" | "default";

const BASE_HEIGHT_CONFIG: Record<BaseHeightKey, number> = {
  default: 64,
  "footer-only": 64,
  "footer-subtitles": 60,
  "header-only": 72,
  "header-subtitles": 54,
  "subtitles-only": 45,
};

const FOOTER_HEIGHT_CONFIG: Record<FooterHeightKey, number> = {
  default: 25,
  "header-only": 30,
  "header-subtitles": 34,
  rightFooter: 20,
};

const getConfigKey = (hasHeader: boolean, hasSubtitles: boolean, hasFooter: boolean): BaseHeightKey => {
  if (hasHeader && hasSubtitles) return "header-subtitles";
  if (hasHeader && !hasSubtitles) return "header-only";
  if (hasFooter && hasSubtitles) return "footer-subtitles";
  if (hasFooter && !hasSubtitles) return "footer-only";
  if (!(hasHeader || hasFooter) && hasSubtitles) return "subtitles-only";

  return "default";
};

const getFooterConfigKey = (hasHeader: boolean, hasSubtitles: boolean, hasRightFooter: boolean): FooterHeightKey => {
  if (hasHeader && hasSubtitles) return "header-subtitles";
  if (hasHeader && !hasSubtitles) return "header-only";
  if (hasRightFooter) return "rightFooter";

  return "default";
};

export const computeKanbanCardHeight = (item: KanbanDataItemProps): number => {
  const hasHeader = !!item.headerTitle;
  const hasSubtitles = !!item.subtitles?.length;
  const hasFooter = !!(item.Footer || item.RightFooter);
  const hasRightFooter = !!item.RightFooter;

  const baseHeight = BASE_HEIGHT_CONFIG[getConfigKey(hasHeader, hasSubtitles, hasFooter)];
  const footerHeight = hasFooter ? FOOTER_HEIGHT_CONFIG[getFooterConfigKey(hasHeader, hasSubtitles, hasRightFooter)] : 0;
  const headerHeight = hasHeader ? HEADER_HEIGHT : 0;
  const subtitlesHeight = (item.subtitles?.length ?? 0) * HEIGHT_LINE_BODY3;

  return baseHeight + headerHeight + subtitlesHeight + footerHeight;
};

export const useDragScroll = (ref: RefObject<HTMLDivElement | null>) => {
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMoved = useRef(false);
  const isMouseDownRef = useRef(false);

  const onMouseDown = (e: MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    isMouseDownRef.current = true;
    startXRef.current = e.pageX - element.offsetLeft;
    scrollLeftRef.current = element.scrollLeft;
    hasMoved.current = false;
    element.style.cursor = "grabbing";
  };

  const onMouseUp = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    isMouseDownRef.current = false;

    if (isDragging) {
      setIsDragging(false);
    }

    hasMoved.current = false;
    element.style.cursor = "grab";
  };

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const element = ref.current;

    if (!(element && isMouseDownRef.current)) {
      return;
    }

    const x = e.pageX - element.offsetLeft;
    const deltaX = Math.abs(x - startXRef.current);

    // If the mouse has moved more than 5 pixels, set isDragging to true
    // Avoids setting isDragging to true if the mouse has not moved
    if (deltaX > 5 && !hasMoved.current) {
      hasMoved.current = true;
      setIsDragging(true);
    }

    if (hasMoved.current) {
      e.preventDefault();
      const walk = x - startXRef.current;
      element.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  return {
    isDragging,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};
