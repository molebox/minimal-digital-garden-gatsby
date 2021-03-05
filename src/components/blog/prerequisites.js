import { Flex, Text, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import React from "react";

const Prerequisites = ({ audience, stackKnowledge }) => {
  return (
    <Flex
      direction="column"
      bg="brand.text"
      border="solid 2px"
      borderColor="brand.crayola.500"
      p={4}
      justify="space-evenly"
      maxW="650px"
      m="2em auto"
      boxShadow="-5px 5px #000"
      backgroundColor="brand.bg"
    >
      <Box>
        <Box w="max-content">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            borderBottom="solid 2px"
            width="max-content"
          >
            Prerequisites
          </Text>
        </Box>

        <Text color="brand.crayola.100" mt={2}>
          {audience}
        </Text>
      </Box>
      <Box my={4}>
        <Box w="max-content">
          <Text
            fontFamily="heading"
            fontSize="md"
            borderBottom="solid 2px"
            width="max-content"
          >
            Helpful to know
          </Text>
        </Box>

        <UnorderedList mt={2} color="brand.crayola.100">
          {stackKnowledge.map((stack) => (
            <ListItem>{stack}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Prerequisites;
