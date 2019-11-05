import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BookList = ({ books, addToCart }) => {
  return (
    <>
      {
        books.map(book => (
          <Book key={book.id} addToCart={addToCart} {...book} />
        ))
      }
    </>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default BookList;