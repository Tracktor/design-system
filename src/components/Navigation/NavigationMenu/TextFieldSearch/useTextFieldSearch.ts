import { useLayoutEffect, useRef } from "react";

const useTextFieldSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("keydown", focusInput);

    return () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, []);

  return { inputRef };
};

export default useTextFieldSearch;
