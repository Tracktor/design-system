import { useTheme } from "@mui/material";
import type { LogoProps } from "@/components/DataDisplay/Logo/Logo";

const useLogo = () => {
  const { palette } = useTheme();
  const { mode } = palette;

  const getColor = (color: LogoProps["color"]) => {
    if (color) {
      return color;
    }

    return mode === "light" ? "black" : "white";
  };

  return { getColor };
};

export default useLogo;
