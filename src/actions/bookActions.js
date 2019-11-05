import db from '../firestore';

const REQUEST_BOOKS = 'REQUEST_BOOKS';
function requestBooks() {
  return {
    type: REQUEST_BOOKS
  }
}

const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
function receiveBooks(response) {
  return {
    type: RECEIVE_BOOKS,
    response
  }
}

export function fetchBooks() {
  return async function(dispatch) {
    dispatch(requestBooks());

    let response;
    try {
      const snapshot = await db.collection('books').get();
      response = {
        status: 'success',
        items: snapshot.docs.map(book => ({
          id: book.id,
          ...book.data()
        }))
      }
    } catch (error) {
      response = {
        status: 'error',
        error
      }
    }
    
    dispatch(receiveBooks(response));
  }
}