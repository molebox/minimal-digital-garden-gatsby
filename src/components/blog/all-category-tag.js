/** @jsx jsx */
import { jsx } from "theme-ui";

const AllCategoryTag = ({ handleCategoryQuery, ...rest }) => {
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
      onClick={() => getCategory("All")}
      className="cat-tag"
    >
      All
    </button>
  );
};

export default AllCategoryTag;
