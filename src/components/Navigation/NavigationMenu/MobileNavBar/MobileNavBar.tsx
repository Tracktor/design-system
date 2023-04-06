import { BottomNavigation, BottomNavigationAction, darken, Paper, SvgIcon, Theme, useTheme } from "@mui/material";
import { ReactElement, ReactNode, useContext } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import MenuIcon from "@/components/Navigation/NavigationMenu/MenuIcon";
import useMobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar/useMobileNavBar";

interface NavLinkLinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  onClick?: () => void;
  to: string;
  end?: boolean;
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
}

export interface MobileNavBarProps {
  items: {
    url?: string;
    label?: string;
    icon?: ReactNode;
  }[];
  translations?: {
    menu?: string;
  };
  NavLink?: (props: NavLinkLinkProps) => ReactElement;
}

const NAV_BAR_HEIGHT = 88;

const styles = {
  bottomNavigation: {
    ".Mui-selected": {
      ".MuiBottomNavigationAction-label": {
        color: (theme: Theme) => theme.palette.primary.contrastText,
      },
      background: ({ palette }: Theme) => palette.primary.dark,
      svg: {
        color: (theme: Theme) => theme.palette.primary.contrastText,
      },
    },
    ".MuiBottomNavigationAction-label": {
      color: ({ palette }: Theme) => palette.grey["200"],
    },
    height: NAV_BAR_HEIGHT,
    svg: {
      color: ({ palette }: Theme) => palette.grey["200"],
    },
  },
  paper: {
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
  },
};

const MobileNavBar = ({ items, ...props }: MobileNavBarProps) => {
  const { palette } = useTheme();
  const { backgroundCoefficient, translations, NavLink = props.NavLink } = useContext(NavigationMenuContext);
  const { active, handleChangeNavigation } = useMobileNavBar({ items });
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);
  const menuLabel = props?.translations?.menu || translations?.menu || "Menu";

  return (
    <Paper sx={styles.paper} square>
      <BottomNavigation
        sx={{
          ...styles.bottomNavigation,
          backgroundColor,
          borderTop: (theme) => `1px solid ${theme.palette.mode === "dark" ? theme.palette.divider : backgroundColor}`,
        }}
        showLabels
        value={active}
        onChange={handleChangeNavigation}
      >
        {items?.map(({ url, label, icon }, index) => {
          const key = `${url}-${label}-${index}`;
          return <BottomNavigationAction key={key} label={label} icon={icon} component={NavLink as any} to={url} />;
        })}
        <BottomNavigationAction
          value="menu"
          label={menuLabel}
          icon={
            <SvgIcon>
              <MenuIcon />
            </SvgIcon>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNavBar;
