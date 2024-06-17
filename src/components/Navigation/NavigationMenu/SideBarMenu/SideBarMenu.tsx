import { Box, Chip, List, ListItem, Stack, Theme } from "@mui/material";
import { isValidElement, ReactElement, useContext } from "react";
import { NavigationItem, NavigationMenuContext, NavLinkProps } from "@/components/Navigation/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";

export interface SideBarMenuProps {
  NavLink?: (props: NavLinkProps) => ReactElement | null;
  translate?: (str: string) => string;
  items?: NavigationItem[];
}

const styles = {
  list: {
    "& [aria-disabled='true']": {
      cursor: "default",
    },
    "& button": {
      background: "none !important",
    },
    "& button, & a": {
      color: "text.primary",
    },
    "& button, & a, & [aria-disabled='true']": {
      "& svg": {
        color: "text.secondary",
      },
      "&.active": {
        "& svg": {
          color: "text.primary",
        },
        background: ({ palette }: Theme) => palette.grey[50],
        borderColor: "divider",
        color: "text.primary",
      },
      "&:hover": {
        background: ({ palette }: Theme) => palette.grey[50],
      },
      alignItems: "center",
      borderColor: "transparent",
      borderRadius: ({ shape }: Theme) => `${shape.borderRadius}px`,
      borderStyle: "solid",
      borderWidth: 1,
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      paddingX: 3,
      paddingY: 1,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
    mt: 3,
  },
};

const SideBarMenu = ({ items, ...props }: SideBarMenuProps) => {
  const { NavLink = props.NavLink } = useContext(NavigationMenuContext);

  return (
    <Box px={2} component="nav">
      <List sx={{ ...styles.list }}>
        {items?.map((item, index) => {
          // Is React Element then return it
          if (isValidElement(item)) {
            return item;
          }

          // Is Object then return NavLinkItem
          if (item && typeof item === "object" && "label" in item) {
            const { count, url, label, icon, active, disabled } = item;
            const key = `${url}-${label}-${index}`;

            return (
              <ListItem key={key} disableGutters sx={{ paddingY: 0.5 }}>
                <NavLinkItem url={url} component={NavLink} active={active} disabled={disabled}>
                  <Stack direction="row" component="span" spacing={1.5} width="100%" alignItems="center">
                    {icon && (
                      <Box component="span" display="flex" alignItems="center">
                        {icon}
                      </Box>
                    )}
                    <Stack direction="row" justifyContent="space-between" flex={1}>
                      {label}
                      {count && <Chip color="warning" size="small" label={count} variant="rounded" />}
                    </Stack>
                  </Stack>
                </NavLinkItem>
              </ListItem>
            );
          }

          return null;
        })}
      </List>
    </Box>
  );
};

export default SideBarMenu;
