import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart.jsx'
import TransactionConfirmation from './TransactionConfirmation.jsx'

class PurchaseContainer extends Component {
  render() {
    const {
      addedToCart,
      removeFromCart,
      processTransaction,
      transactionConfirmed,
    } = this.props
    return (
      <div>
        {
          transactionConfirmed ?
          <TransactionConfirmation />
          :
          <ShoppingCart
            addedToCart={addedToCart}
            removeFromCart={removeFromCart}
            processTransaction={processTransaction}
            />
        }
      </div>
    );
  };
}
export default PurchaseContainer;
