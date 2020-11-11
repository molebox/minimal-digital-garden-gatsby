import React from "react";
import { Text, Flex } from "@chakra-ui/core";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./../components/layout";
import getShareImage from "@jlengstorf/get-share-image";
import Helmet from "react-helmet";
import Header from "./../components/blog/header";

const PostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    excerpt,
    fields: { slug },
  } = data.mdx;
  const { title, description } = frontmatter;
  const { previous, next } = pageContext;

  const socialImage = getShareImage({
    title: title,
    tagline: description,
    cloudName: "richardhaines",
    imagePublicID: "social-card/social-card-garden",
    textAreaWidth: 1193,
    textLeftOffset: 100,
    titleFontSize: 110,
    titleExtraConfig: "_bold",
    titleBottomOffset: 200,
    titleGravity: "north_west",
    taglineGravity: "north_west",
    titleFont: "Jost.ttf",
    taglineFont: "Jost.ttf",
    taglineTopOffset: 547,
    taglineFontSize: 24,
    textColor: "ffffff",
    version: "v1605125205",
  });

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={socialImage} />

        {/* OpenGraph tags */}
        <meta
          property="og:url"
          content={`https://garden.richardhaines.dev${slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImage} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@studio_hungry" />
        <meta name="twitter:creator" content="@studio_hungry" />
      </Helmet>
      <Header prev={previous} next={next} />
      <Flex wrap="wrap" maxW={["300px", "600px"]}>
        <Text
          as="h1"
          fontSize={["5xl", "6xl"]}
          color="brand.black"
          fontFamily="heading"
          fontWeight={800}
          lineHeight={1}
          my={5}
        >
          {title}
        </Text>
      </Flex>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        description
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
