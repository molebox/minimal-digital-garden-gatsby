import React from "react";
import { graphql } from "gatsby";
import { useColorMode } from "@chakra-ui/react";
import Layout from "./../components/layout";
import SearchBar from "../components/blog/searchbar";
import { useSearchBar } from "../components/blog/useSearchbar";
import { useCategory } from "./../components/blog/useCategory";
import SEO from "react-seo-component";
import getShareImage from "@jlengstorf/get-share-image";
import Title from "../components/home/title";
import Subtitle from "../components/home/subtitle";
import PostsIndex from "../components/home/posts-index";
import Categories from "../components/home/categories";
import backgroundImage from "../assets/diamonds.png";

const Index = ({ data }) => {
  const { colorMode } = useColorMode();
  const { posts, handleSearchQuery } = useSearchBar(data);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const { categories, handleCategoryQuery } = useCategory(data.allMdx.nodes);

  // Get a unique list of all the categories from the forntmatter
  const categoriesList = [
    ...new Set(data.allMdx.nodes.map((post) => post.frontmatter.category)),
  ];

  React.useEffect(() => {
    setFilteredPosts(shuffle(posts));
  }, [posts]);

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

  const socialImage = getShareImage({
    title:
      "Hey! I'm Rich Haines, a software developer and technical writer. This is my blog",
    cloudName: "richardhaines",
    imagePublicID: "social-card/social-card-garden",
    textAreaWidth: 920,
    textLeftOffset: 160,
    titleFontSize: 70,
    titleColor: "1f2127",
    titleExtraConfig: "_bold",
    titleBottomOffset: 150,
    titleGravity: "north_west",
    titleFont: "Jost.ttf",
    textColor: "1F2127",
    version: "v1605269202",
  });

  const isDarkMode = colorMode === "dark";

  const headline =
    "This is my blog where I write about stuff im working on and things i find interesting";
  const caption = "My articles, tutorials and thoughts. Under one roof";
  const domain = "richardhaines.dev";

  const api = "https://i.microlink.io/";
  const cardUrl = `https://cards.microlink.io/?preset=richhaines&headline=${headline}&caption=${caption}&domain=${domain}&backgroundImage=${backgroundImage}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;

  return (
    <Layout>
      <SEO
        title="This is my blog where I write about stuff im working on and things i find interesting"
        titleTemplate=""
        titleSeparator=""
        description="My articles, tutorials and thoughts. Under one roof."
        image={socialImage}
        pathname={`https://richardhaines.dev`}
        twitterUsername="@studio_hungry"
        author="Rich Haines"
      />
      <Title />

      <Subtitle />

      <SearchBar
        isDarkMode={isDarkMode}
        handleSearchQuery={handleSearchQuery}
      />
      <Categories
        categoriesList={categoriesList}
        numberOfPosts={filteredPosts.length}
        handleCategoryQuery={handleCategoryQuery}
      />
      <PostsIndex filteredPosts={filteredPosts} />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___category], order: ASC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
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

// 100% ripped from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
