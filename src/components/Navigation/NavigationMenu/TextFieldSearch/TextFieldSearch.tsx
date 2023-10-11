import { alpha, darken, InputAdornment, SvgIcon, TextField, Theme, useTheme } from "@mui/material";
import { cloneElement, isValidElement, ReactElement, useContext } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import useTextFieldSearch from "@/components/Navigation/NavigationMenu/TextFieldSearch/useTextFieldSearch";

interface SearchFieldProps {
  fullWidth?: boolean;
  translations?: {
    search: string;
  };
}

const styles = {
  "& .Mui-focused svg": {
    animation: "hi-TextFieldSearch 1s ease forwards",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    background: (theme: Theme) => alpha(theme.palette.common.white, 0.12),
    border: (theme: Theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme: Theme) => theme.palette.primary.main,
  },
  "@keyframes hi-TextFieldSearch": {
    "100%": { transform: "scale(1)" },
    "30%": { transform: "scale(1.5)" },
    "40%": { transform: "rotate(-20deg) scale(1.5)" },
    "50%": { transform: "rotate(20deg) scale(1.5)" },
    "60%": { transform: "rotate(0deg) scale(1.5)" },
  },
};

const TextFieldSearch = ({ fullWidth, ...props }: SearchFieldProps) => {
  const { backgroundCoefficient, onSearchChange, translations, searchValue, isTablet, SearchField } = useContext(NavigationMenuContext);
  const { inputRef } = useTextFieldSearch();
  const { palette } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);
  const color = palette.getContrastText(backgroundColor);
  const placeholder = props?.translations?.search || translations?.search || "Search";

  if (SearchField) {
    return isValidElement(SearchField) ? cloneElement(SearchField as ReactElement, { ref: inputRef }) : null;
  }

  return (
    <TextField
      value={searchValue}
      size="small"
      placeholder={placeholder}
      fullWidth={!isTablet}
      inputRef={inputRef}
      onChange={onSearchChange}
      sx={{
        ...styles,
        input: {
          color,
        },
      }}
      InputLabelProps={{
        shrink: false,
      }}
      InputProps={{
        autoComplete: "off",
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon focusable="false" aria-hidden="true" viewBox="0 0 24 24">
              <path
                fill={color}
                d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </SvgIcon>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextFieldSearch;
