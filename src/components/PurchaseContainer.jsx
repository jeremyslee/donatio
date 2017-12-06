import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart.jsx'
import TransactionConfirmation from './TransactionConfirmation.jsx'

class PurchaseContainer extends Component {
  render() {
    const itemsInCart = this.props.addedToCart
    return (
      <div>
        {
          itemsInCart.length > 0 ?
          <ShoppingCart addedToCart={itemsInCart} />
          :
          'Your cart is empty'
        }
        <TransactionConfirmation />
      </div>
    );
  };
}
export default PurchaseContainer;
