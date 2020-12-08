import React from "react";
import { Tag } from "@chakra-ui/react";

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
      minW="100px"
      borderRadius={0}
      onClick={() => getCategory("All")}
      _hover={{
        cursor: "pointer",
        bgColor: "brand.black",
      }}
      className="cat-tag"
    >
      All
    </Tag>
  );
};

export default AllCategoryTag;
