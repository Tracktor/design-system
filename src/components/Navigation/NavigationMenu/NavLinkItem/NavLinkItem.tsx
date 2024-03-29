import { Box, Typography } from "@mui/material";
import { ReactNode, useContext } from "react";
import { NavigationMenuContext, NavLinkProps, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  component?: (props: NavLinkProps) => ReactNode;
}

const NavLinkItem = ({ url, end, children, active, state, component, disabled }: NavLinkItemProps) => {
  const { closeDrawerMenu } = useContext(NavigationMenuContext);

  if (disabled) {
    return (
      <Typography component="div" color="text.disabled" aria-disabled="true">
        {children}
      </Typography>
    );
  }

  if (component) {
    const Component = component;

    return (
      <Component onClick={closeDrawerMenu} to={url || "#"} end={end} state={state}>
        {children}
      </Component>
    );
  }

  return (
    <Box component="a" href={url} onClick={closeDrawerMenu} className={active ? "active" : undefined} data-end={end} data-state={state}>
      {children}
    </Box>
  );
};

export default NavLinkItem;
