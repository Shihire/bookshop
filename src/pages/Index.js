import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions/bookActions';
import { addToCart } from '../actions/cartActions';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import BookList from '../components/BookList';

function Index({ addToCart, fetchBooks, books }) {
  useEffect(() => {
    if (!books.items.length) {
      fetchBooks();
    }
  }, [])

  if (books.isFetching) return <Loader />
  if (!books.isFetching && !books.items.length) return <p>Couldn't find any books.</p>
  return (
    <Layout>
      <Row className="mt-3">
        <Col>
          <Input placeholder="Szukaj..." />
        </Col>
      </Row>
      <Row>
        <BookList books={books.items} addToCart={addToCart}/>
      </Row>
    </Layout>
  )
}

Index.propTypes = {
  addToCart: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
  cartItems: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  books: state.books,
  cartItems: state.cart.length && state.cart.reduce((acc, { quantity }) => acc + quantity, 0)
})

export default connect(mapStateToProps, { fetchBooks, addToCart })(Index);
