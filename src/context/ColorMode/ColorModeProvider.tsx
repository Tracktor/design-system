import { ReactNode, useMemo, useState } from "react";
import ColorModeContext, { DefaultValueColorModeContext } from "@/context/ColorMode/ColorModeContext";

interface ColorModeProviderProps {
  children: ReactNode;
}

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [colorMode, toggleColorMode] = useState<DefaultValueColorModeContext["colorMode"]>("light");

  const value = useMemo(
    () => ({
      colorMode,
      toggleColorMode: () => toggleColorMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    [colorMode]
  );

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};

export default ColorModeProvider;
