import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import SignUp from './SignUp.js';

class LogIn extends Component {
  render() {
    return (
      <div>
        Please Login In
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' name='username' value={this.props.username} placeholder='username' onChange={this.props.handleChange} />
          <input type='password' name='password' value={this.props.password} placeholder='password' onChange={this.props.handleChange} />
          <button type='submit' onClick={this.props.login} >login</button>
        </form>
        Don't have an account? <br/>
        <Link to='/signup'>Sign up HERE</Link>
      </div>
      
    );
  };
}
export default LogIn;
