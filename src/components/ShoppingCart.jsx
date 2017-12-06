import React, { Component } from 'react';
import CartItem from './CartItem.jsx'

class ShoppingCart extends Component {
  render() {
    const items = this.props.addedToCart.map(
      (item, index) => {
        return <CartItem key={index} addedToCart={this.props.addedToCart} item={item} />
      }
    )
    return (
      <div>
        My Shopping Cart
        {items}
        <button>Donate Now!</button>
      </div>
    );
  };
}
export default ShoppingCart;
