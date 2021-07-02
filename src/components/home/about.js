import React from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Title from "./title";

const About = () => {
  return (
    <Flex direction={["column", "column", "row"]}>
      <StaticImage
        src="../../assets/cartoon-me-no-bg.png"
        alt="A cartoon drawing of Rich Haines in an Oasis tee"
        placeholder="blurred"
        width={800}
        loading="lazy"
      />
      <Flex direction="column" justifyContent="space-evenly">
        <Title />
        <Text
          fontSize={["lg", "lg", "xl"]}
          fontWeight={500}
          fontFamily="heading"
          my={5}
        >
          Hey! I'm Rich Haines, a software developer who specializes in Jamstack
          development. I'm also a technical content writer and currently work on
          the docs team over at <a href="https://www.prisma.io/">@prisma</a>
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
