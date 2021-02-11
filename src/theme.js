import defaultTheme from "@chakra-ui/theme";

//  "dark mode" https://www.swissted.com/products/d-r-i-at-the-american-legion-hall-1984#&gid=1&pid=1

const theme = {
  ...defaultTheme,
  styles: {
    global: {
      html: {
        marginLeft: "calc(100vw - 100%)",
      },
    },
  },
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
    "5xl": "74px",
    title: "85px",
    "6xl": "100px",
    "7xl": "130px",
  },
  colors: {
    brand: {
      bg: "#ffffff",
      black: "#000000",
      lightGrey: "#707070",
      darkGrey: "#1f2127",
      offWhite: "#f6f8fa",
      accent: "#DA5077",
    },
    dark: {
      bg: "#e2a114",
      black: "#000000",
      lightGrey: "#dee2d7",
    },
  },
  // breakpoints: ["30em", "48em", "62em", "80em"],
};

export default theme;
