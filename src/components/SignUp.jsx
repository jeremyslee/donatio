import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import '../styles/SignUp.css';

class SignUp extends Component {
    render() {
        const { username, password, email, handleChange, rstPassword, isSignedIn } = this.props
        return (
            <div>
                <div id='create_account_form'>
                    <form onSubmit={this.props.createAccount}>
                        <input className='signupemail' name='email' type='email' placeholder='email' value={email} onChange={handleChange} /><br />
                        <input className='signupusername' name='username' type='text' placeholder='username' value={username} onChange={handleChange} /> <br />
                        <input className='signuppassword' name='password' type='password' placeholder='password' value={password} onChange={handleChange} /> <br />
                        <input className='signuprptPassword' name='rstPassword' type='password' placeholder='repeat password' value={rstPassword} onChange={handleChange} /><br />
                        <p>By creating an account you agree to our <a href='#'>Terms & Privacy</a>.</p>
                        <button type='button' className='cancelbtn' onClick={this.props.cancel}> Cancel </button>
                        <button type='submit' className='signupbtn'> Create account</button>
                    </form>
                    {(isSignedIn === true) && <Redirect to='/' />}
                </div>
            </div>
        );
    };
}
export default SignUp;
