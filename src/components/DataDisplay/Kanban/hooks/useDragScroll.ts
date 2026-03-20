import { MouseEvent, RefObject, useCallback, useRef } from "react";

const useDragScroll = (ref: RefObject<HTMLDivElement | null>) => {
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMoved = useRef(false);
  const isMouseDownRef = useRef(false);

  const onMouseDown = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      isMouseDownRef.current = true;
      startXRef.current = e.pageX - element.offsetLeft;
      scrollLeftRef.current = element.scrollLeft;
      hasMoved.current = false;
    },
    [ref],
  );

  const onMouseUp = useCallback(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    isMouseDownRef.current = false;

    if (hasMoved.current) {
      element.classList.remove("grabbing");
    }

    hasMoved.current = false;
  }, [ref]);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const element = ref.current;
      if (!(element && isMouseDownRef.current)) {
        return;
      }

      const x = e.pageX - element.offsetLeft;
      const deltaX = Math.abs(x - startXRef.current);

      if (deltaX > 5 && !hasMoved.current) {
        hasMoved.current = true;
        element.classList.add("grabbing");
      }

      if (hasMoved.current) {
        e.preventDefault();
        const walk = x - startXRef.current;
        element.scrollLeft = scrollLeftRef.current - walk;
      }
    },
    [ref],
  );

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};

export default useDragScroll;
