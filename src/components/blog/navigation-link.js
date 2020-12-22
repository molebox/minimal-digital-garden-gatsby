/** @jsx jsx */
import { Link, jsx, useColorMode } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const NavigationLink = ({ children, to }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Link
      sx={{
        color: "pText",
        fontFamily: "heading",
        fontSize: "16px",
        width: "max-content",
        px: 2,
        transform: isDarkMode ? "rotate(-5deg)" : null,
      }}
      as={GatsbyLink}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
