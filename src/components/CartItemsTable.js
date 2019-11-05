import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'reactstrap';

const CartItemsTable = ({ children }) => {
  return (
    <Table striped borderless>
      <thead>
        <tr>
          <th>Produkt</th>
          <th className="d-none d-sm-block"></th>
          <th>Ilość</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  )
}

CartItemsTable.propTypes = {
  children: PropTypes.node.isRequired
}

export default CartItemsTable;