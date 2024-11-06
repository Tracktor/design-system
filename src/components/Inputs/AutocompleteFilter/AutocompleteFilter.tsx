import {
  Autocomplete as MuiAutocomplete,
  AutocompletePaperSlotPropsOverrides,
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
  useState,
} from "react";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import useTranslation from "@/hooks/useTranslation";
import pxToRem from "@/utils/pxToRem";

export type AutocompleteFilterOption<T = unknown> = {
  id?: string | number | null;
  label?: ReactNode;
  image?: string | "letter" | "avatar";
  isHeader?: boolean;
  value?: T;
};

export interface AutocompleteFilterProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
  Value extends unknown = unknown,
> extends Omit<
    MuiAutocompleteProps<AutocompleteFilterOption<Value>, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "options" | "onChange" | "freeSolo" | "renderInput" | "value"
  > {
  /**
   *  Value
   *  @default null | []
   */
  value: AutocompleteFilterOption<Value>[] | AutocompleteFilterOption<Value> | null;
  /**
   *  Options to display
   */
  options?: AutocompleteFilterOption<Value>[];
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
    value: any,
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<Value>>,
  ) => void;
  /**
   *  Locale text
   */
  localeText?: {
    selectAll?: string;
    reset?: string;
  };
}

const checkboxStyle = { padding: 0, paddingRight: 1 };

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
  Value extends unknown,
