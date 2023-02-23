import { MouseEvent, useState } from "react";

/**
 * Hook to manage the state of a menu.
 */
const useMenu = () => {
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorMenu);

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  return { anchorMenu, closeMenu, isMenuOpen, openMenu };
};

export default useMenu;
