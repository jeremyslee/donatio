import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import SignUp from './SignUp.js';

class LogIn extends Component {
  render() {
    return (
      <div>
        Please Login In
        <form onSubmit={this.props.login}>
          <input type='text' name='usernameLogin' value={this.props.usernameLogin} placeholder='username' onChange={this.props.handleChange} />
          <input type='password' name='passwordLogin' value={this.props.passwordLogin} placeholder='password' onChange={this.props.handleChange} />
          <button type='submit'>login</button>
        </form>
        {(this.props.isLoggedInPage === false) && <p>Username and password combination is invalid</p>}
        Don't have an account? <br/>
        <Link to='/signup'>Sign up HERE</Link>
      </div>
      
    );
  };
}
export default LogIn;
