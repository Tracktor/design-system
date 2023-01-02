import { IconButton, InputAdornment, SvgIcon, TextField, TextFieldProps } from "@mui/material";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type QuantityFieldProps = TextFieldProps & {
  max?: number;
  min?: number;
  setValue?: Dispatch<SetStateAction<number>>;
};

const QuantityField = ({ value, setValue, min = 1, max = 50, ...props }: QuantityFieldProps) => {
  const isMin = value === min || value === 0;
  const isMax = value === max;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const valueAsNumber = +target.value;

    if (valueAsNumber <= max && valueAsNumber >= min) {
      setValue?.(valueAsNumber);
    }
  };

  const onIncrement = () => {
    const nextValue = Number(value) + 1;
    setValue?.(nextValue <= max ? nextValue : Number(value));
  };

  const onDecrement = () => {
    const nextValue = Number(value) - 1;
    setValue?.(nextValue >= min ? nextValue : Number(value));
  };

  return (
    <TextField
      onChange={handleOnChange}
      autoComplete="off"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled={isMax} onClick={onIncrement} size="small" aria-label="increment">
              <SvgIcon viewBox="0 0 24 24">
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
              </SvgIcon>
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={onDecrement} disabled={isMin} size="small" aria-label="decrement">
              <SvgIcon viewBox="0 0 24 24">
                <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
              </SvgIcon>
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          "& .MuiInputBase-input": {
            textAlign: "center",
            width: 40,
          },
        },
      }}
      value={value}
      {...props}
    />
  );
};

export default QuantityField;
