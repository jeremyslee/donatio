import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    const { username, password, isSignedIn } = this.props
    return (
      <div>
        <div className="create_account_form">
        <form onSubmit={this.props.createAccount}>
        <input name="username" type="text" placeholder="username" value={username} onChange={this.usernameChanged}></input>
        <input name="password" type="password" placeholder="password" value={password} onChange={this.passwordChanged}></input>
        <button className='loginBtn' onClick={this.create}>Create account</button>
        </form>
          {(isSignedIn === true) &&  <Redirect to='/'/>}
        </div>
      </div>
    );
  };
}
export default SignUp;
