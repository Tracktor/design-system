import {
  alpha,
  Avatar,
  Backdrop,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
  Stack,
  SvgIcon,
  Theme,
  Typography,
} from "@mui/material";
import { isValidElement, ReactElement, ReactNode, useContext } from "react";
import { NavigationMenuContext, NavLinkProps, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";
import useMenu from "@/hooks/useMenu";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  NavLink?: (props: NavLinkProps) => ReactElement | null;
}

interface SecondaryMenuButtonProps {
  variant?: "button" | "icon";
  NavLink?: NavLinkItemProps["NavLink"];
}

const styles = {
  avatar: {
    background: ({ palette }: Theme) => palette.common.white,
    color: ({ palette }: Theme) => palette.getContrastText(palette.common.white),
  },
  button: {
    "&:hover": {
      background: ({ palette }: Theme) => palette.grey[50],
      cursor: "pointer",
    },
    alignSelf: "flex-start",
    borderRadius: ({ shape }: Theme) => `${shape.borderRadius}px`,
    justifyContent: "flex-start",
    minHeight: "auto",
    paddingX: 3,
    paddingY: 1,
    width: "100%",
  },
  menuItem: {
    "& > a": {
      alignItems: "center",
      color: "inherit",
      display: "flex",
      paddingX: 2,
      paddingY: 1,
      textDecoration: "none",
      width: "100%",
    },
    "& > a.active": {
      backgroundColor: ({ palette }: Theme) => alpha(palette.primary.main, palette.action.selectedOpacity),
    },
    "& > a.active:hover": {
      backgroundColor: ({ palette }: Theme) => alpha(palette.primary.main, palette.action.selectedOpacity + palette.action.hoverOpacity),
    },
    overflow: "hidden",
    padding: "0 !important",
  },
};

const DEFAULT_SECONDARY_MENU_ID = "SecondaryBottomMenu";

const SecondaryMenuButton = ({ variant = "button", ...props }: SecondaryMenuButtonProps) => {
  const { secondaryMenu, isMobile, NavLink = props.NavLink } = useContext(NavigationMenuContext);
  const { closeMenu, isMenuOpen, anchorMenu, openMenu } = useMenu();
  const firstLetterOfName = secondaryMenu?.avatar?.name?.charAt(0).toUpperCase();
  const isButton = variant === "button";
  const isIconButton = variant === "icon";

  return (
    <Box padding={isMobile ? 0 : 2} width="100%">
      {isButton && (
        <Button
          onClick={openMenu}
          startIcon={secondaryMenu?.startIcon}
          variant="text"
          sx={{
            ...styles.button,
            ...(isMobile && {
              marginBottom: 1,
              paddingX: 3,
            }),
            color: "text.primary",
          }}
        >
          <Stack spacing={2} alignItems="center" direction="row" component="span" flex={1}>
            {secondaryMenu?.avatar && (
              <Avatar
                src={secondaryMenu?.avatar?.src}
                component="span"
                alt={secondaryMenu?.avatar?.name}
                sx={styles.avatar}
                slotProps={{
                  img: {
                    referrerPolicy: "no-referrer",
                  },
                }}
              >
                {secondaryMenu?.loading ? null : firstLetterOfName}
              </Avatar>
            )}
            {isButton && (
              <Stack alignItems="flex-start" component="span">
                <Typography>{secondaryMenu?.loading ? <Skeleton width={60} /> : secondaryMenu?.label}</Typography>
                {secondaryMenu?.subLabel && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: ({ palette }: Theme) => alpha(palette.common.white, 0.7),
                    }}
                  >
                    {secondaryMenu?.subLabel}
                  </Typography>
                )}
              </Stack>
            )}
          </Stack>
          {isButton &&
            (secondaryMenu?.iconOpenMenu ||
              (isMobile && (
                <SvgIcon>
                  <path d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" />
                </SvgIcon>
              )))}
        </Button>
      )}

      {isIconButton && (
        <IconButton onClick={openMenu}>
          <Avatar
            alt={secondaryMenu?.avatar?.name}
            sx={styles.avatar}
            slotProps={{
              img: {
                referrerPolicy: "no-referrer",
              },
            }}
          >
            {firstLetterOfName}
          </Avatar>
        </IconButton>
      )}

      {secondaryMenu && (
        <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isMenuOpen} onClick={closeMenu}>
          <Menu
            id={secondaryMenu?.id || DEFAULT_SECONDARY_MENU_ID}
            anchorEl={anchorMenu}
            open={isMenuOpen}
            onClose={closeMenu}
            onChange={closeMenu}
            anchorOrigin={{
              horizontal: isMobile ? "left" : "right",
              vertical: "bottom",
            }}
            slotProps={{
              paper: {
                sx: {
                  minWidth: 260,
                },
              },
            }}
          >
            {secondaryMenu?.items?.map((item, index) => {
              // Is React Element then return it
              if (isValidElement(item)) {
                return item;
              }

              // Is Object then return NavLinkItem
              if (item && typeof item === "object" && "url" in item) {
                const { url, label, icon, active, end, state } = item;
                const key = `${url}-${label}-${index}`;

                return (
                  <MenuItem key={key} sx={styles.menuItem} onClick={closeMenu}>
                    <NavLinkItem url={url} key={key} component={NavLink} active={active} end={end} state={state}>
                      {icon && <ListItemIcon>{icon}</ListItemIcon>}
                      {label && <ListItemText>{label}</ListItemText>}
                    </NavLinkItem>
                  </MenuItem>
                );
              }

              return null;
            })}
          </Menu>
        </Backdrop>
      )}
    </Box>
  );
};

export default SecondaryMenuButton;
