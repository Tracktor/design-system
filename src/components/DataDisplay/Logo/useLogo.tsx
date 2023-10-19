import { useTheme } from "@mui/material";
import { useCallback } from "react";
import type { LogoProps } from "@/components/DataDisplay/Logo/Logo";

const DEFAULT_HEIGHT_DEFAULT_VARIANT = 32;
const DEFAULT_WIDTH_DEFAULT_VARIANT = 259;
const DEFAULT_HEIGHT_OTHER_VARIANT = 44;
const DEFAULT_WIDTH__OTHER_VARIANT = 147;

const useLogo = () => {
  const { palette } = useTheme();
  const { mode } = palette;

  const getTextColor = useCallback(
    (color: LogoProps["color"]): NonNullable<LogoProps["color"]> => {
      if (color) {
        return color;
      }

      return mode === "light" ? "black" : "white";
    },
    [mode],
  );

  const getImageModule = useCallback(async (variant: LogoProps["variant"], color: LogoProps["color"]) => {
    switch (variant) {
      case "ops":
        return import("@/assets/img/tracktor-ops.svg");
      case "supplier":
        return import("@/assets/img/tracktor-supplier.svg");
      case "pricing":
        return import("@/assets/img/tracktor-pricing.svg");
      default:
        return color === "white" ? import("@/assets/img/tracktor-white.svg") : import("@/assets/img/tracktor-black.svg");
    }
  }, []);

  const getSize = useCallback(
    ({ variant, width, height }: { variant: LogoProps["variant"]; width: LogoProps["width"]; height: LogoProps["height"] }) => {
      if (variant === "default") {
        return {
          height: height || DEFAULT_HEIGHT_DEFAULT_VARIANT,
          width: width || DEFAULT_WIDTH_DEFAULT_VARIANT,
        };
      }

      return {
        height: height || DEFAULT_HEIGHT_OTHER_VARIANT,
        width: width || DEFAULT_WIDTH__OTHER_VARIANT,
      };
    },
    [],
  );

  return { getImageModule, getSize, getTextColor };
};

export default useLogo;
