import { MouseEvent, RefObject, useRef, useState } from "react";
import type { KanbanDataItemProps } from "@/components/DataDisplay/Kanban/Kanban";

const HEIGHT_LINE_BODY3 = 18;
const HEADER_HEIGHT = 25;
export const IMG_SIZE = 40;

const getBaseHeight = (hasHeader: boolean, hasSubtitles: boolean, hasFooter: boolean): number => {
  if (hasHeader && hasSubtitles) return 54;
  if (hasHeader && !hasSubtitles) return 72;

  if (hasFooter && hasSubtitles) return 60;
  if (hasFooter && !hasSubtitles) return 64;

  if (hasSubtitles) return 45;
  return 64;
};

const getFooterHeight = (hasHeader: boolean, hasSubtitles: boolean, hasFooter: boolean, hasRightFooter: boolean): number => {
  if (!hasFooter) return 0;
  if (hasHeader && hasSubtitles) return 34;
  if (hasHeader) return 30;
  if (hasRightFooter) return 20;

  return 25;
};

export const computeKanbanCardHeight = (item: KanbanDataItemProps): number => {
  const hasHeader = !!item.headerTitle;
  const hasSubtitles = !!item.subtitles?.length;
  const hasFooter = !!(item.Footer || item.RightFooter);
  const hasRightFooter = !!item.RightFooter;

  const baseHeight = getBaseHeight(hasHeader, hasSubtitles, hasFooter);
  const footerHeight = getFooterHeight(hasHeader, hasSubtitles, hasFooter, hasRightFooter);
  const headerHeight = hasHeader ? HEADER_HEIGHT : 0;
  const subtitlesHeight = (item.subtitles?.length ?? 0) * HEIGHT_LINE_BODY3;

  return baseHeight + subtitlesHeight + footerHeight + headerHeight;
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

    if (!element || !isMouseDownRef.current) {
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
