import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Title = () => {
  const titleBox = useColorModeValue("brand.bg", "dark.lightGrey");
  return (
    <Box bgColor={titleBox} wrap="wrap" maxW={1000} lineHeight={1} my={6} p={6}>
      <Text
        as="h1"
        fontSize={["5xl", "7xl"]}
        fontWeight={800}
        fontFamily="heading"
        color="brand.black"
      >
        Digital Garden
      </Text>
    </Box>
  );
};

export default Title;
