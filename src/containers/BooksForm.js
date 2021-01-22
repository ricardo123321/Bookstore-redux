import React from "react";
import PropTypes from "prop-types";
import { createBook } from "../actions/index";

const bookCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form>
      <div className="input-group">
        <input type="text" />
      </div>
      <div className="input-group">
        <select name="book-categories" id="categories">
          {bookCategories.map((category) => (
            <option key={`key-${category}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="button">Submit</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default BooksForm;
