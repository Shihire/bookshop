const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = id => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    id
  })
}

const RESET_CART = 'RESET_CART';
export const resetCart = () => dispatch => {
  dispatch({
    type: RESET_CART
  })
}