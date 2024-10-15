import { Badge, Box, Checkbox, Divider, ListItemText, MenuItem, Select, SelectProps, Stack, useTheme } from "@mui/material";
import { ReactNode } from "react";

export type SelectMultipleOption = {
  id?: string | number | null;
  label?: string | number | null;
  value?: string | number | null;
};

export type SelectMultipleProps<Value = SelectMultipleOption[]> = Omit<SelectProps<Value>, "onChange" | "multiple"> & {
  options?: SelectMultipleOption[];
  onChange?(value: Value, child: ReactNode): void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const Count = ({ children }: { children?: number }) => {
  const { palette } = useTheme();

  if (children && children <= 1) {
    return null;
  }

  return (
    <Badge
      badgeContent={children}
      color={palette.mode === "light" ? "default" : "primary"}
      sx={{
        "& .MuiBadge-badge": {
          position: "relative",
          transform: "none",
        },
        alignItems: "center",
      }}
    />
  );
};

const SelectMultiple = ({ value, options, onChange, size = "small", ...props }: SelectMultipleProps) => (
  <Select
    multiple
    size={size}
    value={value}
    MenuProps={MenuProps}
    renderValue={(selected) => (
      <Stack direction="row" spacing={1}>
        <Box component="span" overflow="hidden" textOverflow="ellipsis">
          {selected?.map(({ label }) => label).join(", ")}
        </Box>
        <Count>{selected?.length}</Count>
      </Stack>
    )}
    onChange={(event, child) => {
      const { target } = event || {};

      if (typeof target.value === "string") {
        return;
      }

      onChange?.(target.value, child);
    }}
    {...props}
  >
    <MenuItem dense value="SELECT">
      <Checkbox checked={false} />
      <ListItemText primary="Tout sélectionner" />
    </MenuItem>

    <Divider component="li" />

    {options?.map((option, index) => {
      const key = `select-multiple-${index}-${option?.id}-${value}`;
      const checked = Array.isArray(value) ? value?.map(({ value: optionValue }) => optionValue)?.includes(`${option?.value}`) : false;

      return (
        <MenuItem key={key} value={option as []} dense>
          <Checkbox checked={checked} />
          <ListItemText primary={option?.label} />
        </MenuItem>
      );
    })}
  </Select>
);

export default SelectMultiple;
