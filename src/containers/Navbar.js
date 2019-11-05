import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem, Badge } from 'reactstrap';

const CustomNavbar = ({ cartItems }) => {
  return (
    <Navbar color="light" light>
      <Container>
        <Link to="/" className="navbar-brand">
          Bookshop
        </Link>
        <Nav>
          <NavItem>
            <Link to="/cart" className="nav-link text-secondary" >Koszyk <Badge color="danger">{cartItems}</Badge></Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

CustomNavbar.propTypes = {
  cartItems: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  cartItems: state.cart.length && state.cart.reduce((prev, current) => prev + current.quantity, 0)
})

export default connect(mapStateToProps)(CustomNavbar);