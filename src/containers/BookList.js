import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>BookID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map(book => (
      <Book
        key={book.bookID}
        bookID={book.bookID}
        title={book.title}
        category={book.category}
      />
    ))}
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps)(BooksList);
