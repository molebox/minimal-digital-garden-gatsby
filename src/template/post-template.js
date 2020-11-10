import React from "react";
import { Text, Flex } from "@chakra-ui/core";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./../components/layout";

const PostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    excerpt,
    headings,
    fields: { editLink, slug },
  } = data.mdx;
  const { title, date, category, description } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Flex wrap="wrap" maxW={["300px","600px"]}>
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
