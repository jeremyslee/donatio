import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div>
        Please Sign In
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' name='username' value={this.props.username} placeholder='username' onChange={this.props.handleChange} />
          <input type='password' name='password' value={this.props.password} placeholder='password' onChange={this.props.handleChange} />
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  };
}
export default SignIn;
