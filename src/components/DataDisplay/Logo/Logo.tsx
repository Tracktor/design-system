import { Box, Skeleton, useTheme } from "@mui/material";
import { forwardRef, Ref, useEffect, useState } from "react";
import useLogo from "@/components/DataDisplay/Logo/useLogo";

export interface LogoProps {
  /**
   * The color of text logo
   */
  color?: "black" | "white";
  /**
   * The component used for the root node.
   * Either a string to use an HTML element or a component.
   */
  component?: "img" | "svg";
  /**
   * Logo height
   */
  height?: number | string;
  /**
   * Logo width
   */
  width?: number | string;
}

const Logo = ({ color, component = "img", height = 32, width = 259 }: LogoProps, ref: Ref<any>) => {
  const [logoSrc, setLogoSrc] = useState("");
  const { palette } = useTheme();
  const { getTextColor } = useLogo();
  const colorTextLogo = getTextColor(color);

  // Get image async
  useEffect(() => {
    if (component === "svg") {
      return;
    }

    (async () => {
      const module =
        colorTextLogo === "white" ? await import("@/assets/img/tracktor-white.svg") : await import("@/assets/img/tracktor-black.svg");
      setLogoSrc(module.default);
    })();
  }, [colorTextLogo, component]);

  if (component === "img") {
    return (
      <Box ref={ref} sx={{ display: "inline-block", fontSize: 0 }}>
        {logoSrc ? (
          <img src={logoSrc} alt="Tracktor" height={height} width={width} />
        ) : (
          <Skeleton variant="rounded" width={width} height={height} />
        )}
      </Box>
    );
  }

  return (
    <svg fill="none" height={height} width={width} viewBox="0 0 259 32" xmlns="http://www.w3.org/2000/svg" ref={ref}>
      <g fill={colorTextLogo}>
        <path d="m67.3801 11.77v-3.24996h-6.07v22.78996h6.07v-13.56c1.52-2.04 6.5-3.51 9.14-3.6l-.52-6.10996c-3.38.18-6.67 1.39-8.62 3.72996z" />
        <path d="m94.4203 10.5998c-1.86-1.90996-4.12-2.50996-6.37-2.50996-6.41 0-11.27 5.02996-11.27 11.78996s4.85 11.87 11.22 11.87c2.47 0 4.72-.78 6.41-2.51v2.08h6.0697v-22.79996h-6.0697v2.07996zm0 12.48c-1.04 1.65-3.12 2.69-5.42 2.69-3.47 0-6.07-2.51-6.07-5.85s2.64-5.85 6.11-5.85c2.25 0 4.33 1 5.37 2.6v6.41z" />
        <path d="m115.52 25.5001c-3.34 0-5.85-2.34-5.85-5.55 0-3.25 2.56-5.63 5.89-5.63 2.08 0 3.86.95 4.9 2.6l4.51-4.42c-2.17-2.73002-5.72-4.42002-9.53-4.42002-6.63 0-12.13 5.16002-12.13 11.92002 0 6.63 5.33 11.74 12.05 11.74 4.16 0 8.1-1.99 10.44-5.11l-4.81-4.16c-1.14 1.91-3.13 3.03-5.47 3.03z" />
        <path d="m141.91 17.06 8.88-8.53.01-.01h-.01-7.66l-9.01 8.75v-11.24c-.03-3.33-2.74-6.03-6.08-6.03v31.31h6.07v-6.76l3.34-3.21 6.72 9.97h7.32z" />
        <path d="m168.73 23.8101c-1.47 1.3-2.56 1.95-4.03 1.95-1.69 0-2.86-.91-2.86-2.77v-8.62c-3.34 0-6.05 2.7-6.07 6.04v3.06c0 5.07 3.51 8.28 8.93 8.28 3.29 0 5.55-1.21 7.71-3.38z" />
        <path d="m184.89 8.08984c-6.98 0-12.18 5.06996-12.18 11.82996s5.2 11.83 12.18 11.83 12.18-5.07 12.18-11.83-5.2-11.82996-12.18-11.82996zm0 17.66996c-3.42 0-6.02-2.51-6.02-5.85s2.6-5.85 6.02-5.85 6.02 2.51 6.02 5.85-2.59 5.85-6.02 5.85z" />
        <path d="m214.53 8.04004c-3.38.17-6.67 1.39-8.62 3.72996v-3.24996h-6.07v22.78996h6.07v-13.56c1.52-2.04 6.5-3.51 9.14-3.6z" />
        <path d="m55.3902 23.8101c-1.47 1.3-2.56 1.95-4.03 1.95-1.69 0-2.86-.91-2.86-2.77v-8.62c-3.34 0-6.05 2.7-6.07 6.04v3.06c0 5.07 3.51 8.28 8.93 8.28 3.29 0 5.55-1.21 7.71-3.38z" />
        <path d="m48.5002 8.51008v-2.4c-.02-3.33-2.73-6.0300019-6.07-6.0300019v8.4200019h-5v5.85002h5 6.07 9.1v-5.84002z" />
        <path d="m161.84 8.5201v-2.73c-.2-3.17-2.83-5.690002-6.05-5.690002h.01-.03v8.420002h-5v5.85h5 6.07 9.1v-5.85z" />
        <path d="m222.54 27.3599c0 2.41-1.84 4.21-4.25 4.21-2.45 0-4.29-1.8-4.29-4.21 0-2.37 1.84-4.17 4.29-4.17 2.41 0 4.25 1.8 4.25 4.17z" />
        <path d="m241.26 8.74004v5.73996h-15.21v-5.73996h3.96c0-5.67 3.07-8.7000009 8.48-8.7000009.72 0 1.44.02 2.21.05l-.38 5.5700009c-.43-.02-.85-.04-1.32-.02-1.91.06-3.02 1.36-3.02 3.1z" />
        <path d="m249.82 17.8103v13.33h-5.96v-22.41005h5.96v3.19005c1.92-2.30005 5.15-3.49005 8.48-3.66005l.51 6.01005c-2.6.09-7.5 1.53-8.99 3.54z" />
        <path d="m230.01 20.4302c.01-3.28 2.68-5.94 5.96-5.94v16.65h-5.96z" />
      </g>
      <g fill={palette.primary.main}>
        <path d="m16.3301.100098v14.910002h14.91c0-8.24-6.67-14.910002-14.91-14.910002z" />
        <path d="m.00976562.100098v14.910002h14.91003438c0-8.24-6.68003-14.910002-14.91003438-14.910002z" />
        <path d="m14.91 16.4199s.01 0 0 0v14.91h-14.91c0-8.24 6.68-14.91 14.91-14.91z" />
        <path d="m31.2401 16.4199v14.91h-14.91c0-8.24 6.67-14.91 14.91-14.91z" />
      </g>
    </svg>
  );
};

export default forwardRef(Logo);
