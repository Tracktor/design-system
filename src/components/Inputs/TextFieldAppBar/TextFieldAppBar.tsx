import { alpha, InputAdornment, SvgIcon, TextField, TextFieldProps } from "@mui/material";
import { forwardRef, Ref } from "react";
import { dark } from "@/constants/colors";

const TextFieldAppBar = forwardRef(({ sx, InputProps, type = "search", ...props }: TextFieldProps, ref: Ref<HTMLDivElement>) => (
  <TextField
    fullWidth
    size="xSmall"
    type={type}
    ref={ref}
    sx={{
      "& .MuiInputBase-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: dark?.palette?.primary?.light,
        },
        backgroundColor: dark?.palette?.grey?.["50"],
        color: dark?.palette?.text?.primary,
      },
      // Border
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: alpha(dark?.palette?.border?.outline, 0.23),
      },
      // Border focus
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: dark?.palette?.primary?.main,
      },
      maxWidth: 400,
      ...sx,
      "input[type='search']::-webkit-search-cancel-button": {
        filter: ({ palette }) => (palette?.mode === "light" ? "invert(1)" : "invert(0)"),
      },
    }}
    // eslint-disable-next-line react/jsx-no-duplicate-props
    InputProps={{
      autoComplete: "off",
      startAdornment: type === "search" && (
        <InputAdornment position="start">
          <SvgIcon focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_14432_13952)">
                <path
                  d="M12.9053 16.102C15.9763 14.7968 17.4079 11.2492 16.1027 8.17812C14.7975 5.10705 11.2499 3.67551 8.17882 4.98068C5.10776 6.28585 3.67622 9.8335 4.98139 12.9046C6.28656 15.9756 9.8342 17.4072 12.9053 16.102Z"
                  stroke="#999999"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14.814 14.8133L19.5 19.5" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_14432_13952">
                  <rect width="16" height="16" fill="white" transform="translate(4 4)" />
                </clipPath>
              </defs>
            </svg>
          </SvgIcon>
        </InputAdornment>
      ),
      ...InputProps,
    }}
    {...props}
  />
));

export default TextFieldAppBar;
