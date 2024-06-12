import { AppBar as AppBarMui, Avatar, Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import Logo from "@/components/DataDisplay/Logo";

interface AppBarProps {
  Avatar?: ReactNode;
  Action?: ReactNode;
  Search?: ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logoSrc?: string;
  avatarSrc?: string;
}

const AppBar = ({ Avatar: AvatarProps, Action, Search, position = "static", avatarSrc, logoSrc }: AppBarProps) => (
  <AppBarMui position={position} elevation={0} sx={{ paddingX: 3 }}>
    <Stack direction="row" sx={{ alignItems: "center", height: "100%", width: "100%" }}>
      <Box component="a" href={logoSrc} sx={{ lineHeight: 0 }}>
        <Logo variant="shape-background" component="svg" />
      </Box>
      <Box sx={{ alignItems: "center", display: "flex", flex: 1, justifyContent: "center" }}>{Search}</Box>
      <Stack direction="row" alignItems="center">
        {Action}
        {AvatarProps || <Avatar variant="rounded" src={avatarSrc} />}
      </Stack>
    </Stack>
  </AppBarMui>
);

export default AppBar;
