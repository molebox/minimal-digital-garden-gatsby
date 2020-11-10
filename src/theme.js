import defaultTheme from "@chakra-ui/theme";

const theme = {
  ...defaultTheme,
  fonts: {
    heading: "Open Sans",
    body: "Jost",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "100px",
  },
  colors: {
    brand: {
      bg: "#ffffff",
      black: "#000000",
      lightGrey: "#707070",
      darkGrey: "#1f2127",
      offWhite: "#f6f8fa",
    },
  },
};

export default theme;
