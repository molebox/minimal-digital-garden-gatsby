/** @jsx jsx */
import { jsx } from "theme-ui";
import VisuallyHidden from "./../elements/visually-hidden";

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <section
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "bg",
        opacity: 0.9,
        height: "100px",
        my: 1,
        zIndex: 999999,
      }}
    >
      <VisuallyHidden as="label" htmlFor="search-posts">
        Search Posts
      </VisuallyHidden>
      <input
        sx={{
          fontFamily: "body",
          _placeholder: {
            color: "text",
          },
          borderBottom: "solid 2px",
        }}
        type="text"
        id="search-posts"
        placeholder="Search posts.."
        onChange={handleSearchQuery}
      />
    </section>
  );
};

export default SearchBar;
