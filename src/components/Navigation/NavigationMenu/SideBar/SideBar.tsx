import { Box, darken, IconButton, Stack, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import CloseIcon from "@/components/Icon/CloseIcon";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import SecondaryMenuButton from "@/components/Navigation/NavigationMenu/SecondaryMenuButton";

export interface SideBarProps {
  children?: ReactNode;
  width?: number | string;
  Footer?: ReactNode;
  Logo?: ReactNode;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  footer: {
    alignItems: "flex-end",
    display: "flex",
    flex: 1,
  },
  logo: {
    "& svg, & img": {
      width: "100%",
    },
    flex: 1,
    span: {
      width: "100% ! important",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    paddingX: 3,
    paddingY: 5,
  },
};

const SideBar = ({ children, width = 256, ...props }: SideBarProps) => {
  const {
    secondaryMenu,
    closeDrawerMenu,
    isMobile,
    isDrawerOpen,
    backgroundCoefficient,
    mobileNavBarHeight,
    sideBarWidth = width,
    Logo = props.Logo,
    Footer = props.Footer,
  } = useContext(NavigationMenuContext);

  const { palette } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : darken(palette.primary.main, backgroundCoefficient);
  const borderRight = isMobile && isDrawerOpen ? "none" : `solid 1px ${palette.mode === "dark" ? palette.divider : backgroundColor}`;

  return (
    <Box sx={{ ...styles.container, backgroundColor, borderRight, width: sideBarWidth }} component="aside">
      <Stack sx={styles.logoContainer} direction="row" alignItems="center" spacing={3}>
        {isMobile && (
          <IconButton onClick={closeDrawerMenu}>
            <CloseIcon fill={palette.getContrastText(backgroundColor)} />
          </IconButton>
        )}
        <Box
          sx={{
            ...styles.logo,
            textAlign: isMobile ? "left" : "center",
          }}
          width="100%"
        >
          {Logo}
        </Box>
        {isMobile && secondaryMenu && <SecondaryMenuButton variant="icon" />}
      </Stack>
      <Box>{children}</Box>
      <Box
        sx={{
          ...styles.footer,
          ...(isMobile && { paddingBottom: `${mobileNavBarHeight}px` }),
        }}
      >
        {secondaryMenu && !isMobile && <SecondaryMenuButton />}
        {Footer && Footer}
      </Box>
    </Box>
  );
};

export default SideBar;
