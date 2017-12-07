import React, { Component } from 'react';
import '../styles/CartItem.css';

class CartItem extends Component {
  render() {
    const { organization, amount } = this.props.item
    const { removeFromCart, id } = this.props
    return (
      <div className='cart-item'>
        <h4>{organization}</h4>
        <h4>${amount}.00</h4>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    );
  };
}
export default CartItem;
