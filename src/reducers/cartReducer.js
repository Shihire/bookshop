/* Order POST schema
{
  "order": [
    {
      "id": 0,
      "quantity": 0
    }
  ],
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number": "string",
  "address": "string",
  "city": "string",
  "zip_code": "string"
}
*/

const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      if (cart.some(({ id }) => id === action.id)) {
        return cart.map(({ id, quantity }) => ({
          id,
          quantity: id === action.id ? quantity + 1 : quantity
        }))
      } else {
        return [...cart, { id: action.id, quantity: 1 }]
      }
    }
    case 'RESET_CART': {
      return [];
    }
    default: return cart
  }
}

export default cartReducer;