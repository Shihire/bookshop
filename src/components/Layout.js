import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Navbar from '../containers/Navbar';

const Layout = ({ children, className }) => (
  <>
    <Navbar/>
    <Container className={className}>
      { children }
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Layout;