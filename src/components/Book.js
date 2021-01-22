import React from "react";
import PropTypes from "prop-types";

const Book = ({ bookID, title, category }) => (
  <tr>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        onClick={() => {
          const book = { bookID, title, category };
          handleRemoveBook(book);
        }}
        type="button"
      >
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  bookID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
