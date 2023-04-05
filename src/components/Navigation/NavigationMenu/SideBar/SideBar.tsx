import { Box, darken, IconButton, Stack, useTheme } from "@mui/material";
import { ReactElement, ReactNode, useContext } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";

export interface SideBarProps {
  children?: ReactNode;
  logoLinkUrl?: string;
  Link?: (props: { to?: string; children?: ReactNode }) => ReactElement;
  Footer?: ReactNode;
  Logo?: ReactNode;
  width?: number | string;
}

interface LogoRenderProps {
  Link: SideBarProps["Link"];
  Logo: SideBarProps["Logo"];
  logoLinkUrl: SideBarProps["logoLinkUrl"];
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

const RenderLogo = ({ Logo, logoLinkUrl, Link }: LogoRenderProps) => {
  if (logoLinkUrl && Logo) {
    return Link ? <Link to={logoLinkUrl}>{Logo}</Link> : <a href={logoLinkUrl}>{Logo}</a>;
  }

  return <> {Logo} </>;
};

const SideBar = ({ children, logoLinkUrl, width = 256, ...props }: SideBarProps) => {
  const {
    closeDrawerMenu,
    isMobile,
    isDrawerOpen,
    backgroundCoefficient,
    sideBarWidth = width,
    Link = props.Link,
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
          <Box>
            <IconButton onClick={closeDrawerMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
                  fill={palette.getContrastText(backgroundColor)}
                />
              </svg>
            </IconButton>
          </Box>
        )}
        <Box sx={{ ...styles.logo, textAlign: isMobile ? "left" : "center" }} width="100%">
          <RenderLogo Logo={Logo} logoLinkUrl={logoLinkUrl} Link={Link} />
        </Box>
      </Stack>

      <Box>{children}</Box>
      {Footer && <Box sx={styles.footer}>{Footer}</Box>}
    </Box>
  );
};

export default SideBar;
