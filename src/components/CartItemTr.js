import React from 'react';
import PropTypes from 'prop-types';

const CartItemTr = ({ id, cover_url, title, author, quantity, price, currency }) => {
  return (
    <tr key={id}>
      <td className="d-none d-sm-block">
        <img className="float-left mx-2" width="64" src={`..${cover_url}`} alt="book" />
      </td>
      <td className="align-middle">
        <h6>{title}</h6>
        {author}
      </td>
      <td className="align-middle">{quantity}</td>
      <td className="align-middle">{(quantity * (price / 100)).toFixed(2)}&nbsp;{currency}</td>
    </tr>
  )
}

CartItemTr.propTypes = {
  id: PropTypes.string.isRequired,
  cover_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default CartItemTr;