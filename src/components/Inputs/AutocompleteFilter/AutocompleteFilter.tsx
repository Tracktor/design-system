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
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  PaperProps,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/useAutocomplete/useAutocomplete";
import * as React from "react";
import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  JSXElementConstructor,
  ReactNode,
  Ref,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

export type AutocompleteFilterOption<T = unknown> = {
  id?: string | number | null;
  label?: ReactNode;
  image?: string;
  isHeader?: boolean;
  value?: T;
};

export interface AutocompleteFilterProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
  OptionValue extends unknown = unknown,
> extends Omit<
    MuiAutocompleteProps<AutocompleteFilterOption<OptionValue>, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "options" | "onChange" | "freeSolo" | "renderInput"
  > {
  /**
   *  Options to display
   */
  options?: AutocompleteFilterOption<OptionValue>[];
  /**
   *  Placeholder
   */
  placeholder?: string;
  /**
   *  If true, the checkbox is disabled
   *  @default false
   */
  disableCheckbox?: boolean;
  /**
   *  If true, the select all option is disabled
   *  @default false
   */
  disableSelectAll?: boolean;
  /**
   *  If true, the reset option is disabled
   *  @default false
   */
  disableReset?: boolean;
  /**
   *  If true, the input value is reset when an option is selected
   *  Works only with controlled input
   *  @default false
   */
  resetInputValueOnSelectOption?: boolean;
  /**
   *  Callback when the value change
   * @param event
   * @param value
   * @param reason
   * @param details
   */
  onChange?: (
    event: SyntheticEvent,
    value: AutocompleteFilterOption<OptionValue>[],
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<OptionValue>>,
  ) => void;
  /**
   *  Locale text
   */
  localeText?: {
    selectAll?: string;
    reset?: string;
  };
}

const locales: Record<string, Record<string, string>> = {
  en: {
    reset: "Reset",
    selectAll: "Select all",
  },
  fr: {
    reset: "Réinitialiser",
    selectAll: "Tout sélectionner",
  },
};

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
  OptionValue extends unknown,
