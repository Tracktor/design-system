import { InputLabel, InputLabelProps } from "@mui/material";

export interface SelectInputLabelProps extends Omit<InputLabelProps, "size"> {
  size?: "small" | "medium" | "large";
}

const getSizeOverride = (size: SelectInputLabelProps["size"]): InputLabelProps["size"] => {
  if (!size || size === "large") {
    return undefined;
  }

  if (size === "medium") {
    return "normal";
  }

  return size;
};

const getClassName = (size: SelectInputLabelProps["size"], className?: string): string | undefined => {
  if (size === "large") {
    return className ? `${className} large` : "large";
  }

  return className;
};

const SelectInputLabel = ({ className, size, ...props }: SelectInputLabelProps) => (
  <InputLabel className={getClassName(size, className)} size={getSizeOverride(size)} {...props} />
);

export default SelectInputLabel;
