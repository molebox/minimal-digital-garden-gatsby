import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import { Flex, Grid, Link, Text, Box } from "@chakra-ui/core";
import Layout from "./../components/layout";
import SearchBar from "../components/blog/searchbar";
import { useSearchBar } from "./../components/blog/useSearchbar";
import { useCategory } from "./../components/blog/useCategory";
import CategoryTag from "./../components/blog/category-tag";
import AllCategoryTag from "./../components/blog/all-category-tag";
import SEO from "react-seo-component";
import getShareImage from "@jlengstorf/get-share-image";
import { useGLTF } from "@react-three/drei/useGLTF";
import gsap from "gsap";
import Github from "../assets/github";
import Twitter from "../assets/twitter";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { lazy } from "@loadable/component";
// import Cubes from "./../components/cubes/cubes";
// const Cubes = lazy(() => import("./../components/cubes/cubes"));

useGLTF.preload("/stork.glb");

export default ({ data }) => {
  const { posts, handleSearchQuery } = useSearchBar(data);
  const [filteredPosts, setFilteredPosts] = React.useState(posts);
  const { categories, handleCategoryQuery } = useCategory(data.allMdx.nodes);
  // const [isLargerThan375] = useMediaQuery("(min-width: 375px)");

  // Get a unique list of all the categories from the forntmatter
  const categoriesList = [
    ...new Set(data.allMdx.nodes.map((post) => post.frontmatter.category)),
  ];

  // Check if the categories array is the same length as the filtered by search posts array, if it is it means the user has reset the
  // category search by hitting "All". Otherwise, if the categories array length is less than the search posts, they have filtered on
  // a category and may want to use the search on the category
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
  }, []);

  // React.useEffect(() => {
  //   if (typeof window !== "undefined" && isLargerThan375) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.core.globals("ScrollTrigger", ScrollTrigger);

  //     console.log({ isLargerThan375 });
  //     gsap.utils.toArray(".post").forEach((post, index) => {
  //       if (index >= 1) {
  //         gsap.from(post, {
  //           y: window.innerHeight * 1,
  //           opacity: 0,
  //           duration: 1.2,
  //           scrollTrigger: {
  //             trigger: post,
  //             toggleActions: "restart pause resume pause",
  //             // start: "top center",
  //           },
  //         });
  //       }
  //     });
  //   }
  // }, [isLargerThan375]);

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
      <Box bgColor="brand.bg" wrap="wrap" maxW={1000} lineHeight={1} my={6}>
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

      {/* <Suspense fallback={null}>
        <Cubes />
      </Suspense> */}
      <Grid
        templateColumns="max-content auto 50px 50px"
        w="100%"
        placeItems="center"
      >
        <Text
          fontSize="xl"
          fontWeight={500}
          fontFamily="heading"
          color="brand.black"
          my={5}
          gridColumn={1}
        >
          By Rich Haines
        </Text>
        <Link
          fontSize="xl"
          fontWeight={500}
          fontFamily="heading"
          color="brand.black"
          my={5}
          href="https://twitter.com/studio_hungry"
          isExternal
          // textDecoration="underline"
          _hover={{
            color: "brand.lightGrey",
          }}
          gridColumn={3}
        >
          <Github />
        </Link>
        <Link
          fontSize="xl"
          fontWeight={500}
          fontFamily="heading"
          color="brand.black"
          my={5}
          href="https://twitter.com/studio_hungry"
          isExternal
          // textDecoration="underline"
          _hover={{
            color: "brand.darkGrey",
          }}
          gridColumn={4}
        >
          <Twitter />
        </Link>
      </Grid>

      <SearchBar handleSearchQuery={handleSearchQuery} />
      <Grid
        templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
        gap={5}
        templateRows={["auto", "1fr"]}
        alignItems="center"
        justifyContent={["space-evenly"]}
        p={1}
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
      {filteredPosts.map(({ id, frontmatter, fields, excerpt }, index) => (
        <Link
          className={`post`}
          key={id}
          as={GatsbyLink}
          to={fields.slug}
          p={4}
          borderBottom="solid 2px"
          my={6}
          _hover={{
            backgroundColor: "brand.offWhite",
            cursor: "pointer",
          }}
        >
          <Flex direction="column" wrap="wrap" maxW={500} lineHeight={1} mb={5}>
            <Text
              fontSize={["4xl", "5xl"]}
              fontWeight={800}
              fontFamily="heading"
              color="brand.black"
            >
              {frontmatter.title}
            </Text>
          </Flex>
          <Text
            fontSize={["xl", "2xl"]}
            fontWeight={700}
            fontFamily="heading"
            color="brand.black"
            my={5}
          >
            {frontmatter.description}
          </Text>
          <Text
            fontSize={["md", "xl"]}
            fontWeight={600}
            fontFamily="heading"
            color="brand.lightGrey"
          >
            {excerpt}
          </Text>
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
