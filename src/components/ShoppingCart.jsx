import React, { Component } from 'react';
import CartItem from './CartItem.jsx'
import axios from 'axios'
import '../styles/ShoppingCart.css';

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
          <div className='shoppingCart'>
            My Shopping Cart
            <hr/>
            {items}
            <hr/>
            <h4 className='total'>Cart total: ${cartTotal}.00</h4>
            <button className='donateBtn' onClick={processTransaction}>Donate Now!</button>
          </div>
          :
          <div className='empty'>
          Your cart is empty
          </div>
        }
      </div>
    );
  };
}
export default ShoppingCart;
