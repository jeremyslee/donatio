import React, { Component } from 'react';
import AccountDetail from './AccountDetail.jsx';
import LogIn from './LogIn.jsx'


class LoginContainer extends Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ?
          <AccountDetail
            logout={this.props.logout}
          /> :
          <LogIn
            username={this.props.username}
            password={this.props.password}
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
          />}
      </div>
    );
  };
}
export default LoginContainer;