>({
  children,
  disableSelectAll,
  localeText,
  disableReset,
  onChange,
  loading,
  options,
  value,
  ...props
}: PaperProps &
  Pick<
    AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, OptionValue>,
    "disableSelectAll" | "localeText" | "disableReset" | "onChange" | "options" | "value" | "loading"
  >) => {
  const { language } = useContext(ThemeContext);
  const allChecked = Array.isArray(value) ? value?.length === options?.length : false;
  const headerOptions = options?.filter((option) => option?.isHeader);
  const selectAllLabel = localeText?.selectAll || locales[language || "en"].selectAll;
  const resetLabel = localeText?.reset || locales[language || "en"].reset;

  return (
    <Paper {...props}>
      {!loading && (!disableSelectAll || !!headerOptions?.length) && (
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

                  onChange?.(e, options || [], "selectOption");
                }}
              >
                <ListItemButton disableRipple>
                  <Checkbox id="select-all-checkbox" checked={allChecked} />
                  <ListItemText primary={selectAllLabel} />
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
                      {resetLabel}
                    </Button>
                  )}
                </ListItemButton>
              </ListItem>
            )}
            {headerOptions?.map((option, index) => {
              const key = `header-options-${option?.id}-${index}`;
              const checked =
                Array.isArray(value) &&
                value.some(
                  (val) =>
                    JSON.stringify(val) === JSON.stringify(option) ||
                    (val && typeof val === "object" && "id" in val && val?.id === option?.id),
                );

              return (
                <ListItem
                  key={key}
                  disablePadding
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    if (checked) {
                      const newValue = Array.isArray(value)
                        ? value?.filter(
                            (val) =>
                              !(
                                JSON.stringify(val) === JSON.stringify(option) ||
                                (val && typeof val === "object" && "id" in val && val?.id === option?.id)
                              ),
                          )
                        : [];

                      onChange?.(e, newValue as AutocompleteFilterOption<OptionValue>[], "removeOption");
                      return;
                    }

                    onChange?.(e, [...(Array.isArray(value) ? value : []), option], "selectOption");
                  }}
                >
                  <ListItemButton disableRipple>
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
  OptionValue extends unknown,
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
    onFocus,
    onBlur,
    onInputChange,
    inputValue,
    disableClearable,
    loading,
    resetInputValueOnSelectOption,
    size = "small",
    disableCloseOnSelect = true,
    multiple = true,
    slotProps,
    ...props
  }: AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, OptionValue> & { inputValue?: string },
  ref: Ref<HTMLDivElement>,
) => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const [internalInputValue, setInternalInputValue] = useState("");
  const badgeColor = palette.mode === "light" ? "default" : "primary";
  const finalInputValue = inputValue || internalInputValue;

  const handleChange = (
    event: SyntheticEvent,
    newValue: AutocompleteValue<AutocompleteFilterOption<OptionValue>, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<OptionValue>>,
  ) => {
    if (newValue === null) {
      onChange?.(event, [], reason, details);
      return;
    }

    onChange?.(event, newValue as AutocompleteFilterOption<OptionValue>[], reason, details);
  };

  return (
    <MuiAutocomplete
      PaperComponent={PaperComponent as JSXElementConstructor<HTMLAttributes<HTMLElement>>} // TODO: when we upgrade to mui v6, we can remove this cast and replace with AutocompletePaperSlotPropsOverrides
      value={value}
      loading={loading}
      options={options || []}
      ref={ref}
      size={size}
      freeSolo={false as FreeSolo}
      multiple={multiple as Multiple}
      disableClearable={disableClearable as DisableClearable}
      onChange={handleChange}
      disableCloseOnSelect={disableCloseOnSelect}
      getLimitTagsText={Count(badgeColor)}
      inputValue={finalInputValue}
      open={open}
      onOpen={() => setOpen(true)}
      slotProps={{
        ...slotProps,
        paper: {
          disableReset,
          disableSelectAll,
          loading,
          localeText,
          onChange,
          options,
          value,
          ...slotProps?.paper,
        } as PaperProps,
      }}
      onInputChange={(_, newInputValue, reason) => {
        if (reason === "reset" && open && !resetInputValueOnSelectOption) {
          return;
        }

        if (!inputValue) {
          setInternalInputValue(newInputValue);
        }

        onInputChange?.(_, newInputValue, reason);
      }}
      onFocus={(event) => {
        setOpen(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setOpen(false);
        onBlur?.(event);
      }}
      renderOption={(optionProps, option, { selected }) => {
        if (loading) {
          return null;
        }

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
            <Typography key={key} marginX={1} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
              {option?.label}
            </Typography>
          );
        })
      }
      {...props}
      renderInput={(params) => {
        const getPlaceholder = () => {
          if (!open && ((Array.isArray(value) && value.length) || (!Array.isArray(value) && value))) {
            return undefined;
          }

          return placeholder;
        };

        const EndAdornmentElement = isValidElement(params.InputProps?.endAdornment) ? params.InputProps?.endAdornment : null;

        return (
          <TextField
            sx={{
              ".MuiInputBase-root .MuiInputBase-input": {
                flex: (!open && !finalInputValue) || open ? 1 : 0,
                minWidth: 0,
              },
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: open ? (
                <InputAdornment
                  position="end"
                  sx={{
                    position: "absolute",
                    right: 9,
                  }}
                >
                  {open && finalInputValue && !disableClearable && (
                    <IconButton size="small" onClick={() => setInternalInputValue("")}>
                      <CloseIcon />
                    </IconButton>
                  )}
                  {EndAdornmentElement?.props.children[1]}
                </InputAdornment>
              ) : (
                EndAdornmentElement
              ),
            }}
            placeholder={getPlaceholder()}
          />
        );
      }}
    />
  );
};

export default forwardRef(AutocompleteFilter);
