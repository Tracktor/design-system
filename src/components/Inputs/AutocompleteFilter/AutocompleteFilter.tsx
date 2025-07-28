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
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import useTranslation from "@/hooks/useTranslation";
import pxToRem from "@/utils/pxToRem";

type ItemPropsWithKey = {
  key: string | number;
  className: string;
  disabled: boolean;
  "data-item-index": number;
  tabIndex: -1;
  onDelete: (event: any) => void;
};

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
   * Variant of the Autocomplete
   */
  variant?: "standard" | "chip";
  /**
   * Width of the Autocomplete
   */
  width?: string | number;
  /**
   *  Value
   *  @default undefined
   */
  value?: AutocompleteFilterOption<Value>[] | AutocompleteFilterOption<Value> | string | null;
  /**
   *  Options to display
   *  @default undefined
   */
  options?: string[] | AutocompleteFilterOption<Value>[];
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
   *  If true, the select all options are disabled
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
    value: AutocompleteFilterOption<Value>[] | AutocompleteFilterOption<Value> | null | [] | any,
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<Value>>,
  ) => void;
  /**
   *  Locale text
   *  @default undefined
   */
  localeText?: {
    selectAll?: string;
    reset?: string;
  };
}

const checkboxStyle = { padding: 0, paddingRight: 1 };

const getChipStyle = (size: "xSmall" | "small" | "medium") => {
  if (size === "xSmall") {
    return {
      fontSize: pxToRem(12),
      height: 20,
    };
  }

  if (size === "small") {
    return {
      fontSize: pxToRem(13),
      height: 24,
    };
  }

  return {
    fontSize: pxToRem(14),
    height: 32,
  };
};

const normalizeOptions = <Value extends unknown>(
  options: string[] | AutocompleteFilterOption<Value>[] | undefined,
): AutocompleteFilterOption<Value>[] => {
  if (!options) return [];

  return options.map((option) => {
    if (typeof option === "string") {
      return {
        id: option,
        label: option,
        value: option as Value,
      };
    }
    return option;
  });
};

const getFinalValue = (value: string | AutocompleteFilterOption | AutocompleteFilterOption[] | null | undefined, multiple?: boolean) => {
  if (multiple) {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  }
  return value || null;
};

const Count = (variant?: "standard" | "chip") => {
  const { palette } = useTheme();
  const color = palette.mode === "light" ? "default" : "primary";
  const isChipVariant = variant === "chip";

  return function RenderCount(more: number) {
    return (
      <Badge
        badgeContent={`+${more}`}
        color={color}
        sx={{
          "& .MuiBadge-badge": {
            ...(isChipVariant && {
              backgroundColor: "grey.100",
              color: "text.primary",
            }),
            position: "relative",
            transform: "none",
          },
          alignItems: "center",
        }}
      />
    );
  };
};

const PaperComponent = <
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType,
  Value extends unknown,
