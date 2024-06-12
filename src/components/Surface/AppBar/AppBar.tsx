import { AppBar as AppBarMui, Avatar, Box, Stack, SxProps } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import Logo from "@/components/DataDisplay/Logo";
import TextFieldAppBar from "@/components/Inputs/TextFieldAppBar";

interface AppBarProps extends PropsWithChildren {
  Avatar?: ReactNode;
  Action?: ReactNode;
  Search?: ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logoSrc?: string;
  avatarSrc?: string;
  elevation?: number;
  sx?: SxProps;
}

const AppBar = ({
  Avatar: AvatarProps,
  Search: SearchProps,
  Action,
  avatarSrc,
  logoSrc,
  children,
  sx,
  position = "static",
  elevation = 0,
}: AppBarProps) => {
  const styles = {
    paddingX: 3,
    ...sx,
  };

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
        <Box sx={{ alignItems: "center", display: "flex", flex: 1, justifyContent: "center" }}>{SearchProps || <TextFieldAppBar />}</Box>
        <Stack direction="row" alignItems="center">
          {Action}
          {AvatarProps || <Avatar variant="rounded" src={avatarSrc} />}
        </Stack>
      </Stack>
    </AppBarMui>
  );
};

export default AppBar;
