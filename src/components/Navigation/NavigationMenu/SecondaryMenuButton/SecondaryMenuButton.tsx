import {
  alpha,
  Avatar,
  Button,
  darken,
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
    background: (theme: Theme) => theme.palette.common.white,
    color: (theme: Theme) => theme.palette.getContrastText(theme.palette.common.white),
  },
  button: {
    "&:hover": {
      cursor: "pointer",
    },
    borderRadius: 0,
    borderTop: (theme: Theme) =>
      `solid 1px ${theme.palette.mode === "dark" ? theme.palette.divider : alpha(theme.palette.common.white, 0.12)}`,
    justifyContent: "space-between",
    paddingX: 3,
    paddingY: 2,
    textTransform: "capitalize",
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
      backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    },
    "& > a.active:hover": {
      backgroundColor: (theme: Theme) =>
        alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    },
    overflow: "hidden",
    padding: "0 !important",
  },
};

const DEFAULT_SECONDARY_MENU_ID = "SecondaryBottomMenu";

const SecondaryMenuButton = ({ variant = "button", ...props }: SecondaryMenuButtonProps) => {
  const { backgroundCoefficient, secondaryMenu, isMobile, NavLink = props.NavLink } = useContext(NavigationMenuContext);
  const { closeMenu, isMenuOpen, anchorMenu, openMenu } = useMenu();
  const firstLetterOfName = secondaryMenu?.avatar?.name?.charAt(0).toUpperCase();
  const isButton = variant === "button";
  const isIconButton = variant === "icon";

  return (
    <>
      {isButton && (
        <Button
          onClick={openMenu}
          sx={{
            ...styles.button,
            ...(isMobile && {
              borderTop: "none",
              padding: 0,
              width: "auto",
            }),
            color: ({ palette }: Theme) => {
              const backgroundColor =
                palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);

              return palette.getContrastText(backgroundColor);
            },
          }}
        >
          <Stack spacing={2} alignItems="center" direction="row">
            {secondaryMenu?.avatar && (
              <Avatar
                alt={secondaryMenu?.avatar?.name}
                sx={styles.avatar}
                imgProps={{
                  referrerPolicy: "no-referrer",
                }}
              >
                {secondaryMenu?.loading ? null : firstLetterOfName}
              </Avatar>
            )}
            {isButton && !isMobile && (
              <Stack alignItems="flex-start">
                <Typography>{secondaryMenu?.loading ? <Skeleton width={60} /> : secondaryMenu?.label}</Typography>
                {secondaryMenu?.subLabel && (
                  <Typography variant="caption" color="text.secondary">
                    {secondaryMenu?.subLabel}
                  </Typography>
                )}
              </Stack>
            )}
          </Stack>
          {isButton &&
            !isMobile &&
            (secondaryMenu?.iconOpenMenu || (
              <SvgIcon>
                <path
                  d="M12 8.25C13.1 8.25 14 7.35 14 6.25C14 5.15 13.1 4.25 12 4.25C10.9 4.25 10 5.15 10 6.25C10 7.35 10.9 8.25 12 8.25ZM12 10.25C10.9 10.25 10 11.15 10 12.25C10 13.35 10.9 14.25 12 14.25C13.1 14.25 14 13.35 14 12.25C14 11.15 13.1 10.25 12 10.25ZM12 16.25C10.9 16.25 10 17.15 10 18.25C10 19.35 10.9 20.25 12 20.25C13.1 20.25 14 19.35 14 18.25C14 17.15 13.1 16.25 12 16.25Z"
                  fill="white"
                />
              </SvgIcon>
            ))}
        </Button>
      )}

      {isIconButton && (
        <IconButton onClick={openMenu}>
          <Avatar
            alt={secondaryMenu?.avatar?.name}
            sx={styles.avatar}
            imgProps={{
              referrerPolicy: "no-referrer",
            }}
          >
            {firstLetterOfName}
          </Avatar>
        </IconButton>
      )}

      <Menu
        id={secondaryMenu?.id || DEFAULT_SECONDARY_MENU_ID}
        anchorEl={anchorMenu}
        open={isMenuOpen}
        onClose={closeMenu}
        onChange={closeMenu}
        anchorOrigin={{
          horizontal: "right",
          vertical: isButton ? "top" : "bottom",
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
    </>
  );
};

export default SecondaryMenuButton;