>({
  variant,
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
  const optionsIsArrayOfStrings = Array.isArray(options) && options.every((option) => typeof option === "string");
  const headerOptions = (!optionsIsArrayOfStrings && options?.filter((option) => option?.isHeader)) || [];

  return (
    <Paper sx={{ minWidth: 250 }} {...props}>
      {multiple && !loading && (!disableSelectAll || !!headerOptions?.length) && (
        <>
          <List role="listbox">
            {!disableSelectAll && (
              <ListItem
                disablePadding
                role="option"
                onMouseDown={(e) => {
                  // Prevent blur
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
                  <ListItemText primary={localeText?.selectAll || t("selectAll")} slotProps={{ primary: { variant: "body2" } }} />
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
            {!optionsIsArrayOfStrings &&
              headerOptions?.map((option, index) => {
                const key = `header-options-${index}`;
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
    variant,
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
    renderValue,
    width,
    sx,
    size = "small",
    disableCloseOnSelect = true,
    multiple = true,
    options = [],
    slotProps,
    ...props
  }: AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, Value> & { inputValue?: string },
  ref: Ref<HTMLDivElement>,
) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalInputValue, setInternalInputValue] = useState("");
  const finalInputValue = inputValue || internalInputValue;
  const isChipVariant = variant === "chip";
  const hasValue = Array.isArray(value) ? !!value.length : value !== undefined && value !== null;
  const normalizedOptions = normalizeOptions(options);
  const finalValue = getFinalValue(value, multiple);

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
      options={normalizedOptions}
      ref={ref}
      size={size}
      disableCloseOnSelect={disableCloseOnSelect}
      onChange={handleChange}
      getLimitTagsText={Count(variant)}
      inputValue={finalInputValue}
      open={open || internalOpen}
      onOpen={() => setInternalOpen(true)}
      sx={{
        width,
        ...sx,
      }}
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
          variant,
          ...slotProps?.paper,
        } as AutocompletePaperSlotPropsOverrides,
      }}
      onInputChange={(_, newInputValue, reason) => {
        if (
          (reason === "reset" && internalOpen && !resetInputValueOnSelectOption) ||
          (reason === "selectOption" && !resetInputValueOnSelectOption) ||
          (reason === "removeOption" && !resetInputValueOnSelectOption)
        ) {
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
      renderValue={
        renderValue ||
        (multiple
          ? (selectedValue, getItemProps, ownerState) => {
              if (Array.isArray(selectedValue)) {
                return selectedValue.map((option, index) => {
                  if (ownerState?.focused) {
                    return null;
                  }

                  const filterOption = option as AutocompleteFilterOption<Value>;
                  const { key } = getItemProps({ index }) as ItemPropsWithKey;

                  return (
                    <Typography key={key} marginX={1} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                      {filterOption?.label}
                    </Typography>
                  );
                });
              }

              return null;
            }
          : undefined)
      }
      {...props}
      renderInput={(params) => {
        const getPlaceholder = () => {
          if (!internalOpen && ((Array.isArray(value) && value.length) || (!Array.isArray(value) && value))) {
            return undefined;
          }

          return placeholder;
        };

        const getAdornmentElement = () => {
          if (isChipVariant) {
            return (
              <InputAdornment
                position="end"
                sx={{
                  color: hasValue ? "text.contrast" : "text.primary",
                  position: "absolute",
                  right: 5,
                  transform: internalOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                {(finalInputValue || hasValue) && !disableClearable && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setInternalInputValue("");
                      onInputChange?.(e, "", "clear");
                      // Clear the value only if there is a value
                      if (hasValue) {
                        onChange?.(e, multiple ? [] : null, "clear");
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: pxToRem(16),
                        pointerEvents: "none",
                      },
                      ".MuiTextField-root:hover &": {
                        opacity: 1,
                      },
                      color: hasValue ? "text.contrast" : "text.primary",
                      cursor: "pointer",
                      left: "50%",
                      opacity: 0,
                      padding: "2px",
                      pointerEvents: "auto",
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "opacity 0.2s ease-in-out",
                      zIndex: 1,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}

                <ChevronIcon
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                    transition: "opacity 0.2s ease-in-out",
                    ...((finalInputValue || hasValue) &&
                      !disableClearable && {
                        ".MuiTextField-root:hover &": {
                          opacity: 0,
                        },
                      }),
                  }}
                />
              </InputAdornment>
            );
          }

          if (internalOpen) {
            return (
              <InputAdornment
                position="end"
                sx={{
                  position: "absolute",
                  right: 8,
                }}
              >
                {finalInputValue && !disableClearable && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      setInternalInputValue("");
                      onInputChange?.(e, "", "clear");
                    }}
                    sx={{ marginRight: "-3px" }}
                  >
                    <CloseIcon sx={{ fontSize: pxToRem(20) }} />
                  </IconButton>
                )}
                {isValidElement(params.InputProps?.endAdornment) &&
                  typeof params.InputProps.endAdornment === "object" &&
                  "props" in params.InputProps.endAdornment &&
                  params.InputProps.endAdornment.props &&
                  typeof params.InputProps.endAdornment.props === "object" &&
                  "children" in params.InputProps.endAdornment.props &&
                  Array.isArray(params.InputProps.endAdornment.props.children) &&
                  params.InputProps.endAdornment.props.children[1]}
              </InputAdornment>
            );
          }

          if (isValidElement(params.InputProps?.endAdornment)) {
            return params.InputProps.endAdornment;
          }

          return null;
        };

        return (
          <TextField
            sx={{
              "& .MuiInputBase-root .MuiInputBase-input": {
                flex: !multiple || (!internalOpen && !finalInputValue) || internalOpen ? 1 : 0,
                minWidth: 0,
              },
              ...(isChipVariant && {
                "& .MuiInputBase-root": {
                  backgroundColor: hasValue ? "text.primary" : "grey.100",
                  borderRadius: 20,
                  color: hasValue ? "text.contrast" : "text.primary",
                  fieldset: {
                    borderColor: "transparent !important",
                  },
                  fontSize: getChipStyle(size).fontSize,
                  height: getChipStyle(size).height,
                  input: {
                    padding: "0 !important",
                  },
                  minWidth: 90,
                  "p.MuiTypography-root": {
                    fontSize: getChipStyle(size).fontSize,
                    margin: 0,
                  },
                  paddingRight: "30px !important",
                  paddingY: "0 !important",
                },
              }),
            }}
            {...params}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: getAdornmentElement(),
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
