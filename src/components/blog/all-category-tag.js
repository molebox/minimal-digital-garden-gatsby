import React from "react";
import { Button } from "@chakra-ui/react";

const AllCategoryTag = ({ handleCategoryQuery, ...rest }) => {
  const getCategory = (category) => handleCategoryQuery(category);

  return (
    <Button
      {...rest}
      bg="brand.bg"
      color="brand.black"
      variant="solid"
      fontFamily="heading"
      fontWeight={500}
      justifyContent="center"
      size="sm"
      // p={1}
      minW="100px"
      borderRadius={0}
      border="solid 1px #000"
      boxShadow="-3px 3px #000"
      transition="all .25s ease-in-out"
      onClick={() => getCategory("All")}
      _hover={{
        boxShadow: "-2px 2px #000",
        cursor: "pointer",
      }}
      className="cat-tag"
    >
      All
    </Button>
  );
};

export default AllCategoryTag;
