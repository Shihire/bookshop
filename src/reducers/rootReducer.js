import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  form: formReducer
})

export default rootReducer;