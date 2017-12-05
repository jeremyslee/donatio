import React, { Component } from 'react';

class AccountDetail extends Component {
  render() {
    return (
      <div>
        Account Details
        <br />You are logged in.
        <div>
        <button onClick={this.props.logout}>logout</button>
        </div>
      </div>
    );
  };
}
export default AccountDetail;
