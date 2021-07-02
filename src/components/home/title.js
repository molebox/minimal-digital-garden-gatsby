import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Title = () => {
  const titleBox = useColorModeValue("brand.bg", "dark.lightGrey");
  return (
    <Box bgColor={titleBox} wrap="wrap" maxW={1000} lineHeight={1} my={6}>
      <Text
        as="h1"
        fontSize={["4xl", "4xl", "5xl"]}
        fontWeight={800}
        fontFamily="heading"
        color="brand.black"
        lineHeight={1.2}
        textAlign={["center", "start", "start"]}
        p={2}
      >
        It's a tech blog!
      </Text>
      {/* <Text
        fontSize={["sm", "sm", "lg"]}
        my={3}
      >
        (With some other stuff that i find interesting or decided to brain fart out)
      </Text> */}
    </Box>
  );
};

export default Title;
