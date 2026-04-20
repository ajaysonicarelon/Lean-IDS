/**
 * Color tokens for Lean IDS
 * Auto-generated from Figma design tokens
 */

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface FeedbackColors {
  red: ColorScale;
  green: ColorScale;
  yellow: ColorScale;
  blue: ColorScale;
}

export interface SecondaryColors {
  cyan: ColorScale;
  turquoise: ColorScale;
  terracotta: ColorScale;
  pantone: ColorScale;
}

export interface ColorPalette {
  primary: ColorScale;
  neutral: Partial<ColorScale> & { 1000?: string };
  feedback: FeedbackColors;
  secondary: SecondaryColors;
}

// Carelon Brand Colors
export const carelonColors: ColorPalette = {
  "primary": {
    "primary-900": "#180336",
    "primary-800": "#200448",
    "primary-700": "#30056D",
    "primary-600": "#400791",
    "primary-500": "#5009B5",
    "primary-400": "#6222BC",
    "primary-300": "#8553CB",
    "primary-200": "#CBB5E9",
    "primary-100": "#EFE6F8",
    "primary-50": "#F8F7FB"
  },
  "neutral": {
    "gray-1000": "#000000",
    "gray-900": "#222222",
    "gray-800": "#464646",
    "gray-700": "#6C6C6C",
    "gray-600": "#909090",
    "gray-500": "#B1B1B1",
    "gray-400": "#D5D5D5",
    "gray-300": "#E6E6E6",
    "gray-200": "#F8F8F8",
    "gray-100": "#FDFDFD",
    "gray-50": "#FFFFFF"
  },
  "feedback": {
    "red-900": "#3F0312",
    "red-800": "#540418",
    "red-700": "#7E0524",
    "red-600": "#A80730",
    "red-500": "#D2093C",
    "red-400": "#D72250",
    "red-300": "#E05377",
    "red-200": "#F2B5C5",
    "red-100": "#FBE7EC",
    "red-50": "#FFF4F7",
    "yellow-900": "#4D3905",
    "yellow-800": "#664C07",
    "yellow-700": "#99710A",
    "yellow-600": "#CC970E",
    "yellow-500": "#FFBD11",
    "yellow-400": "#FFC429",
    "yellow-300": "#FFD158",
    "yellow-200": "#FFEBB8",
    "yellow-100": "#FFF8E7",
    "yellow-50": "#FFFBF3",
    "blue-900": "#071F39",
    "blue-800": "#09294C",
    "blue-700": "#0D3D72",
    "blue-600": "#125298",
    "blue-500": "#1666BE",
    "blue-400": "#2D75C5",
    "blue-300": "#5C94D2",
    "blue-200": "#B9D1EC",
    "blue-100": "#E8F0F9",
    "blue-50": "#F4F9FF",
    "green-900": "#052902",
    "green-800": "#063603",
    "green-700": "#0A5205",
    "green-600": "#0D6D06",
    "green-500": "#108808",
    "green-400": "#289421",
    "green-300": "#58AC52",
    "green-200": "#B7DBB5",
    "green-100": "#E7F3E6",
    "green-50": "#F5FDF4"
  },
  "secondary": {
    "cyan-900": "#143749",
    "cyan-800": "#1B4A61",
    "cyan-700": "#296E92",
    "cyan-600": "#3693C2",
    "cyan-500": "#44B8F3",
    "cyan-400": "#57BFF4",
    "cyan-300": "#7CCDF7",
    "cyan-200": "#C7EAFB",
    "cyan-100": "#ECF8FE",
    "cyan-50": "#F7FCFF",
    "turquoise-900": "#003838",
    "turquoise-800": "#004B4A",
    "turquoise-700": "#007070",
    "turquoise-600": "#009695",
    "turquoise-500": "#00BBBA",
    "turquoise-400": "#1AC2C1",
    "turquoise-300": "#4DCFCF",
    "turquoise-200": "#B3EBEA",
    "turquoise-100": "#E6F8F8",
    "turquoise-50": "#F5FFFF",
    "terracotta-900": "#44221D",
    "terracotta-800": "#5B2E26",
    "terracotta-700": "#884439",
    "terracotta-600": "#B65B4C",
    "terracotta-500": "#E3725F",
    "terracotta-400": "#E6806F",
    "terracotta-300": "#EB9C8F",
    "terracotta-200": "#F7D5CF",
    "terracotta-100": "#FCF1EF",
    "terracotta-50": "#FFF9F8",
    "pantone-900": "#0C1D38",
    "pantone-800": "#10274B",
    "pantone-700": "#183A70",
    "pantone-600": "#204E96",
    "pantone-500": "#2861BB",
    "pantone-400": "#3E71C2",
    "pantone-300": "#6990CF",
    "pantone-200": "#BFD0EB",
    "pantone-100": "#EAEFF8",
    "pantone-50": "#F4F7FD"
  }
};

