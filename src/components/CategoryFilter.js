import React, { useState } from "react";
import { bookCategories } from "../helpers/index";

const CategoryFilter = () => {
  return (
    <select>
      <option value="All">All</option>
      {bookCategories.map((book) => (
        <option key={book} value={book}>
          {book}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
