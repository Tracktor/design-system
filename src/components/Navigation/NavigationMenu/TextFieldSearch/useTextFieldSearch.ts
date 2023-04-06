import { useContext, useLayoutEffect, useRef } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";

const useTextFieldSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { disableSearchFocusShortcut } = useContext(NavigationMenuContext);

  const focusInput = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      inputRef.current?.focus();
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

  return { inputRef };
};

export default useTextFieldSearch;
