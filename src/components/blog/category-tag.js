import React from "react";
import { Button } from "@chakra-ui/react";

const CategoryTag = ({
  category,
  handleCategoryQuery,
  numberOfPosts,
  ...rest
}) => {
  const getCategory = (category) => handleCategoryQuery(category);
  const [showTag, setShowTag] = React.useState(false);
  const btnRef = React.useRef();

  const handleClick = () => {
    getCategory(category);
  };

  return (
    <Button
      ref={btnRef}
      {...rest}
      bg="brand.bg"
      color="brand.black"
      variant="solid"
      fontFamily="heading"
      fontWeight={500}
      fontSize="sm"
      justifyContent="center"
      h="25px"
      minW="100px"
      borderRadius={0}
      border="solid 1px #000"
      boxShadow="-3px 3px #000"
      transition="all .25s ease-in-out"
      onClick={handleClick}
      // isActive={showTag}
      _hover={{
        boxShadow: "-2px 2px #000",
        cursor: "pointer",
      }}
      _focus={{
        backgroundColor: "brand.lightGrey",
        color: "brand.bg",
      }}
      onFocus={() => setShowTag(!showTag)}
      className="cat-tag"
      position="relative"
    >
      {category}
    </Button>
  );
};

export default CategoryTag;
