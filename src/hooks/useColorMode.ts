import { useContext } from "react";
import ColorModeContext from "@/context/ColorMode/ColorModeContext";

export const useColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return { toggleColorMode };
};

export default useColorMode;
