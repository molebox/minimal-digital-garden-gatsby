import React from "react";
import { Grid } from "@chakra-ui/react";
import AllCategoryTag from "./../blog/all-category-tag";
import CategoryTag from "./../blog/category-tag";

const Categories = ({ categoriesList, handleCategoryQuery }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
      gap={5}
      templateRows={["auto", "1fr"]}
      alignItems="center"
      justifyContent={["space-evenly"]}
      h="auto"
    >
      <AllCategoryTag handleCategoryQuery={handleCategoryQuery} />
      {categoriesList.map((cat, index) => (
        <CategoryTag
          key={cat + index}
          category={cat}
          handleCategoryQuery={handleCategoryQuery}
        />
      ))}
    </Grid>
  );
};

export default Categories;
