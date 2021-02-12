import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Title = () => {
  const titleBox = useColorModeValue("brand.bg", "dark.lightGrey");
  return (
    <Box bgColor={titleBox} wrap="wrap" maxW={1000} lineHeight={1} my={6} p={6}>
      <Text
        as="h1"
        fontSize={["4xl", "title"]}
        fontWeight={800}
        fontFamily="heading"
        color="brand.black"
        lineHeight={1.2}
        textAlign={["center", null]}
      >
        It's a tech blog, yeah!
      </Text>
    </Box>
  );
};

export default Title;
