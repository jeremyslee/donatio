import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class Navigation extends Component {
  render() {
    const numItemsInCart = this.props.addedToCart.length
    return (
      <div className='nav'>
        <ul className='navigation'>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/login'>{this.props.isLoggedIn || this.props.isSignedIn ? `Hello ${this.props.isLoggedIn}!` : 'login'}</Link></li>
        <li><Link to='/cart'>{numItemsInCart > 0 ? `cart: ${numItemsInCart}` : 'cart'}</Link></li>
        </ul>
      </div>
    );
  };
}
export default Navigation;
