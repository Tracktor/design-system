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
   * If "options" is not provided, it acts as a simple toggle.
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

// Toggle mode interface (boolean) - inferred from presence of 'checked'
export interface ChipFilterToggleProps extends ChipFilterBaseProps<boolean> {
  /**
   * The checked state of the toggle. When provided, the component acts as a toggle.
   */
  checked?: boolean;
  /**
   * Callback function triggered when the checked state changes.
   * @param checked
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   *  Exclude these props for toggle mode
   */
  multiple?: never;
  /**
   *  Exclude these props for toggle mode
   */
  value?: never;
  /**
   *  Exclude these props for toggle mode
   */
  onChange?: never;
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
  /**
   *  Exclude these props for toggle mode
   */
  checked?: never;
  /**
   *  Exclude these props for toggle mode
   */
  onCheckedChange?: never;
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
  /**
   *  Exclude these props for toggle mode
   */
  checked?: never;
  /**
   *  Exclude these props for toggle mode
   */
  onCheckedChange?: never;
}

export type ChipFilterProps<T = OptionValue> = ChipFilterToggleProps | ChipFilterSingleProps<T> | ChipFilterMultipleProps<T>;

// Overloaded function signatures
function ChipFilter(props: ChipFilterToggleProps): ReactNode;
// eslint-disable-next-line no-redeclare
function ChipFilter<T = OptionValue>(props: ChipFilterSingleProps<T>): ReactNode;
// eslint-disable-next-line no-redeclare
function ChipFilter<T = OptionValue>(props: ChipFilterMultipleProps<T>): ReactNode;

/**
 * ChipFilter component that can function as a toggle, single selection, or multiple selection filter.
 * @param label
 * @param value
 * @param onChange
 * @param checked
 * @param onCheckedChange
 * @param options
 * @param variant
 * @param disabled
 * @param labelMenu
 * @param labelOnlyAfterSelection
 * @param separatorBetweenLabelAndOptionSelected
 * @param multiple
 * @param size
 * @constructor
 */
// eslint-disable-next-line no-redeclare,react/function-component-definition
function ChipFilter<T = OptionValue>({
  label,
  value,
  onChange,
  checked,
  onCheckedChange,
  options,
  variant,
  disabled,
  labelMenu,
  labelOnlyAfterSelection,
  separatorBetweenLabelAndOptionSelected = ":",
  multiple = false,
  size = "medium",
}: ChipFilterProps<T>): ReactNode {
  // Detect toggle mode from presence of 'checked' prop
  const isToggleMode = checked !== undefined;

  const [internalValue, setInternalValue] = useState(() => {
    if (isToggleMode) {
      return checked || false;
    }
    if (multiple) {
      return value || [];
    }
    return value as T | undefined;
  });

  // Determine if component has a value
  const hasValue = (() => {
    if (isToggleMode) {
      return checked === true;
    }
    if (multiple) {
      return (value as T[])?.length > 0;
    }
    return value !== undefined && value !== null;
  })();

  const { anchorMenu, openMenu, isMenuOpen, closeMenu } = useMenu();
  const { t } = useTranslation();
  const isArrayOfOptions = Array.isArray(options);
  const hasOptions = options !== undefined;

  const handleApply = () => {
    if (isToggleMode) {
      onCheckedChange?.(internalValue as boolean);
    } else if (multiple) {
      (onChange as (val: T[]) => void)?.(internalValue as T[]);
    } else if (internalValue !== undefined) {
      (onChange as (val?: T) => void)?.(internalValue as T);
    }
    closeMenu();
  };

  const handleReset = () => {
    if (isToggleMode) {
      const resetValue = false;
      setInternalValue(resetValue);
      onCheckedChange?.(resetValue);
    } else if (multiple) {
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
    // Toggle mode without options - simple toggle
    if (isToggleMode && !hasOptions) {
      const newChecked = !checked;
      onCheckedChange?.(newChecked);
      return;
    }

    // If has options, open menu
    if (hasOptions && isArrayOfOptions) {
      openMenu(event);
      return;
    }

    // Single option toggle behavior
    if (hasOptions && !isArrayOfOptions) {
      if (isToggleMode) {
        const newChecked = !checked;
        onCheckedChange?.(newChecked);
      } else {
        const newValue = value !== undefined && value !== null ? undefined : (options as Option<T>)?.value;

        if (multiple) {
          (onChange as (val: T[]) => void)?.(newValue !== undefined ? [newValue] : []);
        } else {
          (onChange as (val?: T) => void)?.(newValue);
        }
      }
    }
  };

  const handleOptionClick = (optionValue: T) => {
    if (isToggleMode) {
      // For toggle mode, clicking an option sets it as checked
      setInternalValue(true);
    } else if (multiple) {
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
    if (isToggleMode) {
      return checked === true;
    }
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
    // Toggle mode
    if (isToggleMode) {
      if (labelOnlyAfterSelection && hasValue) {
        return label;
      }
      // Show label with checked indicator if needed
      return label;
    }

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

    if (!multiple && !isToggleMode && value !== undefined && value !== null && isArrayOfOptions) {
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
          hasOptions && isArrayOfOptions ? (
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
        onDelete={hasOptions && isArrayOfOptions ? () => {} : undefined}
        color={hasValue ? "active" : "default"}
      />

      {/* Menu */}
      {hasOptions && isArrayOfOptions && (
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
                  {multiple || isToggleMode ? (
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
