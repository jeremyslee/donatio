import React, { Component } from 'react';
import '../styles/ForgotPassword.css';

class ForgotPassword extends Component {
    render() {
        return (
            <div className='forgot-password'>
                <h2> Forgot password </h2>
                Enter your email address and we will send you a link to reset it.<br /> <br/>
                <p style={{'fontWeight': 'bold'}}>Email </p> 
                <input className='emailInput' type='email' name='email' value={this.props.email} onChange={this.props.handleChange}/><br/>
                <button className='resetPass'> Reset password </button>
            </div>
        );
    };
}
export default ForgotPassword;