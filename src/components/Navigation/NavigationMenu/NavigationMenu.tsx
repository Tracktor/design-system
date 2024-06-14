import { SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import { createContext, memo, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import MobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";
import TabletNavBar from "@/components/Navigation/NavigationMenu/TabletNavBar";

export type ObjectNavigationItem = {
  url?: string;
  label: string;
  count?: number;
  icon?: ReactNode;
  active?: boolean;
  state?: any;
  end?: boolean;
  disabled?: boolean;
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

export interface SecondaryMenu {
  /**
   * Menu id
   */
  id?: string;
  /**
   * Menu label
   */
  label?: string;
  /**
   * Menu sub label
   */
  subLabel?: string;
  /**
   * Menu start icon
   */
  startIcon?: ReactNode;
  /**
   * Menu icon
   */
  iconOpenMenu?: ReactNode;
  /**
   * Avatar props
   */
  avatar?: {
    name?: string;
    src?: string;
  };
  /**
   * Menu items secondary menu
   */
  items: NavigationItem[];
  /**
   * Loading state
   */
  loading?: boolean;
}

export interface NavigationMenuProps {
  /**
   * Menu items
   */
  items?: NavigationItem[];
  /**
   * Menu items for mobile bottom navigation
   */
  itemsMobile?: NavigationItem[];
  /**
   * Menu items for secondary menu
   */
  secondaryMenu?: SecondaryMenu;
  /**
   * Override the default translations
   */
  translations?: {
    /**
     * Menu label on mobile bottom navigation
     */
    menu?: string;
    /**
     * Search label
     */
    search?: string;
  };
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
   * Mobile options
   */
  mobileOptions?: {
    /**
     * Scroll threshold to hide mobile bottom navigation
     * @default 150
     */
    scrollThreshold?: number;
    /**
     * Hide mobile bottom navigation on scroll
     * @default false
     */
    hideNavBarOnScroll?: boolean;
    /**
     * Hide mobile bottom navigation on scroll on specific routes
     * @default undefined
     */
    hideNavBarOnScrollOnRoutes?: string[];
    /**
     * Hide mobile bottom navigation
     * @default false
     */
    hideNavBar?: boolean;
    /**
     * Hide mobile bottom navigation on specific routes
     * @default undefined
     */
    hideNavBarOnRoutes?: string[];
  };
  /**
   * Component to router nav links.
   * This component is used to render the links in the main menu &  mobile bottom navigation
   * It should be a react-router-dom NavLink or a compatible component
   * @param props
   * @constructor
   */
  NavLink?: (props: NavLinkProps) => ReactNode;
  /**
   * Footer component only for desktop
   */
  Footer?: ReactNode;
  /**
   * Logo component
   */
  Logo?: ReactNode;
  /**
   * Search component
   */
  Search?: ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  closeDrawerMenu: () => {},
  isDrawerOpen: false,
  isMobile: false,
  isTablet: false,
  openDrawerMenu: () => {},
};

type NavigationMenuContextValue = NavigationMenuProps & typeof DEFAULT_CONTEXT_VALUE;

export const NavigationMenuContext = createContext<NavigationMenuContextValue>(DEFAULT_CONTEXT_VALUE);

const NavigationMenuFactory = () => {
  const { items, disableResponsive, isMobile, isTablet, itemsMobile, isDrawerOpen, closeDrawerMenu, sideBarWidth, openDrawerMenu } =
    useContext(NavigationMenuContext);

  if (isMobile && !disableResponsive) {
    return (
      <>
        <MobileNavBar items={itemsMobile} />
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={closeDrawerMenu}
          onOpen={openDrawerMenu}
          PaperProps={{
            sx: { width: "85%" },
          }}
        >
          <SideBar width="100%">
            <SideBarMenu items={items} />
          </SideBar>
        </SwipeableDrawer>
      </>
    );
  }

  if (isTablet && !disableResponsive) {
    return (
      <>
        <TabletNavBar />
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
  items,
  itemsMobile,
  secondaryMenu,
  enableSearchFocusShortcut,
  translations,
  disableResponsive,
  mobileOptions,
  hideSearchDesktop,
  NavLink,
  Footer,
  Search,
  Logo,
  sideBarWidth = 260,
}: NavigationMenuProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(DEFAULT_CONTEXT_VALUE.isDrawerOpen);

  const closeDrawerMenu = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const openDrawerMenu = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      closeDrawerMenu,
      disableResponsive,
      enableSearchFocusShortcut,
      Footer,
      hideSearchDesktop,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      itemsMobile,
      Logo,
      mobileOptions,
      NavLink,
      openDrawerMenu,
      Search,
      secondaryMenu,
      sideBarWidth,
      translations,
    }),
    [
      closeDrawerMenu,
      disableResponsive,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      itemsMobile,
      secondaryMenu,
      openDrawerMenu,
      sideBarWidth,
      translations,
      Footer,
      Logo,
      NavLink,
      enableSearchFocusShortcut,
      mobileOptions,
      Search,
      hideSearchDesktop,
    ],
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      <NavigationMenuFactory />
    </NavigationMenuContext.Provider>
  );
};

export default memo(NavigationMenu);
