import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    const numItemsInCart = this.props.addedToCart.length
    return (
      <div className='nav'>
        <ul className='navigation'>
        <li><Link className='links' to='/'>Home</Link></li>
        <li><Link className='links' to='/login'>{this.props.isLoggedIn || this.props.isSignedIn ? `Hello ${this.props.isLoggedIn}!` : 'Login'}</Link></li>
        <li><Link className='links' to='/cart'>{numItemsInCart > 0 ? `Cart: ${numItemsInCart}` : 'Cart'}</Link></li>
        </ul>
      </div>
    );
  };
}
export default Navigation;
