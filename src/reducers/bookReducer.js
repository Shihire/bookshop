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
        //TODO: Error msg.
        console.log(action.response.error);
        return {
          ...books,
          isFetching: false,
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