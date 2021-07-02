import React from "react";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Title from "./title";
import Subtitle from "./subtitle";

const About = () => {
  const { colorMode } = useColorMode();
  const textBox = useColorModeValue("brand.bg", "dark.black");
  const text = useColorModeValue("brand.black", "dark.lightGrey");
  const isDarkMode = colorMode === "dark";
  return (
    <Flex direction={["column", "column", "row"]}>
      <StaticImage
        src="../../assets/cartoon-me-no-bg.png"
        alt="A cartoon drawing of Rich Haines in an Oasis tee"
        placeholder="blurred"
        width={1000}
        loading="lazy"
      />
      <Flex direction="column" justifyContent="space-evenly">
        <Title />
        <Box
          bgColor={textBox}
          px={2}
          wrap="wrap"
          maxW="max-content"
          textAlign={isDarkMode ? "center" : null}
        >
          <Text
            fontSize={["lg", "lg", "xl"]}
            fontWeight={500}
            fontFamily="heading"
            my={5}
            color={text}
          >
            Hey! I'm Rich Haines, a software developer who specializes in
            Jamstack development. I'm also a technical content writer and
            currently work on the docs team over at{" "}
            <a href="https://www.prisma.io/">@prisma</a>
          </Text>
        </Box>
        <Subtitle />
      </Flex>
    </Flex>
  );
};

export default About;
