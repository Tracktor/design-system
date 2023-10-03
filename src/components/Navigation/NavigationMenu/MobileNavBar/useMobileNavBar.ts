import { SyntheticEvent, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import type { MobileNavBarProps } from "@/components/Navigation/NavigationMenu/MobileNavBar/MobileNavBar";
import { getFirstSliceOfURL } from "@/components/Navigation/NavigationMenu/utils/utils";

interface useMobileNavBarParams {
  items: MobileNavBarProps["items"];
}

const useMobileNavBar = ({ items }: useMobileNavBarParams) => {
  const { openDrawerMenu, isDrawerOpen, closeDrawerMenu, mobileOptions } = useContext(NavigationMenuContext);
  const { hideNavBarOnScroll = false, scrollThreshold = 150, hideNavBarOnScrollOnRoutes } = mobileOptions || {};
  const [active, setActive] = useState<string | number>();
  const [visible, setVisible] = useState<boolean>(window.scrollY <= scrollThreshold);
  const isHideNavBarOnScroll = hideNavBarOnScroll || hideNavBarOnScrollOnRoutes?.includes(getFirstSliceOfURL(window.location.pathname));

  const urls = useMemo(
    () =>
      items
        ?.filter((item) => {
          if (item && typeof item === "object" && "url" in item) {
            return item.url;
          }

          return true;
        })
        .map((item) => {
          if (item && typeof item === "object" && "url" in item) {
            return item.url;
          }

          return false;
        })
        .filter(Boolean) as string[],
    [items],
  );

  const handleChangeNavigation = useCallback(
    (_: SyntheticEvent, value: number | string) => {
      const isMenuItem = value === "menu";

      if (isMenuItem) {
        isDrawerOpen ? closeDrawerMenu() : openDrawerMenu();
        return;
      }

      setActive(value);
    },
    [closeDrawerMenu, isDrawerOpen, openDrawerMenu],
  );

  const handleScroll = useCallback(() => {
    const container = document.getElementsByTagName("html")[0];

    if (!container) {
      return;
    }

    const scrollPosition = container.scrollTop;

    if (scrollPosition >= scrollThreshold) {
      setVisible(false);
      return;
    }

    if (!visible && scrollPosition <= scrollThreshold) {
      setVisible(true);
    }
  }, [scrollThreshold, visible]);

  /**
   * Set active menu item based on the current path
   */
  useEffect(() => {
    const activeIndex = urls?.findIndex((path) => getFirstSliceOfURL(path) === getFirstSliceOfURL(window.location.pathname));

    setActive(activeIndex === -1 ? "menu" : activeIndex);
  }, [setActive, urls, isDrawerOpen]);

  /**
   * Add event listener to window scroll
   */
  useEffect(() => {
    if (!isHideNavBarOnScroll) {
      return undefined;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, hideNavBarOnScroll, isHideNavBarOnScroll]);

  return {
    active,
    handleChangeNavigation,
    handleScroll,
    openDrawerMenu,
    sanitizePathname: getFirstSliceOfURL,
    setVisible,
    urls,
    visible,
  };
};

export default useMobileNavBar;
