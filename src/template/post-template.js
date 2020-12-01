import React from "react";
import { Text, Flex, useMediaQuery } from "@chakra-ui/core";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./../components/layout";
import getShareImage from "@jlengstorf/get-share-image";
import Header from "./../components/blog/header";
import SEO from "react-seo-component";
import gsap from "gsap";

import styles from "../components/mouse.module.css";

const PostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    fields: { slug },
  } = data.mdx;
  const { title, description } = frontmatter;
  const { previous, next } = pageContext;
  const mouseRef = React.useRef();
  const [isLargerThan375] = useMediaQuery("(min-width: 375px)");

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });
  }, []);

  React.useEffect(() => {
    if (
      typeof window !== undefined &&
      typeof document !== undefined &&
      isLargerThan375
    ) {
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
  }, [isLargerThan375]);

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
        {isLargerThan375 ? (
          <div ref={mouseRef} className={styles.mouseStalker}></div>
        ) : null}
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
