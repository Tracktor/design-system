import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef, Ref, useCallback, useLayoutEffect, useRef, useState } from "react";

const TextFieldAutosize = forwardRef(({ sx, ...props }: TextFieldProps, ref: Ref<HTMLDivElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<number | null>(null);

  const measure = useCallback(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    const value = props.value?.toString() || props.defaultValue?.toString() || props.placeholder?.toString() || " ";

    // Mesure via span
    const span = document.createElement("span");
    const { font, fontWeight, fontFamily, fontSize, paddingLeft, paddingRight, letterSpacing } = window.getComputedStyle(input);

    span.style.font = font;
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.fontWeight = fontWeight;
    span.style.letterSpacing = letterSpacing;

    span.textContent = value;

    document.body.appendChild(span);
    const textWidth = span.getBoundingClientRect().width;
    document.body.removeChild(span);

    setInputWidth(textWidth + parseFloat(paddingLeft) + parseFloat(paddingRight));
  }, [props.value, props.defaultValue, props.placeholder]);

  useLayoutEffect(() => {
    if (!inputRef.current) {
      return;
    }

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(inputRef.current);

    return () => observer.disconnect();
  }, [measure]);

  return (
    <TextField
      ref={ref}
      inputRef={inputRef}
      sx={{
        "& .MuiOutlinedInput-root": {
          width: inputWidth ? `${inputWidth}px !important` : "auto !important",
        },
        ...sx,
      }}
      {...props}
    />
  );
});

export default TextFieldAutosize;
