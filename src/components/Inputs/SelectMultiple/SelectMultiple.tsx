import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { forwardRef, ReactNode, Ref } from "react";

export type SelectMultipleOption = {
  id?: string | number | null;
  label?: ReactNode;
  image?: string;
  value?: string | number | null;
};

export type SelectMultipleProps<Value = SelectMultipleOption[]> = Omit<SelectProps<Value>, "onChange" | "multiple"> & {
  disableSelectAll?: boolean;
  disableReset?: boolean;
  options?: SelectMultipleOption[];
  width?: number | string;
  onChange?(value: Value, child?: ReactNode): void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
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

const SelectMultiple = (
  {
    disableSelectAll,
    disableReset,
    options,
    onChange,
    fullWidth,
    placeholder,
    disabled,
    displayEmpty = true,
    width = 300,
    size = "small",
    value = [],
    ...props
  }: SelectMultipleProps,
  ref: Ref<HTMLDivElement>,
) => (
  <FormControl fullWidth={fullWidth} sx={{ ...(!fullWidth && { width }) }}>
    <Select
      multiple
      fullWidth
      displayEmpty={displayEmpty}
      disabled={disabled || !options?.length}
      MenuProps={MenuProps}
      size={size}
      value={value}
      ref={ref}
      input={<OutlinedInput placeholder="Allo" />}
      placeholder="Cidade"
      renderValue={(selected) => {
        if (!selected?.length) {
          return <Typography color="textSecondary">{placeholder}</Typography>;
        }

        return (
          <Stack direction="row" spacing={1}>
            <Box component="span" overflow="hidden" textOverflow="ellipsis">
              {selected?.map(({ label }) => label).join(", ")}
            </Box>
            <Count>{selected?.length}</Count>
          </Stack>
        );
      }}
      onChange={(event, child) => {
        event.stopPropagation();
        const { value: newValue } = event.target || {};

        if (typeof newValue === "string") {
          return;
        }

        // If select all is selected
        if ((newValue as string[]).includes("SELECT_ALL")) {
          onChange?.(value.length === options?.length ? [] : options || [], child);
          return;
        }

        onChange?.(newValue, child);
      }}
      {...props}
    >
      {/* Select all */}
      {!disableSelectAll && !!options?.length && (
        <MenuItem dense disableGutters value="SELECT_ALL">
          <Checkbox checked={value.length === options?.length} />
          <ListItemText primary="Tout sélectionner" />
          {/* Reset */}
          {!disableReset && (
            <Button
              variant="link"
              size="small"
              sx={{
                marginX: 1,
                textDecoration: "none",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onChange?.([]);
              }}
            >
              Reset
            </Button>
          )}
        </MenuItem>
      )}

      {/* Divider */}
      {!disableSelectAll && !!options?.length && <Divider component="li" />}

      {options?.map((option, index) => {
        const key = `select-multiple-${index}-${option?.id}-${value}`;
        const checked = Array.isArray(value) ? value?.map(({ value: optionValue }) => optionValue)?.includes(`${option?.value}`) : false;

        return (
          <MenuItem dense disableGutters key={key} value={option as []}>
            <Checkbox checked={checked} />
            {/* Image */}
            {option?.image && (
              <ListItemAvatar
                sx={{
                  height: 24,
                  marginRight: 1,
                  minWidth: "auto",
                  width: 24,
                }}
              >
                <Avatar variant="rounded" src={option?.image} sx={{ height: 24, width: 24 }} />
              </ListItemAvatar>
            )}
            <ListItemText primary={option?.label} />
          </MenuItem>
        );
      })}
    </Select>
  </FormControl>
);

export default forwardRef(SelectMultiple);
