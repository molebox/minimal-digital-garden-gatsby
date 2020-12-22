/** @jsx jsx */
import { jsx } from "theme-ui";
import AllCategoryTag from "./../blog/all-category-tag";
import CategoryTag from "./../blog/category-tag";

const Categories = ({ categoriesList, handleCategoryQuery }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: 5,
        templateRows: ["auto", "1fr"],
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "auto",
      }}
    >
      <AllCategoryTag handleCategoryQuery={handleCategoryQuery} />
      {categoriesList.map((cat, index) => (
        <CategoryTag
          key={cat + index}
          category={cat}
          handleCategoryQuery={handleCategoryQuery}
        />
      ))}
    </section>
  );
};

export default Categories;
