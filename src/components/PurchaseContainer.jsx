import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart.jsx'
import TransactionConfirmation from './TransactionConfirmation.jsx'

class PurchaseContainer extends Component {
  render() {
    const itemsInCart = this.props.addedToCart
    const donationId = false
    return (
      <div>
        {
          donationId ?
          <TransactionConfirmation />
          :
          <ShoppingCart addedToCart={itemsInCart} />
        }
      </div>
    );
  };
}
export default PurchaseContainer;
