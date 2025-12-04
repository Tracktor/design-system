import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import { cloneElement, isValidElement, useRef } from "react";

interface BackofficeProps {
  AppBar?: ReactNode;
  Main?: ReactNode;
  Sidebar?: ReactNode;
}

const Backoffice = ({ Main, Sidebar, AppBar }: BackofficeProps) => {
  const { breakpoints } = useTheme();
  const gridRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));
  const SidebarWithAppBar = isValidElement<{ AppBar?: ReactNode }>(Sidebar) ? cloneElement(Sidebar, { AppBar }) : Sidebar;

  return (
    <Stack height="100%">
      {!isSmallScreen && AppBar}
      <Stack height="100%" direction={isSmallScreen ? "column" : "row"} minHeight={0}>
        {SidebarWithAppBar}
        <Box
          flex={1}
          sx={{
            maxHeight: "100%",
            overflow: "auto",
          }}
          ref={gridRef}
        >
          <Box component="main" height="100%">
            {Main}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Backoffice;
