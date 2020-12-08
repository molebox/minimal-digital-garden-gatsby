import React from "react";
import { Input, Flex, useColorModeValue } from "@chakra-ui/react";

const SearchBar = ({ isDarkMode, handleSearchQuery }) => {
  const bg = useColorModeValue("rgba(255,255,255, 0.9)", "dark.bg");
  const textBox = useColorModeValue("rgba(255,255,255, 0.9)", "dark.black");
  const text = useColorModeValue("brand.black", "dark.lightGrey");
  return (
    <Flex
      justify="center"
      alignItems="center"
      position="sticky"
      top={0}
      bg={bg}
      h={100}
      my={1}
      zIndex="99999"
    >
      <Input
        fontFamily="body"
        type="text"
        id="blog-searchbar"
        placeholder="Search posts.."
        onChange={handleSearchQuery}
        variant="flushed"
        _placeholder={{
          color: "brand.black"
        }}
      />
    </Flex>
  );
};

export default SearchBar;
