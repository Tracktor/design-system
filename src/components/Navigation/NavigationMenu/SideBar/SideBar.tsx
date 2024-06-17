import { Box, IconButton, Stack, Theme, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";

export interface SideBarProps {
  children?: ReactNode;
  width?: number | string;
  Footer?: ReactNode;
  Logo?: ReactNode;
  Search?: ReactNode;
}

const styles = {
  bottomLink: {
    "& a": {
      "& svg": {
        color: "text.secondary",
      },
      "&.active": {
        "& svg": {
          color: "text.primary",
        },
        background: ({ palette }: Theme) => palette.grey[50],
        borderColor: "divider",
        color: "text.primary",
      },
      "&:hover": {
        background: ({ palette }: Theme) => palette.grey[50],
      },
      alignItems: "center",
      borderColor: "transparent",
      borderRadius: ({ shape }: Theme) => `${shape.borderRadius}px`,
      borderStyle: "solid",
      borderWidth: 1,
      color: "text.primary",
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      paddingX: 3,
      paddingY: 1,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
    p: 2,
  },
  container: {
    backgroundColor: "grey.A100",
    display: "flex",
    flexDirection: "column",
    height: "100%",
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
    hideSearchDesktop,
    closeDrawerMenu,
    isMobile,
    isTablet,
    isDrawerOpen,
    sideBarWidth,
    bottomLink,
    NavLink,
    Search = props.Logo,
    Logo = props.Logo,
  } = useContext(NavigationMenuContext);

  const { palette } = useTheme();
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
              <CloseIcon color={palette.getContrastText(backgroundColor)} />
            </IconButton>
          )}
        </Stack>
      )}
      {Search && displaySearch && <Box p={2}>{Search}</Box>}
      <Box flex={1}>{children}</Box>
      {bottomLink && (
        <Box sx={styles.bottomLink}>
          <NavLinkItem component={NavLink} {...bottomLink}>
            <Stack alignItems="center" justifyContent="center" spacing={1} direction="row">
              {bottomLink?.icon && (
                <Box component="span" display="flex">
                  {bottomLink?.icon}
                </Box>
              )}
              {bottomLink?.label && (
                <Box component="span" display="flex">
                  {bottomLink?.label}
                </Box>
              )}
            </Stack>
          </NavLinkItem>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
