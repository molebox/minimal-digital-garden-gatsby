import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { Loader } from "@react-three/drei";

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
      {/* An overlay that shows a loading percentage, when the loading is done it removes itself */}
      <Loader
        containerStyles={{
          margin: "0 auto",
        }}
      />
      </Flex>
    </Box>
  );
};

export default Layout;
