import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      bg="brand.bg"
      m={["30px 0 0 100px", "0 40px 0 0"]}
      gridColumn={["1 / 4", 3]}
      gridRow={[2, 1]}
      px={[2]}
      position="relative"
      transition="all .25s ease-in-out"
      boxShadow="-5px 5px #000"
      borderRadius={0}
      variant="outline"
      textTransform="uppercase"
      fontSize="sm"
      _active={{
        boxShadow: "-2px 2px #000",
        transform: "translate(-2px, 2px)",
      }}
      _hover={{
        boxShadow: "-2px 2px #000",
        transform: "translate(-2px, 2px)",
      }}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? " Like it Mustard?" : "Like it Clean?"}
    </Button>
  );
};

export default ModeButton;
