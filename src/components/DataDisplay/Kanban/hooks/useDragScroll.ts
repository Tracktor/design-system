import { MouseEvent, RefObject, useRef, useState } from "react";

const useDragScroll = (ref: RefObject<HTMLDivElement | null>) => {
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

export default useDragScroll;
