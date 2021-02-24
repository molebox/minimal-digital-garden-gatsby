import React from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { backgroundImage } from "./utils";

const Layout = ({ children }) => {
  const bg = useColorModeValue("brand.bg", "dark.bg");
  return (
    <Box
      bgColor={bg}
      h="100%"
      minH="100vh"
      w="100%"
      backgroundImage={backgroundImage}
    >
      <Flex
        direction="column"
        minH="100vh"
        maxW="1000px"
        m="0 auto"
        bgColor={bg}
        p={3}
        backgroundImage={backgroundImage}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
