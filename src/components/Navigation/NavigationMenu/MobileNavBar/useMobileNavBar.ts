import { SyntheticEvent, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import type { MobileNavBarProps } from "@/components/Navigation/NavigationMenu/MobileNavBar/MobileNavBar";

interface useMobileNavBarParams {
  items: MobileNavBarProps["items"];
}

const useMobileNavBar = ({ items }: useMobileNavBarParams) => {
  const { openDrawerMenu, isDrawerOpen } = useContext(NavigationMenuContext);
  const [active, setActive] = useState<string | number>();
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
    [items]
  );

  const handleChangeNavigation = useCallback(
    (_: SyntheticEvent, value: number | string) => {
      const isMenuItem = value === "menu";

      if (isMenuItem) {
        openDrawerMenu();
        return;
      }

      setActive(value);
    },
    [openDrawerMenu]
  );

  /**
   * Set active menu item based on the current path
   */
  useEffect(() => {
    const getFirstSlicePath = (path: string) => String(path).split("/")[1];

    const pathname = getFirstSlicePath(window.location.pathname);
    const activeIndex = urls?.findIndex((path) => getFirstSlicePath(path) === pathname);

    setActive(activeIndex === -1 ? "menu" : activeIndex);
  }, [setActive, urls, isDrawerOpen]);

  return {
    active,
    handleChangeNavigation,
    openDrawerMenu,
    urls,
  };
};

export default useMobileNavBar;
