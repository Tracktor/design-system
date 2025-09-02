import { Button, Checkbox, Chip, ChipProps, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Radio, Stack } from "@mui/material";
import { MouseEvent, ReactNode, useState } from "react";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import useMenu from "@/hooks/useMenu";
import useTranslation from "@/hooks/useTranslation";

export type OptionValue = string | number;

type Option<T = OptionValue> = {
  id?: string | number;
  label: string;
  value: T;
};

interface ChipFilterBaseProps<T = OptionValue> {
  /**
   * The label of the chip filter.
   */
  label?: ChipProps["label"];
  /**
   * The label displayed in the menu for the chip filter, only with multiple options.
   */
  labelMenu?: string;
  /**
   * The size of the chip filter.
   */
  size?: ChipProps["size"];
  /**
   * The variant of the chip filter.
   */
  variant?: ChipProps["variant"];
  /**
   * Indicates if the chip filter is disabled.
   */
  disabled?: ChipProps["disabled"];
  /**
   * The options available for selection in the chip filter.
   * If "options" is not an array, it is considered a single option (toggle behavior).
   */
  options?: Option<T> | Option<T>[];
  /**
   * Indicates if there should be a separator between the label menu and the options selected in the menu.
   * Defaults to ":"
   */
  separatorBetweenLabelAndOptionSelected?: string;
  /**
   * Indicates if the label should only be displayed after a selection is made.
   */
  labelOnlyAfterSelection?: boolean;
}

// Single selection interface
export interface ChipFilterSingleProps<T = OptionValue> extends ChipFilterBaseProps<T> {
  /**
   * Indicates if the chip filter allows multiple selections.
   */
  multiple?: false;
  /**
   * The value of the chip filter.
   */
  value?: T;
  /**
   * Callback function triggered when the value of the chip filter changes.
   * @param value
   */
  onChange?: (value?: T) => void;
}

// Multiple selection interface
export interface ChipFilterMultipleProps<T = OptionValue> extends ChipFilterBaseProps<T> {
  /**
   * Indicates if the chip filter allows multiple selections.
   */
  multiple: true;
  /**
   * The value of the chip filter.
   */
  value?: T[];
  /**
   * Callback function triggered when the value of the chip filter changes.
   * @param value
   */
  onChange?: (value: T[]) => void;
}

export type ChipFilterProps<T = OptionValue> = ChipFilterSingleProps<T> | ChipFilterMultipleProps<T>;

function ChipFilter<T = OptionValue>(props: ChipFilterSingleProps<T>): ReactNode;
// eslint-disable-next-line no-redeclare
function ChipFilter<T = OptionValue>(props: ChipFilterMultipleProps<T>): ReactNode;
// eslint-disable-next-line no-redeclare,react/function-component-definition
function ChipFilter<T = OptionValue>({
  label,
  value,
  onChange,
  options,
  variant,
  disabled,
  labelMenu,
  labelOnlyAfterSelection,
  separatorBetweenLabelAndOptionSelected = ":",
  multiple = false,
  size = "medium",
}: ChipFilterProps<T>): ReactNode {
  const [internalValue, setInternalValue] = useState(() => {
    if (multiple) {
      return value || [];
    }
    return value as T | undefined;
  });

  const hasValue = multiple ? (value as T[])?.length > 0 : value !== undefined && value !== null;
  const { anchorMenu, openMenu, isMenuOpen, closeMenu } = useMenu();
  const { t } = useTranslation();
  const isArrayOfOptions = Array.isArray(options);

  const handleApply = () => {
    if (multiple) {
      (onChange as (val: T[]) => void)?.(internalValue as T[]);
    } else if (internalValue !== undefined) {
      (onChange as (val?: T) => void)?.(internalValue as T);
    }
    closeMenu();
  };

  const handleReset = () => {
    if (multiple) {
      const resetValue: T[] = [];
      setInternalValue(resetValue);
      (onChange as (val: T[]) => void)?.(resetValue);
    } else {
      const resetValue: T | undefined = undefined;
      setInternalValue(resetValue);
      (onChange as (val?: T) => void)?.(resetValue);
    }
    closeMenu();
  };

  const handleClickChip = (event: MouseEvent<HTMLDivElement>) => {
    if (isArrayOfOptions) {
      openMenu(event);
      return;
    }

    if (!isArrayOfOptions) {
      const newValue = value !== undefined && value !== null ? undefined : (options as Option<T>)?.value;

      if (multiple) {
        (onChange as (val: T[]) => void)?.(newValue !== undefined ? [newValue] : []);
      } else {
        (onChange as (val?: T) => void)?.(newValue);
      }
    }
  };

  const handleOptionClick = (optionValue: T) => {
    if (multiple) {
      const currentValues = (internalValue as T[]) || [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];

      setInternalValue(newValues);
    } else {
      setInternalValue(optionValue);
    }
  };

  const isOptionSelected = (optionValue: T): boolean => {
    if (multiple) {
      return (internalValue as T[])?.includes(optionValue) || false;
    }
    return internalValue === optionValue;
  };

  const getSelectedOptionLabel = (val: T | T[]): string | undefined => {
    if (!isArrayOfOptions) {
      return (options as Option<T>)?.label;
    }

    return `${labelMenu ? `${labelMenu} ${separatorBetweenLabelAndOptionSelected} ` : ""}${
      (options as Option<T>[]).find((option) => option.value === val)?.label || ""
    }`;
  };

  const getChipLabel = (): ReactNode => {
    // If hide selected value
    if (labelOnlyAfterSelection && hasValue) {
      const currentValues = value || [];
      const selectedCount = Array.isArray(currentValues) ? currentValues.length : 1;

      return `${label || labelMenu}${multiple && selectedCount > 1 ? ` (${selectedCount})` : ""}`;
    }

    // Mode multiple selection
    if (multiple && hasValue) {
      const currentValues = (value as T[]) || [];
      const selectedCount = currentValues.length;

      if (selectedCount === 1) {
        const selectedLabel = getSelectedOptionLabel(currentValues[0]);
        return selectedLabel || label;
      }

      if (selectedCount > 1) {
        const firstSelectedLabel = getSelectedOptionLabel(currentValues[0]);
        const additionalCount = selectedCount - 1;
        return `${firstSelectedLabel || String(currentValues[0])}... (+${additionalCount})`;
      }
    }

    if (!multiple && value !== undefined && value !== null && isArrayOfOptions) {
      const selectedLabel = getSelectedOptionLabel(value);
      return selectedLabel || label;
    }

    // No value selected
    return label;
  };

  return (
    <>
      {/* Chip */}
      <Chip
        disabled={disabled}
        size={size}
        label={getChipLabel()}
        variant={variant}
        deleteIcon={
          isArrayOfOptions ? (
            <ChevronIcon
              fontSize="small"
              sx={{
                marginLeft: -0.5,
                marginRight: 0.5,
                transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          ) : undefined
        }
        onClick={handleClickChip}
        onDelete={isArrayOfOptions ? () => {} : undefined}
        color={hasValue ? "active" : "default"}
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
          {(options as Option<T>[]).map((option, index) => {
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
          <Stack component="li" direction="row" justifyContent="flex-end" spacing={1} marginTop={1}>
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
}

export default ChipFilter;
