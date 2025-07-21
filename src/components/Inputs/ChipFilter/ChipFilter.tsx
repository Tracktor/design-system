import { Button, Chip, ChipProps, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Radio, Stack } from "@mui/material";
import { MouseEvent, useState } from "react";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import useMenu from "@/hooks/useMenu";
import useTranslation from "@/hooks/useTranslation";

type Value = string | undefined;

type Option = {
  id?: string | number;
  label: string;
  value: Value;
};

export interface ChipFilterProps {
  /**
   * Label of the chip filter
   */
  label?: ChipProps["label"];
  /**
   * Label for the menu
   */
  labelMenu?: string;
  /**
   * Size of the chip filter
   * @default "medium"
   */
  size?: ChipProps["size"];
  /**
   * Variant of the chip filter
   */
  variant?: ChipProps["variant"];
  /**
   * Disabled state of the chip filter
   */
  disabled?: ChipProps["disabled"];
  /**
   * Value of the chip filter
   */
  value?: Option["value"];
  /**
   * Function to handle change event
   * @param value
   */
  onChange?: (value: Value) => void;
  /**
   * Options for the chip filter
   */
  options?: Option | Option[];
}

const ChipFilter = ({ label, value, onChange, options, variant, disabled, labelMenu, size = "medium" }: ChipFilterProps) => {
  const [internalValue, setInternalValue] = useState<Option["value"]>(value);
  const { anchorMenu, openMenu, isMenuOpen, closeMenu } = useMenu();
  const { t } = useTranslation();
  const isArrayOfOptions = Array.isArray(options);

  const handleApply = () => {
    if (internalValue) {
      onChange?.(internalValue);
    }
    closeMenu();
  };

  const handleReset = () => {
    setInternalValue(undefined);
    onChange?.(undefined);
    closeMenu();
  };

  const HandleClickChip = (event: MouseEvent<HTMLDivElement>) => {
    if (isArrayOfOptions) {
      openMenu(event);
      return;
    }

    if (!isArrayOfOptions) {
      onChange?.(value ? undefined : options?.value);
    }
  };

  return (
    <>
      {/* Chip */}
      <Chip
        disabled={disabled}
        size={size}
        label={label}
        variant={variant}
        deleteIcon={isArrayOfOptions ? <ChevronIcon fontSize={size === "medium" ? "medium" : "small"} /> : undefined}
        onClick={HandleClickChip}
        onDelete={isArrayOfOptions ? () => {} : undefined}
        color={value ? "active" : "default"}
      />

      {/* Menu */}
      {isArrayOfOptions && (
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
          {options?.map((option, index) => {
            const key = `${option.id || option.value}-${index}`;

            return (
              <MenuItem
                key={key}
                onClick={() => {
                  setInternalValue(option.value);
                }}
              >
                <ListItemIcon>
                  <Radio disableRipple checked={internalValue === option.value} sx={{ padding: 0 }} />
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
