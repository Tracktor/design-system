import { SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import { createContext, memo, ReactElement, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import BurgerAppBar from "@/components/Navigation/NavigationMenu/BurgerAppBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";

export type ObjectNavigationItem = {
  url?: string;
  label?: string;
  count?: number;
  icon?: ReactNode;
  active?: boolean;
  state?: any;
  end?: boolean;
  disabled?: boolean;
  hideOnMobile?: boolean;
  hasAccess?: boolean;
};

export interface NavLinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  onClick?: () => void;
  to: string;
  end?: boolean;
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
  state?: any;
}

export type NavigationItem = ObjectNavigationItem | ReactNode;

export interface NavigationMenuProps {
  /**
   * Menu items
   */
  items?: NavigationItem[];
  /**
   * Override the default translations
   */
  /**
   * Enabler search field focus shortcut when pressing "ctrl + f" or "cmd + f"
   */
  enableSearchFocusShortcut?: boolean;
  /**
   * Disable responsive behavior
   */
  disableResponsive?: boolean;
  /**
   * Hide search field on desktop
   */
  hideSearchDesktop?: boolean;
  /**
   * Width of the sidebar, only for desktop
   * @default 270
   */
  sideBarWidth?: number;
  /**
   * Component to render the bottom link
   */
  bottomLink?:
    | {
        url?: string;
        state?: any;
        end?: boolean;
        label?: ReactNode;
        active?: boolean;
        icon?: ReactNode;
      }
    | null
    | false;
  /**
   * Component to router nav links.
   * This component is used to render the links in the main menu &  mobile bottom navigation
   * It should be a react-router-dom NavLink or a compatible component
   * @param props
   * @constructor
   */
  NavLink?: (props: NavLinkProps) => ReactNode;
  /**
   * Logo component
   */
  Logo?: ReactNode;
  /**
   * Search component
   */
  Search?: ReactNode;
  /**
   * AppBar component for small screens
   */
  AppBar?: ReactElement;
  /**
   * Search component
   */
  Footer?: ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  closeDrawerMenu: () => {},
  isCollapsed: false,
  isDrawerOpen: false,
  isMobile: false,
  isTablet: false,
  openDrawerMenu: () => {},
  toggleCollapse: () => {},
};

type NavigationMenuContextValue = NavigationMenuProps & typeof DEFAULT_CONTEXT_VALUE;

export const NavigationMenuContext = createContext<NavigationMenuContextValue>(DEFAULT_CONTEXT_VALUE);

const NavigationMenuFactory = () => {
  const { items, disableResponsive, isMobile, isTablet, isDrawerOpen, closeDrawerMenu, sideBarWidth, openDrawerMenu } =
    useContext(NavigationMenuContext);

  if ((isMobile || isTablet) && !disableResponsive) {
    return (
      <>
        <BurgerAppBar />
        <SwipeableDrawer anchor="left" open={isDrawerOpen} onClose={closeDrawerMenu} onOpen={openDrawerMenu}>
          <SideBar>
            <SideBarMenu items={items} />
          </SideBar>
        </SwipeableDrawer>
      </>
    );
  }

  return (
    <SideBar width={sideBarWidth}>
      <SideBarMenu items={items} />
    </SideBar>
  );
};

const NavigationMenu = ({
  AppBar,
  NavLink,
  Search,
  Logo,
  Footer,
  items,
  enableSearchFocusShortcut,
  disableResponsive,
  hideSearchDesktop,
  bottomLink,
  sideBarWidth = 260,
}: NavigationMenuProps) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isTablet = useMediaQuery(breakpoints.between("sm", "md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(DEFAULT_CONTEXT_VALUE.isDrawerOpen);
  const [isCollapsed, setIsCollapsed] = useState(DEFAULT_CONTEXT_VALUE.isCollapsed);

  const closeDrawerMenu = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const openDrawerMenu = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      AppBar,
      bottomLink,
      closeDrawerMenu,
      disableResponsive,
      enableSearchFocusShortcut,
      Footer,
      hideSearchDesktop,
      isCollapsed,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      Logo,
      NavLink,
      openDrawerMenu,
      Search,
      sideBarWidth,
      toggleCollapse,
    }),
    [
      closeDrawerMenu,
      disableResponsive,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      openDrawerMenu,
      sideBarWidth,
      Logo,
      NavLink,
      enableSearchFocusShortcut,
      Search,
      hideSearchDesktop,
      bottomLink,
      AppBar,
      Footer,
      isCollapsed,
      toggleCollapse,
    ],
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      <NavigationMenuFactory />
    </NavigationMenuContext.Provider>
  );
};

export default memo(NavigationMenu);
