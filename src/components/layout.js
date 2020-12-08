import React from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  const bg = useColorModeValue("brand.bg", "dark.bg");
  return (
    <Box bgColor={bg} h="100%" minH="100vh" w="100%">
      <Flex direction="column" maxW="1000px" m="0 auto" bgColor={bg} p={3}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
