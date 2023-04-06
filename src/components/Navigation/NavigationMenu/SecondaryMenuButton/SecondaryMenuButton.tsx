import { Avatar, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, SvgIcon, Theme, Typography } from "@mui/material";
import { isValidElement, useContext } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import useMenu from "@/hooks/useMenu";

interface ProfileButtonProps {
  variant?: "button" | "icon";
}

const styles = {
  avatar: {
    background: (theme: Theme) => theme.palette.primary.main,
  },
  button: {
    "&:hover": {
      cursor: "pointer",
    },
    borderRadius: 0,
    borderTop: (theme: Theme) => `solid 1px ${theme.palette.divider}`,
    color: (theme: Theme) => theme.palette.primary.contrastText,
    justifyContent: "space-between",
    paddingX: 3,
    paddingY: 2,
    textTransform: "capitalize",
    width: "100%",
  },
  menuItem: {
    "& > a": {
      color: "inherit",
      display: "flex",
      textDecoration: "none",
    },
  },
};

const getActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined);

const NavLinkItem = ({ url, children, active, NavLink }: any) => {
  const { closeDrawerMenu } = useContext(NavigationMenuContext);

  if (NavLink) {
    return (
      <NavLink to={url} className={getActiveClass} onClick={closeDrawerMenu}>
        {children}
      </NavLink>
    );
  }

  return (
    <a href={url} onClick={closeDrawerMenu} className={active ? getActiveClass({ isActive: true }) : ""}>
      {children}
    </a>
  );
};

const SecondaryMenuButton = ({ variant = "button" }: ProfileButtonProps) => {
  const { secondaryMenu, NavLink } = useContext(NavigationMenuContext);
  const { closeMenu, isMenuOpen, anchorMenu, openMenu } = useMenu();
  const firstLetterOfName = secondaryMenu?.avatar?.name?.charAt(0);
  const isButton = variant === "button";
  const isIconButton = variant === "icon";

  return (
    <>
      {isButton && (
        <Button onClick={openMenu} sx={styles.button}>
          <Stack spacing={2} alignItems="center" direction="row">
            {secondaryMenu?.avatar && (
              <Avatar
                alt={secondaryMenu?.avatar?.name}
                sx={styles.avatar}
                imgProps={{
                  referrerPolicy: "no-referrer",
                }}
              >
                {firstLetterOfName}
              </Avatar>
            )}
            {isButton && <Typography>{secondaryMenu?.label}</Typography>}
          </Stack>
          {isButton &&
            (secondaryMenu?.iconOpenMenu || (
              <SvgIcon>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 8.25C13.1 8.25 14 7.35 14 6.25C14 5.15 13.1 4.25 12 4.25C10.9 4.25 10 5.15 10 6.25C10 7.35 10.9 8.25 12 8.25ZM12 10.25C10.9 10.25 10 11.15 10 12.25C10 13.35 10.9 14.25 12 14.25C13.1 14.25 14 13.35 14 12.25C14 11.15 13.1 10.25 12 10.25ZM12 16.25C10.9 16.25 10 17.15 10 18.25C10 19.35 10.9 20.25 12 20.25C13.1 20.25 14 19.35 14 18.25C14 17.15 13.1 16.25 12 16.25Z"
                    fill="white"
                  />
                </svg>
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
        id={secondaryMenu?.id || "ProfileButtonMenu"}
        anchorEl={anchorMenu}
        open={isMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{ horizontal: "right", vertical: isButton ? "top" : "bottom" }}
        PaperProps={{ sx: { width: 260 } }}
      >
        {secondaryMenu?.items?.map((item, index) => {
          // Is React Element then return it
          if (isValidElement(item)) {
            return item;
          }

          // Is Object then return NavLinkItem
          if (item && typeof item === "object" && "url" in item) {
            const { url, label, icon, active } = item;
            const key = `${url}-${label}-${index}`;

            return (
              <MenuItem key={key} sx={styles.menuItem} selected={active}>
                <NavLinkItem url={url} key={key} NavLink={NavLink} active={active}>
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
