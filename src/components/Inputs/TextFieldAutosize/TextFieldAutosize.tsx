import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef, Ref, useCallback, useLayoutEffect, useRef, useState } from "react";
import measureInputWidth from "@/components/Inputs/TextFieldAutosize/utils/measureInputWidth";

const EXTRA_WIDTH = 50;

const TextFieldAutosize = forwardRef(({ sx, ...props }: TextFieldProps, ref: Ref<HTMLDivElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<number | null>(null);

  // @ts-expect-error: startAdornment might be in slotProps.input or InputProps but are not typed in TextFieldProps
  const hasStart = !!props?.slotProps?.input?.startAdornment || !!props?.InputProps?.startAdornment;
  // @ts-expect-error: endAdornment might be in slotProps.input or InputProps but are not typed in TextFieldProps
  const hasEnd = !!props?.slotProps?.input?.endAdornment || !!props?.InputProps?.endAdornment;

  const adornmentWidth = (hasStart ? EXTRA_WIDTH : 0) + (hasEnd ? EXTRA_WIDTH : 0);

  const measure = useCallback(() => {
    const width = measureInputWidth(inputRef.current, props.value, props.defaultValue, props.placeholder, adornmentWidth);

    if (width !== null) {
      setInputWidth(width);
    }
  }, [props.value, props.defaultValue, props.placeholder, adornmentWidth]);

  /**
   *  Measure the input width on mount and whenever the input size changes
   */
  useLayoutEffect(() => {
    if (!inputRef.current) {
      return;
    }

    // Observe size changes to the input element to re-compute width input
    const observer = new ResizeObserver(measure);
    observer.observe(inputRef.current);

    return () => observer.disconnect();
  }, [measure]);

  return (
    <TextField
      ref={ref}
      inputRef={inputRef}
      sx={{
        "& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)": {
          ...(hasEnd && { paddingRight: 0 }),
          ...(hasStart && { paddingLeft: 1 }),
        },
        "& .MuiOutlinedInput-root": {
          width: inputWidth ? `${inputWidth}px` : "auto",
        },
        ...sx,
      }}
      {...props}
    />
  );
});

export default TextFieldAutosize;
