import React, { Component } from 'react';
import CartItem from './CartItem.jsx'

class ShoppingCart extends Component {
  render() {
    const { addedToCart } = this.props
    const items = addedToCart.map(
      (item, index) => {
        return <CartItem key={index} addedToCart={this.props.addedToCart} item={item} />
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
            <button>Donate Now!</button>
          </div>
          :
          'Your cart is empty'
        }
      </div>
    );
  };
}
export default ShoppingCart;
