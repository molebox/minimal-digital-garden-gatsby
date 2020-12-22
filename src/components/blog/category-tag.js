/** @jsx jsx */
import { jsx } from "theme-ui";

const CategoryTag = ({ category, handleCategoryQuery, ...rest }) => {
  const getCategory = (category) => handleCategoryQuery(category);

  return (
    <button
      sx={{
        background: "bg",
        color: "text",
        fontFamily: "heading",
        fontWeight: 500,
        fontSize: "14px",
        justifyContent: "center",
        height: "25px",
        minWidth: "100px",
        borderRadius: 0,
        border: "solid 1px #000",
        boxShadow: "-3px 3px #000",
        transition: "all .25s ease-in-out",
        _hover: {
          boxShadow: "-2px 2px #000",
          cursor: "pointer",
        },
        ...rest,
      }}
      onClick={() => getCategory(category)}
      className="cat-tag"
    >
      {category}
    </button>
  );
};

export default CategoryTag;
