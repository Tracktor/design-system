import { Drawer, useMediaQuery } from "@mui/material";
import { ChangeEvent, createContext, memo, ReactElement, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import MobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";
import TabletNavBar from "@/components/Navigation/NavigationMenu/TabletNavBar";

export interface NavLinkLinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  onClick?: () => void;
  to: string;
  end?: boolean;
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
}

export type NavigationItem =
  | {
      url: string;
      label: string;
      count?: number;
      icon?: ReactNode;
      active?: boolean;
    }
  | ReactNode;

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
   * Component to router nav links.
   * This component is used to render the links in the main menu &  mobile bottom navigation
   * It should be a react-router-dom NavLink or a compatible component
   * @param props
   * @constructor
   */
  NavLink?: (props: NavLinkLinkProps) => ReactElement | null;
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
  openDrawerMenu: () => {},
};

export const NavigationMenuContext = createContext<NavigationMenuContextValue>(DEFAULT_CONTEXT_VALUE);

const NavigationMenuFromDevice = () => {
  const { items, disableResponsive, isMobile, isTablet, itemsMobile, isDrawerOpen, closeDrawerMenu, sideBarWidth } =
    useContext(NavigationMenuContext);

  if (isMobile && itemsMobile && !disableResponsive) {
    return (
      <>
        <MobileNavBar items={itemsMobile} />
        <Drawer anchor="left" open={isDrawerOpen} PaperProps={{ sx: { width: "100%" } }} onClose={closeDrawerMenu}>
          <SideBar width="100%">
            <SideBarMenu items={items} />
          </SideBar>
        </Drawer>
      </>
    );
  }

  if (isTablet && !disableResponsive) {
    return (
      <>
        <TabletNavBar />
        <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawerMenu}>
          <SideBar>
            <SideBarMenu items={items} />
          </SideBar>
        </Drawer>
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
      NavLink,
      onSearchChange,
      openDrawerMenu,
      SearchField,
      secondaryMenu,
      sideBarWidth,
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
      Footer,
      Logo,
      NavLink,
      SearchField,
      disableSearchFocusShortcut,
    ]
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      <NavigationMenuFromDevice />
    </NavigationMenuContext.Provider>
  );
};

export default memo(NavigationMenu);
