// import React from "react";
// import {
//   Box,
//   Flex,
//   Link,
//   Text,
//   useColorMode,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { Link as GatsbyLink } from "gatsby";

// export function HotOutTheOven({ slug, title, description, excerpt }) {
//   const { colorMode } = useColorMode();
//   const titleBox = useColorModeValue("brand.bg", "dark.lightGrey");
//   const textBox = useColorModeValue("brand.bg", "dark.black");
//   const text = useColorModeValue("brand.black", "dark.lightGrey");
//   const excerptText = useColorModeValue("brand.lightGrey", "brand.black");
//   const isDarkMode = colorMode === "dark";
//   return (
//     <Flex direction="column" >
//       <Flex p={3}>
//         <Text fontSize={["md", "xl"]} fontWeight={500} fontFamily="heading">
//           Hot Out The Oven
//         </Text>
//       </Flex>

//       <Link
//         className={`post`}
//         as={GatsbyLink}
//         to={slug}
//         p={4}
//         borderBottom="solid 2px"
//         my={6}
//         _hover={{
//           backgroundColor: !isDarkMode ? "brand.offWhite" : null,
//           cursor: "pointer",
//         }}
//       >
//         <Flex
//           bgColor={titleBox}
//           direction="column"
//           wrap="wrap"
//           maxW={600}
//           lineHeight={1}
//           mb={5}
//         >
//           <Text
//             fontSize={["3xl", "4xl"]}
//             fontWeight={900}
//             fontFamily="heading"
//             color="brand.black"
//             p={isDarkMode ? 6 : 2}
//           >
//             {title}
//           </Text>
//         </Flex>
//         <Box
//           bgColor={textBox}
//           px={2}
//           wrap="wrap"
//           maxW="max-content"
//           style={{
//             transform: isDarkMode ? "rotate(-5deg)" : null,
//           }}
//         >
//           <Text
//             fontSize={["xl", "2xl"]}
//             fontWeight={500}
//             fontFamily="heading"
//             color={text}
//             my={5}
//           >
//             {description}
//           </Text>
//         </Box>
//         <Box my={2} p={2}>
//           <Text
//             fontSize={["md", "xl"]}
//             fontWeight={500}
//             fontFamily="heading"
//             color={excerptText}
//           >
//             {excerpt}
//           </Text>
//         </Box>
//       </Link>
//     </Flex>
//   );
// }
