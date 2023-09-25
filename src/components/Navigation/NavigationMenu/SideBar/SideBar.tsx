import { Box, darken, IconButton, Stack, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
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
            <svg
              fill={palette.getContrastText(backgroundColor)}
              height={24}
              width={24}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              tabIndex={-1}
            >
              <path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
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
