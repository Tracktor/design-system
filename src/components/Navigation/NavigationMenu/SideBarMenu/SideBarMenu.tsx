import { Box, Chip, Fade, List, ListItem, Stack, Theme } from "@mui/material";
import { isValidElement, ReactElement, useContext } from "react";
import { NavigationItem, NavigationMenuContext, NavLinkProps } from "@/components/Navigation/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";

export interface SideBarMenuProps {
  NavLink?: (props: NavLinkProps) => ReactElement | null;
  translate?: (str: string) => string;
  items?: NavigationItem[];
}

const styles = {
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    height: 24,
    justifyContent: "center",
    minWidth: 24,
  },
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
      "&:hover": {
        background: ({ palette }: Theme) => palette.grey[50],
      },
      "&.active": {
        "& svg": {
          color: "text.primary",
        },
        background: ({ palette }: Theme) => palette.grey[50],
        borderColor: "divider",
        color: "text.primary",
      },
      alignItems: "center",
      borderColor: "transparent",
      borderRadius: ({ shape }: Theme) => `${shape.borderRadius}px`,
      borderStyle: "solid",
      borderWidth: 1,
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      minHeight: 42,
      paddingX: 1.25,
      paddingY: 1,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
    mt: 3,
  },
};

const SideBarMenu = ({ items, ...props }: SideBarMenuProps) => {
  const { NavLink = props.NavLink, isMobile, isCollapsed } = useContext(NavigationMenuContext);

  return (
    <Box px={2} component="nav">
      <List sx={{ ...styles.list }}>
        {items
          ?.filter((item) => {
            const shouldRenderOnMobile = !(item && typeof item === "object" && "hideOnMobile" in item && isMobile && item.hideOnMobile);
            const hasAccess = !(item && typeof item === "object" && "hasAccess" in item && !item.hasAccess);

            return shouldRenderOnMobile && hasAccess;
          })
          .map((item, index) => {
            // Is React Element then return it
            if (isValidElement(item)) {
              return item;
            }

            // Is Object then return NavLinkItem
            if (item && typeof item === "object" && "label" in item) {
              const { count, url, label, icon, active, disabled, target } = item;
              const key = `${url}-${label}-${index}`;

              return (
                <ListItem key={key} disableGutters sx={{ paddingY: 0.5 }}>
                  <NavLinkItem url={url} component={NavLink} active={active} disabled={disabled} target={target}>
                    <Stack direction="row" component="span" spacing={1.5} width="100%" alignItems="center">
                      {icon ? (
                        <Box component="div" sx={styles.iconWrapper}>
                          {icon}
                        </Box>
                      ) : (
                        isCollapsed && (
                          <Box component="div" sx={styles.iconWrapper}>
                            {typeof label === "string" ? label.charAt(0) : ""}
                          </Box>
                        )
                      )}
                      <Fade in={!isCollapsed}>
                        <Stack direction="row" justifyContent="space-between" flex={1} whiteSpace="nowrap">
                          {label}
                          {count && <Chip color="warning" size="small" label={count} variant="rounded" />}
                        </Stack>
                      </Fade>
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
