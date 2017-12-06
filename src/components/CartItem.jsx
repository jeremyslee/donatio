import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { organization, amount } = this.props.item
    const { removeFromCart, id } = this.props
    return (
      <div style={{ margin: '10px', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}>
        <h4 style={{display: 'inline'}}>{organization}</h4>
        <h4 style={{display: 'inline'}}>${amount}.00</h4>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    );
  };
}
export default CartItem;
