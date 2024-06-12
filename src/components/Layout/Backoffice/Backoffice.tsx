import { Box, Stack } from "@mui/material";
import { ReactNode, useRef } from "react";

interface BackofficeProps {
  AppBar?: ReactNode;
  Main?: ReactNode;
  Sidebar?: ReactNode;
}

const Backoffice = ({ Main, Sidebar, AppBar }: BackofficeProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {AppBar}
      <Stack height="100%" direction="row">
        {Sidebar}
        <Box flex={1} sx={{ maxHeight: "100%", overflow: "auto" }} ref={gridRef}>
          <Box component="main" height="100%">
            {Main}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Backoffice;
