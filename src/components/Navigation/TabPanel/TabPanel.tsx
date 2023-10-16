import { Box, SxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
  sx?: SxProps;
}

const TabPanel = ({ children, value, index, sx }: TabPanelProps) => (
  <Box role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} sx={sx}>
    {value === index && <Box sx={{ paddingY: 5 }}>{children}</Box>}
  </Box>
);

export default TabPanel;
