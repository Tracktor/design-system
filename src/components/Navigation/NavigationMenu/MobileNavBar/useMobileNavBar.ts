import { isValidElement, SyntheticEvent, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import type { MobileNavBarProps } from "@/components/Navigation/NavigationMenu/MobileNavBar/MobileNavBar";

interface useMobileNavBarParams {
  items: MobileNavBarProps["items"];
}

const useMobileNavBar = ({ items }: useMobileNavBarParams) => {
  const { openDrawerMenu } = useContext(NavigationMenuContext);
  const [active, setActive] = useState<string | number>();
  const urls = useMemo(
    () =>
      items
        .filter((item) => {
          if (isValidElement(items)) {
            return true;
          }

          if (item && typeof item === "object" && "url" in item) {
            return item.url;
          }

          return true;
        })
        .map((item) => item && typeof item === "object" && "url" in item && item?.url),
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

  // Set initial active menu
  useEffect(() => {
    const activeIndex = urls.findIndex((path) => path === "lien-2");
    setActive(activeIndex === -1 ? "menu" : activeIndex);
  }, [setActive, urls]);

  return {
    active,
    handleChangeNavigation,
    openDrawerMenu,
    urls,
  };
};

export default useMobileNavBar;
