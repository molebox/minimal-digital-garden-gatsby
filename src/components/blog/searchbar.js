import React from "react";
import { Input, Flex } from "@chakra-ui/core";

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <Flex justify="center" alignItems="center">
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
