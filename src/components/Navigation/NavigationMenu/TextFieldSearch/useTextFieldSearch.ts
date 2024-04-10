import { ElementRef, useContext, useLayoutEffect, useRef } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";

const useTextFieldSearch = () => {
  const inputRef = useRef<ElementRef<"input">>(null);
  const { enableSearchFocusShortcut } = useContext(NavigationMenuContext);

  const focusInput = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  useLayoutEffect(() => {
    if (enableSearchFocusShortcut) {
      window.addEventListener("keydown", focusInput);
    }

    return () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, [enableSearchFocusShortcut]);

  return { inputRef };
};

export default useTextFieldSearch;
