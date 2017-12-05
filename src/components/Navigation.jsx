import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/login'>{this.props.isLoggedIn ? `Hello ${this.props.isLoggedIn}!` : 'login'}</Link></li>
        <li><Link to='/cart'>cart</Link></li>
        </ul>
      </div>
    );
  };
}
export default Navigation;
