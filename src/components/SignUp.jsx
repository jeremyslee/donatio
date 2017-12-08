import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import '../styles/SignUp.css';

class SignUp extends Component {
    render() {
        const { firstname, lastname, username, password, email, handleChange, rstPassword, isSignedIn } = this.props
        return (
            <div>
                <div id='create_account_form'>
                <h2 style={{'color': '#F9690E'}}> Create Account </h2>
                    <form onSubmit={this.props.createAccount}>
                        <input className='firstname' name='firstname' type='text' placeholder='Firstname' value={firstname} onChange={handleChange} /><br />
                        <input className='lastname' name='lastname' type='text' placeholder='Lastname' value={lastname} onChange={handleChange} /><br />
                        <input className='signupemail' name='email' type='email' placeholder='Email' value={email} onChange={handleChange} /><br />
                        <input className='signupusername' name='username' type='text' placeholder='Username' value={username} onChange={handleChange} /> <br />
                        <input className='signuppassword' name='password' type='password' placeholder='Password' value={password} onChange={handleChange} /> <br />
                        <input className='signuprstPassword' name='rstPassword' type='password' placeholder='Repeat password' value={rstPassword} onChange={handleChange} /><br />
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
