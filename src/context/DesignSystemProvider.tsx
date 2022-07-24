import darkTheme from "constants/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import DesignSystemContext, { designSystemContextDefaultValue } from "context/DesignSystemContext";
import type { ReactNode } from "react";

interface DesignSystemProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
}

const DesignSystemProvider = ({ children, includeCssBaseline = true }: DesignSystemProviderProps) => (
  <DesignSystemContext.Provider value={designSystemContextDefaultValue}>
    <ThemeProvider theme={darkTheme}>
      {includeCssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  </DesignSystemContext.Provider>
);

export default DesignSystemProvider;
