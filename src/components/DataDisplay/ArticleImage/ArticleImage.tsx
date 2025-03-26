import { Skeleton, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import Avatar, { AvatarProps } from "@/components/DataDisplay/Avatar/Avatar";

export interface ArticleImageProps {
  src?: string;
  alt?: string;
  isLoading?: boolean;
  width?: string | number;
  height?: string | number;
  secondarySrc?: AvatarProps["secondarySrc"];
  secondaryAvatarProps?: AvatarProps["secondaryAvatarProps"];
  sx?: SxProps;
}

const geStyles = (width: number | string, height: number | string) => {
  const { w, h } = { h: Number(height), w: Number(width) };
  const radiusAndPadding = `${(w || h) / 10}px`;

  return { borderRadius: radiusAndPadding, padding: radiusAndPadding };
};

const ArticleImageSkeleton = ({ width, height, sx }: { width: number | string; height: number | string; sx: SxProps }) => (
  <Skeleton variant="rounded" width={width} height={height} sx={sx} />
);

const ArticleImage = ({
  src,
  isLoading,
  secondarySrc,
  secondaryAvatarProps,
  sx,
  width = 64,
  height = 64,
  alt = "Article",
}: ArticleImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { borderRadius, padding } = geStyles(width, height);
  const stylesBase = { borderRadius, flexShrink: 0 };
  const displayLoader = src && !loaded && !error;
  const displayPlaceholder = !src || (error && !loaded) || (error && loaded);
  const isTransparent = src?.endsWith(".png") || src?.endsWith(".svg") || src?.endsWith(".gif") || src?.endsWith(".webp") || false;

  const handleLoad = () => {
    setError(false);
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(false);
  };

  return (
    <>
      {/* Image */}
      <Avatar
        src={src}
        secondarySrc={secondarySrc}
        secondaryAvatarProps={secondaryAvatarProps}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        sx={{
          ...stylesBase,
          background: ({ palette }: Theme) => palette.grey[100],
          height,
          padding: isTransparent || displayPlaceholder ? padding : 0,
          width,
          ...sx,
        }}
      >
        {/* Loading Skeleton */}
        {(isLoading || displayLoader) && <ArticleImageSkeleton width={width} height={height} sx={stylesBase} />}

        {/* Placeholder image */}
        {displayPlaceholder && (
          <svg width="100%" height="100%" viewBox="0 0 39 38" fill="none">
            <path
              d="M31.2231 13.3867V20.5549C33.1243 20.5549 34.9475 19.7997 36.2918 18.4554C37.6361 17.1111 38.3913 15.2878 38.3913 13.3867H31.2231Z"
              fill="#9DAAAB"
            />
            <path
              d="M28.1578 1.68575C28.4842 1.45212 28.89 1.35769 29.2859 1.42324C29.6819 1.48879 30.0356 1.70895 30.2692 2.03529L38.3968 13.3878L35.9294 15.1543L27.8018 3.80176C27.6858 3.63963 27.6029 3.45615 27.5579 3.26189C27.513 3.06762 27.5069 2.86638 27.54 2.66975C27.573 2.47311 27.6447 2.28495 27.7507 2.11609C27.8567 1.94722 27.9951 1.80097 28.1578 1.68575Z"
              fill="#9DAAAB"
            />
            <path
              d="M2.40711 37.3042H25.3771C26.6704 37.3042 27.7188 36.2558 27.7188 34.9626V34.9546C27.7188 33.6614 26.6704 32.613 25.3771 32.613H2.40711C1.11388 32.613 0.065506 33.6614 0.065506 34.9546V34.9626C0.065506 36.2558 1.11388 37.3042 2.40711 37.3042Z"
              fill="#D2D8D8"
            />
            <path
              d="M29.9091 1.67007C29.7458 1.5545 29.5612 1.47247 29.3659 1.42872C29.1707 1.38496 28.9687 1.38036 28.7717 1.41517C28.5747 1.44999 28.3865 1.52352 28.2181 1.63153C28.0497 1.73954 27.9044 1.87987 27.7905 2.04441L18.4161 15.4409C15.8377 13.4518 12.6726 12.3735 9.41609 12.3746V23.8675H1.77004C1.76793 24.8718 1.96432 25.8667 2.34793 26.7948C2.73153 27.723 3.29478 28.5662 4.00531 29.276C4.71583 29.9858 5.55963 30.5481 6.48819 30.9308C7.41676 31.3134 8.41179 31.5088 9.41609 31.5056H24.2224V27.2047C24.2273 23.6597 22.9581 20.231 20.6462 17.5436L30.2755 3.7807C30.3902 3.61812 30.4718 3.43452 30.5154 3.2404C30.5591 3.04628 30.5641 2.84545 30.53 2.6494C30.496 2.45336 30.4237 2.26595 30.3171 2.0979C30.2106 1.92986 30.0719 1.78447 29.9091 1.67007ZM12.7373 24.9268C12.4549 24.9269 12.1838 24.8158 11.9826 24.6176C11.7814 24.4193 11.6663 24.1499 11.6621 23.8675V14.8595C14.1619 15.3234 16.4626 16.5335 18.2611 18.3306C20.0596 20.1277 21.2716 22.4274 21.7374 24.9268H12.7373Z"
              fill="#9DAAAB"
            />
          </svg>
        )}
      </Avatar>
    </>
  );
};

export default ArticleImage;
