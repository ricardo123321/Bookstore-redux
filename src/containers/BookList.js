import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { getFilteredBooks } from '../helpers/index';

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const filteredBooks = getFilteredBooks(books, filter);

  return (
    <>
      <CategoryFilter handleFilterChange={changeFilter} />
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <Book
              key={book.bookID}
              bookID={book.bookID}
              title={book.title}
              category={book.category}
              handleRemoveBook={removeBook}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook, changeFilter };

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
