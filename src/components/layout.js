import React from "react";
import { Flex, Box } from "@chakra-ui/core";

const Layout = ({ children }) => {
  return (
    <Box bgColor="brand.bg" h="100vh" w="100%">
      <Flex
        direction="column"
        maxW="1000px"
        m="0 auto"
        bgColor="brand.bg"
        p={3}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
