import { SwipeableDrawer, useMediaQuery } from "@mui/material";
import { ChangeEvent, createContext, memo, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import MobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";
import TabletNavBar from "@/components/Navigation/NavigationMenu/TabletNavBar";

export type ObjectNavigationItem = {
  url: string;
  label: string;
  count?: number;
  icon?: ReactNode;
  active?: boolean;
  state?: any;
  end?: boolean;
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
   * Menu icon
   */
  iconOpenMenu?: ReactNode;
  /**
   * Avatar props
   */
  avatar?: {
    name?: string;
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
   * Disable search field focus shortcut when pressing "ctrl + f" or "cmd + f"
   */
  disableSearchFocusShortcut?: boolean;
  /**
   * Disable search field
   */
  disableSearch?: boolean;
  /**
   * Disable responsive behavior
   */
  disableResponsive?: boolean;
  /**
   * Width of the sidebar
   */
  sideBarWidth?: number;
  /**
   * Callback for search field change
   * Not triggered if disableSearch is true or if SearchField is provided
   * @param e
   */
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Value of the search field for controlled mode
   */
  searchValue?: string;
  /**
   * Mobile options
   */
  mobileOptions?: {
    /**
     * Hide mobile bottom navigation on scroll
     * @default false
     */
    hideNavBarOnScroll?: boolean;
    /**
     * Hide mobile bottom navigation on scroll on specific routes
     */
    hideNavBarOnScrollOnRoutes?: string[];
    /**
     * Scroll threshold to hide mobile bottom navigation
     * @default 150
     */
    scrollThreshold?: number;
    /**
     * Disable mobile bottom navigation
     * @default false
     */
    disableNavBar?: boolean;
    /**
     * Disable mobile bottom navigation on specific routes
     */
    disableNavBarOnRoutes?: string[];
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
   * Override the default search field
   */
  SearchField?: ReactNode;
  /**
   * Footer component only for desktop
   */
  Footer?: ReactNode;
  /**
   * Logo component
   */
  Logo?: ReactNode;
}

type NavigationMenuContextValue = NavigationMenuProps & typeof DEFAULT_CONTEXT_VALUE;

const DEFAULT_CONTEXT_VALUE = {
  backgroundCoefficient: 0.495,
  closeDrawerMenu: () => {},
  isDrawerOpen: false,
  isMobile: false,
  isTablet: false,
  mobileNavBarHeight: 88,
  openDrawerMenu: () => {},
  tabletNavBarHeight: 64,
};

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
            sx: { width: "100%" },
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
  disableSearch,
  disableSearchFocusShortcut,
  translations,
  disableResponsive,
  sideBarWidth,
  onSearchChange,
  searchValue,
  mobileOptions,
  SearchField,
  NavLink,
  Footer,
  Logo,
}: NavigationMenuProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(DEFAULT_CONTEXT_VALUE.isDrawerOpen);
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:1024px) and (min-width:481px)");

  const closeDrawerMenu = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const openDrawerMenu = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      backgroundCoefficient: DEFAULT_CONTEXT_VALUE.backgroundCoefficient,
      closeDrawerMenu,
      disableResponsive,
      disableSearch,
      disableSearchFocusShortcut,
      Footer,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      itemsMobile,
      Logo,
      mobileNavBarHeight: DEFAULT_CONTEXT_VALUE.mobileNavBarHeight,
      mobileOptions,
      NavLink,
      onSearchChange,
      openDrawerMenu,
      SearchField,
      searchValue,
      secondaryMenu,
      sideBarWidth,
      tabletNavBarHeight: DEFAULT_CONTEXT_VALUE.tabletNavBarHeight,
      translations,
    }),
    [
      closeDrawerMenu,
      disableResponsive,
      disableSearch,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      itemsMobile,
      secondaryMenu,
      onSearchChange,
      openDrawerMenu,
      sideBarWidth,
      translations,
      searchValue,
      Footer,
      Logo,
      NavLink,
      SearchField,
      disableSearchFocusShortcut,
      mobileOptions,
    ],
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      <NavigationMenuFactory />
    </NavigationMenuContext.Provider>
  );
};

export default memo(NavigationMenu);
