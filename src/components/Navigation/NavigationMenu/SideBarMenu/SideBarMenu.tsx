import { alpha, Box, Chip, List, ListItem, Stack, Theme } from "@mui/material";
import { isValidElement, ReactElement, ReactNode, useContext } from "react";
import { NavigationItem, NavigationMenuContext, NavLinkProps } from "@/components/Navigation/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";
import TextFieldSearch from "@/components/Navigation/NavigationMenu/TextFieldSearch";

export interface SideBarMenuProps {
  NavLink?: (props: NavLinkProps) => ReactElement | null;
  SearchField?: ReactNode;
  translate?: (str: string) => string;
  disableSearch?: boolean;
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
      color: ({ palette }: Theme) => palette.grey["200"],
    },
    "& button, & a, & [aria-disabled='true']": {
      "& svg": {
        color: ({ palette }: Theme) => palette.grey["200"],
        marginRight: 1,
        transition: ".2s",
      },
      "&.active": {
        "& svg": {
          color: ({ palette }: Theme) => palette.primary.contrastText,
        },
        background: ({ palette }: any) => (palette.mode === "dark" ? palette.primary.dark : alpha(palette.primary.main, 0.3)),
        borderRadius: "4px",
        color: ({ palette }: Theme) => palette.primary.contrastText,
      },
      "&:hover svg": {
        transform: "scale(1.2)",
      },
      alignItems: "center",
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      paddingX: 3,
      paddingY: 2,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
    mt: 3,
  },
};

const SideBarMenu = ({ items, ...props }: SideBarMenuProps) => {
  const { disableSearch = props.disableSearch, NavLink = props.NavLink, isMobile } = useContext(NavigationMenuContext);

  return (
    <Box px={isMobile ? 3 : 2} component="nav">
      {!disableSearch && <TextFieldSearch />}
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
              <ListItem key={key} disablePadding disableGutters>
                <NavLinkItem url={url} component={NavLink} active={active} disabled={disabled}>
                  {icon}
                  <Stack direction="row" justifyContent="space-between" flex={1}>
                    {label}
                    {count && <Chip color="warning" size="small" label={count} variant="rounded" />}
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
