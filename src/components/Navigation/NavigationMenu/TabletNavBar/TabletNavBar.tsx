import { AppBar, GlobalStyles, IconButton, Stack, Toolbar, useTheme } from "@mui/material";
import { useContext } from "react";
import { NavigationMenuContext, SecondaryMenu } from "@/components/Navigation/NavigationMenu";
import MenuIcon from "@/components/Navigation/NavigationMenu/MenuIcon";
import SecondaryMenuButton from "@/components/Navigation/NavigationMenu/SecondaryMenuButton";

interface TabletNavBarProps {
  secondaryMenu?: SecondaryMenu;
}

const TabletNavBar = ({ ...props }: TabletNavBarProps) => {
  const { openDrawerMenu, secondaryMenu = props.secondaryMenu } = useContext(NavigationMenuContext);
  const { palette, size } = useTheme();
  const background = palette.mode === "dark" ? palette.background.default : palette.primary.black;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background,
        borderBottom: ({ palette: paletteColor }) => `1px solid ${paletteColor.mode === "dark" ? paletteColor.divider : background}`,
        height: size.tabletNavBarHeight,
      }}
    >
      <Toolbar component={Stack} direction="row" spacing={3} height="100%" justifyContent="space-between">
        <IconButton onClick={openDrawerMenu} edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Stack direction="row" alignItems="center" spacing={1}>
          {secondaryMenu && <SecondaryMenuButton variant="icon" />}
        </Stack>
      </Toolbar>
      <GlobalStyles
        styles={{
          body: {
            paddingTop: size.tabletNavBarHeight,
          },
        }}
      />
    </AppBar>
  );
};

export default TabletNavBar;
