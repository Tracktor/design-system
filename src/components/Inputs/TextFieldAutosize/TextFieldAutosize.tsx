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

    const styles = window.getComputedStyle(input);
    const font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.font = font;

    const value = props.value?.toString() || props.defaultValue?.toString() || props.placeholder?.toString() || " ";

    const textWidth = ctx.measureText(value).width;

    const paddingLeft = parseFloat(styles.paddingLeft);
    const paddingRight = parseFloat(styles.paddingRight);

    setInputWidth(textWidth + paddingLeft + paddingRight);
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
