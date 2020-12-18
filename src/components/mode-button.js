import React from "react";
import { Button, Box, useColorMode } from "@chakra-ui/react";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
    transition="all .25s ease-in-out"
    boxShadow="-5px 5px #000"
    _active={{
      boxShadow: "-2px 2px #000",
      transform: "translate(-2px, 2px)",
    }}
    _hover={{
      boxShadow: "-2px 2px #000",
      transform: "translate(-2px, 2px)",
    }}
    position="relative"
    gridColumn={["1 / 4", 3]}
    gridRow={[2, 1]}
    m={["30px 0 0 100px", "0 40px 0 0"]}
    >
    <Button
      bg="brand.bg"
      px={[2]}
      borderRadius={0}
      variant="outline"
      textTransform="uppercase"
      fontSize="sm"
      onClick={toggleColorMode}
      
    >
      {colorMode === "light" ? " Like it Mustard?" : "Like it Clean?"}
    </Button>
    </Box>
  );
};

export default ModeButton;
