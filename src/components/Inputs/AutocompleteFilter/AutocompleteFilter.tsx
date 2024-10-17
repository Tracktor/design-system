import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  Avatar,
  Badge,
  Button,
  Checkbox,
  ChipTypeMap,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { ElementType, forwardRef, ReactNode, Ref } from "react";

export type AutocompleteFilterOption = {
  id?: string | number | null;
  label?: ReactNode;
  image?: string;
  value?: unknown;
};

export interface AutocompleteFilterProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    MuiAutocompleteProps<AutocompleteFilterOption, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "renderInput" | "options"
  > {
  renderInput: MuiAutocompleteProps<AutocompleteFilterOption, Multiple, DisableClearable, FreeSolo>["renderInput"];
  options: AutocompleteFilterOption[];
  placeholder?: string;
  disableCheckbox?: boolean;
  disableSelectAll?: boolean;
  disableReset?: boolean;
  localeText?: {
    selectAll?: string;
    reset?: string;
  };
}

const Count = (more: number) => (
  <Badge
    badgeContent={`+${more}`}
    color="default"
    sx={{
      "& .MuiBadge-badge": {
        position: "relative",
        transform: "none",
      },
      alignItems: "center",
    }}
  />
);

const AutocompleteFilter = <
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends ElementType,
>(
  {
    onChange,
    disableCheckbox,
    placeholder,
    localeText,
    disableReset,
    disableSelectAll,
    size = "small",
    freeSolo,
    disableCloseOnSelect = true,
    multiple = true,
    ...props
  }: AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent>,
  ref: Ref<HTMLDivElement>,
) => (
  <MuiAutocomplete
    ref={ref}
    size={size}
    disableCloseOnSelect={disableCloseOnSelect}
    multiple={multiple as Multiple}
    getLimitTagsText={Count}
    renderOption={(optionProps, option, { selected }) => {
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
    renderTags={(value, getTagProps, ownerState) =>
      value.map((option, index) => {
        const { key } = getTagProps({ index });

        if (ownerState?.focused) {
          return null;
        }

        return (
          <Typography key={key} marginLeft={1}>
            {option?.label}
          </Typography>
        );
      })
    }
    PaperComponent={(paperProps) => {
      const { children, ...restPaperProps } = paperProps;
      return (
        <Paper {...restPaperProps} sx={{ paddingTop: 1 }}>
          {!disableSelectAll && (
            <ListItem
              role="listbox"
              component="div"
              onMouseDown={(e) => e.preventDefault()} // prevent blur
            >
              <Checkbox id="select-all-checkbox" checked={false} />
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
                    e.stopPropagation();
                    e.preventDefault();
                    onChange?.(e, [], "removeOption");
                  }}
                >
                  {localeText?.reset || "Reset"}
                </Button>
              )}
            </ListItem>
          )}

          <Divider />
          {children}
        </Paper>
      );
    }}
    {...props}
    renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
    slotProps={{}}
  />
);

export default forwardRef(AutocompleteFilter);
