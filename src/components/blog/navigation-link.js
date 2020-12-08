import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link, useColorModeValue, useColorMode } from "@chakra-ui/react";

const NavigationLink = ({ children, to }) => {
  const { colorMode } = useColorMode();
  const textBox = useColorModeValue("brand.bg", "dark.black");
  const text = useColorModeValue("brand.black", "dark.lightGrey");
  const isDarkMode = colorMode === "dark";

  return (
    <Link
      as={GatsbyLink}
      to={to}
      color={text}
      bgColor={textBox}
      fontFamily="heading"
      fontSize="md"
      w="max-content"
      px={2}
      style={{
        transform: isDarkMode ? "rotate(-5deg)" : null,
      }}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
