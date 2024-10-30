import { MouseEvent, useCallback, useState } from "react";

/**
 * Hook to manage the state of a menu.
 */
const useMenu = <T = HTMLElement>() => {
  const [anchorMenu, setAnchorMenu] = useState<null | T>(null);
  const isMenuOpen = !!anchorMenu;

  const closeMenu = useCallback(() => {
    setAnchorMenu(null);
  }, []);

  const openMenu = useCallback(({ currentTarget }: MouseEvent<T>) => {
    setAnchorMenu(currentTarget);
  }, []);

  return {
    anchorMenu,
    closeMenu,
    isMenuOpen,
    openMenu,
  };
};

export default useMenu;
