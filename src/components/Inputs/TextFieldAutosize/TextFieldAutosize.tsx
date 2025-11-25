import { OutlinedInputProps, TextField, TextFieldProps } from "@mui/material";
import { forwardRef, Ref, useCallback, useEffect, useRef, useState } from "react";
import measureInputWidth from "@/components/Inputs/TextFieldAutosize/utils/measureInputWidth";

/**
 * TextField with auto-sizing width based on content
 * Automatically adjusts width to fit the input value, placeholder, or default value
 */
const TextFieldAutosize = forwardRef(({ sx, ...props }: TextFieldProps, ref: Ref<HTMLDivElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<number | null>(null);
  const prevValueRef = useRef<string | undefined>(undefined);
  const { size } = props;
  const isTiny = size === "tiny";

  const extraWidth = isTiny ? 40 : 50;

  const inputSlotProps = props?.slotProps?.input as Partial<OutlinedInputProps> | undefined;
  const hasStart = !!inputSlotProps?.startAdornment || !!props?.InputProps?.startAdornment;
  const hasEnd = !!inputSlotProps?.endAdornment || !!props?.InputProps?.endAdornment;

  const adornmentWidth = (hasStart ? extraWidth : 0) + (hasEnd ? extraWidth : 0);

  const measure = useCallback(() => {
    const width = measureInputWidth(inputRef.current, props.value, props.defaultValue, props.placeholder, adornmentWidth);

    if (width === null) {
      return;
    }

    setInputWidth(width);
  }, [props.value, props.defaultValue, props.placeholder, adornmentWidth]);

  /**
   *  Measure the input width on mount and whenever the input size changes
   */
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const newValue = props.value?.toString();
    const prevValue = prevValueRef.current;

    if (newValue !== prevValue) {
      measure();
      prevValueRef.current = newValue;
    }
  }, [measure, props.value?.toString]);

  return (
    <TextField
      ref={ref}
      inputRef={inputRef}
      sx={{
        "& .MuiInputAdornment-positionEnd": {
          marginLeft: "auto",
          paddingLeft: "16px",
        },
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
