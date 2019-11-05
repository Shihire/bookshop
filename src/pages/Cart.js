import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Button } from 'reactstrap';

import { resetCart } from '../actions/cartActions';

import CartItemsTable from '../components/CartItemsTable';
import CartItemTr from '../components/CartItemTr';
import Layout from '../components/Layout';

const Cart = ({ cartItems, resetCart }) => {
  const buttons = (
    <div className="d-flex justify-content-end justify-content-sm-between">
      <Link to="/" className="btn btn-secondary d-none d-sm-block">
        Wróć do księgarni
      </Link>
      <div>
        <Button color="danger" className="mx-1" onClick={resetCart}>
          Wyczyść koszyk
        </Button>
        <Link to="/order" className="btn btn-primary">
          Dalej
        </Link>
      </div>
    </div>
  )

  return (
    <Layout className="my-3">
      {
          !cartItems.length
            ? <Alert color="warning" fade={false}>Koszyk jest pusty.</Alert>
            : (
              <>
                <CartItemsTable>
                  { cartItems.map(cartItem => <CartItemTr key={cartItem.id} {...cartItem} />) }
                </CartItemsTable>
                {buttons}
              </>
            )
        }
    </Layout>
  )
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  resetCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cartItems: state.cart.map(cartItem => {
    const [bookItem] = state.books.items.filter(bookItem => bookItem.id === cartItem.id)
    return { ...cartItem, ...bookItem }
  })
})

export default connect(mapStateToProps, { resetCart })(Cart);