/** @jsx jsx */
import { jsx } from "theme-ui";

const Title = () => {
  return (
    <header
      sx={{
        bgColor: "titleBox",
        display: 'flex',
        wrap: "wrap",
        maxWidth: "1000px",
        lineHeight: 1,
        my: 6,
        padding: 6,
      }}
    >
      <h1
        sx={{
          fontSize: ["74px", "130px"],
          fontWeight: 800,
          fontFamily: "heading",
          color: "text",
        }}
      >
        Digital Garden
      </h1>
    </header>
  );
};

export default Title;
