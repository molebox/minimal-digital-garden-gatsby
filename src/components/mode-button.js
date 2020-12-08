import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      gridColumn={3}
      mr={6}
      px={2}
      position="relative"
      top={0}
      transition="all .25s ease-in-out"
      boxShadow="-5px 5px #000"
      borderRadius={0}
      variant="outline"
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
