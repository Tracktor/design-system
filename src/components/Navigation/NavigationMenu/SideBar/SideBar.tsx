import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import CloseIcon from "@/components/Icon/CloseIcon";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import SecondaryMenuButton from "@/components/Navigation/NavigationMenu/SecondaryMenuButton";

export interface SideBarProps {
  children?: ReactNode;
  width?: number | string;
  Footer?: ReactNode;
  Logo?: ReactNode;
  Search?: ReactNode;
}

const styles = {
  container: {
    backgroundColor: "grey.A100",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  footer: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    "& svg, & img": {
      maxWidth: "100%",
    },
    flex: 1,
    span: {
      width: "100% ! important",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    paddingY: 2,
  },
};

const SideBar = ({ children, ...props }: SideBarProps) => {
  const {
    secondaryMenu,
    hideSearchDesktop,
    closeDrawerMenu,
    isMobile,
    isTablet,
    isDrawerOpen,
    sideBarWidth,
    Search = props.Logo,
    Logo = props.Logo,
    Footer = props.Footer,
  } = useContext(NavigationMenuContext);

  const { palette, size } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : palette.primary.black;
  const borderRight = isMobile && isDrawerOpen ? "none" : `solid 1px ${palette.divider}`;
  const isDesktop = !isMobile && !isTablet;
  const displaySearch = hideSearchDesktop ? !isDesktop : true;

  return (
    <Box
      sx={{
        ...styles.container,
        borderRight,
        overflowX: "auto",
        width: isMobile ? "100%" : sideBarWidth || "auto",
      }}
      component="aside"
    >
      {Logo && (
        <Stack
          sx={{
            ...styles.logoContainer,
            paddingX: 2,
          }}
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Box
            sx={{
              ...styles.logo,
              ...(isMobile && {
                "& svg, & img": {
                  ...styles.logo["& svg, & img"],
                  maxHeight: 25,
                  width: "auto",
                },
              }),
            }}
          >
            {Logo}
          </Box>
          {isMobile && (
            <IconButton onClick={closeDrawerMenu}>
              <CloseIcon fill={palette.getContrastText(backgroundColor)} />
            </IconButton>
          )}
        </Stack>
      )}
      {Search && displaySearch && <Box p={2}>{Search}</Box>}
      {isMobile && !!secondaryMenu && <SecondaryMenuButton />}
      <Box flex={1}>{children}</Box>
      <Box
        sx={{
          ...styles.footer,
          ...(isMobile && { paddingBottom: `${size.mobileNavBarHeight}px` }),
        }}
      >
        {Footer && Footer}
        {secondaryMenu && !isMobile && <SecondaryMenuButton />}
      </Box>
    </Box>
  );
};

export default SideBar;
