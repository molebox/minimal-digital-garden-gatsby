import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import {
  Flex,
  Grid,
  Link,
  Text,
  Box,
  useMediaQuery,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Layout from "./../components/layout";
import SearchBar from "../components/blog/searchbar";
import { useSearchBar } from "./../components/blog/useSearchbar";
import { useCategory } from "./../components/blog/useCategory";
import CategoryTag from "./../components/blog/category-tag";
import AllCategoryTag from "./../components/blog/all-category-tag";
import SEO from "react-seo-component";
import getShareImage from "@jlengstorf/get-share-image";
import gsap from "gsap";
import Github from "../assets/github";
import Twitter from "../assets/twitter";
import ExternalLink from "./../components/external-link";
import ModeButton from "../components/mode-button";
import { RoughNotation } from "react-rough-notation";

export default ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { posts, handleSearchQuery } = useSearchBar(data);
  const [filteredPosts, setFilteredPosts] = React.useState(posts);
  const { categories, handleCategoryQuery } = useCategory(data.allMdx.nodes);
  const mouseRef = React.useRef();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isLargerThan375] = useMediaQuery("(min-width: 375px)");
  const windowExists = typeof window !== "undefined";
  // Get a unique list of all the categories from the forntmatter
  const categoriesList = [
    ...new Set(data.allMdx.nodes.map((post) => post.frontmatter.category)),
  ];

  // Check if the categories array is the same length as the filtered by search posts array, if it is it means the user has reset the
  // category search by hitting "All". Otherwise, if the categories array length is less than the search posts, they have filtered on
  // a category and may want to use the searchbar on the category
  React.useEffect(() => {
    let result = posts;
    if (categories.length === posts.length) {
      result = posts;
    } else if (categories.length && categories.length < posts.length) {
      result = categories;
    }

    setFilteredPosts(result);
  }, [categories, posts]);

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });

    if (windowExists && isLargerThan375 === false) {
      setIsMobile(true);
    }
    setIsMobile(false);
  }, [isLargerThan375, windowExists]);

  React.useEffect(() => {
    if (windowExists && isLargerThan375) {
      // Code from https://greensock.com/forums/topic/22406-follow-mouse/?do=findComment&comment=105851

      gsap.set(mouseRef.current, { xPercent: -50, yPercent: -50 });

      let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

      let mouse = { x: position.x, y: position.y };
      let speed = 0.1;

      let xSet = gsap.quickSetter(mouseRef.current, "x", "px");
      let ySet = gsap.quickSetter(mouseRef.current, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        position.x += (mouse.x - position.x) * dt;
        position.y += (mouse.y - position.y) * dt;
        xSet(position.x);
        ySet(position.y);
      });
    }
  }, []);

  const socialImage = getShareImage({
    title: "Rich Haines Digital Garden",
    tagline: "My articles, tutorials and thoughts. Under one roof.",
    cloudName: "richardhaines",
    imagePublicID: "social-card/social-card-garden",
    textAreaWidth: 992,
    textLeftOffset: 100,
    titleFontSize: 110,
    titleExtraConfig: "_line_spacing_-10",
    titleBottomOffset: 200,
    titleGravity: "north_west",
    taglineGravity: "north_west",
    titleFont: "Jost.ttf",
    taglineFont: "Jost.ttf",
    taglineTopOffset: 547,
    taglineFontSize: 24,
    textColor: "ffffff",
    version: "v1605269202",
  });

  const titleBox = useColorModeValue("brand.bg", "dark.lightGrey");
  const textBox = useColorModeValue("brand.bg", "dark.black");
  const text = useColorModeValue("brand.black", "dark.lightGrey");
  const excerptText = useColorModeValue("brand.lightGrey", "brand.black");
  const isDarkMode = colorMode === "dark";

  return (
    <Layout>
      <SEO
        title="Rich Haines Digital Garden"
        titleTemplate=""
        titleSeparator=""
        description="My articles, tutorials and thoughts. Under one roof."
        image={socialImage}
        pathname={`https://richardhaines.dev`}
        twitterUsername="@studio_hungry"
        author="Rich Haines"
      />
      <Box
        bgColor={titleBox}
        wrap="wrap"
        maxW={1000}
        lineHeight={1}
        my={6}
        p={6}
      >
        <Text
          as="h1"
          fontSize={["5xl", "7xl"]}
          fontWeight={800}
          fontFamily="heading"
          color="brand.black"
        >
          Digital Garden
        </Text>
      </Box>

      <Grid
        templateColumns={[
          "max-content auto 100px 50px 50px",
          "max-content auto 100px 50px 50px",
        ]}
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
            // my={5}
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
        />
        <ExternalLink
          icon={<Twitter />}
          href="https://twitter.com/studio_hungry"
          gridColumn={5}
        />
      </Grid>

      <SearchBar
        isDarkMode={isDarkMode}
        handleSearchQuery={handleSearchQuery}
      />
      <Grid
        templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
        gap={5}
        templateRows={["auto", "1fr"]}
        alignItems="center"
        justifyContent={["space-evenly"]}
        h="auto"
      >
        <AllCategoryTag handleCategoryQuery={handleCategoryQuery} />
        {categoriesList.map((cat, index) => (
          <CategoryTag
            key={cat + index}
            category={cat}
            handleCategoryQuery={handleCategoryQuery}
          />
        ))}
      </Grid>
      {filteredPosts.map(({ id, frontmatter, fields, excerpt }) => (
        <Link
          className={`post`}
          key={id}
          as={GatsbyLink}
          to={fields.slug}
          p={4}
          borderBottom="solid 2px"
          my={6}
          _hover={{
            backgroundColor: !isDarkMode ? "brand.offWhite" : null,
            cursor: "pointer",
          }}
        >
          <Flex
            bgColor={titleBox}
            p={6}
            direction="column"
            wrap="wrap"
            maxW={500}
            lineHeight={1}
            mb={5}
          >
            <Text
              fontSize={["4xl", "5xl"]}
              fontWeight={900}
              fontFamily="heading"
              color="brand.black"
            >
              {frontmatter.title}
            </Text>
          </Flex>
          <Box
            bgColor={textBox}
            px={2}
            wrap="wrap"
            maxW="max-content"
            style={{
              transform: isDarkMode ? "rotate(-5deg)" : null,
            }}
          >
            <Text
              fontSize={["xl", "2xl"]}
              fontWeight={500}
              fontFamily="heading"
              color={text}
              my={5}
            >
              {frontmatter.description}
            </Text>
          </Box>
          <Box my={2} p={2}>
            <Text
              fontSize={["md", "xl"]}
              fontWeight={500}
              fontFamily="heading"
              color={excerptText}
            >
              {excerpt}
            </Text>
          </Box>
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMdx(sort: { fields: [frontmatter___category], order: ASC }) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          category
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;
