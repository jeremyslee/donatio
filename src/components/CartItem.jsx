import React, { Component } from 'react';
import '../styles/CartItem.css';

class CartItem extends Component {
  render() {
    const { organization, amount } = this.props.item
    const { removeFromCart, id } = this.props
    return (
      <div className='cart-item'>
        <h4 className='organizationName'>{organization}</h4>
        <h4 className='amount'>${amount}.00</h4>
        <button className='removeBtn' onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    );
  };
}
export default CartItem;
