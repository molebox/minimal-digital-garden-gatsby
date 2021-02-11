import React from "react";
import { Button, Tag } from "@chakra-ui/react";

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

  // React.useEffect(() => {
  //   if (typeof window !== undefined) {
  //     if (btnRef.current && btnRef.current === document.activeElement) {
  //       setShowTag(true)
  //     } else {
  //       setShowTag(false)
  //     }
  //   }

  // }, [showTag])

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
      {/* {showTag ? (
      <Tag
      sx={{
        position: 'absolute',
        top: -3,
        right: -3,
        zIndex: 99999999,
        backgroundColor: 'black',
        color: 'white'
      }}
      size="sm"
      variant="solid"
      >
      {numberOfPosts}
      </Tag>
      ) : null} */}
      {category}
    </Button>
  );
};

export default CategoryTag;
