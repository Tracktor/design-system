import { InputLabel, Stack, Typography, useTheme } from "@mui/material";
import { ChangeEvent, ElementRef, ReactNode, useRef, useState } from "react";
import UploadIcon from "@/components/DataDisplay/Icons/UploadIcon";

export interface FileProps {
  size?: "small" | "medium";
  variant?: "vertical" | "horizontal";
  label?: ReactNode;
  helperText?: ReactNode;
  icon?: ReactNode;
  error?: boolean;
  id?: string;
  name?: string;
  value?: unknown;
  accept?: string;
  required?: boolean;
  multiple?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  localeText?: {
    files: string;
  };
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const MAX_FILE_NAME_TO_DISPLAY = 5;

const getHeight = (size: FileProps["size"], variant: FileProps["variant"]) => {
  const isVertical = variant === "vertical";

  if (size === "small") {
    return isVertical ? 130 : 60;
  }
  return isVertical ? 150 : 80;
};

const getFileNames = (files: FileList | null) => {
  if (!files) {
    return "";
  }

  const hasMultipleFiles = files.length > 1;
  const filesArray = [...(files || [])];
  const fileName = filesArray
    // Limit the number of displayed files to 3
    .slice(0, 5)
    // Truncate the file name if it's too long
    .map(({ name }) => {
      const extension = name.split(".").pop();

      if (name.length > 10 && hasMultipleFiles) {
        return `${name.substring(0, 10)}(...).${extension}`;
      }

      return name;
    })
    // Separate the file names with a bullet
    .join(" • ");

  // Add to fileName (xx mores) if there are more than 5
  return files.length > MAX_FILE_NAME_TO_DISPLAY ? `${fileName} + ${files.length - MAX_FILE_NAME_TO_DISPLAY}` : fileName;
};

const getInputValue = (value: unknown) => {
  if (typeof value === "string" || typeof value === "number" || Array.isArray(value)) {
    return value;
  }

  return undefined;
};

const File = ({
  accept,
  name,
  disabled,
  required,
  error,
  localeText,
  value,
  multiple,
  id,
  size,
  helperText,
  fullWidth,
  icon,
  onChange,
  label = "Click to upload",
  variant = "vertical",
}: FileProps) => {
  const { palette } = useTheme();
  const isVertical = variant === "vertical";
  const htmlId = id || name;
  const labelRef = useRef<ElementRef<"label">>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const fileName = getFileNames(files);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setFiles(e.target.files);
  };

  return (
    <InputLabel
      ref={labelRef}
      htmlFor={htmlId}
      sx={{
        "&:hover": {
          borderColor: palette.primary.main,
        },
        border: `1px dashed ${error ? palette.error.main : palette.divider}`,
        borderRadius: 1,
        cursor: "pointer",
        height: getHeight(size, variant),
        maxWidth: fullWidth ? "100%" : 400,
        padding: 2,
        position: "relative",
        width: "100%",
      }}
    >
      <Stack
        alignItems="center"
        height="100%"
        direction={isVertical ? "column" : "row"}
        justifyContent={isVertical ? "center" : "flex-start"}
        textAlign={isVertical ? "center" : "left"}
        spacing={0.5}
        color={disabled ? "text.disabled" : "text.secondary"}
      >
        {icon || <UploadIcon sx={{ height: 40, width: 40 }} />}
        {fileName ? (
          <>
            <Typography variant="body2" color="textSecondary">
              {files?.length} {localeText?.files || "Fichiers"}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              whiteSpace={isVertical ? "normal" : "nowrap"}
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {fileName}
            </Typography>
          </>
        ) : (
          <Typography variant="subtitle1" color={disabled ? "text.disabled" : "primary"}>
            {label} {required && "*"}
          </Typography>
        )}
        {helperText && (
          <Typography color={error ? "error" : "textSecondary"} variant="body2">
            {helperText}
          </Typography>
        )}
      </Stack>
      <input
        type="file"
        disabled={disabled}
        required={required}
        name={name}
        multiple={multiple}
        accept={accept}
        id={htmlId}
        onChange={handleChange}
        value={getInputValue(value)}
        style={{
          // Hide the input element
          // The input element is hidden
          // But still clickable and focusable for accessibility and HTML validation
          left: "50%",
          opacity: 0,
          pointerEvents: "none",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
    </InputLabel>
  );
};

export default File;