>({
  children,
  disableSelectAll,
  localeText,
  disableReset,
  onChange,
  loading,
  options,
  value,
  multiple,
  ...props
}: PaperProps &
  Pick<
    AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, Value>,
    "disableSelectAll" | "localeText" | "disableReset" | "onChange" | "options" | "value" | "loading" | "multiple"
  >) => {
  const { t } = useTranslation();
  const allChecked = Array.isArray(value) ? value?.length === options?.length : false;
  const headerOptions = options?.filter((option) => option?.isHeader);

  return (
    <Paper {...props}>
      {multiple && !loading && (!disableSelectAll || !!headerOptions?.length) && (
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
                  <Checkbox disableRipple id="select-all-checkbox" checked={allChecked} sx={checkboxStyle} />
                  <ListItemText primary={localeText?.selectAll || t("selectAll")} primaryTypographyProps={{ variant: "body2" }} />
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
                      <Typography variant="body2">{localeText?.reset || t("reset")}</Typography>
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

                      onChange?.(e, newValue as AutocompleteFilterOption<Value>[], "removeOption");
                      return;
                    }

                    onChange?.(e, [...(Array.isArray(value) ? value : []), option], "selectOption");
                  }}
                >
                  <ListItemButton disableRipple>
                    <Checkbox disableRipple checked={checked} sx={checkboxStyle} />
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
  Value extends unknown,
>(
  {
    onChange,
    disableCheckbox,
    placeholder,
    localeText,
    disableReset,
    disableSelectAll,
    value,
    onFocus,
    onBlur,
    open,
    onInputChange,
    inputValue,
    disableClearable,
    loading,
    resetInputValueOnSelectOption,
    renderOption,
    renderTags,
    size = "small",
    disableCloseOnSelect = true,
    multiple = true,
    options = [],
    slotProps,
    ...props
  }: AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, Value> & { inputValue?: string },
  ref: Ref<HTMLDivElement>,
) => {
  const { palette } = useTheme();
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalInputValue, setInternalInputValue] = useState("");
  const badgeColor = palette.mode === "light" ? "default" : "primary";
  const finalInputValue = inputValue || internalInputValue;
  const finalValue = multiple ? value || [] : value || null;

  const handleChange = (
    event: SyntheticEvent,
    newValue: AutocompleteValue<AutocompleteFilterOption<Value>, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<Value>>,
  ) => {
    if (newValue === null) {
      onChange?.(event, multiple ? [] : null, reason, details);
      return;
    }

    onChange?.(event, newValue as AutocompleteFilterOption<Value>[], reason, details);

    if (!disableCloseOnSelect || !multiple) {
      setInternalOpen(false);
    }
  };

  return (
    <MuiAutocomplete
      freeSolo={false as FreeSolo}
      multiple={multiple as Multiple}
      disableClearable={disableClearable as DisableClearable}
      value={finalValue as AutocompleteValue<AutocompleteFilterOption<Value>, Multiple, DisableClearable, FreeSolo>}
      loading={loading}
      options={options}
      ref={ref}
      size={size}
      disableCloseOnSelect={disableCloseOnSelect}
      onChange={handleChange}
      getLimitTagsText={Count(badgeColor)}
      inputValue={finalInputValue}
      open={open || internalOpen}
      onOpen={() => setInternalOpen(true)}
      slots={{
        paper: PaperComponent as JSXElementConstructor<HTMLAttributes<HTMLElement>>,
      }}
      slotProps={{
        ...slotProps,
        paper: {
          disableReset,
          disableSelectAll,
          loading,
          localeText,
          multiple,
          onChange,
          options,
          value,
          ...slotProps?.paper,
        } as AutocompletePaperSlotPropsOverrides,
      }}
      onInputChange={(_, newInputValue, reason) => {
        if (reason === "reset" && internalOpen && !resetInputValueOnSelectOption) {
          return;
        }

        if (!inputValue) {
          setInternalInputValue(newInputValue);
        }

        onInputChange?.(_, newInputValue, reason);
      }}
      onFocus={(event) => {
        setInternalOpen(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setInternalOpen(false);
        onBlur?.(event);
      }}
      renderOption={
        renderOption ||
        ((optionProps, option, { selected }) => {
          if (loading || option?.isHeader) {
            return null;
          }

          const key = `${option?.id}-${optionProps?.key}`;

          return (
            <ListItem {...optionProps} key={key}>
              {!disableCheckbox && <Checkbox disableRipple checked={selected} sx={checkboxStyle} />}
              {option?.image && (
                <ListItemAvatar
                  sx={{
                    height: 24,
                    marginRight: 1,
                    minWidth: "auto",
                    width: 24,
                  }}
                >
                  <Avatar variant="rounded" src={option?.image} sx={{ height: 24, width: 24 }}>
                    {option?.image === "letter" && typeof option?.label === "string" && option?.label?.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
              )}
              {typeof option?.label === "string" ? (
                <Typography variant="body2" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" title={option?.label}>
                  {option.label}
                </Typography>
              ) : (
                option?.label
              )}
            </ListItem>
          );
        })
      }
      renderTags={
        renderTags ||
        ((tagValue, getTagProps, ownerState) => {
          if (Array.isArray(tagValue)) {
            return tagValue.map((option, index) => {
              const { key } = getTagProps({ index });

              if (ownerState?.focused) {
                return null;
              }

              return (
                <Typography key={key} marginX={1} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                  {option?.label}
                </Typography>
              );
            });
          }

          return null;
        })
      }
      {...props}
      renderInput={(params) => {
        const getPlaceholder = () => {
          if (!internalOpen && ((Array.isArray(value) && value.length) || (!Array.isArray(value) && value))) {
            return undefined;
          }

          return placeholder;
        };

        const EndAdornmentElement = isValidElement(params.InputProps?.endAdornment) ? params.InputProps?.endAdornment : null;

        return (
          <TextField
            sx={{
              ".MuiInputBase-root .MuiInputBase-input": {
                flex: !multiple || (!internalOpen && !finalInputValue) || internalOpen ? 1 : 0,
                minWidth: 0,
              },
            }}
            {...params}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: internalOpen ? (
                  <InputAdornment
                    position="end"
                    sx={{
                      position: "absolute",
                      right: 9,
                    }}
                  >
                    {internalOpen && finalInputValue && !disableClearable && (
                      <IconButton size="small" onClick={() => setInternalInputValue("")} sx={{ marginRight: "-3px" }}>
                        <CloseIcon sx={{ fontSize: pxToRem(20) }} />
                      </IconButton>
                    )}
                    {EndAdornmentElement?.props.children[1]}
                  </InputAdornment>
                ) : (
                  EndAdornmentElement
                ),
              },
            }}
            placeholder={getPlaceholder()}
          />
        );
      }}
    />
  );
};

export default forwardRef(AutocompleteFilter);
