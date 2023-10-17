import { ElementRef, useContext, useLayoutEffect, useRef } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";

const useTextFieldSearch = () => {
  const ref = useRef<ElementRef<"input">>(null);
  const { disableSearchFocusShortcut } = useContext(NavigationMenuContext);

  const focusInput = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      ref.current?.focus();
    }
  };

  useLayoutEffect(() => {
    if (disableSearchFocusShortcut) {
      return undefined;
    }

    window.addEventListener("keydown", focusInput);

    return () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, [disableSearchFocusShortcut]);

  return { ref };
};

export default useTextFieldSearch;
