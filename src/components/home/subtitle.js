import React from "react";
import {
  Box,
  Grid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";
import ModeButton from "./mode-button";
import ExternalLink from "./../external-link";
import Github from "../../assets/github";
import Twitter from "../../assets/twitter";

const Subtitle = () => {
  const { colorMode } = useColorMode();
  const textBox = useColorModeValue("brand.bg", "dark.black");
  const text = useColorModeValue("brand.black", "dark.lightGrey");
  const isDarkMode = colorMode === "dark";
  return (
    <Grid
      templateColumns={"max-content auto 100px 50px 50px"}
      templateRows="auto"
      w="100%"
      placeItems="center"
      my={4}
    >
      <RoughNotation
        type="underline"
        strokeWidth={2}
        color="#000"
        show={!isDarkMode}
      >
        <Box
          gridColumn={1}
          bgColor={textBox}
          height="min-content"
          mt={[2, 5]}
          px={2}
          style={{
            transform: isDarkMode ? "rotate(5deg)" : null,
          }}
        >
          <Text
            fontSize={["md", "xl"]}
            fontWeight={500}
            fontFamily="heading"
            color={text}
          >
            By Rich Haines
          </Text>
        </Box>
      </RoughNotation>

      <ModeButton />
      <ExternalLink
        icon={<Github />}
        href="https://github.com/molebox"
        gridColumn={4}
        name="Github link"
      />
      <ExternalLink
        icon={<Twitter />}
        href="https://twitter.com/studio_hungry"
        gridColumn={5}
        name="Twitter link"
      />
    </Grid>
  );
};

export default Subtitle;
