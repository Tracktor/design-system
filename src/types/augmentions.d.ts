import { CSSProperties } from "react";

// Components

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    rounded: true;
  }
  interface ChipPropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/FormControlLabel" {
  interface FormControlLabelProps {
    variant?: "card";
    size?: "small" | "medium";
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/InputLabel" {
  interface InputLabelPropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

// Theme

declare module "@mui/system" {
  interface Shape {
    borderRadiusL: number;
    borderRadiusS: number;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    size: {
      mobileNavBarHeight: number;
      tabletNavBarHeight: number;
    };
  }

  interface ThemeOptions {
    size?: {
      mobileNavBarHeight?: number;
      tabletNavBarHeight?: number;
    };
  }

  interface Palette {
    border: {
      outline: string;
    };
  }
  interface PaletteOptions {
    border?: {
      outline?: string;
    };
  }

  interface TypeBackground {
    dark: string;
  }

  interface PaletteColor {
    "4p": string;
    "8p": string;
    "12p": string;
    "16p": string;
    "30p": string;
    "50p": string;
    "160p": string;
    black: string;
  }

  interface SimplePaletteColorOptions {
    "4p"?: string;
    "8p"?: string;
    "12p"?: string;
    "16p"?: string;
    "30p"?: string;
    "50p"?: string;
    "160p"?: string;
    black?: string;
  }

  interface TypographyVariants {
    body3: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: CSSProperties;
  }
}
