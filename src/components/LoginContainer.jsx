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
            usernameLogin={this.props.usernameLogin}
            passwordLogin={this.props.passwordLogin}
            handleChange={this.props.handleChange}
            isLoggedInPage={this.props.isLoggedInPage}
            login={this.props.login}
          />}
      </div>
    );
  };
}
export default LoginContainer;
