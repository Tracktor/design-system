import { AppBar, Box, darken, GlobalStyles, IconButton, Stack, SvgIcon, Toolbar, useTheme } from "@mui/material";
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

const TabletNavBar = ({ ...props }: TabletNavBarProps) => {
  const {
    openDrawerMenu,
    backgroundCoefficient,
    tabletNavBarHeight,
    SearchField = props.SearchField,
    disableSearch = props.disableSearch,
    secondaryMenu = props.secondaryMenu,
  } = useContext(NavigationMenuContext);

  const { palette } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: backgroundColor,
        borderBottom: (theme) => `1px solid ${theme.palette.mode === "dark" ? theme.palette.divider : backgroundColor}`,
        height: tabletNavBarHeight,
      }}
    >
      <Toolbar component={Stack} direction="row" spacing={3} height="100%">
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
      <GlobalStyles
        styles={{
          body: {
            paddingTop: tabletNavBarHeight,
          },
        }}
      />
    </AppBar>
  );
};

export default TabletNavBar;
