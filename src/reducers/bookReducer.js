const initialState = {
  isFetching: true,
  items: []
}

const bookReducer = (books = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_BOOKS': {
      return {
        ...books,
        isFetching: true
      }
    }
    case 'RECEIVE_BOOKS': {
      if (action.response.status === 'error') {
        return {
          ...books,
          isFetching: false,
          error: 'Błąd ładowania książek. Spróbuj ponownie później.'
        }
      } else {
        return {
          isFetching: false,
          items: action.response.items
        }
      }
    }
    default:
      return books;
  }
}

export default bookReducer;