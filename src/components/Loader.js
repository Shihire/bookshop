import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div style={{
      'position': 'fixed',
      'width': '100vw',
      'height': '100vh',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center'
    }}>
      <Spinner color="primary" />
    </div>
  )
};

export default Loader;