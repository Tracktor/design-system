import { TextareaAutosize, TextareaAutosizeProps, useTheme } from "@mui/material";
import { forwardRef, Ref } from "react";
import darkColors from "@/styles/colors/dark.module.scss";

const TextArea = ({ style, minRows = 4, ...props }: TextareaAutosizeProps, ref: Ref<HTMLTextAreaElement>) => {
  const { palette, shape, spacing } = useTheme();

  return (
    <TextareaAutosize
      ref={ref}
      minRows={minRows}
      style={{
        backgroundColor: "transparent",
        borderColor: palette.mode === "dark" ? darkColors.outlineBorder : palette.grey["300"],
        borderRadius: shape.borderRadius,
        color: palette.text.primary,
        marginTop: spacing(1),
        maxWidth: "100%",
        minWidth: "100%",
        padding: spacing(1),
        ...style,
      }}
      {...props}
    />
  );
};

export default forwardRef(TextArea);