// Elevance Brand Colors
export const elevanceColors: ColorPalette = {
  "primary": {
    "primary-900": "#081023",
    "primary-800": "#0A162E",
    "primary-700": "#102045",
    "primary-600": "#15285C",
    "primary-500": "#1A3673",
    "primary-400": "#314A81",
    "primary-300": "#51729D",
    "primary-200": "#BAC3D5",
    "primary-100": "#EBEBF1",
    "primary-50": "#F6F6FA"
  },
  "neutral": {
    "gray-1000": "#000000",
    "gray-900": "#222222",
    "gray-800": "#464646",
    "gray-700": "#6C6C6C",
    "gray-600": "#909090",
    "gray-500": "#B1B1B1",
    "gray-400": "#D5D5D5",
    "gray-300": "#E6E6E6",
    "gray-200": "#F8F8F8",
    "gray-100": "#FDFDFD",
    "gray-50": "#FFFFFF"
  },
  "feedback": {
    "red-900": "#3F0312",
    "red-800": "#540418",
    "red-700": "#7E0524",
    "red-600": "#A80730",
    "red-500": "#D2093C",
    "red-400": "#D72250",
    "red-300": "#E05377",
    "red-200": "#F2B5C5",
    "red-100": "#FBE6EC",
    "red-50": "#FFF4F7",
    "yellow-900": "#4D3905",
    "yellow-800": "#664C07",
    "yellow-700": "#99710A",
    "yellow-600": "#CC970E",
    "yellow-500": "#FFBD11",
    "yellow-400": "#FFC429",
    "yellow-300": "#FFD158",
    "yellow-200": "#FFEBB8",
    "yellow-100": "#FFF8E7",
    "yellow-50": "#FFFBF3",
    "blue-900": "#071F39",
    "blue-800": "#09294C",
    "blue-700": "#0D3D72",
    "blue-600": "#125298",
    "blue-500": "#1666BE",
    "blue-400": "#2D75C5",
    "blue-300": "#5C94D2",
    "blue-200": "#B9D1EC",
    "blue-100": "#E8F0F9",
    "blue-50": "#F4F9FF",
    "green-900": "#052902",
    "green-800": "#063603",
    "green-700": "#0A5205",
    "green-600": "#0D6D06",
    "green-500": "#108808",
    "green-400": "#289421",
    "green-300": "#58AC52",
    "green-200": "#B7DBB5",
    "green-100": "#E7F3E6",
    "green-50": "#F5FDF4"
  },
  "secondary": {
    "cyan-900": "#143749",
    "cyan-800": "#1B4A61",
    "cyan-700": "#296E92",
    "cyan-600": "#3693C2",
    "cyan-500": "#44B8F3",
    "cyan-400": "#57BFF4",
    "cyan-300": "#7CCDF7",
    "cyan-200": "#C7EAFB",
    "cyan-100": "#ECF8FE",
    "cyan-50": "#F7FCFF",
    "turquoise-900": "#003838",
    "turquoise-800": "#004B4A",
    "turquoise-700": "#007070",
    "turquoise-600": "#009695",
    "turquoise-500": "#00BBBA",
    "turquoise-400": "#1AC2C1",
    "turquoise-300": "#4DCFCF",
    "turquoise-200": "#B3EBEA",
    "turquoise-100": "#E6F8F8",
    "turquoise-50": "#F5FFFF",
    "terracotta-900": "#44221D",
    "terracotta-800": "#5B2E26",
    "terracotta-700": "#884439",
    "terracotta-600": "#B65B4C",
    "terracotta-500": "#E3725F",
    "terracotta-400": "#E6806F",
    "terracotta-300": "#EB9C8F",
    "terracotta-200": "#F7D5CF",
    "terracotta-100": "#FCF1EF",
    "terracotta-50": "#FFF9F8",
    "pantone-900": "#0C1D38",
    "pantone-800": "#10274B",
    "pantone-700": "#183A70",
    "pantone-600": "#204E96",
    "pantone-500": "#2861BB",
    "pantone-400": "#3E71C2",
    "pantone-300": "#6990CF",
    "pantone-200": "#BFD0EB",
    "pantone-100": "#EAEFF8",
    "pantone-50": "#F4F7FD"
  }
};
