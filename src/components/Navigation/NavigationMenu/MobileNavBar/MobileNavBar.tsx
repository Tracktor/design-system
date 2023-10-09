import { BottomNavigation, BottomNavigationAction, darken, GlobalStyles, Slide, Theme, useTheme } from "@mui/material";
import { isValidElement, ReactElement, ReactNode, useContext } from "react";
import { NavigationItem, NavigationMenuContext, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu";
import MenuIcon from "@/components/Navigation/NavigationMenu/MenuIcon";
import useMobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar/useMobileNavBar";
import { removeSlashFromStartOfString } from "@/components/Navigation/NavigationMenu/utils/utils";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  NavLink?: (props: NavLinkItemProps) => ReactElement;
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
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    svg: {
      color: ({ palette }: Theme) => palette.grey["200"],
    },
    zIndex: 1200,
  },
};

const MobileNavBar = ({ items, ...props }: MobileNavBarProps) => {
  const { backgroundCoefficient, translations, mobileOptions, NavLink = props.NavLink } = useContext(NavigationMenuContext);

  const { palette, size } = useTheme();
  const { active, handleChangeNavigation, visible } = useMobileNavBar({ items });
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);
  const menuLabel = props?.translations?.menu || translations?.menu || "Menu";

  const isHidden =
    mobileOptions?.hideNavBar ||
    mobileOptions?.hideNavBarOnRoutes?.map(removeSlashFromStartOfString).includes(removeSlashFromStartOfString(window.location.pathname));

  if (isHidden) {
    return null;
  }

  return (
    <>
      <Slide direction="up" in={visible}>
        <BottomNavigation
          sx={{
            ...styles.bottomNavigation,
            backgroundColor,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            height: size.mobileNavBarHeight,
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
          <BottomNavigationAction value="menu" label={menuLabel} icon={<MenuIcon />} />
        </BottomNavigation>
      </Slide>
      <GlobalStyles
        styles={{
          body: {
            paddingBottom: size.mobileNavBarHeight,
          },
        }}
      />
    </>
  );
};

export default MobileNavBar;
