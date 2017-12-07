import React, { Component } from 'react';
import CartItem from './CartItem.jsx'
import axios from 'axios'

class ShoppingCart extends Component {
  render() {
    const {
      addedToCart,
      processTransaction,
      cartTotal
    } = this.props

    const items = addedToCart.map(
      (item, index) => {
        return <CartItem
          key={index}
          id={index}
          addedToCart={this.props.addedToCart}
          item={item}
          removeFromCart={this.props.removeFromCart}
          />
      }
    )

    return (
      <div>
        {
          addedToCart.length > 0
          ?
          <div>
            My Shopping Cart
            {items}
            <h4>Cart total: ${cartTotal}.00</h4>
            <button onClick={processTransaction}>Donate Now!</button>
          </div>
          :
          'Your cart is empty'
        }
      </div>
    );
  };
}
export default ShoppingCart;
