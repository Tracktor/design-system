import { Button, Checkbox, Chip, ChipProps, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Radio, Stack } from "@mui/material";
import { MouseEvent, useState } from "react";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import useMenu from "@/hooks/useMenu";
import useTranslation from "@/hooks/useTranslation";

type Option = {
  id?: string | number;
  label: string;
  value: string;
};

export interface ChipFilterSingleProps {
  multiple?: false;
  value?: string;
  onChange?: (value?: string) => void;
  label?: ChipProps["label"];
  labelMenu?: string;
  size?: ChipProps["size"];
  variant?: ChipProps["variant"];
  disabled?: ChipProps["disabled"];
  options?: Option | Option[];
}

export interface ChipFilterMultipleProps {
  multiple: true;
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: ChipProps["label"];
  labelMenu?: string;
  size?: ChipProps["size"];
  variant?: ChipProps["variant"];
  disabled?: ChipProps["disabled"];
  options?: Option | Option[];
}

export type ChipFilterProps = ChipFilterSingleProps | ChipFilterMultipleProps;

const ChipFilter = ({
  label,
  value: propValue,
  onChange,
  options,
  variant,
  disabled,
  labelMenu,
  multiple = false,
  size = "medium",
}: ChipFilterProps) => {
  const [internalValue, setInternalValue] = useState(() => {
    if (multiple) {
      return (propValue as string[]) || [];
    }
    return propValue as string | undefined;
  });

  const { anchorMenu, openMenu, isMenuOpen, closeMenu } = useMenu();
  const { t } = useTranslation();
  const isArrayOfOptions = Array.isArray(options);

  const handleApply = () => {
    if (multiple) {
      (onChange as (value: string[]) => void)?.(internalValue as string[]);
    } else if (internalValue !== undefined) {
      (onChange as (value?: string) => void)?.(internalValue as string);
    }
    closeMenu();
  };

  const handleReset = () => {
    if (multiple) {
      const resetValue: string[] = [];
      setInternalValue(resetValue);
      (onChange as (value: string[]) => void)?.(resetValue);
    } else {
      const resetValue: string | undefined = undefined;
      setInternalValue(resetValue);
      (onChange as (value?: string) => void)?.(resetValue);
    }
    closeMenu();
  };

  const handleClickChip = (event: MouseEvent<HTMLDivElement>) => {
    if (isArrayOfOptions) {
      openMenu(event);
      return;
    }

    if (!isArrayOfOptions) {
      const newValue = propValue ? undefined : (options as Option)?.value;
      if (multiple) {
        (onChange as (value: string[]) => void)?.(newValue ? [newValue] : []);
      } else {
        (onChange as (value?: string) => void)?.(newValue);
      }
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (multiple) {
      const currentValues = (internalValue as string[]) || [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      setInternalValue(newValues);
    } else {
      setInternalValue(optionValue);
    }
  };

  const isOptionSelected = (optionValue: string): boolean => {
    if (multiple) {
      return (internalValue as string[])?.includes(optionValue) || false;
    }
    return internalValue === optionValue;
  };

  const hasValue = (): boolean => {
    if (multiple) {
      return (propValue as string[])?.length > 0;
    }
    return !!propValue;
  };

  const getSelectedOptionLabel = (value: string): string | undefined => {
    if (!isArrayOfOptions || !Array.isArray(options)) {
      return (options as Option)?.label;
    }
    return options.find((option) => option.value === value)?.label;
  };

  const getChipLabel = (): string => {
    // Mode multiple selection
    if (multiple && hasValue()) {
      const currentValues = (propValue as string[]) || [];
      const selectedCount = currentValues.length;

      if (selectedCount === 1) {
        const selectedLabel = getSelectedOptionLabel(currentValues[0]);
        return selectedLabel || (label as string);
      }

      if (selectedCount > 1) {
        const firstSelectedLabel = getSelectedOptionLabel(currentValues[0]);
        const additionalCount = selectedCount - 1;
        return `${firstSelectedLabel || currentValues[0]}... (+${additionalCount})`;
      }
    }

    // Mode single selection
    if (!multiple && propValue) {
      const selectedLabel = getSelectedOptionLabel(propValue as string);
      return selectedLabel || (label as string);
    }

    // No value selected
    return label as string;
  };

  return (
    <>
      {/* Chip */}
      <Chip
        disabled={disabled}
        size={size}
        label={getChipLabel()}
        variant={variant}
        deleteIcon={isArrayOfOptions ? <ChevronIcon fontSize={size === "medium" ? "medium" : "small"} /> : undefined}
        onClick={handleClickChip}
        onDelete={isArrayOfOptions ? () => {} : undefined}
        color={hasValue() ? "active" : "default"}
      />

      {/* Menu */}
      {isArrayOfOptions && Array.isArray(options) && (
        <Menu
          anchorEl={anchorMenu}
          open={isMenuOpen}
          onClose={closeMenu}
          slotProps={{
            paper: {
              sx: {
                minWidth: 350,
              },
            },
          }}
        >
          {/* label Menu & close icon */}
          <Stack component="li" direction="row" paddingLeft={2} marginBottom={1}>
            <ListItemText>{labelMenu}</ListItemText>
            <IconButton onClick={closeMenu}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          {/* Options */}
          {options.map((option, index) => {
            const key = `${option.id || option.value}-${index}`;
            const isSelected = isOptionSelected(option.value);

            return (
              <MenuItem key={key} onClick={() => handleOptionClick(option.value)}>
                <ListItemIcon>
                  {multiple ? (
                    <Checkbox disableRipple checked={isSelected} sx={{ padding: 0 }} />
                  ) : (
                    <Radio disableRipple checked={isSelected} sx={{ padding: 0 }} />
                  )}
                </ListItemIcon>
                <ListItemText sx={{ color: "text.secondary" }}>{option.label}</ListItemText>
              </MenuItem>
            );
          })}

          {/* Actions */}
          <Stack component="li" direction="row" justifyContent="flex-end" spacing={1}>
            <Button size="small" onClick={handleReset}>
              {t("reset")}
            </Button>
            <Button variant="contained" size="small" onClick={handleApply}>
              {t("apply")}
            </Button>
          </Stack>
        </Menu>
      )}
    </>
  );
};

export default ChipFilter;
