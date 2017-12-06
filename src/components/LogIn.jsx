import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../styles/LogIn.css';

class LogIn extends Component {
  render() {
    return (
      <div id='login_form'>
        <h1> Login </h1>
        <form onSubmit={this.props.login}>
          <input className='userLog' type='text' name='usernameLogin' value={this.props.usernameLogin} placeholder='username' onChange={this.props.handleChange} /> <br/>
          <input className='passLog' type='password' name='passwordLogin' value={this.props.passwordLogin} placeholder='password' onChange={this.props.handleChange} /> <br/>
          <button className='logBtn' type='submit'>Login</button> <br/>
        </form>
        {(this.props.isLoggedInPage === false) && <p className='alert'>Username and password combination is invalid</p>}
        <div className='noAcc'>Don't have an account? <br/>
        <Link to='/signup' style={{ textDecoration: 'none' }}><button className='signBtn'>Sign up</button></Link>
        </div>
      </div>
      
    );
  };
}
export default LogIn;
