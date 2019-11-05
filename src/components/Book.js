import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button
} from 'reactstrap';

const Book = ({ addToCart, id, author, cover_url, currency, pages, price, title }) => {
  const handleAddToCart = useCallback(() => addToCart(id), [id, addToCart]);
  return (
    <Col xs="12" md="6" lg="4" className="my-3">
      <Col xs="12" className="rounded shadow-sm p-3">
        <Row>
          <Col xs="12">
            <h5>{title}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <span className="text-muted">{author}</span>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <img className="img-fluid img-thumbnail" src={cover_url} alt=""></img>
          </Col>
          <Col xs="6">
            <Row>
              <Col xs="12">
                Liczba stron: <br/>
                {pages}
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                Cena: <br/>
                {(price/100).toFixed(2)}&nbsp;{currency}
              </Col>
            </Row>
            <Row className="py-1">
              <Col xs="12">
                <Button block color="primary">
                  Zamów
                </Button>
              </Col>
            </Row>
            <Row className="py-1">
              <Col xs="12">
                <Button block color="secondary" onClick={handleAddToCart}>
                  Dodaj do koszyka
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

Book.propTypes = {
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover_url: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Book;