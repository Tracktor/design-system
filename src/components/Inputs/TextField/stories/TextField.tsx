import { BaseTextFieldProps, TextField as Component } from "@mui/material";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

interface TextFieldProps extends BaseTextFieldProps {
  autosize?: boolean;
}

const TextField = ({ autosize = false, ...props }: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<number | null>(null);

  const measure = useCallback(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    const value = props.value?.toString() || props.defaultValue?.toString() || props.placeholder?.toString() || " ";

    const span = document.createElement("span");
    const { font, fontWeight, fontFamily, fontSize, paddingRight, paddingLeft, letterSpacing } = window.getComputedStyle(input);

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
    if (!(autosize && inputRef.current)) {
      return;
    }

    measure();

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(inputRef.current);

    return () => observer.disconnect();
  }, [autosize, measure]);

  return (
    <Component
      {...props}
      inputRef={inputRef}
      sx={{
        ...(autosize && {
          "& .MuiOutlinedInput-root": {
            flex: "unset !important",
            width: inputWidth ? `${inputWidth}px !important` : "auto !important",
          },
          minWidth: "40px",
          width: inputWidth ? `${inputWidth}px` : "auto",
        }),
        ...props.sx,
      }}
    />
  );
};

export default TextField;
