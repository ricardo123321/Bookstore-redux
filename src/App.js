import React from 'react';
import BooksForm from './containers/BooksForm';
import BooksList from './containers/BookList';

const App = () => (
  <div className="App">
    <BookList />
    <BooksForm />
  </div>
);

export default App;
