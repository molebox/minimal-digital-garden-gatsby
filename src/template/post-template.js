import React from "react";
import { Text, Flex } from "@chakra-ui/core";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./../components/layout";
import getShareImage from "@jlengstorf/get-share-image";
import Header from "./../components/blog/header";
import SEO from "react-seo-component";
import gsap from "gsap";

const PostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    fields: { slug },
  } = data.mdx;
  const { title, description } = frontmatter;
  const { previous, next } = pageContext;

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });
  }, []);

  const socialImage = getShareImage({
    title: title,
    tagline: description,
    cloudName: "richardhaines",
    imagePublicID: "social-card/social-card-garden",
    textAreaWidth: 992,
    textLeftOffset: 100,
    titleFontSize: 85,
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
    <>
      <Layout>
        <SEO
          title={title}
          titleTemplate={slug}
          titleSeparator={`-`}
          description={description}
          image={socialImage}
          pathname={`https://richardhaines.dev${slug}`}
          twitterUsername="@studio_hungry"
          author="Rich Haines"
          article={true}
        />
        <Header prev={previous} next={next} opacity={0.7} />

        <Flex wrap="wrap" maxW={["300px", "600px"]} p={3}>
          <Text
            as="h1"
            fontSize={["4xl", "6xl"]}
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
    </>
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
