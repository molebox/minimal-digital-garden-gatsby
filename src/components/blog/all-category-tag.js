import React from "react";
import { Tag } from "@chakra-ui/core";

const AllCategoryTag = ({ handleCategoryQuery, ...rest }) => {
  const getCategory = (category) => handleCategoryQuery(category);

  return (
    <Tag
      {...rest}
      bg="brand.darkGrey"
      color="brand.bg"
      variant="solid"
      fontFamily="heading"
      justifyContent="center"
      size="sm"
      p={1}
      maxW="100px"
      onClick={() => getCategory("All")}
      _hover={{
        cursor: "pointer",
      }}
    >
      All
    </Tag>
  );
};

export default AllCategoryTag;