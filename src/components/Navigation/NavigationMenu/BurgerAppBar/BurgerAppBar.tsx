import { AppBar, GlobalStyles, IconButton, Stack, Toolbar, useTheme } from "@mui/material";
import { cloneElement, useContext } from "react";
import MenuIcon from "@/components/DataDisplay/Icons/MenuIcon";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";

const BurgerAppBar = () => {
  const { openDrawerMenu, AppBar: AppBarComponent } = useContext(NavigationMenuContext);
  const { palette, size } = useTheme();
  const background = palette.mode === "dark" ? palette.background.default : palette.primary.black;
  const AppBarWithTrigger = AppBarComponent ? cloneElement(AppBarComponent, { onClickBurger: openDrawerMenu }) : AppBarComponent;

  if (AppBarComponent) {
    return AppBarWithTrigger;
  }

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

export default BurgerAppBar;
