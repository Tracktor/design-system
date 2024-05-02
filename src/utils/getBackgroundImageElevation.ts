import { alpha, getOverlayAlpha } from "@mui/material";

/**
 * Get background image elevation
 * @param elevation
 */
const getBackgroundImageElevation = (elevation: number) => ({
  backgroundImage: `linear-gradient(${alpha("#fff", +getOverlayAlpha(elevation))}, ${alpha("#fff", +getOverlayAlpha(elevation))})`,
});

export default getBackgroundImageElevation;
