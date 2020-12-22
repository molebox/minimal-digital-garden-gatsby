/** @jsx jsx */
import { Link, jsx, useColorMode } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const PostsIndex = ({ filteredPosts }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return filteredPosts.map(({ id, frontmatter, fields, excerpt }) => (
    <Link
      sx={{
        padding: 4,
        borderBottom: "solid 2px",
        my: 6,
        _hover: {
          backgroundColor: !isDarkMode ? "offWhite" : null,
          cursor: "pointer",
        },
      }}
      className={`post`}
      key={id}
      as={GatsbyLink}
      to={fields.slug}
    >
      <div
        sx={{
          bgColor: "titleBox",
          padding: 6,
          display: "flex",
          flexDirection: "column",
          wrap: "wrap",
          maxWidth: 500,
          lineHeight: 1,
          mb: 5,
        }}
      >
        <h2
          sx={{
            fontSize: ["36px", "74px"],
            fontWeight: 900,
            fontFamily: "heading",
            color: "text",
          }}
        >
          {frontmatter.title}
        </h2>
      </div>
      <div
        sx={{
          bgColor: "textBox",
          px: 2,
          wrap: "wrap",
          maxWidth: "max-content",
          transform: isDarkMode ? "rotate(-5deg)" : null,
        }}
      >
        <p
          sx={{
            fontSize: ["20px", "24px"],
            fontWeight: 500,
            fontFamily: "heading",
            color: "pText",
            my: 5,
          }}
        >
          {frontmatter.description}
        </p>
      </div>
      <div
        sx={{
          my: 2,
          padding: 2,
        }}
      >
        <p
          sx={{
            fontSize: ["16px", "20px"],
            fontWeight: 500,
            fontFamily: "heading",
            color: "excerptText",
            my: 5,
          }}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  ));
};

export default PostsIndex;
