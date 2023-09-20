import { Box } from "@mui/material";
import { ReactNode, useContext } from "react";
import { NavigationMenuContext, NavLinkProps, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  component?: (props: NavLinkProps) => ReactNode;
}

const getActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined);

const NavLinkItem = ({ url, end, children, active, state, component }: NavLinkItemProps) => {
  const { closeDrawerMenu } = useContext(NavigationMenuContext);

  if (component) {
    const Component = component;

    return (
      <Component to={url} className={getActiveClass} onClick={closeDrawerMenu} end={end} state={state}>
        {children}
      </Component>
    );
  }

  return (
    <Box
      component="a"
      href={url}
      onClick={closeDrawerMenu}
      className={active ? getActiveClass({ isActive: true }) : ""}
      data-end={end}
      data-state={state}
    >
      {children}
    </Box>
  );
};

export default NavLinkItem;
