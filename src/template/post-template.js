/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./../components/layout";
import getShareImage from "@jlengstorf/get-share-image";
import Header from "./../components/blog/header";
import SEO from "react-seo-component";
import WordCount from "../assets/word-count";
import ReadingTime from "./../assets/reading-time";

const PostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body, slug, timeToRead, wordCount } = data.mdx;
  const { title, description, canonical } = frontmatter;
  const { previous, next } = pageContext;

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
          pathname={canonical ? canonical : `https://richardhaines.dev${slug}`}
          twitterUsername="@studio_hungry"
          author="Rich Haines"
          article={true}
        />
        <Header previous={previous} next={next} opacity={0.7} />

        <section
          sx={{
            bgColor: "titleBox",
            display: "flex",
            wrap: "wrap",
            maxWidth: ["300px", "600px"],
            padding: 3,
            my: 6,
          }}
        >
          <h1
            sx={{
              fontSize: ["36px", "100px"],
              color: "text",
              fontFamily: "heading",
              fontWeight: 800,
              lineHeight: 1,
              my: 5,
            }}
          >
            {title}
          </h1>
        </section>
        <section
          sx={{
            display: "flex",
          }}
        >
          <div
            sx={{
              padding: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <WordCount />
            <p
              sx={{
                fontSize: "20px",
              }}
            >
              {wordCount.words} words
            </p>
          </div>
          <div
            sx={{
              padding: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <ReadingTime />
            <p
              sx={{
                fontSize: "20px",
              }}
            >
              {timeToRead} minutes
            </p>
          </div>
        </section>

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
        canonical
      }
      slug
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
    }
  }
`;
