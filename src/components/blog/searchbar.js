import React from "react";
import { Input, Flex, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

const SearchBar = ({ handleSearchQuery }) => {
  const bg = useColorModeValue("rgba(255,255,255, 0.9)", "dark.bg");
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
      <VisuallyHidden id="search-posts">Search Posts</VisuallyHidden>
      <Input
        htmlFor="search-posts"
        fontFamily="body"
        type="text"
        id="blog-searchbar"
        placeholder="Search posts.."
        onChange={handleSearchQuery}
        variant="flushed"
        _placeholder={{
          color: "brand.black",
        }}
        borderBottom="solid 2px"
      />
    </Flex>
  );
};

export default SearchBar;
