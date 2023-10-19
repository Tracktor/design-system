import { Box, Skeleton, useTheme } from "@mui/material";
import { ForwardedRef, forwardRef, ReactElement, RefObject, useEffect, useState } from "react";
import useLogo from "@/components/DataDisplay/Logo/useLogo";

interface CommonLogoProps {
  /**
   * Logo height
   */
  height?: number | string;
  /**
   * Logo width
   */
  width?: number | string;
  /**
   * Logo variant
   */
  variant?: "default" | "ops" | "supplier" | "pricing";
}

type SvgLogoProps = CommonLogoProps & {
  /**
   * The color of text logo
   */
  color?: "black" | "white" | string;
  /**
   * The component used for the root node.
   * Either a string to use an HTML element or a component.
   */
  component?: "svg";
};

type ImgLogoProps = CommonLogoProps & {
  color?: "black" | "white";
  component?: "img";
};

export type LogoProps = SvgLogoProps | ImgLogoProps;

const Logo = (
  { color, height, width, variant = "default", component = "img" }: LogoProps,
  ref: ForwardedRef<SVGSVGElement | HTMLImageElement>,
): ReactElement => {
  const [logoSrc, setLogoSrc] = useState("");
  const { palette } = useTheme();
  const { getTextColor, getImageModule, getSize } = useLogo();
  const { height: logoHeight, width: logoWidth } = getSize({ height, variant, width });
  const colorTextLogo = getTextColor(color);

  // Get image async
  useEffect(() => {
    if (component === "svg") {
      return;
    }

    (async () => {
      const module = await getImageModule(variant, colorTextLogo);
      setLogoSrc(module.default);
    })();
  }, [colorTextLogo, getImageModule, component, variant]);

  if (component === "img") {
    return (
      <Box ref={ref} sx={{ color: "red", display: "inline-block", fontSize: 0 }}>
        {logoSrc ? (
          <img src={logoSrc} alt="Tracktor" height={logoHeight} width={logoWidth} style={{ color: "red" }} />
        ) : (
          <Skeleton variant="rounded" width={logoWidth} height={logoHeight} />
        )}
      </Box>
    );
  }

  if (variant === "ops") {
    return (
      <svg
        height={logoHeight}
        width={logoWidth}
        viewBox="0 0 147 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref as RefObject<SVGSVGElement>}
      >
        <g clipPath="url(#clip0_12018_69680)">
          <path
            d="M45.8141 9.78482V7.63522H41.6861V22.7089H45.8141V13.7401C46.8478 12.3908 50.2345 11.4185 52.0299 11.359L51.683 7.31774C49.3844 7.43679 47.1402 8.23711 45.8141 9.78482Z"
            fill={colorTextLogo}
          />
          <path
            d="M64.203 9.01105C62.9381 7.74775 61.4011 7.3509 59.871 7.3509C55.5118 7.3509 52.2067 10.6778 52.2067 15.149C52.2067 19.6202 55.505 23 59.837 23C61.5167 23 63.0469 22.4841 64.1962 21.3398V22.7156H68.3242V7.63531H64.1962V9.01105H64.203ZM64.203 17.2655C63.4957 18.3569 62.0812 19.0447 60.5171 19.0447C58.1572 19.0447 56.3891 17.3846 56.3891 15.1754C56.3891 12.9663 58.1844 11.3062 60.5443 11.3062C62.0744 11.3062 63.4889 11.9676 64.1962 13.0258V17.2655H64.203Z"
            fill={colorTextLogo}
          />
          <path
            d="M78.558 18.866C76.2866 18.866 74.5796 17.3183 74.5796 15.1952C74.5796 13.0456 76.3206 11.4714 78.5852 11.4714C79.9997 11.4714 81.2102 12.0998 81.9175 13.1911L84.9846 10.2676C83.5088 8.46198 81.0946 7.34419 78.5036 7.34419C73.9948 7.34419 70.2544 10.7571 70.2544 15.2283C70.2544 19.6134 73.8792 22.9933 78.4492 22.9933C81.2782 22.9933 83.9577 21.6771 85.549 19.6134L82.2779 16.862C81.5027 18.1253 80.1493 18.866 78.558 18.866Z"
            fill={colorTextLogo}
          />
          <path
            d="M96.4974 13.2838L102.536 7.64188L102.543 7.63526H102.536H97.327L91.1997 13.4226V5.98834C91.1793 3.78582 89.3431 2 87.0717 2V22.7089H91.1997V18.2378L93.4711 16.1146L98.0411 22.7089H103.019L96.4974 13.2838Z"
            fill={colorTextLogo}
          />
          <path
            d="M114.743 17.7482C113.743 18.6081 113.002 19.038 112.002 19.038C110.853 19.038 110.057 18.4361 110.057 17.2059V11.5045C107.786 11.5045 105.943 13.2903 105.929 15.4994V17.5233C105.929 20.8767 108.316 22.9999 112.002 22.9999C114.239 22.9999 115.776 22.1995 117.245 20.7643L114.743 17.7482Z"
            fill={colorTextLogo}
          />
          <path
            d="M125.732 7.3509C120.985 7.3509 117.449 10.7043 117.449 15.1754C117.449 19.6466 120.985 23 125.732 23C130.479 23 134.015 19.6466 134.015 15.1754C134.015 10.7043 130.472 7.3509 125.732 7.3509ZM125.732 19.0381C123.406 19.0381 121.638 17.378 121.638 15.1688C121.638 12.9597 123.406 11.2996 125.732 11.2996C128.058 11.2996 129.826 12.9597 129.826 15.1688C129.826 17.378 128.058 19.0381 125.732 19.0381Z"
            fill={colorTextLogo}
          />
          <path
            d="M145.888 7.31774C143.59 7.43018 141.352 8.23711 140.026 9.78482V7.63522H135.898V22.7089H140.026V13.7401C141.06 12.3908 144.447 11.4185 146.242 11.359L145.888 7.31774Z"
            fill={colorTextLogo}
          />
          <path
            d="M37.6608 17.7482C36.6611 18.6081 35.9198 19.038 34.9201 19.038C33.7708 19.038 32.9751 18.4361 32.9751 17.2059V11.5045C30.7037 11.5045 28.8608 13.2903 28.8472 15.4994V17.5233C28.8472 20.8767 31.2342 22.9999 34.9201 22.9999C37.1575 22.9999 38.6945 22.1995 40.1634 20.7643L37.6608 17.7482Z"
            fill={colorTextLogo}
          />
          <path
            d="M32.9752 7.62862V6.04122C32.9616 3.83871 31.1187 2.05289 28.8473 2.05289V7.62201H25.447V11.4913H28.8473H32.9752H39.1638V7.62862H32.9752Z"
            fill={colorTextLogo}
          />
          <path
            d="M110.057 7.63522V5.82956C109.921 3.73287 108.133 2.0661 105.943 2.0661H105.95H105.929V7.63522H102.529V11.5045H105.929H110.057H116.246V7.63522H110.057Z"
            fill={colorTextLogo}
          />
          <path d="M11.1054 2.06609V11.9278H21.2451C21.2451 6.47773 16.7023 2.06609 11.1054 2.06609Z" fill="#50C6CE" />
          <path d="M0 2.06609V11.9278H10.1397C10.1397 6.47773 5.60371 2.06609 0 2.06609Z" fill="#50C6CE" />
          <path d="M10.1397 12.8604V22.7221H0C0 17.2721 4.54281 12.8604 10.1397 12.8604Z" fill="#50C6CE" />
          <path
            d="M21.2383 12.8604C21.2383 12.8604 21.2451 12.8604 21.2383 12.8604V22.7221H11.0986C11.0986 17.2721 15.6414 12.8604 21.2383 12.8604Z"
            fill="#50C6CE"
          />
          <path
            d="M82.936 36.212C83.52 35.612 83.812 34.82 83.812 33.836C83.812 32.852 83.52 32.064 82.936 31.472C82.352 30.872 81.604 30.572 80.692 30.572C79.788 30.572 79.04 30.872 78.448 31.472C77.864 32.064 77.572 32.852 77.572 33.836C77.572 34.82 77.868 35.612 78.46 36.212C79.052 36.812 79.8 37.112 80.704 37.112C81.608 37.112 82.352 36.812 82.936 36.212ZM80.704 38.084C79.512 38.084 78.508 37.684 77.692 36.884C76.876 36.076 76.468 35.06 76.468 33.836C76.468 32.604 76.876 31.592 77.692 30.8C78.508 30 79.512 29.6 80.704 29.6C81.896 29.6 82.896 30 83.704 30.8C84.52 31.592 84.928 32.604 84.928 33.836C84.928 35.068 84.52 36.084 83.704 36.884C82.896 37.684 81.896 38.084 80.704 38.084ZM89.5987 37.172C90.2147 37.172 90.7387 36.944 91.1707 36.488C91.6107 36.024 91.8307 35.42 91.8307 34.676C91.8307 33.924 91.6107 33.332 91.1707 32.9C90.7387 32.468 90.2147 32.252 89.5987 32.252C88.9907 32.252 88.4667 32.476 88.0267 32.924C87.5947 33.372 87.3787 33.968 87.3787 34.712C87.3787 35.448 87.5947 36.044 88.0267 36.5C88.4667 36.948 88.9907 37.172 89.5987 37.172ZM89.8147 31.304C90.7187 31.304 91.4667 31.616 92.0587 32.24C92.6587 32.856 92.9587 33.668 92.9587 34.676C92.9587 35.676 92.6587 36.5 92.0587 37.148C91.4587 37.788 90.7107 38.108 89.8147 38.108C89.2547 38.108 88.7627 37.976 88.3387 37.712C87.9227 37.44 87.6027 37.088 87.3787 36.656V41.12H86.2867V31.412H87.3787V32.732C87.6027 32.308 87.9227 31.964 88.3387 31.7C88.7627 31.436 89.2547 31.304 89.8147 31.304ZM94.0858 33.272C94.0858 32.72 94.3138 32.256 94.7698 31.88C95.2338 31.496 95.8298 31.304 96.5578 31.304C97.2938 31.304 97.8698 31.492 98.2858 31.868C98.7018 32.236 98.9298 32.744 98.9698 33.392H97.8418C97.8258 33.024 97.7018 32.728 97.4698 32.504C97.2378 32.28 96.9138 32.168 96.4978 32.168C96.0898 32.168 95.7658 32.268 95.5258 32.468C95.2938 32.66 95.1778 32.912 95.1778 33.224C95.1778 33.528 95.3098 33.764 95.5738 33.932C95.8458 34.1 96.1698 34.224 96.5458 34.304C96.9298 34.376 97.3098 34.464 97.6858 34.568C98.0698 34.664 98.3938 34.852 98.6578 35.132C98.9298 35.404 99.0658 35.796 99.0658 36.308C99.0658 36.812 98.8338 37.24 98.3698 37.592C97.9138 37.936 97.3178 38.108 96.5818 38.108C95.8458 38.108 95.2538 37.924 94.8058 37.556C94.3658 37.188 94.1258 36.68 94.0858 36.032H95.2138C95.2298 36.4 95.3578 36.696 95.5978 36.92C95.8458 37.136 96.1818 37.244 96.6058 37.244C97.0378 37.244 97.3738 37.152 97.6138 36.968C97.8618 36.784 97.9858 36.552 97.9858 36.272C97.9858 35.984 97.8898 35.756 97.6978 35.588C97.5058 35.42 97.2658 35.304 96.9778 35.24C96.6898 35.176 96.3738 35.1 96.0298 35.012C95.6938 34.924 95.3818 34.832 95.0938 34.736C94.8058 34.632 94.5658 34.456 94.3738 34.208C94.1818 33.96 94.0858 33.648 94.0858 33.272ZM105.128 31.904C105.128 32.208 105.212 32.46 105.38 32.66C105.548 32.86 105.764 33.008 106.028 33.104C106.292 33.2 106.584 33.284 106.904 33.356C107.232 33.428 107.556 33.512 107.876 33.608C108.204 33.696 108.5 33.812 108.764 33.956C109.028 34.1 109.244 34.316 109.412 34.604C109.58 34.892 109.664 35.248 109.664 35.672C109.664 36.32 109.416 36.884 108.92 37.364C108.424 37.844 107.752 38.084 106.904 38.084C106.064 38.084 105.38 37.892 104.852 37.508C104.324 37.116 104.06 36.588 104.06 35.924H105.224C105.256 36.3 105.404 36.604 105.668 36.836C105.94 37.068 106.34 37.184 106.868 37.184C107.396 37.184 107.816 37.048 108.128 36.776C108.44 36.504 108.596 36.188 108.596 35.828C108.596 35.46 108.512 35.18 108.344 34.988C108.176 34.788 107.96 34.64 107.696 34.544C107.432 34.448 107.136 34.368 106.808 34.304C106.488 34.232 106.164 34.148 105.836 34.052C105.516 33.956 105.224 33.836 104.96 33.692C104.696 33.54 104.48 33.32 104.312 33.032C104.144 32.736 104.06 32.372 104.06 31.94C104.06 31.236 104.308 30.672 104.804 30.248C105.308 29.816 105.96 29.6 106.76 29.6C107.568 29.6 108.208 29.788 108.68 30.164C109.16 30.532 109.436 31.044 109.508 31.7H108.296C108.264 31.372 108.108 31.092 107.828 30.86C107.556 30.628 107.184 30.512 106.712 30.512C106.248 30.512 105.868 30.632 105.572 30.872C105.276 31.104 105.128 31.448 105.128 31.904ZM114.043 38.108C113.099 38.108 112.331 37.796 111.739 37.172C111.147 36.548 110.851 35.724 110.851 34.7C110.851 33.676 111.151 32.856 111.751 32.24C112.351 31.616 113.127 31.304 114.079 31.304C115.039 31.304 115.807 31.6 116.383 32.192C116.967 32.776 117.259 33.524 117.259 34.436C117.259 34.668 117.243 34.884 117.211 35.084H111.967C111.999 35.74 112.203 36.26 112.579 36.644C112.963 37.02 113.451 37.208 114.043 37.208C114.491 37.208 114.867 37.108 115.171 36.908C115.483 36.708 115.711 36.444 115.855 36.116H117.031C116.823 36.692 116.463 37.168 115.951 37.544C115.447 37.92 114.811 38.108 114.043 38.108ZM116.119 34.292C116.111 33.66 115.911 33.156 115.519 32.78C115.127 32.396 114.639 32.204 114.055 32.204C113.479 32.204 112.999 32.392 112.615 32.768C112.231 33.136 112.019 33.644 111.979 34.292H116.119ZM119.711 31.412V32.528C120.103 31.712 120.771 31.304 121.715 31.304V32.444H121.427C120.867 32.444 120.439 32.592 120.143 32.888C119.855 33.176 119.711 33.68 119.711 34.4V38H118.619V31.412H119.711ZM122.281 31.412H123.445L125.461 36.98L127.489 31.412H128.665L126.085 38H124.849L122.281 31.412ZM130.785 30.14C130.641 30.284 130.465 30.356 130.257 30.356C130.049 30.356 129.873 30.284 129.729 30.14C129.593 29.996 129.525 29.82 129.525 29.612C129.525 29.404 129.597 29.228 129.741 29.084C129.885 28.94 130.057 28.868 130.257 28.868C130.465 28.868 130.641 28.94 130.785 29.084C130.929 29.228 131.001 29.404 131.001 29.612C131.001 29.82 130.929 29.996 130.785 30.14ZM129.705 38V31.412H130.797V38H129.705ZM135.359 38.108C134.415 38.108 133.647 37.796 133.055 37.172C132.463 36.548 132.167 35.728 132.167 34.712C132.167 33.688 132.463 32.864 133.055 32.24C133.647 31.616 134.415 31.304 135.359 31.304C136.151 31.304 136.795 31.488 137.291 31.856C137.795 32.224 138.147 32.748 138.347 33.428H137.171C137.043 33.044 136.823 32.744 136.511 32.528C136.199 32.312 135.815 32.204 135.359 32.204C134.735 32.204 134.231 32.424 133.847 32.864C133.471 33.296 133.283 33.912 133.283 34.712C133.283 35.504 133.471 36.12 133.847 36.56C134.231 36.992 134.735 37.208 135.359 37.208C136.295 37.208 136.899 36.8 137.171 35.984H138.347C138.147 36.632 137.791 37.148 137.279 37.532C136.775 37.916 136.135 38.108 135.359 38.108ZM142.555 38.108C141.611 38.108 140.843 37.796 140.251 37.172C139.659 36.548 139.363 35.724 139.363 34.7C139.363 33.676 139.663 32.856 140.263 32.24C140.863 31.616 141.639 31.304 142.591 31.304C143.551 31.304 144.319 31.6 144.895 32.192C145.479 32.776 145.771 33.524 145.771 34.436C145.771 34.668 145.755 34.884 145.723 35.084H140.479C140.511 35.74 140.715 36.26 141.091 36.644C141.475 37.02 141.963 37.208 142.555 37.208C143.003 37.208 143.379 37.108 143.683 36.908C143.995 36.708 144.223 36.444 144.367 36.116H145.543C145.335 36.692 144.975 37.168 144.463 37.544C143.959 37.92 143.323 38.108 142.555 38.108ZM144.631 34.292C144.623 33.66 144.423 33.156 144.031 32.78C143.639 32.396 143.151 32.204 142.567 32.204C141.991 32.204 141.511 32.392 141.127 32.768C140.743 33.136 140.531 33.644 140.491 34.292H144.631Z"
            fill="#50C6CE"
          />
        </g>
        <defs>
          <clipPath id="clip0_12018_69680">
            <rect width="147" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (variant === "pricing") {
    return (
      <svg
        height={logoHeight}
        width={logoWidth}
        viewBox="0 0 147 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref as RefObject<SVGSVGElement>}
      >
        <g clipPath="url(#clip0_12018_69701)">
          <path
            d="M45.8141 9.78482V7.63522H41.6861V22.7089H45.8141V13.7401C46.8478 12.3908 50.2345 11.4185 52.0299 11.359L51.683 7.31774C49.3844 7.43679 47.1402 8.23711 45.8141 9.78482Z"
            fill={colorTextLogo}
          />
          <path
            d="M64.203 9.01105C62.9381 7.74775 61.4011 7.3509 59.871 7.3509C55.5118 7.3509 52.2067 10.6778 52.2067 15.149C52.2067 19.6202 55.505 23 59.837 23C61.5167 23 63.0469 22.4841 64.1962 21.3398V22.7156H68.3242V7.63531H64.1962V9.01105H64.203ZM64.203 17.2655C63.4957 18.3569 62.0812 19.0447 60.5171 19.0447C58.1572 19.0447 56.3891 17.3846 56.3891 15.1754C56.3891 12.9663 58.1844 11.3062 60.5443 11.3062C62.0744 11.3062 63.4889 11.9676 64.1962 13.0258V17.2655H64.203Z"
            fill={colorTextLogo}
          />
          <path
            d="M78.558 18.866C76.2866 18.866 74.5796 17.3183 74.5796 15.1952C74.5796 13.0456 76.3206 11.4714 78.5852 11.4714C79.9997 11.4714 81.2102 12.0998 81.9175 13.1911L84.9846 10.2676C83.5088 8.46198 81.0946 7.34419 78.5036 7.34419C73.9948 7.34419 70.2544 10.7571 70.2544 15.2283C70.2544 19.6134 73.8792 22.9933 78.4492 22.9933C81.2782 22.9933 83.9577 21.6771 85.549 19.6134L82.2779 16.862C81.5027 18.1253 80.1493 18.866 78.558 18.866Z"
            fill={colorTextLogo}
          />
          <path
            d="M96.4974 13.2838L102.536 7.64188L102.543 7.63526H102.536H97.327L91.1997 13.4226V5.98834C91.1793 3.78582 89.3431 2 87.0717 2V22.7089H91.1997V18.2378L93.4711 16.1146L98.0411 22.7089H103.019L96.4974 13.2838Z"
            fill={colorTextLogo}
          />
          <path
            d="M114.743 17.7482C113.743 18.6081 113.002 19.038 112.002 19.038C110.853 19.038 110.057 18.4361 110.057 17.2059V11.5045C107.786 11.5045 105.943 13.2903 105.929 15.4994V17.5233C105.929 20.8767 108.316 22.9999 112.002 22.9999C114.239 22.9999 115.776 22.1995 117.245 20.7643L114.743 17.7482Z"
            fill={colorTextLogo}
          />
          <path
            d="M125.732 7.3509C120.985 7.3509 117.449 10.7043 117.449 15.1754C117.449 19.6466 120.985 23 125.732 23C130.479 23 134.015 19.6466 134.015 15.1754C134.015 10.7043 130.472 7.3509 125.732 7.3509ZM125.732 19.0381C123.406 19.0381 121.638 17.378 121.638 15.1688C121.638 12.9597 123.406 11.2996 125.732 11.2996C128.058 11.2996 129.826 12.9597 129.826 15.1688C129.826 17.378 128.058 19.0381 125.732 19.0381Z"
            fill={colorTextLogo}
          />
          <path
            d="M145.888 7.31774C143.59 7.43018 141.352 8.23711 140.026 9.78482V7.63522H135.898V22.7089H140.026V13.7401C141.06 12.3908 144.447 11.4185 146.242 11.359L145.888 7.31774Z"
            fill={colorTextLogo}
          />
          <path
            d="M37.6608 17.7482C36.6611 18.6081 35.9198 19.038 34.9201 19.038C33.7708 19.038 32.9751 18.4361 32.9751 17.2059V11.5045C30.7037 11.5045 28.8608 13.2903 28.8472 15.4994V17.5233C28.8472 20.8767 31.2342 22.9999 34.9201 22.9999C37.1575 22.9999 38.6945 22.1995 40.1634 20.7643L37.6608 17.7482Z"
            fill={colorTextLogo}
          />
          <path
            d="M32.9752 7.62862V6.04122C32.9616 3.83871 31.1187 2.05289 28.8473 2.05289V7.62201H25.447V11.4913H28.8473H32.9752H39.1638V7.62862H32.9752Z"
            fill={colorTextLogo}
          />
          <path
            d="M110.057 7.63522V5.82956C109.921 3.73287 108.133 2.0661 105.943 2.0661H105.95H105.929V7.63522H102.529V11.5045H105.929H110.057H116.246V7.63522H110.057Z"
            fill={colorTextLogo}
          />
          <path d="M11.1054 2.06609V11.9278H21.2451C21.2451 6.47773 16.7023 2.06609 11.1054 2.06609Z" fill="#9965F4" />
          <path d="M0 2.06609V11.9278H10.1397C10.1397 6.47773 5.60371 2.06609 0 2.06609Z" fill="#9965F4" />
          <path d="M10.1397 12.8604V22.7221H0C0 17.2721 4.54281 12.8604 10.1397 12.8604Z" fill="#9965F4" />
          <path
            d="M21.2383 12.8604C21.2383 12.8604 21.2451 12.8604 21.2383 12.8604V22.7221H11.0986C11.0986 17.2721 15.6414 12.8604 21.2383 12.8604Z"
            fill="#9965F4"
          />
          <path
            d="M63.6 29.684C64.536 29.684 65.248 29.912 65.736 30.368C66.232 30.824 66.48 31.408 66.48 32.12C66.48 32.832 66.24 33.42 65.76 33.884C65.288 34.34 64.568 34.568 63.6 34.568H61.992V38H60.9V29.684H63.6ZM61.992 33.704H63.6C64.2 33.704 64.644 33.568 64.932 33.296C65.228 33.016 65.376 32.628 65.376 32.132C65.376 31.084 64.784 30.56 63.6 30.56H61.992V33.704ZM68.9295 31.412V32.528C69.3215 31.712 69.9895 31.304 70.9335 31.304V32.444H70.6455C70.0855 32.444 69.6575 32.592 69.3615 32.888C69.0735 33.176 68.9295 33.68 68.9295 34.4V38H67.8375V31.412H68.9295ZM73.3355 30.14C73.1915 30.284 73.0155 30.356 72.8075 30.356C72.5995 30.356 72.4235 30.284 72.2795 30.14C72.1435 29.996 72.0755 29.82 72.0755 29.612C72.0755 29.404 72.1475 29.228 72.2915 29.084C72.4355 28.94 72.6075 28.868 72.8075 28.868C73.0155 28.868 73.1915 28.94 73.3355 29.084C73.4795 29.228 73.5515 29.404 73.5515 29.612C73.5515 29.82 73.4795 29.996 73.3355 30.14ZM72.2555 38V31.412H73.3475V38H72.2555ZM77.91 38.108C76.966 38.108 76.198 37.796 75.606 37.172C75.014 36.548 74.718 35.728 74.718 34.712C74.718 33.688 75.014 32.864 75.606 32.24C76.198 31.616 76.966 31.304 77.91 31.304C78.702 31.304 79.346 31.488 79.842 31.856C80.346 32.224 80.698 32.748 80.898 33.428H79.722C79.594 33.044 79.374 32.744 79.062 32.528C78.75 32.312 78.366 32.204 77.91 32.204C77.286 32.204 76.782 32.424 76.398 32.864C76.022 33.296 75.834 33.912 75.834 34.712C75.834 35.504 76.022 36.12 76.398 36.56C76.782 36.992 77.286 37.208 77.91 37.208C78.846 37.208 79.45 36.8 79.722 35.984H80.898C80.698 36.632 80.342 37.148 79.83 37.532C79.326 37.916 78.686 38.108 77.91 38.108ZM83.4253 30.14C83.2813 30.284 83.1053 30.356 82.8973 30.356C82.6893 30.356 82.5133 30.284 82.3693 30.14C82.2333 29.996 82.1653 29.82 82.1653 29.612C82.1653 29.404 82.2373 29.228 82.3813 29.084C82.5253 28.94 82.6973 28.868 82.8973 28.868C83.1053 28.868 83.2813 28.94 83.4253 29.084C83.5693 29.228 83.6413 29.404 83.6413 29.612C83.6413 29.82 83.5693 29.996 83.4253 30.14ZM82.3453 38V31.412H83.4373V38H82.3453ZM86.3318 31.412V32.48C86.7798 31.696 87.4958 31.304 88.4798 31.304C89.2078 31.304 89.8158 31.548 90.3038 32.036C90.7918 32.516 91.0358 33.204 91.0358 34.1V38H89.9558V34.28C89.9558 33.616 89.7958 33.112 89.4758 32.768C89.1558 32.424 88.7118 32.252 88.1438 32.252C87.5838 32.252 87.1398 32.424 86.8118 32.768C86.4918 33.112 86.3318 33.616 86.3318 34.28V38H85.2398V31.412H86.3318ZM95.487 38.108C94.591 38.108 93.843 37.788 93.243 37.148C92.643 36.5 92.343 35.676 92.343 34.676C92.343 33.668 92.639 32.856 93.231 32.24C93.831 31.616 94.583 31.304 95.487 31.304C96.047 31.304 96.535 31.436 96.951 31.7C97.375 31.964 97.695 32.308 97.911 32.732V31.412H99.015V38.168C99.015 39.072 98.723 39.808 98.139 40.376C97.555 40.952 96.815 41.24 95.919 41.24C95.023 41.24 94.279 41.032 93.687 40.616C93.103 40.2 92.771 39.656 92.691 38.984H93.759C93.863 39.36 94.107 39.672 94.491 39.92C94.875 40.168 95.351 40.292 95.919 40.292C96.487 40.292 96.959 40.104 97.335 39.728C97.719 39.36 97.911 38.84 97.911 38.168V36.656C97.695 37.088 97.375 37.44 96.951 37.712C96.535 37.976 96.047 38.108 95.487 38.108ZM97.251 36.5C97.691 36.052 97.911 35.456 97.911 34.712C97.911 33.968 97.691 33.372 97.251 32.924C96.819 32.476 96.295 32.252 95.679 32.252C95.071 32.252 94.547 32.468 94.107 32.9C93.675 33.332 93.459 33.92 93.459 34.664C93.459 35.408 93.679 36.012 94.119 36.476C94.559 36.94 95.083 37.172 95.691 37.172C96.299 37.172 96.819 36.948 97.251 36.5ZM105.3 31.904C105.3 32.208 105.384 32.46 105.552 32.66C105.72 32.86 105.936 33.008 106.2 33.104C106.464 33.2 106.756 33.284 107.076 33.356C107.404 33.428 107.728 33.512 108.048 33.608C108.376 33.696 108.672 33.812 108.936 33.956C109.2 34.1 109.416 34.316 109.584 34.604C109.752 34.892 109.836 35.248 109.836 35.672C109.836 36.32 109.588 36.884 109.092 37.364C108.596 37.844 107.924 38.084 107.076 38.084C106.236 38.084 105.552 37.892 105.024 37.508C104.496 37.116 104.232 36.588 104.232 35.924H105.396C105.428 36.3 105.576 36.604 105.84 36.836C106.112 37.068 106.512 37.184 107.04 37.184C107.568 37.184 107.988 37.048 108.3 36.776C108.612 36.504 108.768 36.188 108.768 35.828C108.768 35.46 108.684 35.18 108.516 34.988C108.348 34.788 108.132 34.64 107.868 34.544C107.604 34.448 107.308 34.368 106.98 34.304C106.66 34.232 106.336 34.148 106.008 34.052C105.688 33.956 105.396 33.836 105.132 33.692C104.868 33.54 104.652 33.32 104.484 33.032C104.316 32.736 104.232 32.372 104.232 31.94C104.232 31.236 104.48 30.672 104.976 30.248C105.48 29.816 106.132 29.6 106.932 29.6C107.74 29.6 108.38 29.788 108.852 30.164C109.332 30.532 109.608 31.044 109.68 31.7H108.468C108.436 31.372 108.28 31.092 108 30.86C107.728 30.628 107.356 30.512 106.884 30.512C106.42 30.512 106.04 30.632 105.744 30.872C105.448 31.104 105.3 31.448 105.3 31.904ZM114.215 38.108C113.271 38.108 112.503 37.796 111.911 37.172C111.319 36.548 111.023 35.724 111.023 34.7C111.023 33.676 111.323 32.856 111.923 32.24C112.523 31.616 113.299 31.304 114.251 31.304C115.211 31.304 115.979 31.6 116.555 32.192C117.139 32.776 117.431 33.524 117.431 34.436C117.431 34.668 117.415 34.884 117.383 35.084H112.139C112.171 35.74 112.375 36.26 112.751 36.644C113.135 37.02 113.623 37.208 114.215 37.208C114.663 37.208 115.039 37.108 115.343 36.908C115.655 36.708 115.883 36.444 116.027 36.116H117.203C116.995 36.692 116.635 37.168 116.123 37.544C115.619 37.92 114.983 38.108 114.215 38.108ZM116.291 34.292C116.283 33.66 116.083 33.156 115.691 32.78C115.299 32.396 114.811 32.204 114.227 32.204C113.651 32.204 113.171 32.392 112.787 32.768C112.403 33.136 112.191 33.644 112.151 34.292H116.291ZM119.883 31.412V32.528C120.275 31.712 120.943 31.304 121.887 31.304V32.444H121.599C121.039 32.444 120.611 32.592 120.315 32.888C120.027 33.176 119.883 33.68 119.883 34.4V38H118.791V31.412H119.883ZM122.453 31.412H123.617L125.633 36.98L127.661 31.412H128.837L126.257 38H125.021L122.453 31.412ZM130.957 30.14C130.813 30.284 130.637 30.356 130.429 30.356C130.221 30.356 130.045 30.284 129.901 30.14C129.765 29.996 129.697 29.82 129.697 29.612C129.697 29.404 129.769 29.228 129.913 29.084C130.057 28.94 130.229 28.868 130.429 28.868C130.637 28.868 130.813 28.94 130.957 29.084C131.101 29.228 131.173 29.404 131.173 29.612C131.173 29.82 131.101 29.996 130.957 30.14ZM129.877 38V31.412H130.969V38H129.877ZM135.531 38.108C134.587 38.108 133.819 37.796 133.227 37.172C132.635 36.548 132.339 35.728 132.339 34.712C132.339 33.688 132.635 32.864 133.227 32.24C133.819 31.616 134.587 31.304 135.531 31.304C136.323 31.304 136.967 31.488 137.463 31.856C137.967 32.224 138.319 32.748 138.519 33.428H137.343C137.215 33.044 136.995 32.744 136.683 32.528C136.371 32.312 135.987 32.204 135.531 32.204C134.907 32.204 134.403 32.424 134.019 32.864C133.643 33.296 133.455 33.912 133.455 34.712C133.455 35.504 133.643 36.12 134.019 36.56C134.403 36.992 134.907 37.208 135.531 37.208C136.467 37.208 137.071 36.8 137.343 35.984H138.519C138.319 36.632 137.963 37.148 137.451 37.532C136.947 37.916 136.307 38.108 135.531 38.108ZM142.726 38.108C141.782 38.108 141.014 37.796 140.422 37.172C139.83 36.548 139.534 35.724 139.534 34.7C139.534 33.676 139.834 32.856 140.434 32.24C141.034 31.616 141.81 31.304 142.762 31.304C143.722 31.304 144.49 31.6 145.066 32.192C145.65 32.776 145.942 33.524 145.942 34.436C145.942 34.668 145.926 34.884 145.894 35.084H140.65C140.682 35.74 140.886 36.26 141.262 36.644C141.646 37.02 142.134 37.208 142.726 37.208C143.174 37.208 143.55 37.108 143.854 36.908C144.166 36.708 144.394 36.444 144.538 36.116H145.714C145.506 36.692 145.146 37.168 144.634 37.544C144.13 37.92 143.494 38.108 142.726 38.108ZM144.802 34.292C144.794 33.66 144.594 33.156 144.202 32.78C143.81 32.396 143.322 32.204 142.738 32.204C142.162 32.204 141.682 32.392 141.298 32.768C140.914 33.136 140.702 33.644 140.662 34.292H144.802Z"
            fill="#9965F4"
          />
        </g>
        <defs>
          <clipPath id="clip0_12018_69701">
            <rect width="147" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (variant === "supplier") {
    return (
      <svg
        height={logoHeight}
        width={logoWidth}
        viewBox="0 0 147 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref as RefObject<SVGSVGElement>}
      >
        <g clipPath="url(#clip0_12928_201858)">
          <path
            d="M45.8141 9.78482V7.63522H41.6862V22.7089H45.8141V13.7401C46.8478 12.3908 50.2345 11.4185 52.0299 11.359L51.6831 7.31774C49.3845 7.43679 47.1403 8.23711 45.8141 9.78482Z"
            fill={colorTextLogo}
          />
          <path
            d="M64.203 9.01105C62.9381 7.74775 61.4012 7.3509 59.871 7.3509C55.5118 7.3509 52.2067 10.6778 52.2067 15.149C52.2067 19.6202 55.505 23 59.837 23C61.5168 23 63.0469 22.4841 64.1962 21.3398V22.7156H68.3242V7.63531H64.1962V9.01105H64.203ZM64.203 17.2655C63.4958 18.3569 62.0812 19.0447 60.5171 19.0447C58.1573 19.0447 56.3891 17.3846 56.3891 15.1754C56.3891 12.9663 58.1845 11.3062 60.5443 11.3062C62.0744 11.3062 63.489 11.9676 64.1962 13.0258V17.2655H64.203Z"
            fill={colorTextLogo}
          />
          <path
            d="M78.558 18.866C76.2866 18.866 74.5797 17.3183 74.5797 15.1952C74.5797 13.0456 76.3206 11.4714 78.5852 11.4714C79.9997 11.4714 81.2103 12.0998 81.9175 13.1911L84.9846 10.2676C83.5089 8.46198 81.0946 7.34419 78.5036 7.34419C73.9948 7.34419 70.2545 10.7571 70.2545 15.2283C70.2545 19.6134 73.8792 22.9933 78.4492 22.9933C81.2783 22.9933 83.9577 21.6771 85.5491 19.6134L82.278 16.862C81.5027 18.1253 80.1494 18.866 78.558 18.866Z"
            fill={colorTextLogo}
          />
          <path
            d="M96.4974 13.2838L102.536 7.64188L102.543 7.63526H102.536H97.327L91.1997 13.4226V5.98834C91.1793 3.78582 89.3431 2 87.0717 2V22.7089H91.1997V18.2378L93.4711 16.1146L98.0411 22.7089H103.019L96.4974 13.2838Z"
            fill={colorTextLogo}
          />
          <path
            d="M114.743 17.7482C113.743 18.6081 113.002 19.038 112.002 19.038C110.853 19.038 110.057 18.4361 110.057 17.2059V11.5045C107.786 11.5045 105.943 13.2903 105.929 15.4994V17.5233C105.929 20.8767 108.316 22.9999 112.002 22.9999C114.239 22.9999 115.776 22.1995 117.245 20.7643L114.743 17.7482Z"
            fill={colorTextLogo}
          />
          <path
            d="M125.732 7.3509C120.985 7.3509 117.449 10.7043 117.449 15.1754C117.449 19.6466 120.985 23 125.732 23C130.479 23 134.015 19.6466 134.015 15.1754C134.015 10.7043 130.472 7.3509 125.732 7.3509ZM125.732 19.0381C123.406 19.0381 121.638 17.378 121.638 15.1688C121.638 12.9597 123.406 11.2996 125.732 11.2996C128.058 11.2996 129.826 12.9597 129.826 15.1688C129.826 17.378 128.058 19.0381 125.732 19.0381Z"
            fill={colorTextLogo}
          />
          <path
            d="M145.888 7.31774C143.59 7.43018 141.352 8.23711 140.026 9.78482V7.63522H135.898V22.7089H140.026V13.7401C141.06 12.3908 144.447 11.4185 146.242 11.359L145.888 7.31774Z"
            fill={colorTextLogo}
          />
          <path
            d="M37.6608 17.7482C36.6611 18.6081 35.9198 19.038 34.9201 19.038C33.7708 19.038 32.9751 18.4361 32.9751 17.2059V11.5045C30.7037 11.5045 28.8608 13.2903 28.8472 15.4994V17.5233C28.8472 20.8767 31.2342 22.9999 34.9201 22.9999C37.1575 22.9999 38.6945 22.1995 40.1634 20.7643L37.6608 17.7482Z"
            fill={colorTextLogo}
          />
          <path
            d="M32.9752 7.62862V6.04122C32.9616 3.83871 31.1187 2.05289 28.8473 2.05289V7.62201H25.447V11.4913H28.8473H32.9752H39.1638V7.62862H32.9752Z"
            fill={colorTextLogo}
          />
          <path
            d="M110.057 7.63522V5.82956C109.921 3.73287 108.133 2.0661 105.943 2.0661H105.95H105.929V7.63522H102.529V11.5045H105.929H110.057H116.246V7.63522H110.057Z"
            fill={colorTextLogo}
          />
          <path d="M11.1054 2.06609V11.9278H21.2451C21.2451 6.47773 16.7023 2.06609 11.1054 2.06609Z" fill="#FFA726" />
          <path d="M0 2.06609V11.9278H10.1397C10.1397 6.47773 5.60371 2.06609 0 2.06609Z" fill="#FFA726" />
          <path d="M10.1397 12.8604V22.7221H0C0 17.2721 4.54281 12.8604 10.1397 12.8604Z" fill="#FFA726" />
          <path
            d="M21.2383 12.8604C21.2383 12.8604 21.2451 12.8604 21.2383 12.8604V22.7221H11.0986C11.0986 17.2721 15.6414 12.8604 21.2383 12.8604Z"
            fill="#FFA726"
          />
          <path
            d="M101.576 38.084C101.024 38.084 100.528 37.988 100.088 37.796C99.656 37.596 99.316 37.324 99.068 36.98C98.82 36.628 98.692 36.224 98.684 35.768H99.848C99.888 36.16 100.048 36.492 100.328 36.764C100.616 37.028 101.032 37.16 101.576 37.16C102.096 37.16 102.504 37.032 102.8 36.776C103.104 36.512 103.256 36.176 103.256 35.768C103.256 35.448 103.168 35.188 102.992 34.988C102.816 34.788 102.596 34.636 102.332 34.532C102.068 34.428 101.712 34.316 101.264 34.196C100.712 34.052 100.268 33.908 99.932 33.764C99.604 33.62 99.32 33.396 99.08 33.092C98.848 32.78 98.732 32.364 98.732 31.844C98.732 31.388 98.848 30.984 99.08 30.632C99.312 30.28 99.636 30.008 100.052 29.816C100.476 29.624 100.96 29.528 101.504 29.528C102.288 29.528 102.928 29.724 103.424 30.116C103.928 30.508 104.212 31.028 104.276 31.676H103.076C103.036 31.356 102.868 31.076 102.572 30.836C102.276 30.588 101.884 30.464 101.396 30.464C100.94 30.464 100.568 30.584 100.28 30.824C99.992 31.056 99.848 31.384 99.848 31.808C99.848 32.112 99.932 32.36 100.1 32.552C100.276 32.744 100.488 32.892 100.736 32.996C100.992 33.092 101.348 33.204 101.804 33.332C102.356 33.484 102.8 33.636 103.136 33.788C103.472 33.932 103.76 34.16 104 34.472C104.24 34.776 104.36 35.192 104.36 35.72C104.36 36.128 104.252 36.512 104.036 36.872C103.82 37.232 103.5 37.524 103.076 37.748C102.652 37.972 102.152 38.084 101.576 38.084ZM111.799 31.424V38H110.707V37.028C110.499 37.364 110.207 37.628 109.831 37.82C109.463 38.004 109.055 38.096 108.607 38.096C108.095 38.096 107.635 37.992 107.227 37.784C106.819 37.568 106.495 37.248 106.255 36.824C106.023 36.4 105.907 35.884 105.907 35.276V31.424H106.987V35.132C106.987 35.78 107.151 36.28 107.479 36.632C107.807 36.976 108.255 37.148 108.823 37.148C109.407 37.148 109.867 36.968 110.203 36.608C110.539 36.248 110.707 35.724 110.707 35.036V31.424H111.799ZM114.735 32.636C114.951 32.26 115.271 31.948 115.695 31.7C116.127 31.444 116.627 31.316 117.195 31.316C117.779 31.316 118.307 31.456 118.779 31.736C119.259 32.016 119.635 32.412 119.907 32.924C120.179 33.428 120.315 34.016 120.315 34.688C120.315 35.352 120.179 35.944 119.907 36.464C119.635 36.984 119.259 37.388 118.779 37.676C118.307 37.964 117.779 38.108 117.195 38.108C116.635 38.108 116.139 37.984 115.707 37.736C115.283 37.48 114.959 37.164 114.735 36.788V41.12H113.643V31.424H114.735V32.636ZM119.199 34.688C119.199 34.192 119.099 33.76 118.899 33.392C118.699 33.024 118.427 32.744 118.083 32.552C117.747 32.36 117.375 32.264 116.967 32.264C116.567 32.264 116.195 32.364 115.851 32.564C115.515 32.756 115.243 33.04 115.035 33.416C114.835 33.784 114.735 34.212 114.735 34.7C114.735 35.196 114.835 35.632 115.035 36.008C115.243 36.376 115.515 36.66 115.851 36.86C116.195 37.052 116.567 37.148 116.967 37.148C117.375 37.148 117.747 37.052 118.083 36.86C118.427 36.66 118.699 36.376 118.899 36.008C119.099 35.632 119.199 35.192 119.199 34.688ZM122.844 32.636C123.06 32.26 123.38 31.948 123.804 31.7C124.236 31.444 124.736 31.316 125.304 31.316C125.888 31.316 126.416 31.456 126.888 31.736C127.368 32.016 127.744 32.412 128.016 32.924C128.288 33.428 128.424 34.016 128.424 34.688C128.424 35.352 128.288 35.944 128.016 36.464C127.744 36.984 127.368 37.388 126.888 37.676C126.416 37.964 125.888 38.108 125.304 38.108C124.744 38.108 124.248 37.984 123.816 37.736C123.392 37.48 123.068 37.164 122.844 36.788V41.12H121.752V31.424H122.844V32.636ZM127.308 34.688C127.308 34.192 127.208 33.76 127.008 33.392C126.808 33.024 126.536 32.744 126.192 32.552C125.856 32.36 125.484 32.264 125.076 32.264C124.676 32.264 124.304 32.364 123.96 32.564C123.624 32.756 123.352 33.04 123.144 33.416C122.944 33.784 122.844 34.212 122.844 34.7C122.844 35.196 122.944 35.632 123.144 36.008C123.352 36.376 123.624 36.66 123.96 36.86C124.304 37.052 124.676 37.148 125.076 37.148C125.484 37.148 125.856 37.052 126.192 36.86C126.536 36.66 126.808 36.376 127.008 36.008C127.208 35.632 127.308 35.192 127.308 34.688ZM130.954 29.12V38H129.862V29.12H130.954ZM133.379 30.356C133.171 30.356 132.995 30.284 132.851 30.14C132.707 29.996 132.635 29.82 132.635 29.612C132.635 29.404 132.707 29.228 132.851 29.084C132.995 28.94 133.171 28.868 133.379 28.868C133.579 28.868 133.747 28.94 133.883 29.084C134.027 29.228 134.099 29.404 134.099 29.612C134.099 29.82 134.027 29.996 133.883 30.14C133.747 30.284 133.579 30.356 133.379 30.356ZM133.907 31.424V38H132.815V31.424H133.907ZM141.768 34.46C141.768 34.668 141.756 34.888 141.732 35.12H136.476C136.516 35.768 136.736 36.276 137.136 36.644C137.544 37.004 138.036 37.184 138.612 37.184C139.084 37.184 139.476 37.076 139.788 36.86C140.108 36.636 140.332 36.34 140.46 35.972H141.636C141.46 36.604 141.108 37.12 140.58 37.52C140.052 37.912 139.396 38.108 138.612 38.108C137.988 38.108 137.428 37.968 136.932 37.688C136.444 37.408 136.06 37.012 135.78 36.5C135.5 35.98 135.36 35.38 135.36 34.7C135.36 34.02 135.496 33.424 135.768 32.912C136.04 32.4 136.42 32.008 136.908 31.736C137.404 31.456 137.972 31.316 138.612 31.316C139.236 31.316 139.788 31.452 140.268 31.724C140.748 31.996 141.116 32.372 141.372 32.852C141.636 33.324 141.768 33.86 141.768 34.46ZM140.64 34.232C140.64 33.816 140.548 33.46 140.364 33.164C140.18 32.86 139.928 32.632 139.608 32.48C139.296 32.32 138.948 32.24 138.564 32.24C138.012 32.24 137.54 32.416 137.148 32.768C136.764 33.12 136.544 33.608 136.488 34.232H140.64ZM144.301 32.492C144.493 32.116 144.765 31.824 145.117 31.616C145.477 31.408 145.913 31.304 146.425 31.304V32.432H146.137C144.913 32.432 144.301 33.096 144.301 34.424V38H143.209V31.424H144.301V32.492Z"
            fill="#FFA726"
          />
        </g>
        <defs>
          <clipPath id="clip0_12928_201858">
            <rect width="147" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      fill="none"
      height={logoHeight}
      width={logoWidth}
      viewBox="0 0 259 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref as RefObject<SVGSVGElement>}
    >
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
