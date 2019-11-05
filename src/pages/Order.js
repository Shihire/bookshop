import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';

import OrderForm from '../containers/OrderForm';

const Order = ({ order }) => {
  return (
    <Layout className="my-3">
      <OrderForm order={order} />
    </Layout>
  )
}

const mapStateToProps = state => ({
  order: state.cart
})

export default connect(mapStateToProps)(Order);