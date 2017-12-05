import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.jsx'
import TransactionConfirmation from './TransactionConfirmation.jsx'

class PurchaseContainer extends Component {
  render() {
    return (
      <div>
        <ShoppingCart />
        <TransactionConfirmation />
      </div>
    );
  };
}
export default PurchaseContainer;