import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container className="my-5">
    <Row>
      <Col>
        <Jumbotron>
          <h1>Ups... Strona, której szukasz nie istnieje.</h1>
          <hr className="my-3"/>
          <Link className="btn btn-primary btn-block" to="/" >
            Powrót na stronę główną
          </Link>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NotFound;