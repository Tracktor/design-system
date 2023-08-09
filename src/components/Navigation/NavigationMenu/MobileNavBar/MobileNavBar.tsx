import { BottomNavigation, BottomNavigationAction, darken, GlobalStyles, Paper, SvgIcon, Theme, useTheme } from "@mui/material";
import { isValidElement, ReactElement, ReactNode, useContext } from "react";
import { NavigationItem, NavigationMenuContext, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu";
import MenuIcon from "@/components/Navigation/NavigationMenu/MenuIcon";
import useMobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar/useMobileNavBar";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  NavLink: MobileNavBarProps["NavLink"];
}

export interface MobileNavBarProps {
  items?: NavigationItem[];
  translations?: {
    menu?: string;
  };
  NavLink?: (props: NavLinkItemProps) => ReactElement;
}

const styles = {
  bottomNavigation: {
    ".Mui-selected": {
      ".MuiBottomNavigationAction-label": {
        color: (theme: Theme) => theme.palette.primary.contrastText,
      },
      background: ({ palette }: Theme) => palette.primary.dark,
      svg: {
        color: (theme: Theme) => theme.palette.primary.contrastText,
      },
    },
    ".MuiBottomNavigationAction-label": {
      color: ({ palette }: Theme) => palette.grey["200"],
    },
    svg: {
      color: ({ palette }: Theme) => palette.grey["200"],
    },
  },
  paper: {
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    zIndex: 9999,
  },
};

const MobileNavBar = ({ items, ...props }: MobileNavBarProps) => {
  const { palette } = useTheme();
  const { backgroundCoefficient, translations, mobileNavBarHeight, NavLink = props.NavLink } = useContext(NavigationMenuContext);
  const { active, handleChangeNavigation } = useMobileNavBar({ items });
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);
  const menuLabel = props?.translations?.menu || translations?.menu || "Menu";

  return (
    <Paper sx={styles.paper} square>
      <BottomNavigation
        sx={{
          ...styles.bottomNavigation,
          backgroundColor,
          borderTop: (theme) => `1px solid ${theme.palette.mode === "dark" ? theme.palette.divider : backgroundColor}`,
          height: mobileNavBarHeight,
        }}
        showLabels
        value={active}
        onChange={handleChangeNavigation}
        component="nav"
      >
        {items?.map((item, index) => {
          // If the item is a React element, return it as is
          if (isValidElement(item)) {
            return item;
          }

          // If the item is an object, return a BottomNavigationAction
          if (item && typeof item === "object" && "url" in item) {
            const { url, label, icon } = item;
            const key = `${url}-${label}-${index}`;
            return <BottomNavigationAction key={key} label={label} icon={icon} component={NavLink as any} to={url} />;
          }

          return null;
        })}
        <BottomNavigationAction
          value="menu"
          label={menuLabel}
          icon={
            <SvgIcon>
              <MenuIcon />
            </SvgIcon>
          }
        />
      </BottomNavigation>
      <GlobalStyles
        styles={{
          body: {
            paddingBottom: mobileNavBarHeight,
          },
        }}
      />
    </Paper>
  );
};

export default MobileNavBar;
