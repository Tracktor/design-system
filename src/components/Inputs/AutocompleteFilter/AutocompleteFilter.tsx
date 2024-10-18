import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteValue,
  Avatar,
  Badge,
  Button,
  Checkbox,
  ChipTypeMap,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/useAutocomplete/useAutocomplete";
import * as React from "react";
import { ElementType, forwardRef, HTMLAttributes, ReactNode, Ref, SyntheticEvent, useState } from "react";

export type AutocompleteFilterOption = {
  id?: string | number | null;
  label?: ReactNode;
  image?: string;
  isHeader?: boolean;
  value?: unknown;
};

export interface AutocompleteFilterProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    MuiAutocompleteProps<AutocompleteFilterOption, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "options" | "onChange" | "freeSolo"
  > {
  /**
   *  Options to display
   */
  options: AutocompleteFilterOption[];
  /**
   *  Placeholder
   */
  placeholder?: string;
  /**
   *  If true, the checkbox is disabled
   */
  disableCheckbox?: boolean;
  disableSelectAll?: boolean;
  disableReset?: boolean;
  onChange?: (
    event: SyntheticEvent,
    value: AutocompleteFilterOption[],
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption>,
  ) => void;
  localeText?: {
    selectAll?: string;
    reset?: string;
  };
}

const Count = (color?: "default" | "primary") =>
  function RenderCount(more: number) {
    return (
      <Badge
        badgeContent={`+${more}`}
        color={color}
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

const PaperComponent = <
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType,
>({
  disableSelectAll,
  localeText,
  disableReset,
  onChange,
  options,
  value,
}: Pick<
  AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent>,
  "disableSelectAll" | "localeText" | "disableReset" | "onChange" | "options" | "value"
>) =>
  function RenderPaperComponent(paperProps: HTMLAttributes<HTMLElement>) {
    const { children, ...restPaperProps } = paperProps;
    const allChecked = Array.isArray(value) ? value?.length === options?.length : false;
    const headerOptions = options?.filter((option) => option?.isHeader);

    return (
      <Paper {...restPaperProps}>
        {(!disableSelectAll || !!headerOptions.length) && (
          <>
            <List role="listbox">
              {!disableSelectAll && (
                <ListItem
                  disablePadding
                  role="option"
                  onMouseDown={(e) => {
                    // prevent blur
                    e.stopPropagation();
                    e.preventDefault();

                    if (allChecked) {
                      onChange?.(e, [], "removeOption");
                      return;
                    }

                    onChange?.(e, options, "selectOption");
                  }}
                >
                  <ListItemButton>
                    <Checkbox id="select-all-checkbox" checked={allChecked} />
                    <ListItemText primary={localeText?.selectAll || "Select all"} />
                    {!disableReset && (
                      <Button
                        variant="link"
                        size="small"
                        sx={{
                          marginX: 1,
                          textDecoration: "none",
                        }}
                        onClick={(e) => {
                          onChange?.(e, [], "removeOption");
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        {localeText?.reset || "Reset"}
                      </Button>
                    )}
                  </ListItemButton>
                </ListItem>
              )}
              {headerOptions?.map((option, index) => {
                const key = `header-options-${option?.id}-${index}`;
                const checked = Array.isArray(value) && value.some((val) => JSON.stringify(val) === JSON.stringify(option));

                return (
                  <ListItem
                    key={key}
                    disablePadding
                    onClick={(e) => {
                      if (checked) {
                        const newValue = Array.isArray(value) ? value?.filter((val) => JSON.stringify(val) !== JSON.stringify(option)) : [];

                        onChange?.(e, newValue as AutocompleteFilterOption[], "removeOption");
                        return;
                      }

                      onChange?.(e, [...(Array.isArray(value) ? value : []), option], "selectOption");
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    <ListItemButton>
                      <Checkbox checked={checked} />
                      <ListItemText primary={option?.label} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Divider />
          </>
        )}

        {children}
      </Paper>
    );
  };

const AutocompleteFilter = <
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType,
>(
  {
    onChange,
    disableCheckbox,
    placeholder,
    options,
    localeText,
    disableReset,
    disableSelectAll,
    value,
    size = "small",
    disableCloseOnSelect = true,
    multiple = true,
    ...props
  }: AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent>,
  ref: Ref<HTMLDivElement>,
) => {
  const { palette } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const badgeColor = palette.mode === "light" ? "default" : "primary";

  const handleChange = (
    event: SyntheticEvent,
    newValue: AutocompleteValue<AutocompleteFilterOption, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption>,
  ) => {
    if (newValue === null) {
      onChange?.(event, [], reason, details);
      return;
    }

    onChange?.(event, newValue as AutocompleteFilterOption[], reason, details);
  };

  return (
    <MuiAutocomplete
      value={value}
      options={options}
      ref={ref}
      size={size}
      freeSolo={false as FreeSolo}
      multiple={multiple as Multiple}
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disableCloseOnSelect={disableCloseOnSelect}
      getLimitTagsText={Count(badgeColor)}
      PaperComponent={PaperComponent({ disableReset, disableSelectAll, localeText, onChange, options, value })}
      renderOption={(optionProps, option, { selected }) => {
        if (option?.isHeader) {
          return null;
        }

        const key = `${option?.id}-${optionProps?.key}`;

        return (
          <ListItem {...optionProps} key={key}>
            {!disableCheckbox && <Checkbox checked={selected} />}
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
            {option.label}
          </ListItem>
        );
      }}
      renderTags={(tagValue, getTagProps, ownerState) =>
        tagValue.map((option, index) => {
          const { key } = getTagProps({ index });

          if (ownerState?.focused) {
            return null;
          }

          return (
            <Typography key={key} marginX={1}>
              {option?.label}
            </Typography>
          );
        })
      }
      {...props}
      renderInput={(params) => {
        const getPlaceholder = () => {
          if (!isFocused && ((Array.isArray(value) && value.length) || (!Array.isArray(value) && value))) {
            return undefined;
          }

          if (value) {
            return placeholder;
          }

          return undefined;
        };

        return <TextField {...params} placeholder={getPlaceholder()} />;
      }}
    />
  );
};

export default forwardRef(AutocompleteFilter);
