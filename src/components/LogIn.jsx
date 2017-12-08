import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../styles/LogIn.css';

class LogIn extends Component {
  render() {
    return (
      <div id='login_form'>
        <h2 style={{'color': '#F9690E'}}> Login to your account </h2>
        <form onSubmit={this.props.login}>
          <input className='userLog' type='text' name='usernameLogin' value={this.props.usernameLogin} placeholder='Enter Username' onChange={this.props.handleChange} /> <br/>
          <input className='passLog' type='password' name='passwordLogin' value={this.props.passwordLogin} placeholder='Enter Password' onChange={this.props.handleChange} /> <br/>
          <button className='logBtn' type='submit'>Login</button> 
        </form>
        {(this.props.isLoggedInPage === false) && <p className='alert'>Username and password combination is invalid</p>} <br/>

        <div className='noAcc'>
        <Link to='/forgotPass'> Forgot your password? </Link><br/>
        Don't have an account? <br/>
        <Link to='/signup' style={{ 'textDecoration': 'none' }}><button className='signBtn'>Sign up</button></Link>
        </div>
      </div>
      
    );
  };
}
export default LogIn;
