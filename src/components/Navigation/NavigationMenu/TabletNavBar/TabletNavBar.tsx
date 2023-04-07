import { AppBar, Box, darken, IconButton, Stack, SvgIcon, Toolbar, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import { NavigationMenuContext, SecondaryMenu } from "@/components/Navigation/NavigationMenu";
import MenuIcon from "@/components/Navigation/NavigationMenu/MenuIcon";
import SecondaryMenuButton from "@/components/Navigation/NavigationMenu/SecondaryMenuButton";
import TextFieldSearch from "@/components/Navigation/NavigationMenu/TextFieldSearch";

interface TabletNavBarProps {
  SearchField?: ReactNode;
  disableSearch?: boolean;
  secondaryMenu?: SecondaryMenu;
}

const TABLET_NAV_BAR_HEIGHT = 64;

const TabletNavBar = ({ ...props }: TabletNavBarProps) => {
  const {
    openDrawerMenu,
    backgroundCoefficient,
    SearchField = props.SearchField,
    disableSearch = props.disableSearch,
    secondaryMenu = props.secondaryMenu,
  } = useContext(NavigationMenuContext);

  const { palette } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: backgroundColor,
        borderBottom: (theme) => `1px solid ${theme.palette.mode === "dark" ? theme.palette.divider : backgroundColor}`,
        height: TABLET_NAV_BAR_HEIGHT,
      }}
      elevation={0}
    >
      <Toolbar component={Stack} direction="row" spacing={3}>
        <Box>
          <IconButton onClick={openDrawerMenu} edge="end" color="inherit" aria-label="menu">
            <SvgIcon>
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        {!disableSearch && (
          <Box flex={1} sx={{ textAlign: "right" }}>
            {SearchField || <TextFieldSearch />}
          </Box>
        )}
        {secondaryMenu && <SecondaryMenuButton variant="icon" />}
      </Toolbar>
    </AppBar>
  );
};

export default TabletNavBar;
