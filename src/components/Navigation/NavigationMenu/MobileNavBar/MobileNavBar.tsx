import { BottomNavigation, BottomNavigationAction, darken, Paper, SvgIcon, Theme, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import MenuIcon from "@/components/Navigation/NavigationMenu/MenuIcon";
import useMobileNavBar from "@/components/Navigation/NavigationMenu/MobileNavBar/useMobileNavBar";

export interface MobileNavBarProps {
  translate?: (str: string) => string;
  items: {
    url?: string;
    label?: string;
    icon?: ReactNode;
  }[];
  useLocation?(): { pathname: string };
  useNavigate?(): (to: any, options?: any) => void;
  useNavigate?(): (delta: number) => void;
}

const NAV_BAR_HEIGHT = 90;

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
  searchContainer: {
    height: NAV_BAR_HEIGHT,
    px: 3,
    py: 2,
  },
};

const MobileNavBar = ({ items, useLocation, useNavigate, ...props }: MobileNavBarProps) => {
  const { backgroundCoefficient, translate = props.translate } = useContext(NavigationMenuContext);
  const { active, handleChangeNavigation } = useMobileNavBar({ items, useLocation, useNavigate });
  const { palette } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);

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
          return <BottomNavigationAction key={key} label={label ? translate?.(label) || label : ""} icon={icon} />;
        })}
        <BottomNavigationAction
          label={translate?.("menu") || "Menu"}
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
