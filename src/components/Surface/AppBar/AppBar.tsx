import { AppBar as AppBarMui, AvatarProps, Box, ButtonProps, Stack, SxProps, TextFieldProps, useMediaQuery, useTheme } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import AvatarAppBar from "@/components/DataDisplay/AvatarAppBar";
import Logo from "@/components/DataDisplay/Logo";
import ActionAppBar from "@/components/Inputs/ActionAppBar";
import TextFieldAppBar from "@/components/Inputs/TextFieldAppBar";

interface AppBarProps extends PropsWithChildren {
  Avatar?: ReactNode;
  Action?: ReactNode;
  Search?: ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logoSrc?: string;
  avatarProps?: AvatarProps;
  searchProps?: TextFieldProps;
  actionProps?: ButtonProps;
  elevation?: number;
  sx?: SxProps;
}

const AppBar = ({
  Avatar: AvatarComponent,
  Search: SearchComponent,
  Action: ActionComponent,
  avatarProps,
  searchProps,
  actionProps,
  logoSrc,
  children,
  sx,
  position = "static",
  elevation = 0,
}: AppBarProps) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isTablet = useMediaQuery(breakpoints.between("sm", "md"));

  const styles = {
    paddingX: 3,
    ...sx,
  };

  if (isMobile || isTablet) {
    return null;
  }

  if (children) {
    return (
      <AppBarMui position={position} elevation={elevation} sx={styles}>
        {children}
      </AppBarMui>
    );
  }

  return (
    <AppBarMui position={position} elevation={elevation} sx={styles}>
      <Stack direction="row" sx={{ alignItems: "center", height: "100%", width: "100%" }} spacing={1}>
        <Box component="a" href={logoSrc} sx={{ lineHeight: 0 }}>
          <Logo mode="dark" />
        </Box>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Box sx={{ alignItems: "center", display: "flex", flex: 1, justifyContent: "center" }}>
          {SearchComponent === null ? null : SearchComponent || <TextFieldAppBar {...searchProps} />}
        </Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          {ActionComponent === null ? null : ActionComponent || <ActionAppBar {...actionProps} />}
          {AvatarComponent === null ? null : AvatarComponent || <AvatarAppBar {...avatarProps} />}
        </Stack>
      </Stack>
    </AppBarMui>
  );
};

export default AppBar;
