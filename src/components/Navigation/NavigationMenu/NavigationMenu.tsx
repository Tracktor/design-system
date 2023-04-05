import { Drawer, useMediaQuery } from "@mui/material";
import { ChangeEvent, createContext, ReactElement, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import MobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";
import TabletNavBar from "@/components/Navigation/NavigationMenu/TabletNavBar";

interface NavLinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  onClick?: () => void;
  to: string;
  end?: boolean;
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
}

export interface NavigationMenuProps {
  items?: {
    url: string;
    label: string;
    count?: number;
    icon?: ReactNode;
    active?: boolean;
  }[];
  itemsMobile?: {
    url?: string;
    label?: string;
    icon?: ReactNode;
  }[];
  disableSearch?: boolean;
  disableResponsive?: boolean;
  translate?: (str: string) => string;
  logoLinkUrl?: string;
  Link?: (props: { to?: string; children?: ReactNode }) => ReactElement;
  NavLink?: (props: NavLinkProps) => ReactElement;
  SearchField?: ReactNode;
  Footer?: ReactNode;
  Logo?: ReactNode;
  sideBarWidth?: number;
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  const {
    translate,
    items,
    disableResponsive,
    isMobile,
    isTablet,
    itemsMobile,
    SearchField,
    logoLinkUrl,
    Footer,
    Logo,
    Link,
    NavLink,
    isDrawerOpen,
    closeDrawerMenu,
    sideBarWidth,
  } = useContext(NavigationMenuContext);

  if (isMobile && itemsMobile && !disableResponsive) {
    return (
      <>
        <MobileNavBar items={itemsMobile} />
        <Drawer anchor="left" open={isDrawerOpen} PaperProps={{ sx: { width: "100%" } }} onClose={closeDrawerMenu}>
          <SideBar logoLinkUrl={logoLinkUrl} Footer={Footer} Logo={Logo} Link={Link} width="100%">
            <SideBarMenu items={items} translate={translate} NavLink={NavLink} SearchField={SearchField} />
          </SideBar>
        </Drawer>
      </>
    );
  }

  if (isTablet && !disableResponsive) {
    return (
      <>
        <TabletNavBar SearchField={SearchField} />
        <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawerMenu}>
          <SideBar logoLinkUrl={logoLinkUrl} Footer={Footer} Logo={Logo} Link={Link}>
            <SideBarMenu items={items} translate={translate} NavLink={NavLink} SearchField={SearchField} />
          </SideBar>
        </Drawer>
      </>
    );
  }

  return (
    <SideBar logoLinkUrl={logoLinkUrl} Footer={Footer} Logo={Logo} Link={Link} width={sideBarWidth}>
      <SideBarMenu items={items} translate={translate} NavLink={NavLink} SearchField={SearchField} />
    </SideBar>
  );
};

const NavigationMenu = ({
  items,
  itemsMobile,
  disableSearch,
  logoLinkUrl,
  translate,
  NavLink,
  Footer,
  Logo,
  SearchField,
  Link,
  disableResponsive,
  sideBarWidth,
  onSearchChange,
}: NavigationMenuProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(DEFAULT_CONTEXT_VALUE.isDrawerOpen);
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

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
      Footer,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      itemsMobile,
      Link,
      Logo,
      logoLinkUrl,
      NavLink,
      onSearchChange,
      openDrawerMenu,
      SearchField,
      sideBarWidth,
      translate,
    }),
    [
      closeDrawerMenu,
      disableResponsive,
      disableSearch,
      Footer,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      itemsMobile,
      Link,
      Logo,
      logoLinkUrl,
      NavLink,
      onSearchChange,
      openDrawerMenu,
      SearchField,
      sideBarWidth,
      translate,
    ]
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      <NavigationMenuFromDevice />
    </NavigationMenuContext.Provider>
  );
};

export default NavigationMenu;
