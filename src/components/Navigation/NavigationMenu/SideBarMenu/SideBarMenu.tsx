import { Box, Chip, List, ListItem, Stack, Theme } from "@mui/material";
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
    "& button": {
      background: "none !important",
    },
    "& button, & a": {
      "& svg": {
        marginRight: 1,
        transition: ".2s",
      },
      "&.active": {
        "& svg": {
          color: ({ palette }: Theme) => palette.primary.contrastText,
        },
        background: ({ palette }: any) => palette.primary.dark,
        borderRadius: "4px",
        color: ({ palette }: Theme) => palette.primary.contrastText,
      },
      "&:hover svg": {
        transform: "scale(1.2)",
      },
      alignItems: "center",
      color: ({ palette }: Theme) => palette.grey["200"],
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      paddingX: 3,
      paddingY: 2,
      textAlign: "left",
      textDecoration: "none",
      textTransform: "capitalize",
      width: "100%",
    },
    mt: 3,
  },
};

const SideBarMenu = ({ items, ...props }: SideBarMenuProps) => {
  const {
    disableSearch = props.disableSearch,
    SearchField = props.SearchField,
    NavLink = props.NavLink,
  } = useContext(NavigationMenuContext);

  return (
    <Box px={2} component="nav">
      {!disableSearch && (SearchField || <TextFieldSearch fullWidth />)}
      <List sx={{ ...styles.list }}>
        {items?.map((item, index) => {
          // Is React Element then return it
          if (isValidElement(item)) {
            return item;
          }

          // Is Object then return NavLinkItem
          if (item && typeof item === "object" && "url" in item) {
            const { count, url, label, icon, active } = item;
            const key = `${url}-${label}-${index}`;

            return (
              <ListItem key={key} disablePadding disableGutters>
                <NavLinkItem url={url} component={NavLink} active={active}>
                  {icon}
                  <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
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
