import { InputLabel, Stack, Typography, useTheme } from "@mui/material";
import { ChangeEvent, DragEvent, ElementRef, ReactNode, useRef, useState } from "react";
import UploadIcon from "@/components/DataDisplay/Icons/UploadIcon";
import useTranslation from "@/hooks/useTranslation";

export interface FileUploadProps {
  size?: "small" | "medium";
  variant?: "vertical" | "horizontal";
  label?: ReactNode;
  helperText?: ReactNode;
  icon?: ReactNode;
  error?: boolean;
  id?: string;
  name?: string;
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

const getHeight = (size: FileUploadProps["size"], variant: FileUploadProps["variant"]) => {
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
    .slice(0, 5)
    .map(({ name }) => {
      const extension = name.split(".").pop();

      if (name.length > 10 && hasMultipleFiles) {
        return `${name.substring(0, 10)}(...).${extension}`;
      }

      return name;
    })
    .join(" • ");

  return files.length > MAX_FILE_NAME_TO_DISPLAY ? `${fileName} + ${files.length - MAX_FILE_NAME_TO_DISPLAY}` : fileName;
};

const File = ({
  accept,
  name,
  disabled,
  required,
  error,
  localeText,
  multiple,
  id,
  size,
  helperText,
  fullWidth,
  icon,
  onChange,
  label,
  variant = "vertical",
}: FileUploadProps) => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const isVertical = variant === "vertical";
  const htmlId = id || name;
  const labelRef = useRef<ElementRef<"label">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const fileName = getFileNames(files);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setFiles(e.target.files);
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      const inputElement = inputRef.current;
      const newFiles = e.dataTransfer.files;

      setFiles(newFiles);

      // Manually update the input files
      const dataTransfer = new DataTransfer();
      Array.from(newFiles).forEach((file) => dataTransfer.items.add(file));

      if (inputElement) {
        inputElement.files = dataTransfer.files;
      }

      // Trigger focus and blur to update validity
      inputElement?.focus();
      inputElement?.blur();

      onChange?.({ ...e, target: inputElement } as unknown as ChangeEvent<HTMLInputElement>);

      e.dataTransfer.clearData();
    }
  };

  return (
    <InputLabel
      ref={labelRef}
      htmlFor={htmlId}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      sx={{
        "&:hover, &:focus": {
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
              {files?.length} {localeText?.files || t("files")}
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
            {label || t("clickToUpload")} {required && "*"}
          </Typography>
        )}
        {helperText && (
          <Typography color={error ? "error" : "textSecondary"} variant="body2">
            {helperText}
          </Typography>
        )}
      </Stack>
      <input
        ref={inputRef}
        type="file"
        disabled={disabled}
        required={required}
        name={name}
        multiple={multiple}
        accept={accept}
        id={htmlId}
        onChange={handleChange}
        style={{
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
