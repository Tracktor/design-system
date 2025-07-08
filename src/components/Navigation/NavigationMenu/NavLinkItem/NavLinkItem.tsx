import { Box, Typography } from "@mui/material";
import { MouseEvent, ReactNode, useContext } from "react";
import { NavigationMenuContext, NavLinkProps, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  component?: (props: NavLinkProps & { onClick?: (event?: MouseEvent) => void }) => ReactNode;
  onClick?: (event?: MouseEvent) => void;
}

const NavLinkItem = ({ url, end, children, active, state, component, disabled, onClick }: NavLinkItemProps) => {
  const { closeDrawerMenu } = useContext(NavigationMenuContext);

  const handleClick = (event?: MouseEvent) => {
    onClick?.(event);
    closeDrawerMenu?.();
  };

  if (disabled) {
    return (
      <Typography component="div" color="text.disabled" aria-disabled="true" onClick={handleClick}>
        {children}
      </Typography>
    );
  }

  if (component) {
    const Component = component;
    return (
      <Component onClick={handleClick} to={url || "#"} end={end} state={state}>
        {children}
      </Component>
    );
  }

  return (
    <Box
      component="a"
      href={url}
      onClick={handleClick}
      className={active ? "active" : undefined}
      data-end={end}
      data-state={state}
      sx={{ cursor: "pointer" }}
    >
      {children}
    </Box>
  );
};

export default NavLinkItem;
