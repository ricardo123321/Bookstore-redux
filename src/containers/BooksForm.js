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

  const handleTitleChange = (event) => {
    setTitle(() => event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(() => event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && category) {
      createBook({
        bookID: Math.floor(Math.random() * 1000),
        title,
        category,
      });

      setTitle("");
      setCategory("");
    }
  };

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
