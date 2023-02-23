import { MouseEvent, useState } from "react";

/**
 * Hook to manage the state of a menu.
 */
const useMenu = <T = HTMLElement>() => {
  const [anchorMenu, setAnchorMenu] = useState<null | T>(null);
  const isMenuOpen = Boolean(anchorMenu);

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const openMenu = ({ currentTarget }: MouseEvent<T>) => {
    setAnchorMenu(currentTarget);
  };

  return { anchorMenu, closeMenu, isMenuOpen, openMenu };
};

export default useMenu;
