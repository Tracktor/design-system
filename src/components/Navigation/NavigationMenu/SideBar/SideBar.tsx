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
    paddingY: 5,
  },
};

const SideBar = ({ children, width = 270, ...props }: SideBarProps) => {
  const {
    secondaryMenu,
    closeDrawerMenu,
    isMobile,
    isDrawerOpen,
    sideBarWidth = width,
    Logo = props.Logo,
    Footer = props.Footer,
  } = useContext(NavigationMenuContext);

  const { palette, size } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : palette.primary.black;
  const borderRight = isMobile && isDrawerOpen ? "none" : `solid 1px ${palette.mode === "dark" ? palette.divider : backgroundColor}`;

  return (
    <Box sx={{ ...styles.container, backgroundColor, borderRight, width: sideBarWidth }} component="aside">
      <Stack
        sx={{
          ...styles.logoContainer,
          paddingX: isMobile ? 3 : 2,
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
            textAlign: isMobile ? "left" : "center",
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
      {isMobile && !!secondaryMenu && <SecondaryMenuButton />}
      <Box>{children}</Box>
      <Box
        sx={{
          ...styles.footer,
          ...(isMobile && { paddingBottom: `${size.mobileNavBarHeight}px` }),
        }}
      >
        {secondaryMenu && !isMobile && <SecondaryMenuButton />}
        {Footer && Footer}
      </Box>
    </Box>
  );
};

export default SideBar;
