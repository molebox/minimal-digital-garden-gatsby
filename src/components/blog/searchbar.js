import React from "react";
import { Input, Flex } from "@chakra-ui/core";

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <Flex
      justify="center"
      alignItems="center"
      position="sticky"
      top={0}
      bg="rgba(255,255,255, 0.9)"
      h={100}
      my={1}
    >
      <Input
        fontFamily="body"
        type="text"
        id="blog-searchbar"
        placeholder="Search posts.."
        onChange={handleSearchQuery}
      />
    </Flex>
  );
};

export default SearchBar;
