import { Box, SxProps } from "@mui/material";
import { ElementType, ForwardedRef, forwardRef, PropsWithChildren } from "react";

export interface TabPanelProps extends PropsWithChildren {
  index: number;
  value: number;
  orientation?: "horizontal" | "vertical";
  paddingY?: number | string;
  paddingX?: number | string;
  fullHeight?: boolean;
  sx?: SxProps;
}

const TabPanel = <T extends ElementType>(
  { children, value, index, orientation, paddingY, paddingX, fullHeight, sx }: TabPanelProps,
  ref: ForwardedRef<T>,
) => {
  const defaultPaddingY = paddingY || 3;
  const defaultPaddingX = paddingX || orientation === "vertical" ? 3 : 0;

  if (value === index) {
    return (
      <Box
        ref={ref}
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        paddingY={defaultPaddingY}
        paddingX={defaultPaddingX}
        height={fullHeight ? "100%" : undefined}
        sx={sx}
      >
        {children}
      </Box>
    );
  }

  return null;
};

export default forwardRef(TabPanel);
