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
      cartTotal,
      transactionNumber,
    } = this.props
    return (
      <div>
        {
          transactionConfirmed ?
          <TransactionConfirmation
            transactionNumber={transactionNumber}
            />
          :
          <ShoppingCart
            addedToCart={addedToCart}
            removeFromCart={removeFromCart}
            processTransaction={processTransaction}
            cartTotal={cartTotal}
            />
        }
      </div>
    );
  };
}
export default PurchaseContainer;
