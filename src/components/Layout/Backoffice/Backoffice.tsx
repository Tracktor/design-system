import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { cloneElement, ReactElement, ReactNode, useRef } from "react";

interface BackofficeProps {
  AppBar?: ReactElement;
  Main?: ReactNode;
  Sidebar?: ReactElement;
}

const cloneElementWithProps = <T extends Record<string, unknown>>(element: ReactElement, props: T): ReactElement =>
  cloneElement(element, props);

const Backoffice = ({ Main, Sidebar, AppBar }: BackofficeProps) => {
  const { breakpoints } = useTheme();
  const gridRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));
  const SideBarAppBar = Sidebar ? cloneElementWithProps(Sidebar, { AppBar }) : Sidebar;

  return (
    <Stack height="100%">
      {!isSmallScreen && AppBar}
      <Stack height="100%" direction={isSmallScreen ? "column" : "row"} minHeight={0}>
        {SideBarAppBar}
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
