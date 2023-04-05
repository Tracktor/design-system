import { SyntheticEvent, useCallback, useContext, useEffect, useState } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import type { MobileNavBarProps } from "@/components/Navigation/NavigationMenu/MobileNavBar/MobileNavBar";

interface useMobileNavBarParams {
  items: MobileNavBarProps["items"];
  useLocation: MobileNavBarProps["useLocation"];
  useNavigate: MobileNavBarProps["useNavigate"];
}

const useMobileNavBar = ({ items, useLocation, useNavigate }: useMobileNavBarParams) => {
  const urls = items.filter((item) => item.url).map((item) => item.url);
  const navigate = useNavigate?.();
  const menuItemIndex = urls.length;
  const { openDrawerMenu } = useContext(NavigationMenuContext);
  const { pathname } = useLocation?.() || window.location;
  const [active, setActive] = useState(urls.findIndex((path) => path === pathname));

  const handleChangeNavigation = useCallback(
    (_: SyntheticEvent, newValue: number) => {
      const isLastItemBottomMenu = newValue === menuItemIndex;

      if (isLastItemBottomMenu) {
        openDrawerMenu();
        return;
      }

      if (navigate) {
        navigate(urls[newValue]);
        return;
      }

      window.location.href = String(urls[newValue]);
    },
    [urls, menuItemIndex, navigate, openDrawerMenu]
  );

  useEffect(() => {
    const activeIndex = urls.findIndex((path) => path === pathname);
    setActive(activeIndex === -1 ? menuItemIndex : activeIndex);
  }, [setActive, pathname, menuItemIndex, urls]);

  return {
    active,
    handleChangeNavigation,
    mapValuePath: urls,
    navigate,
    openDrawerMenu,
  };
};

export default useMobileNavBar;
